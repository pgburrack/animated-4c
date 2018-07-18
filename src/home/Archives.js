import React from 'react';
import leo from '../images/leo.png';
import Archive from './Archive';

const Archives = () => (
  <div>
    <Archive
      linkTo="/projects/1"
      position="UI / UX Design"
      title="Our Cool Project Title"
      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et d aliqua."
      img={{
        alt: 'project image',
        src: leo
      }}
    />

    <Archive
      linkTo="/projects/1"
      position="UI / UX Design"
      title="Our Cool Project Title"
      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et d aliqua."
      img={{
        alt: 'project image',
        src: leo
      }}
    />

    <Archive
      linkTo="/projects/1"
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

export default Archives;
