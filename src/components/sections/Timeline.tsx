import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import TimelineItem from "../ui/TimelineItem";
import { timelineEntries } from "../../data/timeline";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Timeline() {
  return (
    <section id="experience" className="section-alt" style={{ padding: "6rem 0" }}>
      <div style={{ maxWidth: "64rem", margin: "0 auto", padding: "0 1.5rem" }}>
        <SectionHeader label="Experience & Education" number="04" />

        <div style={{ maxWidth: "42rem" }}>
          {timelineEntries.map((entry, i) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.09, ease }}
            >
              <TimelineItem
                entry={entry}
                isLast={i === timelineEntries.length - 1}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
