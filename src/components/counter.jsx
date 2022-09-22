import React, { Component } from "react";
class Counter extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    // console.log("pervProps", prevProps);
    // console.log("prevState", prevState);

    if (prevProps.counter.value !== this.props.counter.valie) {
      // Ajax call and get new data from the server
    }
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }
  render() {
    return (
      <React.Fragment>
        {/* {this.props.children} */}
        <div className="row">
          <div className="col-1">
            {" "}
            <span style={{ fontSize: 15 }} className={this.getBadgeClasses()}>
              {this.formatCount()}
            </span>
          </div>
          <div className="col">
            {" "}
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-secondary btn-sm "
            >
              +
            </button>
            <button
              onClick={() => this.props.onDecrement(this.props.counter)}
              className="btn btn-secondary btn-sm m-2"
              disabled={this.props.counter.value == 0 ? "disabled" : ""}
            >
              -
            </button>
            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger btn-sm "
            >
              x
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    const x = "Zero";
    return count === 0 ? x : count;
  }
}

export default Counter;
