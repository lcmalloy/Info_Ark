import React from 'react'
import useCollapse from 'react-collapsed'
import dropdownStyles from '../styles/Dropdown.module.css'
import ListMaterial from '../components/ListMaterial'

const DisplayWeapon = (props) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
  return (
    <div className={dropdownStyles.collapsible}>
        <div className={dropdownStyles.header} style={{'paddingLeft': 50 + 'px'}} {...getToggleProps()}>
          {isExpanded? `${props.weapon.name}` : `${props.weapon.name}`}
        </div>
        <div {...getCollapseProps()}>
          <div className={dropdownStyles.content}>
            <div className='craft_Container'>
              <div className={dropdownStyles.craftDescription}>
                <ListMaterial material={props.weapon.materials} />
              </div>
              <br></br>
                <div className={dropdownStyles.craftDescription}>
                Description: {props.weapon.details}
                </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default DisplayWeapon