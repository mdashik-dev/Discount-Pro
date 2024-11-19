import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCreative } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

function Slider() {


  return (
    <Swiper
      modules={[Autoplay, Pagination, EffectCreative]}
      grabCursor={true}
      slidesPerView={1}
      effect={"creative"}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
      className="mySwiper"
      autoplay={{
        delay: 3000,
      }}
      parallax={true}
      pagination={{
        dynamicBullets: true,
      }}
    >
      <SwiperSlide>
        <div className="relative text-white w-full rounded-lg">
          <section
            className={`relative w-full bg-no-repeat bg-cover bg-[url(https://plus.unsplash.com/premium_photo-1664202525979-80d1da46b34b?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] min-h-[600px] flex flex-col justify-center items-center`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-700 opacity-40"></div>

            <div className="max-w-[1024px] relative container mx-auto px-6 py-24 text-white text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Save More, Shop Smart – All Your Coupons in One Place!
              </h1>
              <p className="text-lg w-8/12 mx-auto font-normal opacity-80 mb-8">
                Explore top discounts from your favorite Bangladeshi shops.
              </p>
              <div className="flex justify-center space-x-4">
                <Link
                  to="brands"
                  className="btn btn-primary text-xl text-white"
                >
                  {" "}
                  Explore Brands{" "}
                </Link>
                <Link
                  to="about"
                  className="btn btn-outline text-xl text-white"
                >
                  {" "}
                  Learn More{" "}
                </Link>
              </div>
            </div>
          </section>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative text-white w-full rounded-lg">
          <section
            className={`relative w-full bg-no-repeat bg-cover bg-[url(https://plus.unsplash.com/premium_photo-1664202526744-516d0dd22932?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] min-h-[600px] flex flex-col justify-center items-center`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-700 opacity-40"></div>

            <div className="max-w-[1024px] relative container mx-auto px-6 py-24 text-white text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Bangladesh’s Hub for the Best Deals and Discounts!
              </h1>
              <p className="text-lg w-8/12 mx-auto font-normal opacity-80 mb-8">
                Bringing you unbeatable savings, every day.
              </p>
              <div className="flex justify-center space-x-4">
                <Link
                  to="brands"
                  className="btn btn-primary text-xl text-white"
                >
                  {" "}
                  Explore Brands{" "}
                </Link>
                <Link
                  to="about"
                  className="btn btn-outline text-xl text-white"
                >
                  {" "}
                  Learn More{" "}
                </Link>
              </div>
            </div>
          </section>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative text-white w-full rounded-lg">
          <section
            className={`relative w-full bg-no-repeat bg-cover bg-[url(https://images.unsplash.com/photo-1487744480471-9ca1bca6fb7d?q=80&w=3291&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] min-h-[600px] flex flex-col justify-center items-center`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-700 opacity-40"></div>

            <div className="max-w-[1024px] relative container mx-auto px-6 py-24 text-white text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Grab, Save, Smile – Discover Coupons for Every Shop!
              </h1>
              <p className="text-lg w-8/12 mx-auto font-normal opacity-80 mb-8">
                Because every penny counts when you shop smart.
              </p>
              <div className="flex justify-center space-x-4">
                <Link
                  to="brands"
                  className="btn btn-primary text-xl text-white"
                >
                  {" "}
                  Explore Brands{" "}
                </Link>
                <Link
                  to="about"
                  className="btn btn-outline text-xl text-white"
                >
                  {" "}
                  Learn More{" "}
                </Link>
              </div>
            </div>
          </section>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative text-white w-full rounded-lg">
          <section
            className={`relative w-full bg-no-repeat bg-cover bg-[url(https://images.unsplash.com/photo-1697545806245-9795b6056141?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] min-h-[600px] flex flex-col justify-center items-center`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-700 opacity-40"></div>

            <div className="max-w-[1024px] relative container mx-auto px-6 py-24 text-white text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Find Deals, Collect Coupons, Shop Smart!
              </h1>
              <p className="text-lg w-8/12 mx-auto font-normal opacity-80 mb-8">
                Your one-stop solution for hassle-free shopping discounts.
              </p>
              <div className="flex justify-center space-x-4">
                <Link
                  to="brands"
                  className="btn btn-primary text-xl text-white"
                >
                  {" "}
                  Explore Brands{" "}
                </Link>
                <Link
                  to="about"
                  className="btn btn-outline text-xl text-white"
                >
                  {" "}
                  Learn More{" "}
                </Link>
              </div>
            </div>
          </section>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
