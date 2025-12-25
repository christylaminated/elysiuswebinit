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

import headbandImage from "@assets/generated_images/sleek_eeg_headband_product_shot.png";
import maskImage from "@assets/generated_images/premium_sleep_eye_mask_product_shot.png";
import auraImage from "@assets/generated_images/abstract_aura_halo_background.png";


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.95]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/">
            <a className="font-serif text-2xl tracking-tight font-medium hover:opacity-80 transition-opacity">
              Elysius Labs
            </a>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <button onClick={() => scrollToSection('technology')} className="hover:text-foreground transition-colors">Technology</button>
            <button onClick={() => scrollToSection('products')} className="hover:text-foreground transition-colors">Products</button>
            <Button 
              onClick={() => scrollToSection('pilot-access')}
              className="rounded-full px-6 bg-white text-black hover:bg-gray-200 border-none"
            >
              Pilot Access
            </Button>
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
              className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-white/10 p-6 flex flex-col gap-6 z-50 shadow-2xl"
            >
              <button onClick={() => scrollToSection('technology')} className="text-left py-2">Technology</button>
              <button onClick={() => scrollToSection('products')} className="text-left py-2">Products</button>
              <Button onClick={() => scrollToSection('pilot-access')} className="w-full rounded-full bg-white text-black">Pilot Access</Button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center pt-28 pb-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <img 
            src={auraImage} 
            alt="Background Aura" 
            className="w-full h-full object-cover opacity-30 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/90 to-background" />
        </div>

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ opacity: heroOpacity, scale: heroScale }}
            className="z-20"
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-medium leading-[1.1] mb-8 text-balance">
              Real-time neurotechnology for restorative sleep.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg font-light leading-relaxed">
              Elysius Labs monitors brain activity during sleep and delivers gentle, closed-loop sensory guidance to help stabilize disrupted sleep states without waking the user.
            </p>
            
            <div className="flex flex-col gap-8 mb-16 max-w-md">
              <div className="flex flex-col gap-2">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('pilot-access')}
                  className="rounded-full text-base h-12 px-8 bg-white text-black hover:bg-gray-200 border-none w-full md:w-auto"
                >
                  Pilot Access
                </Button>
                <span className="text-xs text-muted-foreground ml-2">For VA programs, research collaborators, and clinical partners.</span>
              </div>
              
              <div className="flex flex-col gap-2">
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => scrollToSection('technology')}
                  className="rounded-full text-base h-12 px-8 border-white/20 hover:bg-white/5 w-full md:w-auto"
                >
                  View System Overview
                </Button>
                <span className="text-xs text-muted-foreground ml-2">Closed-loop sensing to detection to guidance.</span>
              </div>
            </div>

            {/* Trust Strip */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm text-muted-foreground border-t border-white/10 pt-8 overflow-x-auto md:overflow-visible pb-4 md:pb-0 scrollbar-none">
              <div className="flex items-center gap-2 whitespace-nowrap">
                <Activity className="w-4 h-4 text-primary shrink-0" />
                <span>Real-time EEG sensing</span>
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <BrainCircuit className="w-4 h-4 text-primary shrink-0" />
                <span>Closed-loop intervention</span>
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                <span>Built with clinical credibility</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Visuals */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[400px] lg:h-[600px] mt-10 lg:mt-0"
          >
            {/* Layered Products */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="absolute top-0 right-0 lg:right-10 w-3/4 lg:w-[400px] z-20"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl glow-purple border border-white/10">
                <img src={headbandImage} alt="Elysius Headband" className="object-cover w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 9, delay: 1, ease: "easeInOut" }}
              className="absolute bottom-10 lg:bottom-20 left-0 w-3/4 lg:w-[380px] z-10"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img src={maskImage} alt="Elysius Eye Mask" className="object-cover w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How it Works - The Loop */}
      <section id="technology" className="py-32 relative border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-serif mb-6">The Restorative Loop</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A precise, closed-loop biofeedback system designed for active sleep protection.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden md:block" />

            {[
              {
                step: "01",
                title: "Sense",
                icon: Activity,
                desc: "Clinical-grade EEG sensors capture brain activity during sleep with high temporal resolution."
              },
              {
                step: "02",
                title: "Detect",
                icon: BrainCircuit,
                desc: "The detection engine identifies markers of hyperarousal and nightmare-like disruption as they emerge."
              },
              {
                step: "03",
                title: "Guide",
                icon: Waves,
                desc: "Subtle auditory, light, or haptic cues gently guide the brain back toward stable, restorative states."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 bg-background border border-white/10 p-8 rounded-2xl hover:border-primary/30 transition-colors group"
              >
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="font-mono text-primary/50 text-sm mb-2">{item.step}</div>
                <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-32 bg-white/2">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-serif mb-6">Configurable System Interfaces</h2>
            <p className="text-xl text-muted-foreground max-w-xl">
              One closed-loop neurotechnology system, delivered through patient-preferred interfaces.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="glass-card rounded-3xl overflow-hidden group flex flex-col"
            >
              <div className="aspect-[16/9] overflow-hidden relative">
                <img src={headbandImage} alt="Headband" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80" />
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-3xl font-serif text-white mb-2">EEG Headband</h3>
                  <p className="text-white/70 font-mono text-sm uppercase tracking-wider">Neural Sensing Interface</p>
                </div>
              </div>
              <div className="p-8 flex-1">
                <p className="text-sm font-medium text-white mb-6">Primary signal acquisition for real-time sleep state detection.</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span className="text-muted-foreground">High-fidelity signal quality</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span className="text-muted-foreground">Low-latency wireless telemetry</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span className="text-muted-foreground">Overnight ergonomics for patient compliance</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="glass-card rounded-3xl overflow-hidden group flex flex-col"
            >
              <div className="aspect-[16/9] overflow-hidden relative">
                <img src={maskImage} alt="Mask" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80" />
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-3xl font-serif text-white mb-2">Guidance Mask</h3>
                  <p className="text-white/70 font-mono text-sm uppercase tracking-wider">Guidance Interface Option</p>
                </div>
              </div>
              <div className="p-8 flex-1">
                <p className="text-sm font-medium text-white mb-6">A configurable modality for closed-loop sensory guidance.</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span className="text-muted-foreground">Subtle sensory cues</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span className="text-muted-foreground">Minimal intrusion design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span className="text-muted-foreground">Selected by comfort and clinical context</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Elysius */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Pre-emptive",
                desc: "Intervention occurs before full awakening to preserve natural sleep cycles."
              },
              {
                title: "Non-Invasive",
                desc: "No shocks or abrupt stimulation. Only subtle cues designed for the sleeping brain."
              },
              {
                title: "Signal Integrity",
                desc: "Engineered for reliable EEG capture in high-noise sleep environments."
              },
              {
                title: "Clinical Roots",
                desc: "Informed by neuroscience research and developed with a clinical pathway in mind."
              }
            ].map((card, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-serif mb-4 text-white">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Pilot Access Section */}
      <section id="pilot-access" className="py-32 border-t border-white/5 bg-white/2">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Request Pilot Access</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We are currently accepting inquiries from VA programs, clinical research partners, and academic institutions for our upcoming pilot studies.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Documentation</h4>
                    <p className="text-sm text-muted-foreground">Full technical specifications available upon approval.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">IRB Support</h4>
                    <p className="text-sm text-muted-foreground">We provide support for institutional review board submissions.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[400px]">
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <ArrowRight className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-2">Ready to Get Started?</h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    Schedule a call to discuss pilot access opportunities.
                  </p>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8"
                >
                  <a
                    href="https://calendly.com/christyptlam459/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a Call
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground">
                  30-minute discovery call
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/10 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <div>
              <div className="font-serif text-2xl mb-4">Elysius Labs</div>
              <p className="text-muted-foreground text-sm max-w-xs">
                Next-generation neurotechnology for the modern mind.
                <br />Based in San Francisco.
              </p>
            </div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-white/10 flex justify-center items-center text-xs text-muted-foreground">
            <div>© 2025 Elysius Labs. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
