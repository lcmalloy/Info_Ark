import React from 'react'
import useCollapse from 'react-collapsed'
import innerDropdownStyles from '../styles/InnerDropdown.module.css'

const DisplayIndividualEffect = (props) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

  const eachEffect = props.effect.map((each, i) =>
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
            {isExpanded ? 'Effects' : 'Effects'}
        </div>
        <div {...getCollapseProps()}>
            <div className={innerDropdownStyles.content}>
                {eachEffect}
            </div>
        </div>
    </div>
  )
}

export default DisplayIndividualEffect