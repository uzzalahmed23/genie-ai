import { WhyChooseProp } from "@/types";
import WhyChoose from "@/components/app/shared/why-chose";
import sonyasImg from "@/assets/sonya.webp";

const whyChoose: WhyChooseProp = {
  title: "Why Choose Sonya?",
  details: `Genie handles your prospecting, outreach, and lead engagement so your sales team can focus on closing deals. It seamlessly automates your sales processes, identifies hot leads, and provides hyper-personalized outreach at a scale humans can't achieve.`,
  image: sonyasImg,
  features: [
    {
      id: 1,
      featureData: "24/7 Operation: Reach leads anytime, without delays.",
    },
    {
      id: 2,
      featureData: "Cost Efficiency: Save on SDR hiring and training costs.",
    },
    {
      id: 3,
      featureData:
        "Consistent Engagement: No fatigue, maximizing outreach volume and quality.",
    },
  ],
};

const WhyChooseSonya: React.FC = () => {
  return (
    <section className="section_gap bg-[#E1E9FE]">
      <div className="container">
        <WhyChoose whyChoose={whyChoose} />
      </div>
    </section>
  );
};

export default WhyChooseSonya;
