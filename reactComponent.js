import React from 'react';

const TodoComponent = {
    width: "300px",
    margin: "30px auto",
    backgroundColor: "#44014C",
    minHeight: "200px",
    boxSizing: "border-box"
}

const Header = {
    padding: "10px 20px",
    textAlign: "center",
    color: "white",
    fontSize: "22px"
}

const ErrorMessage = {
    color: "white",
    fontSize: "13px"
}


class View extends React.Component{
    render() {
        return(
            <div style={TodoComponent}>
                <h2 style={Header}>ToDo</h2>

            </div>
                )
    }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render((View), domContainer);
