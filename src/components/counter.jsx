import React, { Component } from "react";
// shortcut: imrc

// shortcut: cc
class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2"]
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement("my product")}
          className="btn btn-secondary btn-sm mr-2"
        >
          Increment
        </button>
        <button
          onClick={this.handleDecrement}
          className={`btn btn-secondary btn-sm ${this.disableBtn()}`}
        >
          Decrement
        </button>
        <ul>
          {this.state.tags.length === 0 && "Please add some tags!"}
          {this.renderTags()}
        </ul>
      </React.Fragment>
      // or instead React.Fragment, you can use <div>
    );
  }

  renderTags() {
    console.log("this:", this);
    if (this.state.tags.length > 0)
      return this.state.tags.map(tag => <li key={tag}>{tag}</li>);
    else return <p>There are no tags</p>;
  }

  // when we need to pass an argument to event handler
  // we use arrow function inline
  handleIncrement = product => {
    console.log("Increment Clicked", this);
    console.log("product:", product);
    this.setState(prevState => ({ count: this.state.count + 1 }));
  };

  handleDecrement = () => {
    console.log("Decrement Clicked", this);
    if (this.state.count > 0)
      this.setState(prevState => ({ count: this.state.count - 1 }));
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  disableBtn() {
    return this.state.count <= 0 ? "disabled" : "";
  }

  formatCount() {
    const { count } = this.state; // this is ES6 object destructuring
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
