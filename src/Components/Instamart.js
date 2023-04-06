import { useContext, useState } from "react";
import Section from "./Section";
import UserContext from "../utils/UserContext";

const Instamart = () => {
  const [sectionVisible, setSectionVisible] = useState("about");
  const { user } = useContext(UserContext);
  return (
    <div className="p-4">
      <h3>{user.name}</h3>
      <h3>{user.email}</h3>
      <Section
        title={"About Instamart"}
        description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`}
        isVisible={sectionVisible === "about"}
        setIsVisible={(isVisible) => {
          isVisible ? setSectionVisible("about") : setSectionVisible("");
        }}
      />
      <Section
        title={"Careers Instamart"}
        description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`}
        isVisible={sectionVisible === "career"}
        setIsVisible={(isVisible) => {
          isVisible ? setSectionVisible("career") : setSectionVisible("");
        }}
      />
      <Section
        title={"Teams Instamart"}
        description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`}
        isVisible={sectionVisible === "teams"}
        setIsVisible={(isVisible) => {
          isVisible ? setSectionVisible("teams") : setSectionVisible("");
        }}
      />
    </div>
  );
};
export default Instamart;
