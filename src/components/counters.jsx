import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    console.log("Counters Rendered");
    const { onReset, counters, onDelete, onIncrement, onTotal } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            name={counter.name}
            cost={counter.cost}
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onTotal={onTotal}
            counter={counter}
          />
        ))}
        <button onClick={onTotal} className="btn btn-info btn-lg m-2">
          Total
        </button>
      </div>
    );
  }
}

export default Counters;
