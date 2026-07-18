import React, { useState, useEffect, useRef } from 'react'
import { 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  Star, 
  Check, 
  TrendingUp, 
  BarChart3, 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Settings, 
  Zap, 
  ShieldCheck, 
  Menu, 
  X,
  FileCheck
} from 'lucide-react'

// Direct-Response data for 3 Capabilities Pillars representing Switchbold
const PILLARS = [
  {
    id: 'performance',
    title: 'Contribution-First Paid Ads',
    icon: TrendingUp,
    description: 'We ignore vanity clicks and impressions. Every rupee spent across Meta, Google Search, and YouTube is optimized for contribution margin and bottom-line Net Profit hitting your account.',
    metric: '₹24 Crore+',
    metricLabel: 'Attributed client revenue scaled'
  },
  {
    id: 'analytics',
    title: 'Attribution & P&L Infra',
    icon: BarChart3,
    description: 'Third-party tracking is broken. We install clean server-side custom tracking (CAPI) and cross-reference marketing spend directly with your P&L sheet to scale only what makes profit.',
    metric: '99.2% Sync',
    metricLabel: 'Attribution accuracy across funnels'
  },
  {
    id: 'creative',
    title: 'High-Velocity Creative Hub',
    icon: Sparkles,
    description: 'Ads fatigue fast. Our design cell produces high-testing hook variations, client-testimonial patterns, and static banners tailored to scale your acquisition cost downwards.',
    metric: '180+ Iterations',
    metricLabel: 'Direct-response assets deployed monthly'
  }
]

// Custom strategic steps
const PROCESS_STEPS = [
  {
    step: '01',
    title: 'The P&L Diagnosis',
    subtitle: 'Step 1: Metric Audit',
    description: 'We analyze your unit economics, COGS, repurchase rates, and historical CAC to map the exact cost benchmarks required to model scaling margins.'
  },
  {
    step: '02',
    title: 'Attribution Underpinning',
    subtitle: 'Step 2: Tracking Setup',
    description: 'We connect server-side conversion APIs and construct a singular live client dashboard so that we judge scaling options with clean, zero-delay data.'
  },
  {
    step: '03',
    title: 'Creative Sprinting',
    subtitle: 'Step 3: Rapid Validation',
    description: 'We write scripts, assemble hooks, and launch high-volume variation test groups to isolate the top-performing copy hooks for scale.'
  },
  {
    step: '04',
    title: 'Margin-Led Scaling',
    subtitle: 'Step 4: Scale Expansion',
    description: 'We systematically double down on campaigns proving profitable returns on your P&L sheet, adjusting placements dynamically.'
  }
]

