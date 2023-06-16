export default function EducationInfoList({ education }) {
  return (
    <>
      {education.map((education, idx) =>
        <EducationInfo key={idx} education={education} />
      )}
    </>
  )
}

function EducationInfo({ education }) {
  const { title, timePeriod, institution, country } = education

  return (
    <div className='education-info-container'>
      <p className='education-info-title'>{title}</p>
      <p className='uppercase'>{timePeriod}</p>
      <p className='institution'>
        <span>{institution}</span>{institution && country && ' - '}{country}
      </p>
    </div>
  )
}
