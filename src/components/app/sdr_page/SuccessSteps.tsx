import lighting from "@/assets/lighting.svg";
import graph from "@/assets/graph.svg";
import mail from "@/assets/mail.svg";
import SuccessCard from "../shared/SuccessCard";

const successSteps = [
  {
    id: 1,
    icon: lighting,
    title: "Avoid Spam, Engage at Scale",
    bgColor: "#EDE6C4",
    shortDetails: `Genie's targeting feature ensures emails land where they're most effective-your prospects' inboxes.`,
  },
  {
    id: 2,
    icon: graph,
    title: "Hyper-Personalize Every Interaction ",
    bgColor: "#CBCFE6",
    shortDetails: `Genie's targeting feature ensures emails land where they're most effective-your prospects' inboxes.`,
  },
  {
    id: 3,
    icon: mail,
    title: "Spot Your Hottest Leads",
    bgColor: "#CBE6E6",
    shortDetails: `Genie's engagement tracking highlights the most interested prospects, so your team can prioritize leads ready to convert.`,
  },
  {
    id: 4,
    icon: lighting,
    title: "Gather Strategic Insights Instantly",
    bgColor: "#E7EBC6",
    shortDetails: `Genie provides a one-page summary for each lead and account, giving your team a quick, strategic snapshot before meetings.`,
  },
  {
    id: 5,
    icon: lighting,
    title: "Book Meetings Effortlessly",
    bgColor: "#EFCFC2",
    shortDetails: `With seamless calendar integration, Genie schedules appointments automatically, aligning perfectly with your availability.`,
  },
];

function SuccessSteps() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
      {successSteps.map((step) => (
        <SuccessCard
          bgColor={step.bgColor}
          title={step.title}
          shortDetails={step.shortDetails}
          icon={step.icon}
          className={step.id > 3 ? "col-span-3" : "col-span-2"}
        />
      ))}
    </div>
  );
}

export default SuccessSteps;