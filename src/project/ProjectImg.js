import React from 'react';
import PropTypes from 'prop-types';
import { display, maxHeight, space } from 'styled-system';
import styled from 'styled-components';

const Img = styled.img`
  ${maxHeight};
`;

const ImgDescription = styled.figcaption`
  font-family: Open Sans, sans-serif;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.14;
  letter-spacing: normal;
  color: ${props => props.theme.colors['brownish-grey']};
`;

const Figure = styled.figure`
  ${display};
  ${space};
`;

const ProjectImg = ({
  display,
  mb,
  width,
  maxWidth,
  maxHeight,
  alt,
  src,
  description
}) => (
  <Figure display={display} mb={mb}>
    <Img
      width={width}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      alt={alt}
      src={src}
    />
    <ImgDescription>{description}</ImgDescription>
  </Figure>
);

ProjectImg.defaultProps = {
  maxHeight: null,
  description: ''
};

ProjectImg.propTypes = {
  maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default ProjectImg;
