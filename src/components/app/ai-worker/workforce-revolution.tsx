import SectionTitle from "@/components/app/shared/title";
import { workforceRevolutionData } from "@/data";
import { fadeInAnimationSlowVarients } from "@/lib/utils";
import { motion } from "framer-motion";
function WorkforceRevolution() {
  return (
    <section className="section_gap">
      <div className="container">
        <div className="max-w-screen-md mx-auto mb-10 md:mb-20">
          <SectionTitle weight={600}>
            Why Genie is Leading the Al Workforce Revolution
          </SectionTitle>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {workforceRevolutionData.map((data, index) => (
            <motion.div
              key={data.id}
              className="space-y-2 md:space-y-4 lg:space-y-8"
              variants={fadeInAnimationSlowVarients}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              <h4 className="text-2xl text-[#010609] font-semibold">
                {data.title}
              </h4>
              <p className="text-[#010609B2]/70 text-xl">{data.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default WorkforceRevolution;
