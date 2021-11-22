import { Component } from "react";
import MyComponent from "../../src/components/units/class-component";

interface IState {
  count: number;
}

export default class MyCounterPage extends Component {
  state: IState = {
    count: 0,
  };
  // class 안에 있는 달려있는 아이들은 this. 으로 접근 해야함

  onClickCounter = () => {
    console.log(this.state.count);
    this.setState((prev: IState) => ({
      //   count: this.state.count + 1,
      count: prev.count + 1,
    }));
  };

  render() {
    return (
      <>
        <div>현재 카운트: {this.state.count}</div>
        <button onClick={this.onClickCounter}>카운트 올리기!</button>
        <MyComponent count={this.state.count} />
      </>
    );
  }
}
