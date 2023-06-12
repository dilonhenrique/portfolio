import React from 'react';
import Text from '@/components/elements/Text';
import Head from 'next/head';
import Navbar from '@/components/patterns/Navbar';
import InitialBanner from '@/components/patterns/InitialBanner';
import About from '@/components/patterns/About';
import Habilities from '@/components/patterns/Habilities';
import Projects from '@/components/patterns/Projects';
import Footer from '@/components/patterns/Footer';

export default function HomeScreen() {
  return (
    <>
      <Head>
        <title>Dilon Henrique | frontend developer</title>
      </Head>
      <Navbar />
      <InitialBanner />
      <About />
      <Habilities />
      <Projects />
      <Footer />
    </>
  )
}
