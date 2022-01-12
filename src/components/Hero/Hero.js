import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
function Hero() {
  const [isOpen, setIsOpen] = useState(false);
//https://gurupawar.github.io/portfolio/assets/man-svgrepo-com.svg
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1>नमस्ते (Namaste)🙏</h1>
            <h2>I'm Vishal Singh</h2>
            <h5>Full Stack Web Developer</h5>
            <p>
              I design and code beautifully simple things, and I love what I do.
            </p>
          </HeroLeft>
          <HeroRight>
            <Image
            //  src="https://user-images.githubusercontent.com/78302050/141673440-08f88067-3517-48f9-bedf-f2f6842e6486.png"
              src="https://github.com/VishalSingh9719/MyProfilePhoto/blob/master/vishal.jpg-removebg-preview-removebg-preview.png?raw=true"
            alt="man-svgrepo"
            />
          </HeroRight>
        </HeroWrapper>
        <ScrollDown to="projects">
          <ScrollLink>
            Scroll down
            <img
              src="https://raw.githubusercontent.com/SumitKumar1001/portfoliosvg/master/scroll-down.svg"
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
