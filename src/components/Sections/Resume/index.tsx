import {FC, memo} from 'react';

import {awards, education, experience, SectionId, skills} from '../../../data/data';
import Section from '../../Layout/Section';
import TimelineItem from '../Timeline';
import Education from './Education';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';

const Resume: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <span className="flex-1 text-sm sm:flex-none">
            <ResumeSection title="Education">
              {education.map((item, index) => (
                <Education item={item} key={`${item.title}-${index}`} />
              ))}
            </ResumeSection>
          </span>
          <span className="flex-1 text-sm sm:flex-none">
            <ResumeSection title="Awards">
              {awards.map((item, index) => (
                <Education item={item} key={`${item.title}-${index}`} />
              ))}
            </ResumeSection>
          </span>
        </div>

        <ResumeSection title="Experience">
          {experience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>

        <ResumeSection title="Skills">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
