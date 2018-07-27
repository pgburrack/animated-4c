import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouteData } from 'react-static';
import styled from 'styled-components';
import Flex from '../grid/Flex';

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

const ArchiveLink = styled(({ vertical, children, ...rest }) => (
  <Link {...rest}>{children}</Link>
))`
  display: flex;
  width: ${props => (props.vertical ? `${(4 / 6) * 100}%` : 'auto')};
  height: ${props => (props.vertical ? 'auto' : '186px')};
  margin-bottom: 17px;
  flex-direction: ${props => (props.vertical ? 'column' : 'row')};
`;

const Img = styled(({ vertical, alt, ...rest }) => <img alt={alt} {...rest} />)`
  height: ${props => (props.vertical ? 'auto' : '100%')};
  width: ${props => (props.vertical ? '100%' : 'auto')};
  flex: 1;
`;

const Project = withRouteData(
  ({ id, position, title, desc, img, vertical }) => (
    <Flex justifyContent={vertical ? 'flex-end' : 'flex-start'}>
      <ArchiveLink vertical={vertical} to={`/projects/${id}`}>
        <ArchiveContent>
          <Position>{position}</Position>
          <ProjectTitle>{title}</ProjectTitle>
          <ProjectShortDesc>{desc}</ProjectShortDesc>
        </ArchiveContent>
        {img && <Img vertical={vertical} alt={img.alt} src={img.src} />}
      </ArchiveLink>
    </Flex>
  )
);

Project.defaultProps = {
  id: '',
  position: '',
  title: '',
  desc: '',
  img: null,
  vertical: false
};

Project.propTypes = {
  id: PropTypes.string,
  position: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  img: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  }),
  vertical: PropTypes.bool
};

export default Project;
