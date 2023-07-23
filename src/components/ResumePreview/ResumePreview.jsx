import Header from './Header'
import Sidebar from './Sidebar'
import Main from './Main'
import '../../styles/resume-preview.css'

export default function ResumePreview({ cv }) {
  return (
    <div className='resume-preview-container'>
    <Header
      name={cv.name}
      role={cv.role}
    />
    <Sidebar
      avatarUrl={cv.avatarUrl}
      contact={cv.contact}
      education={cv.education}
      references={cv.references}
    />
    <Main
      profileDescription={cv.profileDescription}
      workExperience={cv.workExperience}
      skills={cv.skills}
    />
  </div>
  )
}
