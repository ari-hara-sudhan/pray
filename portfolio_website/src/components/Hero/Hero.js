import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          Tn Boy Portfolio
        </SectionTitle>
      <a href="https://ahs-sudhan.vercel.app/"><Button onClick={props.handleClick}>Learn More</Button></a>

      </LeftSection>
    </Section>
  </>
);

export default Hero;
