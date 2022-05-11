import {useRouter} from 'next/router'
import nextConfig from '../../../next.config.js'
import DisplaySkill from '../../../components/DisplaySkill'
import Styles from '../../../styles/Home.module.css'
import React, {useEffect, useState} from 'react'

const classes = ({charSkills}) => {
  const [search, setSearch] = useState('')
  const data = charSkills.skills.filter(word => word.name.toLowerCase().includes(search));
  const skillTree = data.map((skill, i) =>
  <div key={i}>
    <DisplaySkill skill={skill} i={i}/>
  </div>
  )
  return (
    <div className={Styles.parentContainer}>
      <div className={Styles.header}>
        {charSkills.character} Class | Select Skill For More Details
      </div>
      <div className={Styles.search}>
        <input
          type="text"
          placeholder="Filter selection..."
          onChange={(e) => setSearch(e.target.value)}
        />
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