import {useRouter} from 'next/router'
import nextConfig from '../../../next.config.js'
import DisplaySkill from '../../../components/DisplaySkill'
import Styles from '../../../styles/Home.module.css'

const classes = ({charSkills}) => {

  const skillTree = charSkills.skills.map((skill, i) =>
  <div key={i}>
    <DisplaySkill skill={skill} i={i}/>
  </div>
  )
  return (
    <div className={Styles.parentContainer}>
      <div className={Styles.header}>
        {charSkills.character} Class | Select Skill For More Details
      </div>
      <div className={Styles.skillContainer}>
        {skillTree}
      </div>
    </div>
  )
}

export default classes

export const getServerSideProps = async (context) => {
  const res = await fetch(`https://lost-ark-simple.p.rapidapi.com/skills/${context.params.name}`, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': nextConfig.env.host,
      'X-RapidAPI-Key': nextConfig.env.key
    }
  })

  const skills = await res.json()

  return {
    props: {
      charSkills: skills
    }
  }
}