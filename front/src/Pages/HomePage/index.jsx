import React from 'react'
import HeroSection from '../../Components/HeroSection'
import OurVehicle from '../../Components/OurVehicle'
import QualitySection from '../../Components/Quality'
import ExploreTheWorld from '../../Components/ExploreTheWorld'
import PeopleCards from '../../Components/PeopleCards'
import LatestNews from '../../Components/LatestNews'
import SlideInfinitive from '../../Components/SlideInfinitive'

function HomePage() {
  return (
    <div>
      <HeroSection />
      <OurVehicle />
      <QualitySection />
      <ExploreTheWorld />
      <PeopleCards />
      <LatestNews/>
      <SlideInfinitive/>
    </div>
  )
}

export default HomePage