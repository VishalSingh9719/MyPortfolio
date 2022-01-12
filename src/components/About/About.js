import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src="https://github.com/VishalSingh9719/MyProfilePhoto/blob/master/vishal.jpg-removebg-preview-removebg-preview.png?raw=true"
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hello! My name is <strong>Vishal Singh</strong>
            <br/>
            

I am a full-stack developer who is highly passionate to develop web-based products and keen on finding solutions for the same. I have hands-on experience in front-end and back-end technology. I am always ready to learn new technologies.

I am strongly interested in obtaining a software Developer position to work on enhancing the product experience.
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