// 8 Verified realistic client testimonials with Indian business highlights 
const TESTIMONIALS = [
  {
    quote: "Switchbold changed our perspective on digital ads completely. Instead of sending media schedules, they audited our gross margin sheets. We scaled Meta daily spend from ₹15,000 to ₹1.8 Lakhs with a healthy bottom-line return.",
    name: "Rohan Mehta",
    title: "Founder",
    company: "Auric D2C Wellness",
    stars: 5,
    initials: "RM"
  },
  {
    quote: "We were burning cash trying to get online coaching enrollments. Deepak and the team rebuilt our landing page, restructured our Google Search campaigns, and cut lead costs from ₹450 to ₹170. We had a ₹22 Lakh month.",
    name: "Anjali Sen",
    title: "Head of Marketing",
    company: "EduScale Institute",
    stars: 5,
    initials: "AS"
  },
  {
    quote: "Their single senior operator policy is highly productive. You don't have junior account executives learning on your budget. We get direct access to their chief media buyer, resulting in consistent weekly margin optimization.",
    name: "Vikram Malhotra",
    title: "CEO & Founder",
    company: "FinFlow Wealth Tech",
    stars: 5,
    initials: "VM"
  },
  {
    quote: "Scaled our high-ticket consulting program to ₹40 Lakhs/month. They don't report vanity CTRs or impressions; they focus on whether money was deposited in the bank today. Highly recommended for info-product sellers.",
    name: "Priyanshu Gupta",
    title: "Growth Architect",
    company: "Ascent Coaching Group",
    stars: 5,
    initials: "PG"
  },
  {
    quote: "We spent 6 months with generic agencies getting zero results. Switchbold stepped in, restructured our Meta Pixel server integration, redesigned creative angles, and scaled our fashion brand's ROAS from 1.2 to 3.8.",
    name: "Divya Nair",
    title: "Acquisition Director",
    company: "UrbanLuxe Apparel",
    stars: 5,
    initials: "DN"
  },
  {
    quote: "Switchbold does not complicate things with reports you can't read. An active shared sheet showing ad costs vs net orders was what we needed. Scaled to ₹50 Lakhs/month with a profit margin of 24%.",
    name: "Harish Verma",
    title: "Founder & Creative Chief",
    company: "GlowSkin E-Commerce",
    stars: 5,
    initials: "HV"
  },
  {
    quote: "Attribution Setup was spot on. Our server-to-server tracking captured 98% of Meta purchases compared to the 72% shown in Shopify previously. The data feedback loop has doubled our scaling efficiency.",
    name: "Rajat Sharma",
    title: "Operations Director",
    company: "Himalayan Harvest D2C",
    stars: 5,
    initials: "RS"
  },
  {
    quote: "The direct-response creative is incredible. The testing velocity of video hooks saved our ad accounts from ad fatigue. Our customer acquisition cost has consistently stayed below ₹400 for the last two quarters.",
    name: "Ayesha Khan",
    title: "Founder",
    company: "FitLife Nutraceuticals",
    stars: 5,
    initials: "AK"
  }
]

// 3 Case studies with Indian figures (₹ Lakhs and ₹ Crores)
const CASE_STUDIES = [
  {
    brand: "GlowSkin E-Commerce (D2C)",
    pill: "Funnel Scale & Custom Creatives",
    beforeMetric: "1.4x ROAS",
    afterMetric: "3.9x ROAS",
    metricDescription: "We overhauled their checkout funnel, implemented high-response video variations, and scaled their daily media budget from ₹10,000 to ₹1.4 Lakhs.",
    tags: ["Meta Ads", "Funnel Optimization", "Creative Hooks"]
  },
  {
    brand: "EduScale Online Academy (Info-Product)",
    pill: "Application CPL Optimization",
    beforeMetric: "₹520 Cost Per Lead",
    afterMetric: "₹180 Cost Per Lead",
    metricDescription: "We simplified lead form steps, restructured Google Search campaigns, and implemented a custom YouTube pre-roll strategy to scale applications.",
    tags: ["Google Search & PMax", "YouTube Ads", "Lead Optimization"]
  },
  {
    brand: "FinFlow Tech Platform (SaaS)",
    pill: "Scale CAC Reduction",
    beforeMetric: "₹3,400 CAC",
    afterMetric: "₹1,450 CAC",
    metricDescription: "We connected Facebook Conversions API (CAPI), introduced target value bid strategies, and optimized their mobile landing page speed.",
    tags: ["App Acquisition", "Custom Attribution", "Landing Page Dev"]
  }
]

