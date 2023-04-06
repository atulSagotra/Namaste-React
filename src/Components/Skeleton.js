const Skeleton = () => {
  return (
    <div className="flex flex-wrap justify-center" data-testid='shimmer'>
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} className="skeleton"></div>
        ))}
    </div>
  );
};
export default Skeleton;
