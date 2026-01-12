import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
  BrainCircuit,
  Waves,
  ShieldCheck,
  Activity,
  ArrowRight,
  Menu,
  X,
  FileText
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const maskImage = "/generated_images/premium_sleep_eye_mask_product_shot.png";
const auraImage = "/generated_images/abstract_aura_halo_background.png";


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/">
            <a className="text-xl tracking-tight font-semibold hover:opacity-80 transition-opacity">
              Elysius Labs
            </a>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <button onClick={() => scrollToSection('system')} className="hover:text-foreground transition-colors">System</button>
            <button onClick={() => scrollToSection('hardware')} className="hover:text-foreground transition-colors">Hardware</button>
            <button onClick={() => scrollToSection('access')} className="hover:text-foreground transition-colors">Access</button>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-white/10 p-6 flex flex-col gap-4"
            >
              <button onClick={() => scrollToSection('system')} className="text-left py-2">System</button>
              <button onClick={() => scrollToSection('hardware')} className="text-left py-2">Hardware</button>
              <button onClick={() => scrollToSection('access')} className="text-left py-2">Access</button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center pt-28 pb-16 overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src={auraImage} 
            alt="" 
            className="w-full h-full object-cover opacity-20 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/90 to-background" />
        </div>

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ opacity: heroOpacity }}
            className="z-20"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-8">
              Closed-loop neurotechnology for sleep intervention.
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-lg leading-relaxed">
              Frontal EEG sensing with real-time AI-driven intervention. Designed for clinical research, VA programs, and longitudinal sleep monitoring.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('access')}
                className="text-sm h-11 px-6 bg-white text-black hover:bg-gray-200"
              >
                Pilot Program Access
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => scrollToSection('system')}
                className="text-sm h-11 px-6 border-white/20 hover:bg-white/5"
              >
                System Architecture
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-xs text-muted-foreground border-t border-white/5 pt-6">
              <div className="flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-primary" />
                <span>Clinical-grade EEG</span>
              </div>
              <div className="flex items-center gap-2">
                <BrainCircuit className="w-3.5 h-3.5 text-primary" />
                <span>Closed-loop AI</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                <span>Research-grade platform</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Product - Bare Image Integrated Into Background */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="relative flex items-center justify-center lg:justify-end h-[350px] lg:h-[500px]"
          >
            <motion.img 
              src={maskImage} 
              alt="EEG eye mask hardware interface"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
              className="w-full max-w-[450px] lg:max-w-[600px] h-auto object-contain opacity-95"
              style={{ filter: "drop-shadow(0 0 80px rgba(139, 92, 246, 0.08))" }}
            />
          </motion.div>
        </div>
      </section>

      {/* System Architecture */}
      <section id="system" className="py-24 relative border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">System Architecture</h2>
            <p className="text-muted-foreground text-sm">
              Continuous EEG acquisition, real-time pattern detection, and adaptive sensory intervention.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
            {[
              {
                step: "01",
                title: "Frontal EEG Sensing",
                icon: Activity,
                desc: "Continuous frontal EEG acquisition throughout sleep. Clinical-grade signal fidelity engineered for longitudinal home use."
              },
              {
                step: "02",
                title: "Real-Time Pattern Detection",
                icon: BrainCircuit,
                desc: "Proprietary AI detects arousal patterns, stress-linked neural signatures, and sleep state instability in real time."
              },
              {
                step: "03",
                title: "Closed-Loop Intervention",
                icon: Waves,
                desc: "Subtle auditory cues triggered by detected patterns. Intervention timing determined by neural signal state, not schedule."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="border border-white/10 p-6 bg-white/[0.02]"
              >
                <div className="w-10 h-10 bg-white/5 flex items-center justify-center mb-5">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="font-mono text-primary/40 text-xs mb-3 tracking-wider">{item.step}</div>
                <h3 className="text-lg font-semibold mb-3 tracking-tight">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware Interface */}
      <section id="hardware" className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Neural Sensing Interface</h2>
              <p className="text-sm text-muted-foreground max-w-2xl">
                Frontal EEG wearable for nightly operation. Integrated sensor array, onboard processing, and wireless data transmission.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={maskImage} 
                  alt=""
                  className="w-full h-auto opacity-90"
                />
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-6 tracking-tight text-muted-foreground">Interface Capabilities</h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                    <span>Frontal electrode array for continuous signal acquisition</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                    <span>Integrated light occlusion for ambient control</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                    <span>Wireless transmission and onboard audio delivery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                    <span>Engineered for prolonged nightly wear</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Attributes */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Pre-emptive",
                desc: "Intervention occurs before full arousal. Preserves sleep architecture and continuity."
              },
              {
                title: "Non-invasive",
                desc: "Auditory cues calibrated for sleeping neural states. No stimulation or wake induction."
              },
              {
                title: "Signal fidelity",
                desc: "Electrode design and signal processing optimized for home sleep environments."
              },
              {
                title: "Research-grade",
                desc: "System architecture designed with clinical validation and longitudinal research in mind."
              }
            ].map((card, i) => (
              <div key={i} className="p-6 border border-white/5 bg-white/[0.01]">
                <h3 className="text-base font-semibold mb-3 tracking-tight">{card.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilot Access Section */}
      <section id="access" className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Pilot Program Access</h2>
              <p className="text-sm text-muted-foreground mb-10 leading-relaxed">
                Accepting pilot inquiries from VA programs, clinical research groups, and academic institutions evaluating closed-loop neurotechnology for sleep and trauma-related conditions.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-white/5 flex items-center justify-center shrink-0">
                    <FileText className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-1">Technical Documentation</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">System specifications, signal processing architecture, and safety constraints provided during pilot evaluation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-white/5 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-1">IRB & Regulatory Support</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">Technical documentation and engineering support for IRB submissions and regulatory review.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-white/10 p-8 flex flex-col items-center justify-center text-center min-h-[350px] bg-white/[0.01]">
              <div className="space-y-6">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center mx-auto">
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 tracking-tight">Schedule Consultation</h3>
                  <p className="text-xs text-muted-foreground mb-6">
                    30-minute technical review and pilot program discussion.
                  </p>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-black hover:bg-gray-200 px-6 h-11 text-sm"
                >
                  <a
                    href="https://calendly.com/christyptlam459/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Call
                    <ArrowRight className="w-3.5 h-3.5 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/5 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <div className="text-lg font-semibold mb-3 tracking-tight">Elysius Labs</div>
            <p className="text-xs text-muted-foreground max-w-xs">
              Closed-loop neurotechnology platform for sleep intervention.
              <br />San Francisco, CA
            </p>
          </div>
          
          <div className="mt-12 pt-6 border-t border-white/5 flex justify-center items-center text-xs text-muted-foreground">
            <div>© 2025 Elysius Labs. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
