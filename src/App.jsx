import React from 'react'
import Navbar from './components/navbar'
import PromoBanner from './components/Promobanner'
import TrendCoinBox from './components/Trendcoinleft'
import BreadCrumb from './components/breadcrumb'
import CoinPrice from './components/Coinprice'
import Tabs from './components/Tabs'
import Performance from './components/Performance'
import Sentiment from './components/Sentiment'
import Aboutcoin from './components/Aboutcoin'
import Tokenomics from './components/Tokenomics'
import Team from './components/Team'
import Trendingcoins from './components/Trendingcoins'
import YouMayAlso from './components/Youmayalso'

const App = () => {
  return (
    <div className="bg-[#D3E0E6] min-h-screen w-full">
      <Navbar />
      <BreadCrumb />
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-[2fr] lg:grid-cols-[2fr_1fr] gap-5 px-4 md:px-8 lg:px-14">
        {/* Left Box */}
        <div id="left-box" className="flex flex-col gap-5">
          <CoinPrice />
          <Tabs />
          <Performance />
          <Sentiment />
          <Aboutcoin />
          <Tokenomics/>
          <Team />

          {/* This section is only visible under the left box on mobile and tablet */}
          <div className="block lg:hidden bg-white flex flex-col h-full w-full mt-5">
            <YouMayAlso />
            <Trendingcoins />
          </div>
        </div>

        {/* Right Box */}
        <div id="right-box" className="h-full flex flex-col gap-5">
          <PromoBanner />
          <TrendCoinBox />
        </div>
      </div>

      {/* This section is outside the left box for desktop */}
      <div className="hidden lg:flex bg-white flex-col h-full w-full px-14 mt-14">
        <YouMayAlso />
        <Trendingcoins />
      </div>
    </div>
  )
}

export default App
