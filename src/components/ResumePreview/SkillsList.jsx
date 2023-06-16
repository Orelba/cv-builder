export default function SkillsList({ skills }) {
  const listItems = skills.map((skill, idx) =>
    <p key={idx} className='skill'>{skill}</p>
  )

  return (
    <div className="skills-container">
      {listItems}
    </div>
  )
}
