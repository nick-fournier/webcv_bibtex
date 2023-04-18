import {FC, memo} from 'react';

import {publications, SectionId} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from '../Resume/ResumeSection';
import Bibliography from './Bibliography';

const Publications: FC = memo(() => {
  return (
    <Section className="bg-neutral-300" sectionId={SectionId.Publications}>
        <ResumeSection title="Select Publications">
          <Bibliography item={publications}/>
        </ResumeSection> 
    </Section>
  );
});

Publications.displayName = 'Publications';
export default Publications;
