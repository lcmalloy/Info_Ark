import Layout from '../components/Layout'
import VerticalNav from '../components/VerticalNav.js'
import '../styles/globals.css'
import Styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <div className={Styles.bodyContainer}>
    <Layout>
      <div className={Styles.contentContainer}>
        <Component {...pageProps} />
      </div>
  </Layout>
      </div>
  </>
  )
}

export default MyApp
