import { Navbar } from "../components/ui/NavBar"

import { Routes, Route } from "react-router-dom";


import { DcScreen } from "../components/dc/DcScreen"
import { MarvelScreen } from "../components/marvel/MarvelScreen"
import { SearchScreen } from "../components/search/SearchScreen"
import { HeroScreen } from "../components/hero/HeroScreen";

export const DashboardRoutes = () => {
  return (
    <>
     <Navbar />   
     <Routes>
            <Route path="marvel" element={<MarvelScreen />} />
            <Route path="dc" element={<DcScreen />} />
            <Route path="hero/:heroId" element={<HeroScreen />} />

            <Route path="search" element={<SearchScreen />} />

            <Route path="/" element={<MarvelScreen />} />
      </Routes>
    </>
  )
}