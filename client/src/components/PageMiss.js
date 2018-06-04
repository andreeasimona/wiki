import React from "react";
import "../style/Page.css";

class PageMiss extends React.PureComponent {
    render() {
        return <div className="wiki-page-miss">The page that you try to access to no exist yet. Use the button "Create page" from the menu and create it.</div>;
    }
}

export default PageMiss;
