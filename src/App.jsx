import { useState } from 'react'
import { cvExample, cvEmpty } from './PersonInfo'
import { v4 as uuidv4 } from 'uuid'
import BuilderUI from './components/BuilderUI/BuilderUI'
import ResumePreview from './components/ResumePreview/ResumePreview'
import GitHubIcon from './components/GitHubIcon'

function App() {
  const [cv, setCv] = useState(cvExample)

  // General Handlers
  const handleDynamicallyCreatedObjectChange = (e, id, parentPropertyName) => {
    const { name, value } = e.target

    setCv((prevState) => {
      const newObject = prevState[parentPropertyName].map((obj) => {
        if (obj.id === id) {
          return { ...obj, [name]: value }
        }
        return obj
      })
      return { ...prevState, [parentPropertyName]: [...newObject] }
    })
  }

  const handleAdd = (emptyObject, parentPropertyName) => {
    setCv((prevState) => ({
      ...prevState,
      [parentPropertyName]: [
        ...prevState[parentPropertyName],
        emptyObject
      ]
    }))
  }

  const handleDelete = (id, parentPropertyName) => {
    setCv((prevState) => {
      const newObject = prevState[parentPropertyName].filter((obj) =>
        obj.id !== id
      )
      return { ...prevState, [parentPropertyName]: [...newObject] }
    })
  }

  // Personal Info Handler
  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target

    setCv((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  // Contact Handler
  const handleContactChange = (e) => {
    const { name, value } = e.target

    setCv((prevState) => ({
      ...prevState,
      contact: {
        ...prevState.contact,
        [name]: value
      }
    }))
  }

  // Skills Handlers
  const handleSkillChange = (e, id) => {
    handleDynamicallyCreatedObjectChange(e, id, 'skills')
  }

  const handleSkillAdd = () => {
    const skillObject = {
      id: uuidv4(),
      value: ''
    }

    handleAdd(skillObject, 'skills')
  }

  const handleSkillDelete = (id) => {
    handleDelete(id, 'skills')
  }

  // Education Handlers
  const handleEducationChange = (e, id) => {
    handleDynamicallyCreatedObjectChange(e, id, 'education')
  }

  const handleEducationDelete = (id) => {
    handleDelete(id, 'education')
  }

  const handleEducationAdd = () => {
    const educationObject = {
      id: uuidv4(),
      title: '',
      timePeriod: '',
      institution: '',
      country: ''
    }

    handleAdd(educationObject, 'education')
  }

  // Work Experience Handlers
  const handleWorkExperienceChange = (e, id) => {
    handleDynamicallyCreatedObjectChange(e, id, 'workExperience')
  }

  const handleWorkExperienceAdd = () => {
    const workObject = {
      id: uuidv4(),
      role: '',
      timePeriod: '',
      companyName: '',
      companyLocation: '',
      description: ''
    }

    handleAdd(workObject, 'workExperience')
  }

  const handleWorkExperienceDelete = (id) => {
    handleDelete(id, 'workExperience')
  }

  // Reference Handlers
  const handleReferenceChange = (e, id) => {
    handleDynamicallyCreatedObjectChange(e, id, 'references')
  }

  const handleReferenceAdd = () => {
    const referenceObject = {
      id: uuidv4(),
      name: '',
      role: '',
      company: '',
      email: '',
      phoneNumber: ''
    }

    handleAdd(referenceObject, 'references')
  }

  const handleReferenceDelete = (id) => {
    handleDelete(id, 'references')
  }

  const handleFormReset = () => {
    setCv(cvEmpty)
  }

  const handleCVExampleLoad = () => {
    setCv(cvExample)
  }

  const handleExportPDF = () => {
    print()
  }

  return (
    <>
      <main>
        <BuilderUI
          cv={cv}
          onChangePersonalInfo={handlePersonalInfoChange}
          onChangeContact={handleContactChange}
          onChangeSkill={handleSkillChange}
          onAddSkill={handleSkillAdd}
          onDeleteSkill={handleSkillDelete}
          onChangeEducation={handleEducationChange}
          onAddEducation={handleEducationAdd}
          onDeleteEducation={handleEducationDelete}
          onChangeWorkExperience={handleWorkExperienceChange}
          onAddWorkExperience={handleWorkExperienceAdd}
          onDeleteWorkExperience={handleWorkExperienceDelete}
          onChangeReference={handleReferenceChange}
          onAddReference={handleReferenceAdd}
          onDeleteReference={handleReferenceDelete}
          onExportPDF={handleExportPDF}
          onResetForm={handleFormReset}
          onLoadExampleCV={handleCVExampleLoad}
        />
        <ResumePreview cv={cv} />
      </main>
      <footer>
        <GitHubIcon link="https://github.com/Orelba/cv-builder" />
      </footer>
    </>
  )
}

export default App
