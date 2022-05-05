import React from 'react'
import useCollapse from 'react-collapsed'
import dropdownStyles from '../styles/Dropdown.module.css'

const DisplaySkill = (props) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <div className={dropdownStyles.collapsible}>
      <div className={dropdownStyles.header} style={{'paddingLeft': 50 + 'px'}} {...getToggleProps()}>
        {isExpanded? `${props.skill.name}` : `${props.skill.name}`}
      </div>
      <div {...getCollapseProps()}>
        <div className={dropdownStyles.content}>
          <div className='skillContainer'>
            <div className='skillname'>
              Skill Name: {props.skill.name}
            </div>
            <br></br>
            <div className='skilltype'>
              Skill Type: {props.skill.type}
            </div>
            <br></br>
            <div className='skill_level'>
              Required Level: {props.skill.require_level}
            </div>
            <br></br>
            <div className='skill_cooltime'>
              Cooldown Timer: {props.skill.cooltime}
            </div>
            <br></br>
            <div className='skill_stagger'>
              Stagger: {props.skill.stagger}
            </div>
            <br></br>
            <div className='skill_description'>
              Description: {props.skill.description}
            </div>
            <br></br>
            <div className='skill_details'>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DisplaySkill


