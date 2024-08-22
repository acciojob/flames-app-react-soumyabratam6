import React, {Component, useState} from "react";
import '../styles/App.css';
import FlamesGame from "./FlamesGame";
class App extends Component {
    render() {

        return(
            <div id="main">
                <h1>FLAMES Game</h1>
               <FlamesGame/>
            </div>
        )
    }
}


export default App;
