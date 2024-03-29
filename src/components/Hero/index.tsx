import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

import HeroBg1 from "../../assets/images/hero-bg1.jpg";
import HeroBg2 from "../../assets/images/hero-bg2.jpg";
import Container from "../../common/Container";
import { buttonVariants } from "../../common/Button";

const Hero: React.FC = () => {
  const HERO_SLIDES: HeroSlide[] = [
    {
      title: "Spring / Summer Collection 2023",
      main_title: "Get up to 30% off New Arrivals",
      imgSrc: HeroBg1,
    },
    {
      title: "Spring / Summer Collection 2023",
      main_title: "Get up to 30% off New Arrivals",
      imgSrc: HeroBg2,
    },
  ];

  return (
    <section>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        slidesPerView={1}
        navigation
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
      >
        {HERO_SLIDES.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-[600px]  bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.imgSrc})`,
              }}
            >
              <Container className="section-padding flex h-full flex-col justify-center">
                <div>
                  <h1 className="mb-8 text-4xl font-bold">
                    <span className="text-base font-normal uppercase">
                      {slide.title}
                    </span>
                    <br />
                    {slide.main_title}
                  </h1>

                  <NavLink
                    type="button"
                    role="button"
                    className={buttonVariants({ variant: "primary" })}
                    to="/"
                  >
                    Shop Now
                  </NavLink>
                </div>
              </Container>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;

type HeroSlide = {
  title: string;
  main_title: string;
  imgSrc: string;
};
