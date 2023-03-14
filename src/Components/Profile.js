import { useEffect, useState } from "react";

const Profile = (props) => {
	const [count, setCount] = useState(0);
	useEffect(() => {
		//API calls as it is executed after render because first we render by default state
		console.log('useEffect()')
	}, [])
	console.log('functional render()')
	return (
		<>
			<h1>Profile Functional Component</h1>
			<h2>{props.name}</h2>
			<h3>Count: {count}</h3>
			<button onClick={() => setCount(count+1)}>setCount</button>
		</>
	);
};
export default Profile;
