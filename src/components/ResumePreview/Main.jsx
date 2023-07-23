import Section from '../Section'
import WorkExperienceList from './WorkExperienceList'
import SkillsList from './SkillsList'

export default function Main({ profileDescription, workExperience, skills }) {
  return (
    <div className='resume-main'>
      <div className='main-sections'>
        <Section title='Profile'>
          <p className='profile-description'>{profileDescription}</p>
        </Section>
        <Section title='Work Experience'>
          <WorkExperienceList workExperience={workExperience} />
        </Section>
        <Section title='Skills'>
          <SkillsList skills={skills} />
        </Section>
      </div>
    </div>
  )
}
