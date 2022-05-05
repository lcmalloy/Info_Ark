import Head from 'next/head'
import nextConfig from '../next.config'
import DisplayClasses from '../components/DisplayClasses'
import Styles from '../styles/Home.module.css'
const Classes = ( props ) => {

  const eachClass = props.charClass.map((selectClass, i) =>
  <div key={i}>
    <DisplayClasses individualClass={selectClass}/>
  </div>
  )

  return (
    <div>
      <Head>
        <title>Lost Ark - Classes</title>
      </Head>
      <h1 className='page_text'>Classes</h1>
      <div className={Styles.classContainer}>
        {eachClass}
      </div>
    </div>
  )
}

export default Classes

export async function getStaticProps() {
  const classes = await fetch('https://lost-ark-simple.p.rapidapi.com/classes', {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': nextConfig.env.host,
      'X-RapidAPI-Key': nextConfig.env.key
    }
  }).then(r => r.json());

  return {
    props: {
      charClass: classes
    }
  }
}