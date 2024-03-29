import { useEffect } from "react";

import Hero from "../components/Hero";
import Banners from "../components/Banners";
import FeaturedProduct from "../components/FeaturedProduct";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <Banners />
      <FeaturedProduct />
      <NewsLetter />
    </>
  );
};

export default Home;
