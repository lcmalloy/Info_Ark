import React from 'react'
import Styles from '../styles/Home.module.css'
import Link from 'next/link'

const DisplayClasses = (props) => {

  const nextClass = props.individualClass.characters.map((children, i) =>
  <div className={Styles.specClassContainer} key={i}>
    <Link href={{
      pathname: '/classes/[name]',
      query: { name: children.name },
    }}>
      <a> {children.name} </a>
    </Link>
  </div>
  )
  return (
    <div className="DisplayClass">
      <ul>
        <div className={Styles.baseClass}>
        {props.individualClass.class} {' class'}
        </div>
        <div className={Styles.specClass}>
        {nextClass}
        </div>
      </ul>
    </div>
  )
}

export default DisplayClasses