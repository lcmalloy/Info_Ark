import Head from 'next/head'
import nextConfig from '../next.config'
import DisplayCardSet from '../components/DisplayCardSet'
import Styles from '../styles/Home.module.css'
import React, {useEffect, useState} from 'react'

const cards = (props) => {
  const [search, setSearch] = useState('')
  const data = props.cards.filter(word => word.name.toLowerCase().includes(search));
  const eachCard = data.map((card, i) =>
    <div key={i}>
      <DisplayCardSet card={card} />
    </div>
  )
  return (
    <div className={Styles.contentCardContainer}>
      <Head>
        <title>Lost Ark - Cards</title>
      </Head>
      <h1 className='page_text'>Card Collection</h1>
      <div className={Styles.search}>
        <input
          type="text"
          placeholder="Filter selection..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className={Styles.cardContainer}>
        {eachCard}
      </div>
    </div>
  )
}

export default cards

export async function getStaticProps() {
  const cards = await fetch('https://lost-ark-simple.p.rapidapi.com/card', {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': nextConfig.env.host,
      'X-RapidAPI-Key': nextConfig.env.key
    }
  }).then(r => r.json());

  return {
    props: {
      cards
    }
  }
}