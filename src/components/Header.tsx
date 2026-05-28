"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageSquareCode } from "lucide-react";
import { Button } from "@/components/ui/button";

// Nav links configuration
const navLinks = [
  { id: "hero", label: "Início" },
  { id: "servicos", label: "Serviços" },
  { id: "diferenciais", label: "Diferenciais" },
  { id: "processo", label: "Processo" },
  { id: "contato", label: "Contato" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const lastScrollYRef = useRef(0);

  // Handle scroll styling, hide/show behavior, and active section detection.
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const previousScrollY = lastScrollYRef.current;

      setScrolled(currentScrollY > 20);

      if (!isOpen) {
        if (currentScrollY < 40) {
          setIsHidden(false);
        } else if (currentScrollY > previousScrollY + 6 && currentScrollY > 120) {
          setIsHidden(true);
        } else if (currentScrollY < previousScrollY - 6) {
          setIsHidden(false);
        }
      }

      lastScrollYRef.current = currentScrollY;

      const scrollPosition = currentScrollY + 140;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          isHidden && !isOpen ? "-translate-y-full" : "translate-y-0"
        } ${
          scrolled
            ? "bg-[#050505]/85 backdrop-blur-md border-b border-white/10 py-2.5 sm:py-3 shadow-[0_4px_30px_rgba(0,0,0,0.35)]"
            : "bg-transparent py-3 sm:py-5 border-b border-transparent"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-3 min-[390px]:px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between gap-2 min-[390px]:gap-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`flex items-center gap-2 shrink-0 transition-all duration-200 cursor-pointer ${
              isOpen ? "max-lg:hidden" : ""
            }`}
            onClick={() => scrollToSection("hero")}
          >
            <Image
              src="/Logo principal.png"
              alt="Prime Tech Logo"
              width={140}
              height={40}
              style={{ width: 124, height: "auto" }}
              sizes="(max-width: 640px) 132px, 140px"
              className="object-contain drop-shadow-[0_0_12px_rgba(109,40,217,0.4)] min-[390px]:w-[132px]"
              priority
            />
          </motion.div>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link, idx) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                onClick={() => scrollToSection(link.id)}
                className={`relative text-sm xl:text-base font-medium transition-colors hover:text-primary py-1 cursor-pointer ${
                  activeSection === link.id ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-purple-400 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-1.5 min-[390px]:p-2 rounded-lg hover:bg-white/5 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X className="w-5 h-5 min-[390px]:w-6 min-[390px]:h-6" /> : <Menu className="w-5 h-5 min-[390px]:w-6 min-[390px]:h-6" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#050505] pt-20 min-[390px]:pt-24 px-4 min-[390px]:px-6 sm:px-10 lg:hidden flex flex-col justify-between pb-6 min-[390px]:pb-8 overflow-y-auto"
            id="mobile-navigation"
          >
            <div className="absolute top-[10%] right-[10%] w-[50%] h-[30%] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />

            <div className="flex flex-col gap-4 min-[390px]:gap-5 mt-3 min-[390px]:mt-4">
              {navLinks.map((link, idx) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-lg min-[390px]:text-xl sm:text-2xl font-semibold text-left py-2 border-b border-white/5 flex items-center justify-between cursor-pointer ${
                    activeSection === link.id
                      ? "text-primary neon-text"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span>{link.label}</span>
                  {activeSection === link.id && (
                    <span className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(109,40,217,1)]" />
                  )}
                </motion.button>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4 mt-8"
            >
              <Button
                variant="neon"
                size="lg"
                onClick={() => scrollToSection("contato")}
                className="w-full flex items-center justify-center gap-2 text-sm sm:text-base font-bold py-4 min-[390px]:py-5 sm:py-6 cursor-pointer"
              >
                Fale Conosco no WhatsApp
                <MessageSquareCode className="w-5 h-5" />
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Prime Tech &copy; {new Date().getFullYear()}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
