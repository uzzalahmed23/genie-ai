import {
  aiPhonePageComparisonData,
  PhoneRepresentativeSalesDrive,
} from "@/data";
import franksImg from "@/assets/frank.webp";
import Hero from "@/components/app/shared/Hero";
import Layout from "@/components/app/layout";
import SalesDrive from "@/components/app/shared/sales-drive";
import { BrandsMarquee } from "@/components/app/shared/brands";
import SuccessSteps from "@/components/app/sdr/success-steps";
import WhyChooseFrank from "@/components/app/sdr/why-chose-frank";

import AiPageVideo from "@/assets/videos/ai-page-video.mp4";
import Testimonial from "@/components/app/shared/testimonial";
import FAQ from "@/components/app/shared/faq";
import GetStartedVideo from "@/components/app/shared/get-started-video";
import FrankGetStartedVideoThumb from "@/assets/frank.webp";
import FeatureHighlight from "@/components/app/shared/feature-highlight";
import RealWorldApp from "@/components/app/phone-representitive/real-world-app";
import ComparisonTable from "@/components/app/shared/comparison-table";

function AIPhoneRepresentativePage() {
  return (
    <Layout>
      <section className="bg-black relative z-[1] overflow-hidden after:inset-0 after:absolute after:z-[-1] after:bg-[linear-gradient(270deg,rgba(0,0,0,0.0)_0%,rgba(0,0,0,0.90)_100%)]">
        <div className="container pb-10 md:pb-16 pt-16 lg:pt-28 ">
          <div className="py-10 md:pb-14 lg:pb-56 ">
            <Hero
              heroImage={franksImg}
              title={"Frank - AI Phone <br/> Representative"}
              titleClass={"xl:text-[80px]"}
              shortDesc={
                "Put Your Sales on Autopilot. Boost Engagement, Reach More Leads, and Close Deals- All with Genie."
              }
            />
          </div>
          <BrandsMarquee />
        </div>
        <video
          id="heroVideo"
          className="z-[-2] max-sm:hidden absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          autoPlay
          loop
          muted
        >
          <source src={AiPageVideo} type="video/mp4" />
        </video>
      </section>

      <FeatureHighlight title="Experience the power of Frank, your 24/7 <br/> Al Sales Development Representative, at a fraction of <br/> the cost of a human SDR." />

      <SuccessSteps />

      <GetStartedVideo
        videoWrapClass="[background-position:center_10%]"
        className="pt-0 md:pt-0 lg:pt-0"
        shortDesc="Frank combines Al-powered responsiveness, personalized interaction, and real-time adaptability to keep customers engaged, even as you grow."
        title="Get Started With Frank Today."
        videoUrl="https://www.youtube.com/embed/Oa0ZHfcalCM?si=u3DXwGf1_8N16I8I?autoplay=1"
        thumbnail={FrankGetStartedVideoThumb}
      />

      <WhyChooseFrank />

      <SalesDrive salesDrive={PhoneRepresentativeSalesDrive} />

      <RealWorldApp />

      <ComparisonTable
        className="md:pt-0 lg:pt-0"
        data={aiPhonePageComparisonData}
      />

      <Testimonial />

      <FAQ />
    </Layout>
  );
}

export default AIPhoneRepresentativePage;
