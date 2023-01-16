import React from "react";

class Menu extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <a href="/ola">Ola OlaMundo</a><br/>
                <a href="/gerador">Gerador</a>
            </div>
        )
    }
}
export default Menu