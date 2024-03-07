import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    throw new Error("about page throw error message");
  });
  return <>这是about</>;
};
export default About;
