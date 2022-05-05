import React from 'react'
import useCollapse from 'react-collapsed'
import dropdownStyles from '../styles/Dropdown.module.css'
import DisplayIndividualCard from './DisplayIndividualCard'
import DisplayIndividualEffect from './DisplayIndividualEffect'
import DisplayIndividualBonus from './DisplayIndividualBonus'

function DisplayCardSet(props) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
  if (props.card.length > 0) {
    return (
      <div className={dropdownStyles.collapsible}>
        <div className={dropdownStyles.header} style={{'paddingLeft': 50 + 'px'}} {...getToggleProps()}>
          {isExpanded? `${props.card.name}` : `${props.card.name}`}
        </div>
        <div {...getCollapseProps()}>
          <div className={dropdownStyles.content}>
            <div className='skillContainer'>
              <div className='cardList'>
                <DisplayIndividualCard card={props.card.cards}/>
                <DisplayIndividualEffect effect={props.card.effect}/>
                <DisplayIndividualBonus bonus={props.card.bonus}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <>
      </>
    )
  }
}

export default DisplayCardSet