import React from 'react'
import useCollapse from 'react-collapsed'
import innerDropdownStyles from '../styles/InnerDropdown.module.css'

const DisplayIndividualBonus = (props) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

  const eachBonus = props.bonus.map((each, i) =>
  <>
    <div className={innerDropdownStyles.eachItem} key={i}>
      {each}
    </div>
    <br></br>
  </>
  )
  return (
    <div className={innerDropdownStyles.collapsible}>
        <div className="header" {...getToggleProps()}>
            {isExpanded ? 'Bonus' : 'Bonus'}
        </div>
        <div {...getCollapseProps()}>
            <div className={innerDropdownStyles.content}>
                {eachBonus}
            </div>
        </div>
    </div>
  )
}

export default DisplayIndividualBonus