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

      <div className="h-full w-full flex flex-col md:flex-row gap-5 px-4 md:px-8 lg:px-14">
        {/* Left Box */}
        <div id="left-box" className="h-full w-full md:w-[60vw] flex flex-col gap-5">
          <CoinPrice />
          <Tabs />
          <Performance />
          <Sentiment />
          <Aboutcoin />
          <Tokenomics/>
          <Team />

          {/* This section is only visible under the left box on mobile (min width- 768px) */}
          <div className="block md:hidden bg-white flex flex-col h-full w-full rounded-lg p-4 md:p-6">
            <YouMayAlso />
            <Trendingcoins />
          </div>
        </div>

        {/* Right Box */}
        <div id="right-box" className="h-full w-full md:w-[30vw] flex flex-col gap-5">
          <PromoBanner />
          <TrendCoinBox />
        </div>
      </div>

      {/* This section is outside the left box for desktop */}
      <div className="hidden md:flex bg-white flex-col h-full w-full px-4 md:px-8 lg:px-14 mt-14">
        <YouMayAlso />
        <Trendingcoins />
      </div>
    </div>
  )
}

export default App
