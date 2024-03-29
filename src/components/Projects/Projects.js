import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';


const projectsDemo = [{
  title: 'Travel Stories',
  description: 'React.js - Node.js Full-stack map pinning travel app using React hooks, Mapbox, Express, and MongoDB. In this application, you can pin your location and share your reviews with other users.',
  tags: ['mongoDB', 'Express', 'React', 'Node'],
  source: "https://github.com/vino00619/map-frontend",
  visit: "https://superb-speculoos-2f9d9c.netlify.app/",
  image: "",
  id: 0
},
{
  title: 'Login with OAUTH - Google, Facebook, Github',
  description: 'React oAuth login authentication using Passport js. React, Node.js auth using Google, Facebook, and Github login buttons.',
  tags: ['Passport', 'Express', 'React', 'Node'],
  source: "https://github.com/vino00619/youtube-react-social-login",
  visit: "https://unrivaled-axolotl-86c6ea.netlify.app/",
  image: "",
  id: 1
},
// {
//   title: 'Project 3',
//   description: 'This is a brief explanation about the project',
//   tags: ['mongoDB', 'Express', 'React', 'Node'],
//   source: "",
//   visit: "",
//   image: "https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg",
//   id: 2
// },
// {
//   title: 'Project 4',
//   description: 'This is a brief explanation about the project',
//   tags: ['mongoDB', 'Express', 'React', 'Node'],
//   source: "",
//   visit: "",
//   image: "https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg",
//   id: 3
// }
                     ];

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projectsDemo.map(({id, image, title, description, tags, source, visit})=> (
        <BlogCard key={id}>
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit}>Visit</ExternalLinks>
            <ExternalLinks href={source}>Source</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
