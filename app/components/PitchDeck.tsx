"use client";
import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Users,
  Zap,
  Search,
  FileText,
  Sparkles,
  DollarSign,
  TrendingUp,
  Target,
  Rocket,
  Heart,
} from "lucide-react";

const PitchDeck: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    { id: "title", title: "Title" },
    { id: "problem", title: "Problem" },
    { id: "solution", title: "Solution" },
    { id: "demo", title: "Demo" },
    { id: "technology", title: "Technology" },
    { id: "business", title: "Business Model" },
    { id: "market", title: "Market" },
    { id: "traction", title: "Traction" },
    { id: "competition", title: "Competition" },
    { id: "roadmap", title: "Roadmap" },
    { id: "team", title: "Team" },
    { id: "ask", title: "The Ask" },
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((p) => (p + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((p) => (p - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (i: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(i);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isAnimating]);

  const SlideWrapper: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => (
    <div
      className={`min-h-screen flex flex-col justify-center items-center p-8 transition-all duration-500 ${
        isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
      } bg-white text-black`}
    >
      <div className="max-w-6xl w-full text-center">{children}</div>
    </div>
  );

  const TitleSlide = () => (
    <SlideWrapper>
      <div className="space-y-8">
        <h1 className="text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Voloo Portfolio
        </h1>
        <p className="text-2xl text-gray-700">AI-Powered Portfolio Builder</p>
        <p className="text-xl text-gray-600 font-medium">
          &quot;Create Professional Portfolios in Minutes with AI&quot;
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-gray-100 rounded-2xl p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Team Lead
            </h3>
            <p className="text-gray-700">
              Full-stack Developer & AI Integration
            </p>
          </div>
          <div className="bg-gray-100 rounded-2xl p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              STU University
            </h3>
            <p className="text-gray-700">Student Innovation Project</p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );

  const ProblemSlide = () => (
    <SlideWrapper>
      <div className="space-y-8">
        <h2 className="text-5xl font-bold text-black">
          Portfolio Creation is <span className="text-red-500">Broken</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: <FileText className="w-8 h-8 text-red-500" />,
              title: "Technical Barriers",
              desc: "Coding skills required",
            },
            {
              icon: <Users className="w-8 h-8 text-red-500" />,
              title: "Time Consuming",
              desc: "Days/weeks to build professionally",
            },
            {
              icon: <Target className="w-8 h-8 text-red-500" />,
              title: "Poor Optimization",
              desc: "No guidance on what works",
            },
            {
              icon: <Search className="w-8 h-8 text-red-500" />,
              title: "Discovery Challenge",
              desc: "Hard for employers to find talent",
            },
          ].map((it, i) => (
            <div
              key={i}
              className="bg-gray-100 rounded-2xl p-6 border border-gray-200"
            >
              <div className="mb-4">{it.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {it.title}
              </h3>
              <p className="text-gray-700">{it.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-red-100 rounded-2xl p-8 border border-red-200">
          <p className="text-2xl font-bold text-red-600">
            73% of professionals struggle with portfolio creation
          </p>
        </div>
      </div>
    </SlideWrapper>
  );

  const SolutionSlide = () => (
    <SlideWrapper>
      <div className="space-y-8">
        <h2 className="text-5xl font-bold text-black">
          AI-Powered Portfolio <span className="text-green-500">Solution</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: <Sparkles className="w-8 h-8 text-green-500" />,
              title: "Lisa AI",
              desc: "Optimization & advice (Gemini)",
              bg: "bg-green-50",
              border: "border-green-200",
            },
            {
              icon: <Search className="w-8 h-8 text-blue-500" />,
              title: "Voloo AI",
              desc: "Semantic search",
              bg: "bg-blue-50",
              border: "border-blue-200",
            },
            {
              icon: <FileText className="w-8 h-8 text-teal-500" />,
              title: "PDF Scanner",
              desc: "Auto portfolio gen",
              bg: "bg-teal-50",
              border: "border-teal-200",
            },
            {
              icon: <Zap className="w-8 h-8 text-orange-500" />,
              title: "No-Code Templates",
              desc: "Designs in minutes",
              bg: "bg-orange-50",
              border: "border-orange-200",
            },
          ].map((it, i) => (
            <div
              key={i}
              className={`${it.bg} rounded-2xl p-6 border ${it.border}`}
            >
              <div className="mb-4">{it.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {it.title}
              </h3>
              <p className="text-gray-700">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );

  const DemoSlide = () => (
    <SlideWrapper>
      <div className="space-y-8">
        <h2 className="text-5xl font-bold text-black">
          We&#39;re <span className="text-green-500">Live</span> in Production
        </h2>

        <div className="bg-gray-100 rounded-2xl p-8 border border-gray-200">
          <div className="bg-white rounded-lg p-6 mb-6 border border-gray-200">
            <div className="flex items-center mb-4 text-gray-600">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
              <span>volooportfolio.com</span>
            </div>
            <div className="text-left space-y-2">
              <p className="text-blue-600">🤖 AI Chat Interface</p>
              <p className="text-green-600">📄 Portfolio Templates</p>
              <p className="text-purple-600">🔍 Search Functionality</p>
              <p className="text-yellow-600">⚡ Real-time Generation</p>
            </div>
          </div>

          <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto flex items-center justify-center mb-4">
            <span className="text-gray-600 font-bold">QR Code</span>
          </div>
          <p className="text-gray-700">Scan to visit live site</p>
        </div>
      </div>
    </SlideWrapper>
  );

  const TechnologySlide = () => (
    <SlideWrapper>
      <div className="space-y-8">
        <h2 className="text-5xl font-bold text-black">
          Dual AI System <span className="text-blue-500">Architecture</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200">
            <h3 className="text-2xl font-semibold text-purple-700 mb-2">
              Lisa AI
            </h3>
            <p className="text-gray-700">Gemini integration for optimization</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">
              Voloo AI
            </h3>
            <p className="text-gray-700">
              Semantic search with cosine similarity
            </p>
          </div>
        </div>

        <div className="bg-gray-100 rounded-2xl p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Next.js", "Convex", "Clerk", "Xnova transformers"].map(
              (t, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-gray-200 rounded-full text-gray-800 border border-gray-300"
                >
                  {t}
                </span>
              )
            )}
          </div>
        </div>

        <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
          <p className="text-2xl font-bold text-green-600">
            Built in 25 days from zero to production
          </p>
        </div>
      </div>
    </SlideWrapper>
  );

  const BusinessSlide = () => (
    <SlideWrapper>
      <div className="space-y-8">
        <h2 className="text-5xl font-bold text-black">
          <span className="text-green-500">Freemium</span> SaaS Model
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 rounded-2xl p-6 border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Free Tier
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Basic portfolio building</li>
              <li>1 template</li>
              <li>Community support</li>
            </ul>
          </div>
          <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">
              Premium Tier
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Advanced AI portfolio building</li>
              <li>PDF resume scanning</li>
              <li>Premium templates</li>
              <li>Priority support</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200 text-center">
          <DollarSign className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
          <p className="text-2xl font-bold text-yellow-700">
            Target: $50K ARR by finals
          </p>
        </div>
      </div>
    </SlideWrapper>
  );

  const MarketSlide = () => (
    <SlideWrapper>
      <div className="space-y-8">
        <h2 className="text-5xl font-bold text-black">
          Massive TAM in{" "}
          <span className="text-purple-500">Creator Economy</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">
              Target Users
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Students & recent graduates</li>
              <li>Freelancers & consultants</li>
              <li>Job seekers</li>
              <li>Employers (recruiters)</li>
            </ul>
          </div>
          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200 text-center">
            <TrendingUp className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">
              Market Size
            </h3>
            <p className="text-gray-700">
              Portfolio Creation Market: Multi-billion dollar opportunity
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );

  const TractionSlide = () => (
    <SlideWrapper>
      <div className="space-y-8">
        <h2 className="text-5xl font-bold text-black">
          Early but <span className="text-green-500">Promising</span> Traction
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { m: "Users", v: "500+", c: "text-blue-600" },
            { m: "Portfolios", v: "1,200+", c: "text-green-600" },
            { m: "Avg. Time", v: "5 min", c: "text-purple-600" },
            { m: "Satisfaction", v: "4.8/5", c: "text-yellow-600" },
            { m: "Weekly Growth", v: "25%", c: "text-pink-600" },
            { m: "Templates", v: "15+", c: "text-teal-600" },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-gray-100 rounded-2xl p-6 border border-gray-200"
            >
              <div className={`text-4xl font-bold mb-2 ${s.c}`}>{s.v}</div>
              <div className="text-gray-700">{s.m}</div>
            </div>
          ))}
        </div>

        <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
          <p className="text-xl text-green-600">
            &quot;Game-changing tool for students!&quot; — Beta user
          </p>
        </div>
      </div>
    </SlideWrapper>
  );

  const CompetitionSlide = () => (
    <SlideWrapper>
      <div className="space-y-8">
        <h2 className="text-5xl font-bold text-black">
          We&#39;re Different: <span className="text-blue-500">AI-First</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
            <h3 className="text-xl font-semibold text-red-600 mb-2">
              Traditional
            </h3>
            <p className="text-gray-700">Wix, Squarespace</p>
            <p className="text-sm text-gray-500">No AI guidance</p>
          </div>
          <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
            <h3 className="text-xl font-semibold text-yellow-600 mb-2">
              Developer
            </h3>
            <p className="text-gray-700">GitHub Pages</p>
            <p className="text-sm text-gray-500">Technical barriers</p>
          </div>
          <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
            <h3 className="text-xl font-semibold text-green-600 mb-2">
              Voloo Portfolio
            </h3>
            <p className="text-gray-700">AI-powered, instant</p>
            <p className="text-sm text-gray-500">Student-focused</p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200 text-center">
          <Sparkles className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <p className="text-2xl font-bold text-blue-700">
            Unique: Dual AI for creation + discovery
          </p>
        </div>
      </div>
    </SlideWrapper>
  );

  const RoadmapSlide = () => (
    <SlideWrapper>
      <div className="space-y-8">
        <h2 className="text-5xl font-bold text-black">
          Scaling to <span className="text-blue-500">Finals</span> & Beyond
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              Next 3 Months
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Premium features</li>
              <li>University partnerships</li>
              <li>1,000+ active users</li>
              <li>Mobile beta</li>
            </ul>
          </div>
          <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">
              By Finals
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Multiple templates</li>
              <li>Team collaboration</li>
              <li>Revenue stream</li>
              <li>Enterprise pilots</li>
            </ul>
          </div>
        </div>

        <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200 text-center">
          <Rocket className="w-12 h-12 text-purple-600 mx-auto mb-4" />
          <p className="text-2xl font-bold text-purple-700">
            Long-term: Global AI portfolio platform
          </p>
        </div>
      </div>
    </SlideWrapper>
  );

  const TeamSlide = () => (
    <SlideWrapper>
      <div className="space-y-8">
        <h2 className="text-5xl font-bold text-black">
          Execution-Focused <span className="text-purple-500">Team</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
            <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Users className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">
              Lead Dev
            </h3>
            <p className="text-gray-700">Full-stack & AI specialist</p>
          </div>
          <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
            <div className="w-24 h-24 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Heart className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="text-2xl font-semibold text-green-700 mb-2">
              Co-Founder
            </h3>
            <p className="text-gray-700">Product & UX lead</p>
          </div>
        </div>

        <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
          <p className="text-2xl font-bold text-yellow-700">
            Solo-built platform in 25 days
          </p>
        </div>
      </div>
    </SlideWrapper>
  );

  const AskSlide = () => (
    <SlideWrapper>
      <div className="space-y-8">
        <h2 className="text-5xl font-bold text-black mt-[70px]">
          Join Us in{" "}
          <span className="text-gradient bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent">
            Revolutionizing
          </span>{" "}
          Portfolio Creation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200 text-center">
            <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">
              Immediate Goal
            </h3>
            <p className="text-gray-700">Win Regional Finals</p>
          </div>
          <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200 text-center">
            <Rocket className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-purple-700 mb-2">
              Long-term Vision
            </h3>
            <p className="text-gray-700">Global AI portfolio platform</p>
          </div>
        </div>

        <div className="bg-gray-100 rounded-2xl p-6 border border-gray-200">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            What We Need
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Mentorship",
              "Network Access",
              "Funding Guidance",
              "Partnerships",
            ].map((n, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-gray-200 rounded-full text-gray-800 border border-gray-300"
              >
                {n}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-green-50 rounded-2xl p-8 border border-green-200 text-center">
          <Sparkles className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <p className="text-3xl font-bold text-green-700">
            Democratize portfolio creation through AI
          </p>
        </div>
      </div>
    </SlideWrapper>
  );

  const renderCurrent = () => {
    switch (currentSlide) {
      case 0:
        return <TitleSlide />;
      case 1:
        return <ProblemSlide />;
      case 2:
        return <SolutionSlide />;
      case 3:
        return <DemoSlide />;
      case 4:
        return <TechnologySlide />;
      case 5:
        return <BusinessSlide />;
      case 6:
        return <MarketSlide />;
      case 7:
        return <TractionSlide />;
      case 8:
        return <CompetitionSlide />;
      case 9:
        return <RoadmapSlide />;
      case 10:
        return <TeamSlide />;
      case 11:
        return <AskSlide />;
      default:
        return <TitleSlide />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-black relative overflow-hidden">
      {/* Navigation */}
      <div className="fixed top-4 left-4 z-50">
        <div className="bg-gray-100 rounded-2xl p-2 border border-gray-200">
          <div className="flex flex-wrap gap-1">
            {slides.map((s, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`px-3 py-1 rounded-lg text-xs font-medium ${
                  currentSlide === i
                    ? "bg-gray-300 text-black"
                    : "text-gray-600 hover:bg-gray-200 hover:text-black"
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Counter */}
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-gray-100 rounded-2xl px-4 py-2 border border-gray-200">
          <span className="text-sm font-medium text-gray-700">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
      </div>

      {/* Slides */}
      <div className="relative z-10">{renderCurrent()}</div>

      {/* Arrows */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center gap-4">
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="p-3 bg-gray-100 rounded-full border border-gray-200 hover:bg-gray-200 disabled:opacity-50"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <div className="flex gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  currentSlide === i ? "bg-gray-700" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="p-3 bg-gray-100 rounded-full border border-gray-200 hover:bg-gray-200 disabled:opacity-50"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Progress */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gray-200">
        <div
          className="h-full bg-gray-700 transition-all duration-500"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default PitchDeck;
