
const Skeleton = () => {
  return (
    <div className="restaurnat-container">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} className="skeleton"></div>
        ))}
    </div>
  )
}
export default Skeleton