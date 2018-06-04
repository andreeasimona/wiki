import React from "react";
import store from "../state/store";
import actionTypes from "../state/action";
import api from "../helpers/api";
import url from "../helpers/url";

class Menu extends React.PureComponent {
    handleDelete = () => {
        api.deletePage(url, this.cbSuccess, this.cbError);
    };

    cbSuccess = data => {
        if (data.success === true) {
            window.location.reload();
        }
    };

    cbError = error => {
        //Todo next iteration handle error
    };

    renderPage = () => {
        return (
            <div className="wiki-menu">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            <a className="navbar-brand" href="/Home">
                                Wiki
                            </a>
                        </div>
                        <div className="collapse navbar-collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <a onClick={() => store.dispatch({ type: actionTypes.Create })}>Create Page</a>
                                </li>
                                <li>
                                    {url !== "Home" && <a onClick={() => this.handleDelete()}>Delete</a>}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    };
    render() {
        return <div>{this.renderPage()}</div>;
    }
}

export default Menu;
