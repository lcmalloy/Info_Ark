import Head from 'next/head'
import nextConfig from '../next.config'
import Styles from '../styles/Home.module.css'
import DisplayWeapon from '../components/DisplayWeapon'

const craft = ( props ) => {

  const eachWeapon = props.weapons.map((weapon, i) =>
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