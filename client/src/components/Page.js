import React, { Component } from "react";
import "../style/Page.css";
import api from "../helpers/api";
import url from "../helpers/url";
import Link from "./Link";
import Card from "./Card";
import PageMiss from "./PageMiss";
class Page extends Component {
    constructor() {
        super();
        this.state = {
            addLinks: false,
            pageMiss: false,
            showAllLinks: false
        };
    }
    componentDidMount() {
        api.getPage(url, this.cbSuccess, this.cbError);
    }

    cbSuccess = data => {
        if (data.success === true) {
            this.setState({ title: data.title, text: data.text, links: data.links, pageMiss: data.pageMiss });
        } else {
            this.setState({ pageMiss: data.pageMiss });
        }
    };

    cbError = error => {
        //Todo next iteration handle error
    };

    renderLinks = () => {
        if (this.state && this.state.links && this.state.links.length !== 0) {
            let listItems = this.state.links.map((value, key) => {
                return <Card link={value} key={key}/>;
            });
            if (!this.state.showAllLinks) {
                listItems = listItems.slice(0, 3);
            }
            return (
                <div className="wiki-page-cards container">
                    <div className="row justify-content-start">{listItems}</div>
                    {!this.state.showAllLinks &&
                        this.state.links.length > 3 && (
                            <button type="button" className="btn btn-link" onClick={this.showAll.bind(this)}>
                                Show All Links
                            </button>
                        )}
                </div>
            );
        }
    };
    showAll = () => {
        this.setState({ showAllLinks: !this.state.showAllLinks });
    };
    addLinks = () => {
        this.setState({ addLinks: !this.state.addLinks });
    };
    createLinks = () => {
        return (
            <div className="wiki-page-links-button">
                <button type="button" className="btn btn-default" onClick={this.addLinks.bind(this)}>
                    <span className="glyphicon glyphicon-pencil" /> Add links
                </button>
                {this.state.addLinks && <Link />}
            </div>
        );
    };
    renderPage = () => {
        if (!this.state.pageMiss && !this.state.apiError && this.state && this.state.title) {
            return (
                <div className="wiki-page">
                    <div className="wiki-page-title"> {this.state.title}</div>
                    <div className="wiki-page-text"> {this.state.text}</div>
                    {this.createLinks()}
                    {this.renderLinks()}
                </div>
            );
        }
        if (this.state.pageMiss) return <PageMiss />;
    };
    render() {
        return <div>{this.renderPage()}</div>;
    }
}

export default Page;
