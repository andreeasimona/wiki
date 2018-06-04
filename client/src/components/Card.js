import React from "react";
import "../style/Card.css";

class Card extends React.PureComponent {
    render() {
        return (
            <div className="wiki-card-wrapper col-sm-3">
                <img className="wiki-card-image" src={require("../style/noimage_.png")} />
                <a className="wiki-card-text" href={this.props.link}>
                    {this.props.link}
                </a>
            </div>
        );
    }
}

export default Card;
