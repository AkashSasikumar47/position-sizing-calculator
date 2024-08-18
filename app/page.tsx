"use client";

import React from 'react';
import Head from 'next/head';

import Hero from './components/Hero/Hero';
import EventCountdown from './components/EventCountdown/EventCountdown';
import About from './components/About/About';
import Speaker from './components/Speaker/Speaker';
import Timeline from './components/Timeline/Timeline';
import FAQ from './components/FAQ/FAQ';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';

import '../app/globals.css';

const HomePage: React.FC = () => {
  return (
    <div className="bg-black">
      <Head>
        <title>E-VOLVE | IEEE SRMIST</title>
        <meta name="description" content="Explore the future of artificial intelligence with hands-on experience in Generative AI. Join the GenAI Workshop at IEEE SRMIST to learn, innovate, and create AI-powered solutions." />
        <meta name="keywords" content="GenAI Workshop, IEEE SRMIST, artificial intelligence, generative AI, innovation, technology, hands-on workshop" />
        <link rel="icon" href="/favicon.ico?v=2" />
      </Head>

      <Hero />
      <About />
      <Speaker />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default HomePage;