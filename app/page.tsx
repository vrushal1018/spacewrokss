import React from "react";
import Link from "next/link";
import Image from "next/image";
import OutlineA from "@/components/OutlineA";
import Measure from "@/components/Measure";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, ShieldCheck, Compass, Hammer, RefreshCw } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-stone pt-6 md:pt-12 pb-0">
        <div className="wrap grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Headline and Call-to-Action */}
          <div className="lg:col-span-5 relative flex flex-col justify-center pt-8 pb-20 md:pb-36 min-h-[520px] lg:min-h-[640px]">
            <p className="tagline mb-3">
              Design<b className="text-blue font-bold mx-1.5">&bull;</b>
              Build<b className="text-blue font-bold mx-1.5">&bull;</b>
              Evolve
            </p>

            <h1 className="font-light text-[40px] sm:text-[50px] lg:text-[64px] leading-[1.08] tracking-[-0.02em] text-ink my-5">
              From brief<br />
              to handover<span className="dot text-blue font-bold text-[1.2em]">.</span>
            </h1>

            <p className="text-slate text-[17px] md:text-[19px] leading-relaxed max-w-[420px] mb-8 font-light">
              One team plans, designs and builds every space, start to finish. Under a single point of accountability.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Link href="/contact" className="btn-primary">
                Start a project
              </Link>
              <Link href="/work" className="btn-outline">
                View Portfolio
              </Link>
            </div>

            <p className="label-caps mt-auto">
              An interior vertical of Ina TechFM
            </p>

            {/* Rising Brand Outline A */}
            <OutlineA className="outline-a left-0 w-[240px] sm:w-[280px] h-auto opacity-70 pointer-events-none" />
          </div>

          {/* Right Column: Hero Architecture Photograph */}
          <figure className="lg:col-span-7 relative m-0 lg:-mr-[clamp(22px,6.6vw,96px)] h-full min-h-[380px] sm:min-h-[480px] lg:min-h-[640px]">
            <img
              src="/images/sunrays-entrance-lobby.jpg"
              alt="Sunrays C.H.S. Ltd entrance lobby, designed and built by Ina SpaceWorks"
              className="w-full h-full object-cover object-[center_45%] shadow-sm"
            />
            <figcaption className="absolute left-6 bottom-6 bg-stone/95 backdrop-blur-sm px-4 py-2 text-[12px] font-medium tracking-label uppercase text-slate shadow-sm border border-rule/40">
              Sunrays C.H.S. Ltd <b className="text-blue font-medium mx-1">/</b> Entrance lobby
            </figcaption>
          </figure>
        </div>
      </section>

      {/* THREE PILLARS & SERVICES SECTION */}
      <section className="relative overflow-hidden bg-white py-20 md:py-32" id="services">
        <div className="wrap text-center">
          <span className="tab-badge">What we do</span>
          <h2 className="font-light text-[32px] sm:text-[42px] lg:text-[56px] leading-[1.12] text-ink mt-5 mb-3">
            Interior Design &amp; Build
          </h2>
          <p className="text-slate text-lg md:text-xl font-light max-w-2xl mx-auto mb-16 md:mb-20">
            One team from the first brief to the final handover. No handoff gaps, no fragmented vendors.
          </p>

          {/* 3 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 text-left mb-16 md:mb-20">
            {/* Pillar 1 */}
            <div className="border-t-[1.2px] border-ink pt-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-tab text-sm font-medium tracking-label uppercase mb-3">
                  <Compass className="w-4 h-4 text-tab" />
                  <span>Phase 01</span>
                </div>
                <h3 className="font-light text-[30px] md:text-[34px] text-ink mb-3">
                  Design<span className="dot text-blue font-bold text-[1.2em]">.</span>
                </h3>
                <p className="text-body text-[15px] md:text-[16px] leading-relaxed font-light">
                  Space planning, concepts, 3D renderings, and detailed MEPF documentation shaped strictly around ergonomics and operational purpose.
                </p>
              </div>
              <Link
                href="/services#design"
                className="mt-6 inline-flex items-center gap-1 text-[13px] font-medium tracking-wider uppercase text-tab hover:text-ink transition-colors"
              >
                Learn design scope <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Pillar 2 */}
            <div className="border-t-[1.2px] border-ink pt-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-tab text-sm font-medium tracking-label uppercase mb-3">
                  <Hammer className="w-4 h-4 text-tab" />
                  <span>Phase 02</span>
                </div>
                <h3 className="font-light text-[30px] md:text-[34px] text-ink mb-3">
                  Build<span className="dot text-blue font-bold text-[1.2em]">.</span>
                </h3>
                <p className="text-body text-[15px] md:text-[16px] leading-relaxed font-light">
                  Precision execution and finishing by our dedicated civil and engineering site crew. Single-point accountability on quality and schedule.
                </p>
              </div>
              <Link
                href="/services#build"
                className="mt-6 inline-flex items-center gap-1 text-[13px] font-medium tracking-wider uppercase text-tab hover:text-ink transition-colors"
              >
                Learn build methodology <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Pillar 3 */}
            <div className="border-t-[1.2px] border-ink pt-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-tab text-sm font-medium tracking-label uppercase mb-3">
                  <RefreshCw className="w-4 h-4 text-tab" />
                  <span>Phase 03</span>
                </div>
                <h3 className="font-light text-[30px] md:text-[34px] text-ink mb-3">
                  Evolve<span className="dot text-blue font-bold text-[1.2em]">.</span>
                </h3>
                <p className="text-body text-[15px] md:text-[16px] leading-relaxed font-light">
                  Spaces engineered for long life cycles. Seamless integration with Ina TechFM facility management for post-handover care and evolution.
                </p>
              </div>
              <Link
                href="/services#evolve"
                className="mt-6 inline-flex items-center gap-1 text-[13px] font-medium tracking-wider uppercase text-tab hover:text-ink transition-colors"
              >
                Learn lifecycle care <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Centered Measure Line */}
          <div className="max-w-4xl mx-auto my-8">
            <Measure label="Turnkey capabilities &amp; engineering" centered />
          </div>

          {/* Extra Services Chips */}
          <p className="text-ink text-base md:text-xl font-light tracking-wide mt-6 flex flex-wrap items-center justify-center gap-y-2">
            <span className="whitespace-nowrap hover:text-tab transition-colors">Repair &amp; Maintenance</span>
            <b className="text-blue font-normal mx-3">/</b>
            <span className="whitespace-nowrap hover:text-tab transition-colors">Custom Joinery &amp; Millwork</span>
            <b className="text-blue font-normal mx-3">/</b>
            <span className="whitespace-nowrap hover:text-tab transition-colors">MEPF Engineering</span>
            <b className="text-blue font-normal mx-3">/</b>
            <span className="whitespace-nowrap hover:text-tab transition-colors">HVAC &amp; Ventilation</span>
          </p>

          <div className="mt-12">
            <Link href="/services" className="btn-outline">
              Explore All Services
            </Link>
          </div>
        </div>

        {/* Centered Rising Outline A Graphic */}
        <OutlineA className="outline-a left-1/2 -translate-x-1/2 w-[min(340px,56vw)] h-auto opacity-50 pointer-events-none" />
      </section>

      {/* FEATURED WORK / PORTFOLIO SECTION */}
      <section className="relative bg-stone py-20 md:py-28" id="work">
        <div className="wrap">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="tab-badge">Featured Project</span>
              <h2 className="font-semibold text-[28px] sm:text-[36px] lg:text-[42px] text-ink mt-3 mb-1">
                Sunrays C.H.S. Ltd
              </h2>
              <p className="label-caps">
                Entrance porch, main lobby and lift lobby <b className="text-blue font-semibold mx-1">/</b> Thane
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Link href="/work" className="btn-outline text-xs">
                All Projects
              </Link>
              <Link href="/contact" className="btn-primary text-xs">
                Request Case Study
              </Link>
            </div>
          </div>

          {/* Asymmetric Architectural Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Image 1: Main Lobby (7 cols) */}
            <figure className="relative md:col-span-7 h-[360px] sm:h-[460px] md:h-[580px] overflow-hidden group">
              <img
                src="/images/sunrays-main-lobby.jpg"
                alt="Main lobby with skylights, reception desk and lounge seating"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <figcaption className="absolute left-5 bottom-5 px-3 py-1.5 bg-stone/95 backdrop-blur-sm text-[12px] font-medium tracking-label uppercase text-slate border border-rule/40">
                Main lobby <span className="text-blue font-bold ml-1">&bull;</span> Thane
              </figcaption>
            </figure>

            {/* Image 2: Lift Lobby (5 cols) */}
            <figure className="relative md:col-span-5 h-[360px] sm:h-[460px] md:h-[580px] overflow-hidden group">
              <img
                src="/images/sunrays-lift-lobby.jpg"
                alt="Lift lobby corridor with marble floor and warm cove lighting"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <figcaption className="absolute left-5 bottom-5 px-3 py-1.5 bg-stone/95 backdrop-blur-sm text-[12px] font-medium tracking-label uppercase text-slate border border-rule/40">
                Lift lobby <span className="text-blue font-bold ml-1">&bull;</span> Marble &amp; Cove Detailing
              </figcaption>
            </figure>

            {/* Image 3: Entrance Porch (5 cols) */}
            <figure className="relative md:col-span-5 h-[320px] sm:h-[420px] md:h-[480px] overflow-hidden group">
              <img
                src="/images/sunrays-entrance-porch.jpg"
                alt="Entrance porch with columns, bronze screen and planters"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <figcaption className="absolute left-5 bottom-5 px-3 py-1.5 bg-stone/95 backdrop-blur-sm text-[12px] font-medium tracking-label uppercase text-slate border border-rule/40">
                Entrance porch <span className="text-blue font-bold ml-1">&bull;</span> Bronze Screen &amp; Landscape
              </figcaption>
            </figure>

            {/* Image 4: Entrance Lobby (7 cols) */}
            <figure className="relative md:col-span-7 h-[320px] sm:h-[420px] md:h-[480px] overflow-hidden group">
              <img
                src="/images/sunrays-entrance-lobby.jpg"
                alt="Entrance lobby with Sunrays signage and lounge"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <figcaption className="absolute left-5 bottom-5 px-3 py-1.5 bg-stone/95 backdrop-blur-sm text-[12px] font-medium tracking-label uppercase text-slate border border-rule/40">
                Entrance lobby <span className="text-blue font-bold ml-1">&bull;</span> Architectural Signage
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ABOUT SNAPSHOT SECTION */}
      <section className="relative overflow-hidden bg-white py-20 md:py-32" id="about">
        <div className="wrap grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <span className="tab-badge">About us</span>
            <h2 className="font-light text-[34px] sm:text-[46px] lg:text-[56px] leading-[1.1] text-ink mt-5 mb-6">
              From brief<br />
              to handover<span className="dot text-blue font-bold text-[1.2em]">.</span>
            </h2>
            <div className="flex flex-col gap-4 text-slate text-sm font-medium tracking-wide">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-tab shrink-0" />
                <span>Single Point of Contact &amp; Accountability</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-tab shrink-0" />
                <span>Integrated Civil, Joinery, and MEPF Teams</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-tab shrink-0" />
                <span>Backed by Ina TechFM Facility Management Excellence</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between">
            <p className="text-body text-[17px] md:text-[19px] leading-[1.8] font-light mb-8">
              Ina SpaceWorks is the interior design and build vertical of Ina TechFM. We eliminate the traditional friction between interior architects, contractors, and facility operators. One integrated team carries every project from the first brief to the final handover: concept planning, cost engineering, 3D visualization, build execution, and lifetime space evolution.
            </p>

            <div className="mb-8">
              <Measure label="An interior vertical of Ina TechFM" />
            </div>

            <div>
              <Link href="/about" className="btn-outline">
                Read our full story
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Outline A */}
        <OutlineA className="outline-a right-[clamp(22px,6.6vw,96px)] w-[240px] md:w-[320px] h-auto opacity-50 pointer-events-none" />
      </section>

      {/* Global Footer */}
      <Footer showContactCTA={true} />
    </>
  );
}

