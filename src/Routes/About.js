import { render } from "@testing-library/react";
import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "../Components/Profile";
import ProfileClass from "../Components/ProfileClass";

class About extends React.Component {
	constructor(props) {
		super(props);
		
	}
	componentDidMount() {
		console.log("Parent Component Did Mount");
	}
	
	render() {
		console.log("Parent render");

		return (
			<>
				<h1> I will be the about Page</h1>
				<ProfileClass name={"Atul Sagotra"} xyz={"abc"} />
				{/* <ProfileClass name={"Second Atul Sagotra"} xyz={"abc"} /> */}
				{/* <Profile name={"Atul Sagotra"} /> */}
			</>
		);
	}
}
export default About;
