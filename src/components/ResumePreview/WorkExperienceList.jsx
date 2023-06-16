export default function WorkExperienceList({ workExperience }) {
  return (
    <>
      {workExperience.map((work, idx) =>
        <Work key={idx} work={work} />
      )}
    </>
  )
}

function Work({ work }) {
  const { role, timePeriod, companyName, companyLocation, description } = work

  return (
    <div className='work-container'>
      <p className='role'>{role}</p>
      <p className='work-time-period'>{timePeriod}</p>
      <p className='company'>
        <span className="company-name">{companyName}</span>
        , <span className="company-location">{companyLocation}</span>
      </p>
      <p className="description">{description}</p>
    </div>
  )
}
