import Layout from "@/components/app/layout";
import { BrandsMarquee } from "@/components/app/shared/brands";
import Agent from "@/components/app/home/agent";
import Statistics from "@/components/app/home/statistics";
import FingerPrint from "@/components/app/home/finger-print";
import FAQ from "@/components/app/shared/faq";
import Testimonial from "@/components/app/shared/testimonial";
import Hero from "@/components/app/shared/Hero";
import Inteligence from "@/components/app/home/Inteligence";
import ComparisonTable from "@/components/app/shared/comparison-table";
import { homePageComparisonData } from "@/data";
import HeroVideo from "@/assets/videos/hero-video.mp4";
// import SmoothScroll from "@/components/app/animation/smooth-scrool";

function HomePage() {
  return (
    <Layout>
      <section className="bg-black relative z-[1] overflow-hidden after:inset-0 after:absolute after:z-[-1] after:bg-[linear-gradient(270deg,rgba(0,0,0,0.0)_0%,rgba(0,0,0,0.90)_100%)]">
        <div className="container pb-10 md:pb-16 pt-16 lg:pt-28 ">
          <div className="py-10 md:pb-14 lg:pb-56 ">
            <Hero
              title={
                "More Meetings, Zero Stress.<br/> AI-Powered Conversations <br/> That Convert."
              }
              shortDesc={
                "Using Al-Driven Operations to Accelerate Business Growth"
              }
            />
          </div>
          <BrandsMarquee />
        </div>

        <video
          id="heroVideo"
          className="max-sm:hidden z-[-2] absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          autoPlay
          loop
          muted
        >
          <source src={HeroVideo} type="video/mp4" />
        </video>
      </section>

      <Agent />

      <Inteligence />

      <Statistics />

      <FingerPrint />

      <ComparisonTable data={homePageComparisonData} />

      <Testimonial />

      <FAQ />
    </Layout>
  );
}

export default HomePage;
