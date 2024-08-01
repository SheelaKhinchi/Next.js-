import Head from 'next/head';
import Header from '../app/Header';
import Hero from '../app/Hero';
import Deals from '../app/Deals';
import PromotionsAndProducts from '../app/PromotionsAndProducts';
import Categories from '../app/Categories';
import TrustedMedicalStore from '../app/TrustedMedicalStore';
import HotDealsAndProducts from '../app/HotDealsAndProducts';
import FeaturedProducts from '../app/FeaturedProducts';
import Testimonials from '../app/Testimonials';
import LatestNews from '@/app/LatestNews';
import AppPromotion from '@/app/AppPromotion';


import Footer from '@/app/Footer'


export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
    
      <Head>
        <title>Doccure Pharmacy</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Head>
      <Header />
      <Hero />
      <Deals />
      <Categories />
      <PromotionsAndProducts />
      <TrustedMedicalStore />
      <HotDealsAndProducts />
      <FeaturedProducts />
      <Testimonials />
      <LatestNews />
      <AppPromotion />

 
  
      <Footer />
    
  


      {/* Add other sections or components here */}
    </div>
  );
}
