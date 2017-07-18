import React from "react";

class Header extends React.Component {   
    render()
    {
        const headerTitle = "Task governor";
        return(
            <div className="header">
                <h4> {headerTitle} </h4>
            </div>
        );
    }
}

export default Header;