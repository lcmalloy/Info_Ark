import Head from 'next/head'
import Image from 'next/image'
import LAlogo from '../public/lostark.svg'
import Styles from '../styles/Home.module.css'
import React from 'react'


export default function Home() {
  return (
    <div className={Styles.parentContainer}>
      <div className={Styles.page_logo}>
        <Head>
          <title>Lost Ark - Home</title>
        </Head>
        {/* <Image src={ LAlogo } height={250} width={500} /> */}
        <video className={Styles.video} src={'https://res.cloudinary.com/dygemslza/video/upload/v1651741169/yt5s.com-Lost_Ark_Trailer___Summer_Game_Fest_2021-_1080p60_fixkot.mp4'} loop autoPlay />
      </div>
    </div>
  )

}