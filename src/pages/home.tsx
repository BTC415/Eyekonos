import React, { useState } from "react";

import Lottie from "react-lottie";

// components
import Container from "../components/container";
import RoadMap from "../components/roadmap";
import Faq from "../components/faq";
import Swap from "../components/swap";
import Header from "../components/header";
import Footer from "../components/footer";
// import VideoPlayer from "../components/video-player";

// images
import TwoSectionImage from "../assets/images/image_1.webp";
import ThirdSectionImage from "../assets/images/image_2.webp";
import LiquidityImage from "../assets/images/liquidity.svg";
import MarketingImage from "../assets/images/marketing.svg";
import EtherscanImage from "../assets/images/etherscan.png";
import CoinmarketcapImage from "../assets/images/coinmarketcap.png";
import CoingeckoImage from "../assets/images/coingecko.png";
import UniswapImage from "../assets/images/uniswap.png";

// animations
import * as animationData from "../assets/animations/top.json";
import SideBar from "../components/sidebar";
import useWindowHeight from "../hooks/useWindowHeight";

const Home = () => {
  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [headerType, setHeaderType] = useState<
    "logo_only" | "menu_included" | "side_bar"
  >("side_bar");
  const deviceHeight = useWindowHeight();

  return (
    <div className="molecule-page page-home" style={{
      height: deviceHeight - 90
    }}>
    </div>
  );
};

export default Home;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}

