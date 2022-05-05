import React from 'react'
import useCollapse from 'react-collapsed'
import dropdownStyles from '../styles/Dropdown.module.css'
import IndividualResistance from '../components/IndividualResistance'

function DisplayNpc( props ) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
  return (
    <div className={dropdownStyles.collapsible}>
      <div className={dropdownStyles.header} style={{'paddingLeft': 50 + 'px'}} {...getToggleProps()}>
        {isExpanded? `${props.npc.name}` : `${props.npc.name}`}
      </div>
      <div {...getCollapseProps()}>
        <div className={dropdownStyles.content}>
          <div className='NpcContainer'>
            <div className={dropdownStyles.npcDescription}>
              Sailor Rank: {props.npc.rank}
            </div>
            <br></br>
            <div className={dropdownStyles.npcDescription}>
              Travel Speed: {props.npc.speed}
            </div>
            <br></br>
            <div className='npc_resistance'>
              <IndividualResistance resistance={props.npc.resistance} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DisplayNpc