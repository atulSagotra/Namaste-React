const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="m-4 p-4 border-2">
      <h1>{title}</h1>
      <button
        className="underline-offset-1"
        onClick={() => {
          isVisible ? setIsVisible(false) : setIsVisible(true);
        }}
      >
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <p>{description}</p>}
    </div>
  );
};
export default Section;
