import React, { Component } from "react";
import api from "../helpers/api";
import url from "../helpers/url";
import "../style/Link.css";

class Link extends Component {
    handleSubmit = () => {
        let link = document.getElementById("new-link").value;
        api.linkPage(url, link, this.cbSuccess, this.cbError);
    };

    cbSuccess = data => {
        if (data.success === true) {
            window.location.reload();
        }
    };

    cbError = error => {
        //Todo next iteration handle error
    };
    render() {
        return (
            <div className="wiki-link input-group">
                <input type="text" className="form-control" placeholder="New link" id="new-link" />
                <span className="input-group-addon" onClick={this.handleSubmit}>
                    Add
                </span>
            </div>
        );
    }
}

export default Link;
