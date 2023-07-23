import '../../styles/builder-ui.css'
import PersonalInfoForm from './PersonalInfoForm'
import ProfileForm from './ProfileForm'
import WorkExperienceForm from './WorkExperienceForm'
import SkillsForm from './SkillsForm'
import ContactForm from './ContactForm'
import EducationForm from './EducationForm'
import ReferencesForm from './ReferencesForm'
import ButtonPanel from './ButtonPanel'

export default function BuilderUI({
  cv,
  onChangePersonalInfo,
  onChangeContact,
  onChangeSkill,
  onAddSkill,
  onDeleteSkill,
  onChangeEducation,
  onAddEducation,
  onDeleteEducation,
  onChangeWorkExperience,
  onAddWorkExperience,
  onDeleteWorkExperience,
  onChangeReference,
  onAddReference,
  onDeleteReference,
  onExportPDF,
  onResetForm,
  onLoadExampleCV
}) {
  return (
    <div className='builder-ui-container'>
      <PersonalInfoForm
        cv={cv}
        onChange={onChangePersonalInfo}
      />
      <ProfileForm
        cv={cv}
        onChange={onChangePersonalInfo}
      />
      <WorkExperienceForm 
        cv={cv}
        onChange={onChangeWorkExperience}
        onAdd={onAddWorkExperience}
        onDelete={onDeleteWorkExperience}
      />
      <SkillsForm
        cv={cv}
        onChange={onChangeSkill}
        onAdd={onAddSkill}
        onDelete={onDeleteSkill}
      />
      <ContactForm
        cv={cv}
        onChange={onChangeContact}
      />
      <EducationForm 
        cv={cv}
        onChange={onChangeEducation}
        onAdd={onAddEducation}
        onDelete={onDeleteEducation}
      />
      <ReferencesForm 
        cv={cv}
        onChange={onChangeReference}
        onAdd={onAddReference}
        onDelete={onDeleteReference}
      />
      <ButtonPanel 
        onExportPDF={onExportPDF}
        onReset={onResetForm}
        onLoadExample={onLoadExampleCV}
      />
    </div>
  )
}
