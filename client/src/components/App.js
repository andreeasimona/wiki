import React, { Component } from "react";
import Page from "./Page";
import Menu from "./Menu";
import Create from "./Create";
import actionTypes from "../state/action";
import store from "../state/store";

class App extends Component {
    constructor() {
        super();
        this.state = {
            type: store.getState().type
        };
        store.subscribe(() => {
            this.setState({
                type: store.getState().type
            });
        });
    }

    renderPage = () => {
        switch (this.state.type) {
            case actionTypes.Page:
                return <Page />;
            case actionTypes.Create:
                return <Create />;
            default:
                return null;
        }
    };
    render() {
        return (
            <div className="App">
                <Menu />
                {this.renderPage()}
            </div>
        );
    }
}

export default App;
