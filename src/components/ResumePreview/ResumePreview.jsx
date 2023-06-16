import Header from './Header'
import Sidebar from './Sidebar'
import Main from './Main'
import '../../styles/resume-preview.css'
import { personInfo } from '../../PersonInfo'

export default function ResumePreview() {
  return (
    <div className='resume-preview-container'>
      <Header 
        name={personInfo.name}
        role={personInfo.role}
      />
      <Sidebar 
        avatarUrl={personInfo.avatarUrl}
        contact={personInfo.contact} 
        education={personInfo.education}
        references={personInfo.references}
      />
      <Main
        profileDescription={personInfo.profileDescription}
        workExperience={personInfo.workExperience}
        skills={personInfo.skills}
      />
    </div>
  )
}
