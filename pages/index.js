import Head from 'next/head'
import Image from 'next/image'
import LAlogo from '../public/lostark.svg'
import Styles from '../styles/Home.module.css'
import React from 'react'
// import video from '../public/LostArkTrailer.mp4'

export default function Home() {
  return (
    <div>
      <div className={Styles.page_logo}>
        <Head>
          <title>Lost Ark - Home</title>
        </Head>
        {/* <Image src={ LAlogo } height={250} width={500} /> */}
        {/* <video src={video} loop autoPlay width='750' height='400'>
        </video> */}
      </div>
    </div>
  )
}
