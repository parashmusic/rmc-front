import React from 'react'
import ContentSection from '../components/ContentSection';
 import ArtistSection from '../components/ArtistSection';
 import HeroSection from '../components/HeroSection';
 import Move from '../components/Move';
 import Title from '../components/Title';
 import ContHome from '../components/ContHome';
const Home = () => {
  return (
   <main>
        <HeroSection/>
        <Move/>
        {/* <div className='my-10'>
    <div className='text-center py-8 text-3xl'>
        <Title text1={'UPCOMING'} text2={'RELEASES'}/>
    </div>
   </div> */}
        
        <div className='px-4 sm:px-[5vh] md:px-[7vh] lg:px-[9vh]'>
        <ArtistSection />
          <hr />
        <ContHome/>
       
        </div>
        {/* <ContentSection /> */}
      </main> 
  )
}

export default Home