import React from 'react';
import PropTypes from 'prop-types';
import tag from 'clean-tag';
import { Link } from 'react-static';
import styled from 'styled-components';

const Position = styled.h3`
  font-family: Open Sans, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.14;
  letter-spacing: 0.6px;
  color: ${props => props.theme.colors.black};
  margin-bottom: 16px;
`;

const ProjectTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: ${props => props.theme.colors.black};
  margin-bottom: 8px;
`;

const ProjectShortDesc = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  color: ${props => props.theme.colors.black};
`;

const ArchiveContent = styled.div`
  padding: 16px;
  height: 186px;
  background-color: ${props => props.theme.colors.whitish};
  border: solid 1px ${props => props.theme.colors.gray};
  flex: 1;
`;

const ArchiveLink = styled(Link)`
  display: flex;
  height: 186px;
  margin-bottom: 17px;
`;

const Img = styled(tag.img)`
  height: 100%;
  flex: 1;
`;

const Archive = ({ linkTo, position, title, desc, img }) => (
  <ArchiveLink to={linkTo}>
    <ArchiveContent>
      <Position>{position}</Position>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectShortDesc>{desc}</ProjectShortDesc>
    </ArchiveContent>
    <Img {...img} />
  </ArchiveLink>
);

Archive.propTypes = {
  linkTo: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  }).isRequired
};

export default Archive;
