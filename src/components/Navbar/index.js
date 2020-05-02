import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-color">
        <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul className="navbar-nav mr-auto ml-5">
                <li className="nav-item active text-white">
                    <a className="nav-link" href="/">Clicky Game</a>
                </li>
            </ul>
        </div>
        <div className="mx-auto order-0 navbar-brand text-white">
            <span className="nav-comm">{props.message || "Click an Image"}</span>
        </div>
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul className="navbar-nav ml-auto mr-5">
                <li className="nav-item text-white">
                    <span className="game-score"><strong>Score:</strong> {props.gameScore || 0} </span>
                    <span className="top-score"><strong> Top Score:</strong> {props.topScore || 0}</span>
                </li>
                
            </ul>
        </div>
    </nav>
  );
}

export default Navbar;