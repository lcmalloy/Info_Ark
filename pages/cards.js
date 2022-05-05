import Head from 'next/head'
import nextConfig from '../next.config'
import DisplayCardSet from '../components/DisplayCardSet'
import Styles from '../styles/Home.module.css'

const cards = (props) => {
  const eachCard = props.cards.map((card, i) =>
  <div>
    <div key={i}>
      <DisplayCardSet card={card} />
    </div>
  </div>
  )
  return (
    <div className={Styles.contentCardContainer}>
      <Head>
        <title>Lost Ark - Cards</title>
      </Head>
      <h1 className='page_text'>Card Collection</h1>
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