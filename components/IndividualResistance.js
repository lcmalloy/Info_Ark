import React from 'react'
import useCollapse from 'react-collapsed'
import innerDropdownStyles from '../styles/InnerDropdown.module.css'


const IndividualResistance = ( props ) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

  return (
    <div className={innerDropdownStyles.collapsible}>
        <div className="header" {...getToggleProps()}>
            {isExpanded ? 'Resistance [Close]' : 'Resistance [Expand]'}
        </div>
        <div {...getCollapseProps()}>
            <div className={innerDropdownStyles.content}>
                <div className={innerDropdownStyles.resistance1}>
                  Kelp Bed: {props.resistance.kelp_beds}
                </div>
                <br></br>
                <div className={innerDropdownStyles.resistance2}>
                  Sandstorm: {props.resistance.sandstorm}
                </div>
                <br></br>
                <div className={innerDropdownStyles.resistance2}>
                  Sirens: {props.resistance.siren}
                </div>
                <br></br>
                <div className={innerDropdownStyles.resistance2}>
                  Cold Snap: {props.resistance.cold_snap}
                </div>
                <br></br>
                <div className={innerDropdownStyles.resistance2}>
                  Tempest: {props.resistance.tempest}
                </div>
                <br></br>
                <div className={innerDropdownStyles.resistance2}>
                  Dead Waters: {props.resistance.dead_waters}
                </div>
                <br></br>
            </div>
        </div>
    </div>
  )
}

export default IndividualResistance