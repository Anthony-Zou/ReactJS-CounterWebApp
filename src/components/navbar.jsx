import React, { Component } from "react";
//stateless functional component
const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {this.props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

class Navbar extends Component {
  state = {};
  render() {
    <NavBar />;
  }
}

export default Navbar;
