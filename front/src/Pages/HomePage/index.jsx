import React from 'react'
import HeroSection from '../../Components/HeroSection'
import QualitySection from '../../Components/Quality'
import ExploreTheWorld from '../../Components/ExploreTheWorld'
import PeopleCards from '../../Components/PeopleCards'
import LatestNews from '../../Components/LatestNews'
import SlideInfinitive from '../../Components/SlideInfinitive'
import SwiperOurVehicle from '../../Components/SwiperOurVehicle'

function HomePage() {
  return (
    <div>
      <HeroSection />
      <SwiperOurVehicle />
      <QualitySection />
      <ExploreTheWorld />
      <PeopleCards />
      <LatestNews />
      <SlideInfinitive />
    </div>
  )
}

export default HomePage