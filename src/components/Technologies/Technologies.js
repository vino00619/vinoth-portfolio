import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
//added a comment
const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider /> <br /> <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've hands-on experience with a wide range of technologies in the web development world.
      From Back-end to Front-end.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js <br />
            HTML <br />
            CSS 
          </ListParagraph>
        </ListContainer>
      </ListItem><ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node.js <br />
            Express.js <br />
            MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem><ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            VS code<br />
            Postman<br />
            Mongo DB Atlas<br />
            Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
