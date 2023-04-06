import React from "react";
import UserContext from "../utils/UserContext";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        name: "dummy name",
        location: "dummy location",
      },
    };
    console.log("Child constructor");
  }

  async componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Namaste React");
    }, 1000);

    //API calls as it is executed after render because first we render by default state
    console.log("Child Component Did Mount", this.props.name);
    const data = await fetch("https://api.github.com/users/atulSagotra");
    const json = await data.json();
    console.log(json);

    this.setState({
      info: json,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count)
      console.log("Component Did update");
  }

  componentWillUnmount() {
    console.log("Component will Unmount");
    clearInterval(this.timer);
  }
  render() {
    const { count } = this.state;
    console.log("Child render");
    // We do not mutate state directly
    // Never do this.state = something
    //  just pass the state to be changed
    return (
      <>
        <img src={this.state.info.avatar_url} alt="avatar" />
        <h1> Profile Class Component</h1>
        <h2>Name: {this.state.info.name}</h2>
        <h2>Location: {this.state.info.location}</h2>
        <UserContext.Consumer>
          {({ user }) => (
            <>
              <h1>{user.name}</h1>
              <h1>{user.email}</h1>
            </>
          )}
        </UserContext.Consumer>
        {/* <h3>Count: {count}</h3> */}
        {/* <button
					onClick={() =>
						this.setState({
							count: count + 2,
						})
					}
				>
					setCount
				</button> */}
      </>
    );
  }
}
export default ProfileClass;
