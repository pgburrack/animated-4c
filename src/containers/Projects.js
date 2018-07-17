import React from 'react';
import { fontSize, space } from 'styled-system';
import styled from 'styled-components';
import { Link } from 'react-static';
import leo from '../images/leo.png';
import Img from '../shared/Img';
import { Column, Row } from '../grid';

const LinkToProject = styled(Link)`
  position: relative;
  display: block;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: 2px;
  color: ${props => props.theme.colors.whitish};
  line-height: 1.2;
  transition: all 0.3s;
  ${fontSize};
  ${space};
  margin-bottom: 32px;
`;

const ProjectDetails = styled.div`
  opacity: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(15, 15, 15, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-end;
  padding: 14px;
  transition: opacity 0.5s;

  ${LinkToProject}:hover & {
    opacity: 1;
  }
`;

const ProjectTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.33;
`;

const ProjectDetailsHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
`;

const Position = styled.span`
  font-family: Open Sans, sans-serif;
  font-size: 13px;
  font-weight: bold;
  line-height: 1.23;
  color: #fff;
`;

const ProjectContent = styled.section`
  font-size: 20px;
  line-height: 1.2;
`;

export default () => (
  <div>
    <Row flexWrap="wrap">
      <Column width={[1, 1, 1 / 2]}>
        <LinkToProject to="/projects/1">
          <Img mb="0" src={leo} />
          <ProjectDetails>
            <div>
              <ProjectDetailsHeader>
                <ProjectTitle>Our cool project title</ProjectTitle>
                <Position>UI / UX Design</Position>
              </ProjectDetailsHeader>
              <ProjectContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et d aliqua.
              </ProjectContent>
            </div>
          </ProjectDetails>
        </LinkToProject>
      </Column>
      <Column width={[1, 1, 1 / 2]}>
        <LinkToProject to="/projects/1">
          <Img mb="0" src={leo} />
          <ProjectDetails>
            <div>
              <ProjectDetailsHeader>
                <ProjectTitle>Our cool project title</ProjectTitle>
                <Position>UI / UX Design</Position>
              </ProjectDetailsHeader>
              <ProjectContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et d aliqua.
              </ProjectContent>
            </div>
          </ProjectDetails>
        </LinkToProject>
      </Column>
      <Column width={[1, 1, 1 / 2]}>
        <LinkToProject to="/projects/1">
          <Img mb="0" src={leo} />
          <ProjectDetails>
            <div>
              <ProjectDetailsHeader>
                <ProjectTitle>Our cool project title</ProjectTitle>
                <Position>UI / UX Design</Position>
              </ProjectDetailsHeader>
              <ProjectContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et d aliqua.
              </ProjectContent>
            </div>
          </ProjectDetails>
        </LinkToProject>
      </Column>
      <Column width={[1, 1, 1 / 2]}>
        <LinkToProject to="/projects/1">
          <Img mb="0" src={leo} />
          <ProjectDetails>
            <div>
              <ProjectDetailsHeader>
                <ProjectTitle>Our cool project title</ProjectTitle>
                <Position>UI / UX Design</Position>
              </ProjectDetailsHeader>
              <ProjectContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et d aliqua.
              </ProjectContent>
            </div>
          </ProjectDetails>
        </LinkToProject>
      </Column>
      <Column width={[1, 1, 1 / 2]}>
        <LinkToProject to="/projects/1">
          <Img mb="0" src={leo} />
          <ProjectDetails>
            <div>
              <ProjectDetailsHeader>
                <ProjectTitle>Our cool project title</ProjectTitle>
                <Position>UI / UX Design</Position>
              </ProjectDetailsHeader>
              <ProjectContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et d aliqua.
              </ProjectContent>
            </div>
          </ProjectDetails>
        </LinkToProject>
      </Column>
      <Column width={[1, 1, 1 / 2]}>
        <LinkToProject to="/projects/1">
          <Img mb="0" src={leo} />
          <ProjectDetails>
            <div>
              <ProjectDetailsHeader>
                <ProjectTitle>Our cool project title</ProjectTitle>
                <Position>UI / UX Design</Position>
              </ProjectDetailsHeader>
              <ProjectContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et d aliqua.
              </ProjectContent>
            </div>
          </ProjectDetails>
        </LinkToProject>
      </Column>
      <Column width={[1, 1, 1 / 2]}>
        <LinkToProject to="/projects/1">
          <Img mb="0" src={leo} />
          <ProjectDetails>
            <div>
              <ProjectDetailsHeader>
                <ProjectTitle>Our cool project title</ProjectTitle>
                <Position>UI / UX Design</Position>
              </ProjectDetailsHeader>
              <ProjectContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et d aliqua.
              </ProjectContent>
            </div>
          </ProjectDetails>
        </LinkToProject>
      </Column>
      <Column width={[1, 1, 1 / 2]}>
        <LinkToProject to="/projects/1">
          <Img mb="0" src={leo} />
          <ProjectDetails>
            <div>
              <ProjectDetailsHeader>
                <ProjectTitle>Our cool project title</ProjectTitle>
                <Position>UI / UX Design</Position>
              </ProjectDetailsHeader>
              <ProjectContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et d aliqua.
              </ProjectContent>
            </div>
          </ProjectDetails>
        </LinkToProject>
      </Column>
    </Row>
  </div>
);