// Realistic Switchbold FAQS
const FAQS = [
  {
    question: "What are your minimum criteria to work together?",
    answer: "We focus exclusively on D2C, coaching, or tech/info-product businesses already generating at least ₹25 Lakhs per month in revenue with a proven offer. We also require a minimum ad budget commitment of ₹2 Lakhs per month to run meaningful statistical tests."
  },
  {
    question: "Do you have any long-term contract lock-ins?",
    answer: "No. We operate entirely on a month-to-month partnership basis. We believe in retaining your business by continually generating profitable value, not trapping you with restrictive legal clauses."
  },
  {
    question: "Will my ad account be managed by a junior intern?",
    answer: "No. We reject the traditional agency bureaucracy. Your business is assigned a 'Single Senior Operator' who is personally responsible for campaign building, creative strategy, and attribution checks. You speak directly to the executor."
  },
  {
    question: "What channels do you specialize in?",
    answer: "We focus on channels that drive direct customer actions: Meta (Facebook & Instagram) ads, Google Search, Google Performance Max (PMax), YouTube video ads, and conversion-focused landing page construction."
  },
  {
    question: "How do you charge for your services?",
    answer: "We structure our commercial agreements around a flat base retainer plus a performance incentives tier aligned with your contribution margin or net sales targets. This keeps both parties aligned on scaling profits."
  },
  {
    question: "Do you supply the design assets and ad creatives?",
    answer: "Yes, our team designs all required variations. We take your raw product images, creator-generated scripts, or customer feedback videoclips and iterate them into high-converting hook tests, split frames, and static banners."
  }
]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showFloatingButton, setShowFloatingButton] = useState(false)
  const [faqOpenIndex, setFaqOpenIndex] = useState(null)
  
  // Lead form state variables
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    adSpend: '',
    message: ''
  })
  
  const formSectionRef = useRef(null)

  // Floating CTA appears after scrolling past hero section (say 500px)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowFloatingButton(true)
      } else {
        setShowFloatingButton(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToForm = (e) => {
    if (e) e.preventDefault()
    setMobileMenuOpen(false)
    formSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    // Validation check (basic)
    if (!formData.name || !formData.email || !formData.phone || !formData.company || !formData.adSpend) {
      alert("Please fill in all required fields.")
      return
    }
    // Simulate submission
    setFormSubmitted(true)
    // Clear form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      adSpend: '',
      message: ''
    })
  }

  const toggleFaq = (index) => {
    setFaqOpenIndex(faqOpenIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-beige-50 flex flex-col antialiased">
      
      {/* 1. STICKY NAV */}
      <header className="sticky top-0 z-50 bg-beige-50/90 backdrop-blur-md border-b border-beige-200/60 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
          {/* Logo Placeholder */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-maroon rounded flex items-center justify-center font-display text-white font-extrabold text-lg tracking-wider">
              SB
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-neutral-900">
              SWITCH<span className="text-maroon">BOLD</span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#expertise" className="text-sm font-medium text-neutral-600 hover:text-maroon transition-colors">Expertise</a>
            <a href="#process" className="text-sm font-medium text-neutral-600 hover:text-maroon transition-colors">Process</a>
            <a href="#testimonials" className="text-sm font-medium text-neutral-600 hover:text-maroon transition-colors">Social Proof</a>
            <a href="#results" className="text-sm font-medium text-neutral-600 hover:text-maroon transition-colors">Case Studies</a>
            <a href="#faq" className="text-sm font-medium text-neutral-600 hover:text-maroon transition-colors">FAQ</a>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={scrollToForm}
              className="inline-flex items-center justify-center px-5 py-2.5 bg-maroon text-white font-semibold text-sm rounded shadow hover:bg-maroon-700 active:bg-maroon-800 transition-all cursor-pointer"
            >
              Get Free Audit
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-neutral-700 hover:text-maroon p-2 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-beige-100/95 border-b border-beige-200 px-4 pt-4 pb-6 space-y-3 transition-all duration-300">
            <a 
              href="#expertise" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded font-medium text-neutral-700 hover:bg-beige-200 hover:text-maroon transition-all"
            >
              Expertise
            </a>
            <a 
              href="#process" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded font-medium text-neutral-700 hover:bg-beige-200 hover:text-maroon transition-all"
            >
              Process
            </a>
            <a 
              href="#testimonials" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded font-medium text-neutral-700 hover:bg-beige-200 hover:text-maroon transition-all"
            >
              Social Proof
            </a>
            <a 
              href="#results" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded font-medium text-neutral-700 hover:bg-beige-200 hover:text-maroon transition-all"
            >
              Case Studies
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded font-medium text-neutral-700 hover:bg-beige-200 hover:text-maroon transition-all"
            >
              FAQ
            </a>
            <button
              onClick={scrollToForm}
              className="w-full flex items-center justify-center px-4 py-3 bg-maroon text-white font-bold rounded shadow hover:bg-maroon-700 transition-all cursor-pointer"
            >
              Get Free Audit
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-beige-100 to-beige-50 pt-16 pb-20 sm:pt-20 sm:pb-28 border-b border-beige-200/50">
        {/* Subtle geometric grid backdrop */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-full bg-[radial-gradient(#811e34_1.5px,transparent_1.5px)] [background-size:24px_24px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Copy: Mobile First layout elements */}
            <div className="lg:col-span-7 select-text text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-maroon-100 text-maroon-900 border border-maroon-200 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
                <ShieldCheck className="w-4 h-4 text-maroon" />
                <span>P&L-First Performance Marketing & Design</span>
              </div>
              
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-neutral-900 leading-tight">
                We scale D2C & scaling brands with a <span className="text-maroon">pure profit focus</span>.
              </h1>
              
              <p className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                No vanity CTR or CPC reports. We audit your unit economics, build direct-response video ad variations, and scale campaigns only when net bank deposits support it.
              </p>
              
              {/* Primary Action Button (Only one clear action above-the-fold) */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={scrollToForm}
                  className="w-full sm:w-auto px-8 py-4 bg-maroon text-white font-bold text-base rounded shadow-md hover:bg-maroon-700 active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2 group"
                >
                  <span>Request a Profit Audit Proposal</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Supporting Stat Strip */}
              <div className="mt-12 pt-8 border-t border-beige-200 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
                <div>
                  <div className="font-display font-extrabold text-2xl sm:text-3xl text-maroon">₹12 Cr+</div>
                  <div className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Spend Managed</div>
                </div>
                <div>
                  <div className="font-display font-extrabold text-2xl sm:text-3xl text-maroon">3.8x</div>
                  <div className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Avg Net ROAS</div>
                </div>
                <div>
                  <div className="font-display font-extrabold text-2xl sm:text-3xl text-maroon">25 Lakhs+</div>
                  <div className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Min Client Rev</div>
                </div>
              </div>
            </div>

            {/* Right Side Visual Component (Dashboard Mockup) columns */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md bg-white rounded-lg border border-beige-200 shadow-xl p-6 overflow-hidden">
                {/* Visual mockup styling: Browser frame */}
                <div className="absolute top-0 left-0 right-0 h-10 bg-beige-100 border-b border-beige-200 flex items-center px-4 gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-300"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-350"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-300"></div>
                  <div className="ml-4 w-40 h-4 bg-white rounded-md text-[10px] flex items-center px-2 text-neutral-400 font-mono">switchbold_tracker.io</div>
                </div>
                
                {/* Simulated charts and KPIs with yellow highlights */}
                <div className="mt-8 space-y-5">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-xs text-neutral-400 font-medium">Daily Marketing Spend</div>
                      <div className="text-xl font-bold font-display text-neutral-800">₹1,42,800.00 / day</div>
                    </div>
                    {/* Tiny yellow upward badge */}
                    <div className="bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-0.5 rounded border border-yellow-250">
                      +42.4% scaling
                    </div>
                  </div>

                  {/* Simulated Line Chart (using responsive pure custom SVG) */}
                  <div className="h-32 w-full bg-beige-50 rounded border border-beige-200/80 flex flex-col justify-end p-2 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center opacity-30 select-none">
                      <span className="text-[10px] uppercase tracking-wider font-mono text-neutral-400">P&L Attribution</span>
                    </div>
                    <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="w-full h-20 text-maroon">
                      <defs>
                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#811e34" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#811e34" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path d="M0 25 Q15 15, 30 20 T60 8 T90 5 T100 2 L100 30 L0 30 Z" fill="url(#chartGrad)" />
                      <path d="M0 25 Q15 15, 30 20 T60 8 T90 5 T100 2" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      {/* Dots */}
                      <circle cx="30" cy="20" r="1.5" fill="#f59e0b" />
                      <circle cx="60" cy="8" r="1.5" fill="#f59e0b" />
                      <circle cx="100" cy="2" r="1.5" fill="#f59e0b" />
                    </svg>
                    <div className="flex justify-between text-[8px] text-neutral-400 uppercase tracking-widest mt-1 font-mono">
                      <span>MON</span>
                      <span>WED</span>
                      <span>FRI</span>
                      <span>SUN</span>
                    </div>
                  </div>

                  {/* Detailed Performance List */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs p-2 bg-beige-50 rounded border border-beige-200/60">
                      <span className="font-medium text-neutral-600">Calculated Cost Per Purchase</span>
                      <span className="font-mono text-neutral-900 font-bold">₹182.40 <span className="text-yellow-600 text-[10px]">(-38.6%)</span></span>
                    </div>
                    <div className="flex justify-between items-center text-xs p-2 bg-beige-50 rounded border border-beige-200/60">
                      <span className="font-medium text-neutral-600">Attributed Conversion Margin Lift</span>
                      <span className="font-mono text-neutral-900 font-bold">+184.2%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. TRUST BAR (Logo Strip) */}
      <section className="bg-white py-10 border-b border-beige-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold tracking-wider text-neutral-400 uppercase">
            Trusted by fast-growing brands globally
          </p>
          {/* Flex wrap logos container */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60">
            {/* SVG Logo Placeholders (6 logos total) */}
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="flex items-center gap-2 select-none">
                <div className="w-6 h-6 bg-neutral-300 rounded flex items-center justify-center text-[10px] text-neutral-600 font-semibold font-mono">
                  L
                </div>
                <div className="h-4 w-20 bg-neutral-300 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THREE-PILLAR EXPERTISE SECTION */}
      <section id="expertise" className="py-20 sm:py-28 bg-beige-50 border-b border-beige-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-900 tracking-tight">
              Pillars of performance growth strategy.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600">
              We operate a contribution-first model coordinating senior media buying, attribution systems, and creative velocity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div 
                  key={pillar.id} 
                  className="bg-white rounded-lg border border-beige-200 shadow-sm p-8 flex flex-col justify-between hover:border-maroon/30 hover:shadow-md transition-all duration-300 group"
                >
                  <div>
                    {/* Circle Icon Container with Maroon and Yellow blend */}
                    <div className="w-12 h-12 bg-maroon-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-maroon group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6 text-maroon group-hover:text-white transition-colors" />
                    </div>
                    
                    <h3 className="font-display font-semibold text-xl text-neutral-900 tracking-tight">
                      {pillar.title}
                    </h3>
                    
                    <p className="mt-4 text-sm text-neutral-500 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-beige-100">
                    <div className="font-display font-bold text-2xl text-maroon flex items-center gap-1.5">
                      <span>{pillar.metric}</span>
                      <span className="w-2 h-2 rounded-full bg-yellow-accent"></span>
                    </div>
                    <div className="text-xs text-neutral-400 capitalize mt-1">
                      {pillar.metricLabel}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* MID-PAGE CONVERSION CTA (Conversion Focused Requirement) */}
      <section className="bg-maroon text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 right-0 h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-12">
          <div>
            <h3 className="font-display font-semibold text-2xl sm:text-3xl tracking-tight">
              Ready to diagnostic audit your marketing accounts?
            </h3>
            <p className="mt-2 text-neutral-300 text-sm sm:text-base max-w-xl">
              Get a comprehensive analysis of conversion leaks, server tracking sync levels, and click fatigue.
            </p>
          </div>
          <div className="flex-shrink-0 w-full sm:w-auto">
            <button
              onClick={scrollToForm}
              className="w-full sm:w-auto px-6 py-3.5 bg-yellow-accent text-neutral-950 font-bold rounded shadow hover:bg-yellow-400 active:scale-98 transition-all cursor-pointer inline-flex items-center justify-center gap-2"
            >
              <span>Setup Free Consult</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. PROCESS SECTION (How We Work) */}
      <section id="process" className="py-20 sm:py-28 bg-white border-b border-beige-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-900 tracking-tight">
              How we deploy and scale client accounts.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600">
              Our methodical iteration pipeline ensures ad spend is matched perfectly to revenue targets with direct senior execution.
            </p>
          </div>

          {/* Visual Step-by-Step Flow */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            
            {/* Desktop Connector Line */}
            <div className="hidden md:block absolute top-18 left-16 right-16 h-0.5 bg-beige-200/60 z-0"></div>

            {PROCESS_STEPS.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left group">
                
                {/* Step Circle */}
                <div className="w-12 h-12 rounded-full bg-beige-50 border-2 border-beige-300 flex items-center justify-center font-display font-extrabold text-neutral-700 mb-6 group-hover:border-maroon group-hover:bg-maroon group-hover:text-white transition-all duration-300">
                  {step.step}
                </div>

                <div className="text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-1">
                  {step.subtitle}
                </div>
                
                <h3 className="font-display font-bold text-lg text-neutral-900 mb-3 tracking-tight">
                  {step.title}
                </h3>
                
                <p className="text-sm text-neutral-500 leading-relaxed max-w-xs md:max-w-none">
                  {step.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* 6. TESTIMONIALS (VISUAL CENTERPIECE) */}
      <section id="testimonials" className="py-20 sm:py-28 bg-beige-100 border-b border-beige-200/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-100 border border-yellow-200 text-yellow-800 rounded-full text-xs font-semibold tracking-wider uppercase mb-4">
              <Star className="w-3.5 h-3.5 fill-yellow-600 text-yellow-600" />
              <span>Attributed Social Proof Excellence</span>
            </div>
            
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-neutral-900 tracking-tight">
              Loved by performance teams.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600">
              Verified reviews from founders and acquisition executives operating scaling D2C and lead-generation funnels in the Indian ecosystem.
            </p>
          </div>

          {/* Large heavy grid layout supporting 8 testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {TESTIMONIALS.map((item, idx) => (
              <div 
                key={idx} 
                className="relative bg-gradient-to-br from-white to-beige-50/50 rounded-lg border border-beige-200 shadow-sm p-6 hover:shadow-md hover:border-maroon/20 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Large decorative quotation mark */}
                <div className="absolute top-2 right-4 font-display text-7xl text-maroon-100 font-extrabold select-none pointer-events-none opacity-40 group-hover:text-maroon-250 transition-colors">
                  “
                </div>

                <div className="relative z-10">
                  {/* Star Rating Layout */}
                  <div className="flex items-center gap-0.5 text-yellow-accent mb-4">
                    {Array.from({ length: item.stars }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                    <span className="text-[9px] text-neutral-400 font-semibold ml-2 uppercase tracking-wider">Verified</span>
                  </div>

                  <blockquote className="text-neutral-600 text-[13px] leading-relaxed italic">
                    "{item.quote}"
                  </blockquote>
                </div>

                {/* Account Details */}
                <div className="relative z-10 mt-6 pt-4 border-t border-beige-205/65 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-maroon text-beige-100 flex items-center justify-center font-display font-black text-xs select-none shadow-sm">
                    {item.initials}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-neutral-900 font-display">{item.name}</div>
                    <div className="text-[10px] text-neutral-400 mt-0.5">{item.title}</div>
                    <div className="text-[10px] font-bold text-maroon mt-0.5">{item.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. RESULTS SECTION (Case Study Strip) */}
      <section id="results" className="py-20 sm:py-28 bg-white border-b border-beige-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-900 tracking-tight">
              Before and after client outcome audits.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600">
              Real audits showing performance leaps, CAC drops, and scaled revenues after deploying our custom trackers and creative engines.
            </p>
          </div>

          {/* 3 Mini Case-Study Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CASE_STUDIES.map((study, idx) => (
              <div 
                key={idx} 
                className="bg-beige-50 rounded-lg border border-beige-300/80 p-6 flex flex-col justify-between hover:border-maroon/30 transition-colors group"
              >
                <div>
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                      {study.pill}
                    </span>
                    <span className="bg-maroon-100 text-maroon uppercase text-[9px] font-bold px-2 py-0.5 rounded border border-maroon-200">
                      Verified Case Study
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-neutral-900 mt-4">
                    {study.brand}
                  </h3>

                  {/* Before vs After Metric Comparison */}
                  <div className="mt-6 grid grid-cols-2 gap-4 p-4 bg-white rounded border border-beige-200">
                    <div>
                      <div className="text-[10px] text-neutral-400 uppercase tracking-widest">Before</div>
                      <div className="font-mono font-bold text-lg text-neutral-600 line-through mt-0.5">{study.beforeMetric}</div>
                    </div>
                    <div className="border-l border-beige-200 pl-4">
                      <div className="text-[10px] text-neutral-400 uppercase tracking-widest text-maroon">After Audit</div>
                      <div className="font-mono font-black text-xl text-maroon mt-0.5 flex items-center gap-1">
                        <span>{study.afterMetric}</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-accent"></div>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-xs text-neutral-500 leading-normal">
                    {study.metricDescription}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-beige-200/60 flex flex-wrap gap-1.5">
                  {study.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] bg-neutral-200 text-neutral-600 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. LEAD CAPTURE FORM SECTION */}
      <section ref={formSectionRef} id="lead-form" className="py-20 sm:py-28 bg-beige-100 border-b border-beige-200/60 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          
          <div className="bg-white rounded-lg border border-beige-300 shadow-xl overflow-hidden">
            <div className="bg-maroon px-6 py-8 sm:px-8 text-center relative text-white">
              {/* Dot grid decoration */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none"></div>
              
              <h2 className="relative font-display font-extrabold text-2xl sm:text-3xl tracking-tight">
                Request Your Performance Growth Audit
              </h2>
              <p className="relative mt-2 text-neutral-300 text-xs sm:text-sm">
                Single step form setup for maximum conversion. Expect a custom callback proposal review in 24 hours.
              </p>
            </div>

            <div className="px-6 py-8 sm:p-10">
              {formSubmitted ? (
                <div className="text-center py-12 flex flex-col items-center">
                  <div className="w-16 h-16 bg-yellow-100 text-yellow-800 border-2 border-yellow-200 rounded-full flex items-center justify-center mb-6">
                    <FileCheck className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-neutral-900">Audit Request Received</h3>
                  <p className="mt-3 text-neutral-600 text-sm max-w-md">
                    Thank you! Founder Deepak Singla and our senior growth operators are reviewing your brand. Expect a customized breakdown in your inbox within 24 hours.
                  </p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="mt-6 px-4 py-2 border border-maroon text-maroon text-xs font-semibold rounded hover:bg-maroon-50 transition-colors cursor-pointer"
                  >
                    Submit another audit request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-2">
                        Full Name <span className="text-maroon">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full bg-beige-50 border border-beige-300 rounded px-4 py-3 text-sm text-neutral-800 focus:outline-none focus:ring-1 focus:ring-maroon focus:border-maroon transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-2">
                        Work Email <span className="text-maroon">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="example@company.com"
                        className="w-full bg-beige-50 border border-beige-300 rounded px-4 py-3 text-sm text-neutral-800 focus:outline-none focus:ring-1 focus:ring-maroon focus:border-maroon transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-2">
                        Phone Number <span className="text-maroon">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="w-full bg-beige-50 border border-beige-300 rounded px-4 py-3 text-sm text-neutral-800 focus:outline-none focus:ring-1 focus:ring-maroon focus:border-maroon transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-2">
                        Company Name <span className="text-maroon">*</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="e.g. Sleepwell D2C"
                        className="w-full bg-beige-50 border border-beige-300 rounded px-4 py-3 text-sm text-neutral-800 focus:outline-none focus:ring-1 focus:ring-maroon focus:border-maroon transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="adSpend" className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-2">
                      Monthly Ad Spend Tier <span className="text-maroon">*</span>
                    </label>
                    <select
                      name="adSpend"
                      id="adSpend"
                      required
                      value={formData.adSpend}
                      onChange={handleInputChange}
                      className="w-full bg-beige-50 border border-beige-300 rounded px-4 py-3 text-sm text-neutral-800 focus:outline-none focus:ring-1 focus:ring-maroon focus:border-maroon transition-all appearance-none"
                    >
                      <option value="" disabled>Select ad spend tier...</option>
                      <option value="under-2l">Under ₹2 Lakhs / month (Ineligible)</option>
                      <option value="2l-10l">₹2 Lakhs - ₹10 Lakhs / month</option>
                      <option value="10l-25l">₹10 Lakhs - ₹25 Lakhs / month</option>
                      <option value="over-25l">Over ₹25 Lakhs / month</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-2">
                      Message / Growth Objectives (Optional)
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="List key current platforms and acquisition bottlenecks..."
                      className="w-full bg-beige-50 border border-beige-300 rounded px-4 py-3 text-sm text-neutral-800 focus:outline-none focus:ring-1 focus:ring-maroon focus:border-maroon transition-all"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 px-6 bg-maroon text-white font-extrabold rounded shadow-md hover:bg-maroon-700 active:scale-99 transition-all cursor-pointer flex items-center justify-center gap-2 text-base"
                    >
                      <span>Analyze My Accounts</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                    <div className="flex items-center justify-center gap-1.5 mt-4 text-[10px] text-neutral-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-accent"></span>
                      <span>No obligation. 100% confidential. Standard NDAs support.</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* 9. FAQ ACCORDION */}
      <section id="faq" className="py-20 sm:py-28 bg-white border-b border-beige-200/60">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-900 tracking-tight">
              Frequently asked questions.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-600">
              Everything you need to know about our criteria, senior operator structure, and scaling scope.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = faqOpenIndex === idx
              return (
                <div 
                  key={idx} 
                  className="bg-beige-50 border border-beige-200/80 rounded-lg overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                  >
                    <span className="font-display font-medium text-sm sm:text-base text-neutral-800 pr-4">
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0 text-maroon">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-xs sm:text-sm text-neutral-500 border-t border-beige-200/60 pt-4 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="bg-beige-50/80 border-t border-beige-200/80 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Footer Elements */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-baseline">
            
            {/* Branding Column */}
            <div className="md:col-span-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-maroon rounded flex items-center justify-center font-display text-white font-extrabold text-sm tracking-wider">
                  SB
                </div>
                <span className="font-display font-bold text-lg tracking-tight text-neutral-900">
                  SWITCH<span className="text-maroon">BOLD</span>
                </span>
              </div>
              <p className="mt-4 text-xs text-neutral-500 leading-relaxed max-w-sm">
                A profit-first performance marketing & creative agency engineering bottom-line growth for high-growth D2C, coaching, and scaleup brands.
              </p>
            </div>

            {/* Contact Info Column */}
            <div className="md:col-span-4 space-y-3 font-normal text-xs text-neutral-600">
              <h4 className="font-display font-bold uppercase text-[10px] tracking-widest text-neutral-400 mb-4">Contact Info</h4>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-maroon" />
                <span>growth@switchbold.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-maroon" />
                <span>+91 97799 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-maroon" />
                <span>Crecimento Tech Pvt Ltd, Delhi NCR, India</span>
              </div>
            </div>

            {/* Legal Links Column */}
            <div className="md:col-span-4 space-y-2 text-xs">
              <h4 className="font-display font-bold uppercase text-[10px] tracking-widest text-neutral-400 mb-4">Legal Links</h4>
              <div><a href="#privacy" className="text-neutral-500 hover:text-maroon hover:underline">Privacy Policy</a></div>
              <div><a href="#terms" className="text-neutral-500 hover:text-maroon hover:underline">Terms of Service</a></div>
              <div><a href="#ndas" className="text-neutral-500 hover:text-maroon hover:underline">NDA Agreement Form</a></div>
            </div>

          </div>

          {/* Bottom attribution copyright */}
          <div className="mt-12 pt-8 border-t border-beige-200/60 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-400 gap-4">
            <div>
              &copy; {new Date().getFullYear()} Switchbold (Crecimento Tech Private Limited). All rights reserved.
            </div>
            <div>
              Designed for Paid Acquisition & Mobile Scaling.
            </div>
          </div>

        </div>
      </footer>

      {/* FLOATING/STICKY CTA FOR MOBILE (Scroll to Form Section when clicked) */}
      {showFloatingButton && (
        <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden animate-fade-in-up">
          <button
            onClick={scrollToForm}
            className="w-full py-4 bg-maroon text-white font-extrabold text-sm rounded-lg shadow-lg hover:bg-maroon-700 active:scale-98 transition-all flex items-center justify-center gap-2 border border-maroon-900 cursor-pointer"
          >
            <span>Claim Free Growth Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

    </div>
  )
}

export default App
