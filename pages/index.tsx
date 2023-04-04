import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { Poppins } from 'next/font/google'
import { trpc } from '@/server/utils/trpc';
import Footer from '@/src/components/footer/Footer';
import Header from '@/src/components/globals/Header';

const montserrat = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin-ext"] })

export default function Home(props: any) {

  const p = trpc.playlist.getAll.useQuery(undefined, { staleTime: 86400000, });
  const v = trpc.video.oneByVideoId.useQuery("sendZ2iS3g", { staleTime: 1000 * 60 * 5 });//5min

  return (
    <>
      <Header title='Əhli Sünnə Mədrəsəsi' />
      <main className={montserrat.className} >
        <div style={{ height: "80vh" }} className={"text-5xl flex items-center justify-center"} >
          Əhli Sünnə Mədrəsəsi
        </div>
      </main>
      <Footer />
    </>
  )
}

