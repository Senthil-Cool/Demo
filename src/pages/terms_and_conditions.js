import React, { useEffect } from 'react';
 // Correctly import localFont
import Header from '@/components/header';
import Navbar from '@/components/navbar';
import Terms from '@/components/body_tnc';
import Footer from "@/components/footer";
import Head from 'next/head'


export default function TermsAndConditions(){
    return(
        <div >

    <Head>
    <meta name="description" content="A brief description of your page for search engines." />
        <meta name="keywords" content="keyword1, keyword2, keyword3" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Happy People AI" />
        <meta property="og:description" content="Your ultimate career toolkit - RiseON Suite" />
        <meta property="og:image" content="https://happypeopleai.com/images/SocialMedia.png" />
        <meta property="og:url" content="https://happypeopleai.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Happy People Ai" />
        <meta name="twitter:description" content="Description for Twitter card." />
        <meta name="twitter:image" content="https://happypeopleai.com/images/HPA_Logo.png" />
        <meta name="author" content="Author Name" />
        <meta name="theme-color" content="#4285f4" />
        <meta name="generator" content="Next.js" />
        <meta name="rating" content="general" />
      </Head>
            <Header/>
            <Navbar/>
            <Terms/>
            <Footer/>
        </div>
    );
}