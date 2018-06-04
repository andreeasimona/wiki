import React, { Component } from "react";
import "../style/Create.css";
import api from "../helpers/api";

class Page extends Component {
    handleSubmit = () => {
        this.page = document.getElementById("new-page").value;
        api.createPage(this.page, this.cbSuccess, this.cbError);
    };

    cbSuccess = data => {
        if (data.success === true) {
            window.location.href = "/" + this.page;
        } else {
            if (data.duplicate === true) window.location.href = "/" + this.page;
        }
    };

    cbError = error => {
        //Todo next iteration handle error
    };

    renderPage = () => {
        return (
            <div className="wiki-create">
                <h4>Hello dear voluntear. Thank you for wanting to contibuite to new wiki platform. To create a new page fill the box below and click the button.</h4>
                <input type="text" className="form-control" placeholder="Page Name" aria-label="Page Name" id="new-page" />
                <br />
                <button type="button" className="btn btn-success" onClick={this.handleSubmit}>
                    Create new page
                </button>
            </div>
        );
    };
    render() {
        return <div>{this.renderPage()}</div>;
    }
}

export default Page;
