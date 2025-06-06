import { personalInfo } from "@/lib/data";
import { Mail, MapPin, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container max-w-4xl mx-auto px-6 md:px-4 relative z-10">

        <MotionWrapper>
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm backdrop-filter p-4 rounded-lg border border-purple-500/20 dark:border-purple-500/10 shadow-sm">
            <p className="text-muted-foreground pr-4 py-2 mb-4 relative">
              <span className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
              Dan has experience with the following types of technologies: all aspects of polymer chemistry; organic compounds and synthesis; lubrication, anti-wear, and extreme-pressure additives; diabetic treatments using an implantable device(s), multi-layer composite materials; fashion apparel; cementitious compositions; polymerization methods; green recycling technologies and renewable energies; paper science; aerospace (high altitude airships); photo-voltaic and thermocouple power generation; flame retardants; automotive-tire constructions and methods; pharmaceuticals; magnetic resonance imaging (MRI); software and computer-readable algorithms; thermal-insulation materials; heating and thermal radiation; automated teller machines (ATM); materials science; petroleum-related storage and cleaning; commercial and residential building materials; roofing devices and coverings; sealant-delivery devices and methods; packaging materials; shipping materials and logistics; carwash systems and methods; lidar, radar, and sonar visibility devices; electro-spinning; automotive design and engineering; and mechanical devices and methods.
            </p>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
