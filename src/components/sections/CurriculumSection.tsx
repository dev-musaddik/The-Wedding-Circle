import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Lesson {
  title: string;
  duration: string;
}

interface Module {
  id: string;
  number: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

const modules: Module[] = [
  {
    id: "module-1",
    number: "01",
    title: "The Vision Blueprint",
    description: "Define your wedding aesthetic and create a cohesive design language.",
    lessons: [
      { title: "Discovering Your Wedding Aesthetic", duration: "18 min" },
      { title: "Creating Professional Mood Boards", duration: "25 min" },
      { title: "Color Theory for Luxury Events", duration: "22 min" },
      { title: "The Art of Visual Storytelling", duration: "20 min" },
    ],
  },
  {
    id: "module-2",
    number: "02",
    title: "Venue Mastery",
    description: "Navigate venue selection, contracts, and hidden costs like a professional.",
    lessons: [
      { title: "Venue Categories & Their Secrets", duration: "30 min" },
      { title: "Contract Negotiation Strategies", duration: "28 min" },
      { title: "Site Visits: What to Look For", duration: "24 min" },
      { title: "Backup Plans & Contingencies", duration: "18 min" },
    ],
  },
  {
    id: "module-3",
    number: "03",
    title: "The Vendor Network",
    description: "Access our exclusive black book of elite, invitation-only vendors.",
    lessons: [
      { title: "Understanding the Vendor Hierarchy", duration: "22 min" },
      { title: "Approaching High-End Vendors", duration: "26 min" },
      { title: "Building Lasting Vendor Relationships", duration: "20 min" },
      { title: "The Black Book: Exclusive Contacts", duration: "35 min" },
    ],
  },
  {
    id: "module-4",
    number: "04",
    title: "Floral Architecture",
    description: "Master the art of floral design from installations to bridal bouquets.",
    lessons: [
      { title: "Floral Design Fundamentals", duration: "28 min" },
      { title: "Large-Scale Installations", duration: "32 min" },
      { title: "Seasonal & Destination Considerations", duration: "20 min" },
      { title: "Working with Elite Florists", duration: "24 min" },
    ],
  },
  {
    id: "module-5",
    number: "05",
    title: "Tablescape & Styling",
    description: "Design magazine-worthy tablescapes and reception details.",
    lessons: [
      { title: "The Elements of Luxury Tablescapes", duration: "26 min" },
      { title: "Linen, Crystal & Flatware Selection", duration: "22 min" },
      { title: "Lighting Design for Ambiance", duration: "28 min" },
      { title: "Personal Touches & Details", duration: "18 min" },
    ],
  },
  {
    id: "module-6",
    number: "06",
    title: "Dubai Destination Guide",
    description: "Everything you need for a flawless Dubai destination wedding.",
    lessons: [
      { title: "Legal Requirements & Documentation", duration: "25 min" },
      { title: "Top Dubai Venues Revealed", duration: "35 min" },
      { title: "Desert vs. Beach: Making the Choice", duration: "22 min" },
      { title: "Cultural Considerations & Etiquette", duration: "20 min" },
    ],
  },
];

const CurriculumSection = () => {
  return (
    <section className="section-padding bg-background" id="curriculum">
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="section-subheader block mb-4">Curriculum</span>
          <h2 className="section-header mb-6">What You'll Learn</h2>
          <p className="body-elegant max-w-2xl mx-auto">
            6 comprehensive modules. 24 in-depth lessons. Everything you need to design
            and execute a luxury destination wedding.
          </p>
        </motion.div>

        {/* Accordion Modules */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {modules.map((module, index) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem
                  value={module.id}
                  className="border border-border rounded-sm bg-card px-6 hover:border-champagne/30 transition-colors duration-300"
                >
                  <AccordionTrigger className="py-6 hover:no-underline group">
                    <div className="flex items-start gap-6 text-left">
                      <span className="font-display text-2xl text-champagne">
                        {module.number}
                      </span>
                      <div>
                        <h3 className="font-display text-xl text-foreground group-hover:text-champagne transition-colors duration-300">
                          {module.title}
                        </h3>
                        <p className="font-body text-sm text-muted-foreground mt-1">
                          {module.description}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="ml-14 space-y-3">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <div
                          key={lessonIndex}
                          className="flex items-center justify-between py-3 border-b border-border/50 last:border-0"
                        >
                          <div className="flex items-center gap-4">
                            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-secondary text-xs text-muted-foreground">
                              {lessonIndex + 1}
                            </span>
                            <span className="font-body text-sm text-foreground">
                              {lesson.title}
                            </span>
                          </div>
                          <span className="font-body text-xs text-muted-foreground tracking-wider">
                            {lesson.duration}
                          </span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

        {/* Total Time */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="font-body text-sm tracking-[0.15em] uppercase text-muted-foreground">
            Total Course Duration: <span className="text-champagne">9+ Hours</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CurriculumSection;