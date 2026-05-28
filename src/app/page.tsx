"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Lightbulb,
  Zap,
  PiggyBank,
  Award,
  ArrowRight,
  CheckCircle2,
  Globe,
  MessageCircle,
  Users,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Header from "@/components/Header";

const WHATSAPP_NUMBER = "5579996832119";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const services = [
    {
      title: "Desenvolvimento Web",
      description:
        "Sites institucionais, landing pages e sistemas web sob medida com tecnologias de ponta.",
      icon: <Code2 className="w-10 h-10 text-primary mb-4" />,
    },
    {
      title: "Desenvolvimento Mobile",
      description:
        "Aplicativos nativos e híbridos para iOS e Android com foco em performance e UX.",
      icon: <Smartphone className="w-10 h-10 text-primary mb-4" />,
    },
    {
      title: "Consultoria Tech",
      description:
        "Análise de infraestrutura, arquitetura de software e soluções para escalar seu negócio.",
      icon: <Lightbulb className="w-10 h-10 text-primary mb-4" />,
    },
  ];

  const differentials = [
    {
      title: "Agilidade",
      description: "Entregas rápidas utilizando metodologias ágeis em todo o ciclo de vida.",
      icon: <Zap className="w-6 h-6 text-primary" />,
    },
    {
      title: "Custo-Benefício",
      description: "Como Empresa Júnior, oferecemos preços competitivos abaixo do mercado tradicional.",
      icon: <PiggyBank className="w-6 h-6 text-primary" />,
    },
    {
      title: "Qualidade Técnica",
      description: "Apoio de professores e foco em padrões modernos da indústria de software.",
      icon: <Award className="w-6 h-6 text-primary" />,
    },
  ];

  const processSteps = [
    { step: "01", title: "Planejamento", desc: "Entendemos seu negócio e definimos escopo." },
    { step: "02", title: "Design", desc: "Criamos a interface focada na experiência do usuário." },
    { step: "03", title: "Desenvolvimento", desc: "Codificamos a solução com as melhores tecnologias." },
    { step: "04", title: "Entrega", desc: "Testes finais, deploy e suporte inicial garantidos." },
  ];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const texto = `Olá, Prime Tech!\n\nMe chamo *${form.nome}* e meu e-mail é ${form.email}.\n\n${form.mensagem}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="min-h-screen w-full bg-background text-foreground overflow-x-clip">
      <Header />
      {/* Background ambient effects */}
      <div className="fixed top-[-10%] left-[-10%] w-[55%] h-[45%] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-12%] right-[-10%] w-[55%] h-[45%] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      {/* ── Hero Section ── */}
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center min-h-[100svh] px-3 min-[390px]:px-4 sm:px-6 pt-24 min-[390px]:pt-28 sm:pt-32 pb-12 min-[390px]:pb-14 sm:pb-16 text-center overflow-x-hidden"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="max-w-5xl z-10 space-y-7 sm:space-y-8"
        >
          <motion.div variants={fadeIn} className="flex flex-col items-center gap-4 mb-6">
            <span className="inline-block glass px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium text-primary-foreground">
              Inovação ao seu alcance
            </span>
          </motion.div>

          <motion.h1
            variants={fadeIn}
            className="text-2xl min-[390px]:text-3xl min-[420px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.08] max-[359px]:leading-tight break-words"
          >
            Nós Construímos o Futuro <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
              Do Seu Negócio
            </span>
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="text-sm min-[390px]:text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-1 min-[390px]:px-2 text-left sm:text-justify"
          >
            Transformação Digital por Estudantes de TI. Soluções modernas, performáticas e sob
            medida para impulsionar a sua empresa no mundo digital.
          </motion.p>

          <motion.div
            variants={fadeIn}
            className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              variant="neon"
              size="lg"
              className="w-full sm:w-auto group"
              onClick={() => scrollToSection("contato")}
            >
              Iniciar um Projeto
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto glass border-primary/20 hover:bg-primary/10"
              onClick={() => scrollToSection("servicos")}
            >
              Nossos Serviços
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Services Section ── */}
      <section
        id="servicos"
        className="py-14 min-[390px]:py-16 sm:py-20 md:py-24 px-3 min-[390px]:px-4 sm:px-6 lg:px-8 relative z-10 bg-black/50 backdrop-blur-sm border-y border-white/5"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-14 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">O que nós fazemos</h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              Entregamos produtos digitais completos com foco em resultados reais para os nossos
              clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <Card className="h-full flex flex-col items-start hover:-translate-y-2">
                  <CardHeader>
                    {service.icon}
                    <CardTitle className="text-xl sm:text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm sm:text-base">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Differentials Section ── */}
      <section id="diferenciais" className="py-14 min-[390px]:py-16 sm:py-20 md:py-24 px-3 min-[390px]:px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              Por que escolher a <span className="text-primary neon-text">Prime Tech</span>?
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-8">
              Nossa estrutura como Empresa Júnior nos permite oferecer uma combinação única de
              inovação, custo acessível e alto comprometimento técnico apoiado pela academia.
            </p>
            <div className="space-y-6">
              {differentials.map((diff, idx) => (
                <div key={idx} className="flex gap-3 sm:gap-4 items-start">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    {diff.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg">{diff.title}</h4>
                    <p className="text-sm sm:text-base text-muted-foreground">{diff.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[260px] sm:h-[360px] lg:h-[500px] rounded-2xl border border-white/10 glass-card overflow-hidden flex items-center justify-center p-6 sm:p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-0" />
            <div className="relative z-10 text-center">
              <Code2 className="w-24 h-24 sm:w-32 sm:h-32 text-primary mx-auto mb-6 opacity-80" />
              <div className="text-xl sm:text-2xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
                {"<PrimeTech />"}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Process Section ── */}
      <section
        id="processo"
        className="py-14 min-[390px]:py-16 sm:py-20 md:py-24 px-3 min-[390px]:px-4 sm:px-6 lg:px-8 relative z-10 bg-black/50 backdrop-blur-sm border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-14 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Nosso Processo</h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              Uma metodologia estruturada do início ao fim para garantir que o seu projeto seja um
              sucesso.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {processSteps.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="relative"
              >
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary/50 to-transparent" />
                )}
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center text-xl font-bold neon-text mb-6 z-10 shadow-[0_0_15px_rgba(109,40,217,0.3)]">
                    {item.step}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Section ── */}
      <section id="contato" className="py-14 min-[390px]:py-16 sm:py-20 md:py-24 px-3 min-[390px]:px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <Card className="glass-card border-primary/30 p-3 min-[390px]:p-4 sm:p-6 lg:p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl mb-2">Pronto para inovar?</CardTitle>
              <CardDescription className="text-base sm:text-lg">
                Fale com a nossa equipe hoje mesmo e descubra como podemos ajudar a transformar sua
                ideia em realidade.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                className="mt-6 space-y-4 max-w-md w-full mx-auto text-left"
                onSubmit={handleSubmit}
              >
                <div>
                  <label htmlFor="nome" className="text-sm font-medium mb-1 block">
                    Nome
                  </label>
                  <input
                    id="nome"
                    type="text"
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium mb-1 block">
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:border-primary transition-colors"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="mensagem" className="text-sm font-medium mb-1 block">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    value={form.mensagem}
                    onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                    className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:border-primary transition-colors h-24 resize-none"
                    placeholder="Conte-nos sobre o seu projeto..."
                    required
                  />
                </div>
                <Button type="submit" variant="neon" className="w-full mt-4">
                  Enviar pelo WhatsApp
                  <CheckCircle2 className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/10 bg-black/80 py-8 min-[390px]:py-10 sm:py-12 md:py-16 px-3 min-[390px]:px-4 sm:px-6 lg:px-8 relative z-10 overflow-x-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-center">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Image
              src="/Logo principal.png"
              alt="Prime Tech Logo"
              width={160}
              height={72}
              style={{ width: 160, height: "auto" }}
              className="object-contain drop-shadow-[0_0_16px_rgba(109,40,217,0.5)] mb-3"
            />
            <p className="text-sm text-muted-foreground">
              Empresa Júnior de Tecnologia.
              <br />
              Desenvolvendo o futuro, hoje.
            </p>
          </div>

          <div className="flex justify-center items-center gap-4">
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
            >
              <Users className="w-5 h-5" />
            </a>
            {/* Site / LinkedIn */}
            <a
              href="#"
              title="Site"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
            >
              <Globe className="w-5 h-5" />
            </a>
            {/* E-mail */}
            <a
              href="mailto:contato@primetech.com"
              title="E-mail"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="flex justify-center md:justify-end items-center gap-4 text-xs sm:text-sm font-medium text-muted-foreground px-2">
            <div className="flex items-center justify-center gap-2 border border-white/10 px-3 py-1.5 rounded-full bg-white/5 text-center flex-wrap">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Movimento Empresa Júnior
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/5 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Prime Tech. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
