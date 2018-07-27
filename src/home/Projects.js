import React from 'react';
import leo from '../images/leo.png';
import Project from './Project';

const Projects = () => (
  <div>
    <Project
      id="1"
      position="UI / UX Design"
      title="Our Cool Project Title"
      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et d aliqua."
      img={{
        alt: 'project image',
        src: leo
      }}
    />

    <Project
      id="1"
      position="UI / UX Design"
      title="Our Cool Project Title"
      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et d aliqua."
      img={{
        alt: 'project image',
        src: leo
      }}
    />

    <Project
      id="1"
      position="UI / UX Design"
      title="Our Cool Project Title"
      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et d aliqua."
      img={{
        alt: 'project image',
        src: leo
      }}
    />
  </div>
);

export default Projects;
