import Head from 'next/head'
import nextConfig from '../next.config'
import Styles from '../styles/Home.module.css'
import DisplayNpc from '../components/DisplayNpc'
import React, {useEffect, useState} from 'react'

const npc = ( props ) => {
  const [search, setSearch] = useState('')
  const data = props.npc.filter(word => word.name.toLowerCase().includes(search));
  console.log(props.npc)
  const eachNpc = data.map((each, i) =>
    <div key={i}>
      <DisplayNpc npc={each} />
    </div>
  )
  return (
    <div className={Styles.contentNpcContainer}>
      <Head>
        <title>Lost Ark - NPC</title>
      </Head>
      <h1 className='page_text'>Npc</h1>
        <div className={Styles.search}>
          <input
            type="text"
            placeholder="Filter selection..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      <div className={Styles.npcContainer}>
        {eachNpc}
      </div>
    </div>
  )
}

export default npc

export async function getStaticProps() {
  const npc = await fetch('https://lost-ark-simple.p.rapidapi.com/sailors', {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': nextConfig.env.host,
      'X-RapidAPI-Key': nextConfig.env.key
    }
  }).then(r => r.json());

  return {
    props: {
      npc
    }
  }
}