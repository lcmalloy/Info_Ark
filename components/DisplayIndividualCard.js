import React from 'react'
import useCollapse from 'react-collapsed'
import innerDropdownStyles from '../styles/InnerDropdown.module.css'

const DisplayIndividualCard = (props) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()


  const eachCard = props.card.map((each, i) =>
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
            {isExpanded ? 'Cards' : 'Cards'}
        </div>
        <div {...getCollapseProps()}>
            <div className={innerDropdownStyles.content}>
                {eachCard}
            </div>
        </div>
    </div>
  )
}

export default DisplayIndividualCard