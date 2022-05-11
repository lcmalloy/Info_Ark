import Head from 'next/head'
import nextConfig from '../next.config'
import Styles from '../styles/Home.module.css'
import DisplayWeapon from '../components/DisplayWeapon'
import React, {useEffect, useState} from 'react'

const craft = ( props ) => {
  const [search, setSearch] = useState('')
  const data = props.weapons.filter(word => word.name.toLowerCase().includes(search));
  const eachWeapon = data.map((weapon, i) =>
    <div key={i}>
      <DisplayWeapon weapon={weapon} />
    </div>
  )
  return (
    <div className={Styles.contentCraftContainer}>
      <Head>
        <title>Lost Ark - Craft</title>
      </Head>
      <h1 className='page_text'>Craft: Weapon Forge</h1>
      <div className={Styles.search}>
        <input
          type="text"
          placeholder="Filter selection..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className={Styles.craftContainer}>
        {eachWeapon}
      </div>
    </div>
  )
}

export default craft

export async function getStaticProps() {
  const weapons = await fetch('https://lost-ark-simple.p.rapidapi.com/craft/weapon', {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': nextConfig.env.host,
      'X-RapidAPI-Key': nextConfig.env.key
    }
  }).then(r => r.json());

  return {
    props: {
      weapons
    }
  }
}