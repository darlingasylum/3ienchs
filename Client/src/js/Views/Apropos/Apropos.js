import React, { Component, Fragment } from "react";

import Header from "../../Components/Header/Header.js";

import "./Apropos.scss";

class Apropos extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="AproposPageWrap">
          <h1>Je suis Apropos</h1>
        </div>
      </Fragment>
    );
  }
}

export default Apropos;
