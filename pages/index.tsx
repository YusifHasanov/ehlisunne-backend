import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { Poppins } from 'next/font/google'
const montserrat = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin-ext"] })

export default function Home(props: any) {
  const [prayerTimes, setPrayerTimes] = useState([]);
  useEffect(() => {
    const fetchPrayerTimes = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        fetch(`https://api.aladhan.com/v1/timings?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&method=13&school=1`)
          .then(response => response.json())
          .then(data => setPrayerTimes(data.data.timings))
          .catch(error => console.error(error));
      });
    }
    fetchPrayerTimes();

    const interval = setInterval(() => {
      fetchPrayerTimes();
    }, 60000); // Fetch data every minute 
    return () => clearInterval(interval);
  }, [])

  const prayerTimeRows = Object.entries(prayerTimes).map(([key, value]) => (
    <tr key={key}>
      <td>{key}</td>
      <td>{value}</td>
    </tr>
  ));

  const clickHandler = async () => {
    const videos = await fetch("http://localhost:3000/api/videos")
    const data = await videos.json();
    let count = 0;
    let c = new Set(data)
    console.log(c.size);
    //console log number of dublocate vieos which have same videoId
    // data.forEach((video: any, index: any) => {
    //   data.forEach((video2: any, index2: any) => {
    //     if (video.videoId === video2.videoId && index !== index2) {
    //       console.log("video1",video)
    //       console.log("video2",video2)

    //     }
    //   })
    // })




    console.log(data[0])
    console.log(data[data.length - 1])
    console.log(data.length)
  }
  return (
    <>
      <Header />
      <main className={montserrat.className} >
        <div className='homePage  ' >
          Əhli Sünnə Mədrəsəsi
          <button
            onClick={clickHandler}
          >click</button>

        </div>
      </main>
    </>
  )
}

const Header = () => (
  <Head>
    <title>Əhli Sünnə Mədrəsəsi</title>
    <meta name="description" content="Generated by create next app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
)
