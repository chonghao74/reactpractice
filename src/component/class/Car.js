import React from "react";

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = { logo: "Mercedes-Benz", type: "GLC" };
    // this.changeType = this.changeType.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    const changeType = (e) => {
      console.log(this.state.type);
      e.preventDefault();
      this.state.type === "GLC"
        ? this.setState({ type: "GLS" })
        : this.setState({ type: "GLC" });
    };

    return (
      <div style={{ margin: "30px 20px", border: " solid 1px red" }}>
        <header>
          <h1>
            I'm a {this.props.color}, {this.state.logo} and {this.state.type}{" "}
            Car.
          </h1>
        </header>
        <main>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
            dolorum magnam ipsam natus sunt ullam voluptate, voluptatem quasi
            molestias adipisci molestiae dolorem sint esse beatae? Esse quasi
            quidem perspiciatis in!
          </p>
          <section>
            <button
              onClick={(e) => {
                changeType(e);
              }}
            >
              改變型號
            </button>
          </section>
        </main>
      </div>
    );
  }
}

export default Car;
