import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
<Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Hi <br />
      I'm Vinoth Manoharan
    </SectionTitle>
    <SectionText>
      I'm a Full Stack Developer
    </SectionText>
    <Button onClick={() => window.location = 'https://drive.google.com/file/d/1e1FqAQBLiZygedqFQuQgGuZWLSvo_-HF/view?usp=share_link'}>Resume</Button>
  </LeftSection>
</Section>
  );

export default Hero;
