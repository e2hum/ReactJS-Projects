import React from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends React.Component {
  state = {
    counters: [
      { id: 1, name: "Apple", value: 0, cost: 0.5 },
      { id: 2, name: "Orange", value: 0, cost: 0.25 },
      { id: 3, name: "Banana", value: 0, cost: 0.3 },
      { id: 4, name: "Mango", value: 0, cost: 1.0 },
    ],
    total: 0,
  };

  constructor() {
    super();
    console.log("App Constructor");
  }

  componentDidMount() {
    console.log("App Mounted");
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ total: this.state.total * 0 });
    this.setState({ counters });
  };

  handleDelete = (counterID) => {
    const counters = this.state.counters.filter((c) => c.id !== counterID);
    this.setState({ counters });
  };

  handleTotal = () => {
    const counters = [...this.state.counters];
    var findTotal = 0;
    for (let i = 0; i < counters.length; i++) {
      findTotal += counters[i].cost * counters[i].value;
    }
    this.setState({ total: this.state.total + findTotal });
  };

  render() {
    console.log("App Rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container-fluid">
          <h1 style={{ padding: "5px 10px", textAlign: "center" }}>
            Evan's Fruit Stand
          </h1>
          <Counters
            total={this.state.total}
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onTotal={this.handleTotal}
          />
          The total is: ${this.state.total}
        </main>
      </React.Fragment>
    );
  }
}

export default App;
