const Skeleton = () => {
	return (
		<div className="flex flex-wrap justify-center">
			{Array(10)
				.fill("")
				.map((e, index) => (
					<div key={index} className="skeleton"></div>
				))}
		</div>
	);
};
export default Skeleton;
