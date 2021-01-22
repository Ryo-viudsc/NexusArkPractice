import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import './parallax-image.styles.scss';

const ParallaxImage = () => (
  <Parallax className="title-bg" y={[-100, 100]} tagOuter="figure">
      <div> NEXUS ARK </div>
  </Parallax>
);


export default ParallaxImage; 