import React from 'react'
import useCollapse from 'react-collapsed'
import innerDropdownStyles from '../styles/InnerDropdown.module.css'

function ListMaterial( props ) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

  const eachMaterial = props.material.map((each, i) =>
  <>
    <div className={innerDropdownStyles.eachItem} key={i}>
      Item: {each.item}
    </div>
    <br></br>
    <div className={innerDropdownStyles.eachItem} key={i + 'j'}>
      Amount: {each.amount}
    </div>
  </>
  )
  return (
    <div className={innerDropdownStyles.collapsible}>
        <div className="header" {...getToggleProps()}>
            {isExpanded ? 'Material [Close]' : 'Material [Expand]'}
        </div>
        <div {...getCollapseProps()}>
            <div className={innerDropdownStyles.content1}>
                {eachMaterial}
            </div>
        </div>
    </div>
  )
}

export default ListMaterial