import React from "react";
import Link from "next/link";
import OutlineA from "@/components/OutlineA";
import Measure from "@/components/Measure";
import Footer from "@/components/Footer";
import {
  CheckCircle2,
  Building2,
  ShieldCheck,
  Award,
  Users2,
  ArrowRight,
  Target,
  Sparkles,
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* ABOUT HERO */}
      <section className="relative bg-stone overflow-hidden pt-12 md:pt-20 pb-16 border-b border-rule/60">
        <div className="wrap">
          <div className="max-w-3xl">
            <span className="tab-badge mb-4">About Ina SpaceWorks</span>
            <p className="tagline my-3">
              Design<b className="text-blue font-bold mx-1">&bull;</b>
              Build<b className="text-blue font-bold mx-1">&bull;</b>
              Evolve
            </p>
            <h1 className="font-light text-[38px] sm:text-[50px] lg:text-[62px] leading-[1.08] text-ink my-4">
              One Team. One Accountability<span className="dot text-blue font-bold text-[1.2em]">.</span>
            </h1>
            <p className="text-slate text-lg md:text-xl font-light leading-relaxed">
              Ina SpaceWorks is the interior design and build vertical of Ina TechFM. We bring engineering discipline, material integrity, and operational foresight to every space we shape.
            </p>
          </div>

          <div className="mt-10">
            <Measure label="An interior vertical of Ina TechFM" />
          </div>
        </div>
        <OutlineA className="outline-a right-4 w-[220px] md:w-[320px] h-auto opacity-40 pointer-events-none" />
      </section>

      {/* ORIGIN & MISSION */}
      <section className="bg-white py-20 md:py-28 border-b border-rule">
        <div className="wrap grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <span className="tab-badge mb-3">Our Foundation</span>
            <h2 className="font-light text-[32px] sm:text-[44px] text-ink mt-3 mb-6 leading-tight">
              Why We Built Ina SpaceWorks<span className="dot text-blue font-bold text-[1.2em]">.</span>
            </h2>
            <div className="space-y-4 text-body text-base md:text-lg leading-relaxed font-light">
              <p>
                In the traditional interior fit-out industry, clients face a recurring frustration: designers craft beautiful concepts with little regard for buildability or MEPF realities; contractors cut corners to protect margins; and facility managers inherit spaces that are difficult, expensive, and frustrating to maintain.
              </p>
              <p>
                <strong>Ina SpaceWorks was created to break that cycle.</strong>
              </p>
              <p>
                As the dedicated interior vertical of <strong>Ina TechFM</strong>, we combine architectural creativity with deep facility management intelligence. We don&rsquo;t just design for the ribbon-cutting ceremony. We build spaces that perform flawlessly 5, 10, and 20 years into daily operations.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-rule flex items-center gap-6">
              <div>
                <p className="text-3xl font-light text-ink">100%</p>
                <p className="text-xs font-medium tracking-label uppercase text-slate mt-1">
                  On-Time Handover
                </p>
              </div>
              <div className="h-10 w-px bg-rule" />
              <div>
                <p className="text-3xl font-light text-ink">1</p>
                <p className="text-xs font-medium tracking-label uppercase text-slate mt-1">
                  Single Point of Contact
                </p>
              </div>
              <div className="h-10 w-px bg-rule" />
              <div>
                <p className="text-3xl font-light text-ink">Zero</p>
                <p className="text-xs font-medium tracking-label uppercase text-slate mt-1">
                  Subcontractor Passing the Buck
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-stone p-8 md:p-12 border border-rule relative">
            <h3 className="font-medium text-xl text-ink mb-6 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-tab" />
              <span>The Ina TechFM Synergy</span>
            </h3>
            <p className="text-body text-sm leading-relaxed font-light mb-6">
              Ina TechFM is an established leader in integrated facility management, managing millions of square feet of enterprise and residential infrastructure across India.
            </p>
            <ul className="space-y-4 text-sm text-body">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-tab shrink-0 mt-0.5" />
                <span>
                  <strong>Lifecycle Material Selection:</strong> We know which marble sealers resist staining, which acoustic ceiling tiles survive humidity, and which HVAC dampers run silently.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-tab shrink-0 mt-0.5" />
                <span>
                  <strong>Concealed Services Accessibility:</strong> We engineer access hatches and valve points that facility crews can easily reach without tearing down decorative ceilings.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-tab shrink-0 mt-0.5" />
                <span>
                  <strong>Seamless Operational Transition:</strong> Once handover takes place, our parent vertical can immediately oversee everyday facility operations with complete knowledge of the building&rsquo;s DNA.
                </span>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-rule">
              <a
                href="https://inatechfm.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-tab hover:text-ink transition-colors"
              >
                Learn more about Ina TechFM <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PRINCIPLES */}
      <section className="bg-stone py-20 md:py-28 border-b border-rule">
        <div className="wrap">
          <div className="max-w-2xl mb-16">
            <span className="tab-badge mb-3">Our Values</span>
            <h2 className="font-light text-[32px] sm:text-[44px] text-ink my-3">
              Guiding Architectural Tenets<span className="dot text-blue font-bold text-[1.2em]">.</span>
            </h2>
            <p className="text-slate text-base md:text-lg font-light">
              Every drawing we produce and every weld we inspect is governed by four core commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 border border-rule flex flex-col justify-between">
              <div>
                <span className="text-tab text-xs font-bold font-mono tracking-widest block mb-4">
                  01 / ACCOUNTABILITY
                </span>
                <h3 className="text-lg font-semibold text-ink mb-3">
                  Single Point of Responsibility
                </h3>
                <p className="text-body text-xs md:text-sm font-light leading-relaxed">
                  You never have to arbitrate between an architect blaming a contractor or a contractor claiming drawings are incomplete. We are fully accountable for both.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-rule/50 flex items-center text-tab text-xs font-medium">
                Design &bull; Build &bull; Guarantee
              </div>
            </div>

            <div className="bg-white p-8 border border-rule flex flex-col justify-between">
              <div>
                <span className="text-tab text-xs font-bold font-mono tracking-widest block mb-4">
                  02 / PRECISION
                </span>
                <h3 className="text-lg font-semibold text-ink mb-3">
                  Millimeter Engineering
                </h3>
                <p className="text-body text-xs md:text-sm font-light leading-relaxed">
                  Detailed coordination of MEPF services with architectural finishes ensures no awkward bulkheads, uneven reveals, or misaligned tile patterns.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-rule/50 flex items-center text-tab text-xs font-medium">
                Zero Tolerances
              </div>
            </div>

            <div className="bg-white p-8 border border-rule flex flex-col justify-between">
              <div>
                <span className="text-tab text-xs font-bold font-mono tracking-widest block mb-4">
                  03 / TRANSPARENCY
                </span>
                <h3 className="text-lg font-semibold text-ink mb-3">
                  Uncompromised BOQs
                </h3>
                <p className="text-body text-xs md:text-sm font-light leading-relaxed">
                  Every material brand, gauge, thickness, and finish is explicitly documented in the BOQ. No mid-project substitution tricks or unexpected cost escalations.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-rule/50 flex items-center text-tab text-xs font-medium">
                Fixed-Scope Pricing
              </div>
            </div>

            <div className="bg-white p-8 border border-rule flex flex-col justify-between">
              <div>
                <span className="text-tab text-xs font-bold font-mono tracking-widest block mb-4">
                  04 / LIFECYCLE
                </span>
                <h3 className="text-lg font-semibold text-ink mb-3">
                  Built to Evolve
                </h3>
                <p className="text-body text-xs md:text-sm font-light leading-relaxed">
                  We select finishes and modular assemblies that allow future reconfiguration without expensive structural teardowns as organizational needs grow.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-rule/50 flex items-center text-tab text-xs font-medium">
                Post-Occupancy Support
              </div>
            </div>
          </div>

          <div className="mt-16">
            <Measure label="One team from the first brief to the final handover" centered />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer showContactCTA={true} />
    </>
  );
}

