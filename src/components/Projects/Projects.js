import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const projectsDemo = [{
  title: ' 1',
  description: 't',
  tags: ['moDB', 'Exss', '', 'Noe'],
  source: "",
  visit: "",
  image: "",
  id: 0
},
{
  title: 'Project 2',
  description: 'This is a brief explanation about the project',
  tags: ['mongoDB', 'Express', 'React', 'Node'],
  source: "",
  visit: "",
  image: "https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg",
  id: 1
},
{
  title: 'Project 3',
  description: 'This is a brief explanation about the project',
  tags: ['mongoDB', 'Express', 'React', 'Node'],
  source: "",
  visit: "",
  image: "https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg",
  id: 2
},
{
  title: 'Project 4',
  description: 'This is a brief explanation about the project',
  tags: ['mongoDB', 'Express', 'React', 'Node'],
  source: "",
  visit: "",
  image: "https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg",
  id: 3
}];

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projectsDemo.map(({id, image, title, description, tags, source, visit})=> (
        <BlogCard key={id}>
          <Img src={image} />
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
            <ExternalLinks href={visit}>Code</ExternalLinks>
            <ExternalLinks href={source}>Source</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
