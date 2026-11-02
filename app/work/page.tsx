"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import OutlineA from "@/components/OutlineA";
import Measure from "@/components/Measure";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Maximize2,
  MapPin,
  Calendar,
  Layers,
  CheckCircle2,
  Building2,
  Sparkles,
} from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: "all" | "residential" | "commercial" | "healthcare";
  location: string;
  year: string;
  area: string;
  scope: string[];
  heroImage: string;
  description: string;
  highlights: string[];
}

const projects: ProjectItem[] = [
  {
    id: "sunrays-chs",
    title: "Sunrays C.H.S. Ltd",
    subtitle: "Turnkey Entrance Porch, Main Lobby & Lift Lobby",
    category: "residential",
    location: "Thane West, Maharashtra",
    year: "2024",
    area: "8,500 sq.ft",
    scope: [
      "Turnkey Civil Execution",
      "Custom Joinery & Millwork",
      "Architectural Lighting & Skylights",
      "MEPF & Fire Engineering",
      "Italian Marble Flooring",
    ],
    heroImage: "/images/sunrays-main-lobby.jpg",
    description:
      "A complete transformation of the residential society's public realm. From redesigning the vehicular drop-off porch to carving out an expansive, natural-light-filled main lobby with custom acoustic wall panelling, reception console, and warm indirect lighting.",
    highlights: [
      "Restructured structural columns with bronze perforated acoustic wrap",
      "Full MEPF overhaul integrated into seamless gypsum and baffle ceilings",
      "Handover delivered 2 weeks ahead of scheduled AGM milestone",
    ],
  },
  {
    id: "techfm-hq",
    title: "TechFM Corporate Headquarters",
    subtitle: "Collaborative Office & Innovation Experience Hub",
    category: "commercial",
    location: "Airoli, Navi Mumbai",
    year: "2024",
    area: "24,000 sq.ft",
    scope: [
      "Space Planning & Workplace Strategy",
      "Executive Boardrooms",
      "Acoustic Phone Booths",
      "Smart HVAC & Automation",
    ],
    heroImage: "/images/sunrays-lift-lobby.jpg",
    description:
      "Designed for a leading facility management and technology enterprise. The space integrates flexible work neighborhoods, open collaboration zones, acoustic ceiling baffles, and IoT-enabled HVAC controls.",
    highlights: [
      "35% measured improvement in spatial acoustic performance",
      "Energy-efficient sensor-controlled circadian lighting system",
      "Customized modular workstations with concealed wire management",
    ],
  },
  {
    id: "horizon-penthouse",
    title: "The Horizon Private Residence",
    subtitle: "High-End Minimalist Residential Interior",
    category: "residential",
    location: "South Mumbai",
    year: "2023",
    area: "5,800 sq.ft",
    scope: [
      "Bespoke Teak Joinery",
      "Concealed Ductable Air Conditioning",
      "Italian Marble Book-matching",
      "Home Automation Integration",
    ],
    heroImage: "/images/sunrays-entrance-porch.jpg",
    description:
      "A private residence emphasizing clean lines, tactile materials, and quiet luxury. Every millwork component and wardrobe was custom-fabricated by our in-house master carpenters.",
    highlights: [
      "Zero visible fasteners or hardware across all custom millwork",
      "Acoustically isolated private master suite with triple-glazed facade",
      "Turnkey civil modification and wet area waterproofing guaranteed for 10 years",
    ],
  },
  {
    id: "zenith-wellness",
    title: "Zenith Care & Wellness Clinic",
    subtitle: "Sterile Medical-Grade Interior & Patient Lounge",
    category: "healthcare",
    location: "Thane, Maharashtra",
    year: "2023",
    area: "9,200 sq.ft",
    scope: [
      "Healthcare MEPF & Medical Gases",
      "Anti-Microbial Seamless Flooring",
      "HEPA Filtration & Positive Pressure",
      "Warm Hospitality Patient Suites",
    ],
    heroImage: "/images/sunrays-entrance-lobby.jpg",
    description:
      "Balancing stringent hospital-grade infection control standards with the soothing hospitality ambiance of a boutique retreat. High-efficiency acoustic partitions ensure complete patient confidentiality.",
    highlights: [
      "NABH-compliant zoning and sterile boundary execution",
      "Independent negative pressure isolation consultation chambers",
      "Durable non-porous solid surface counters and wall paneling",
    ],
  },
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<
    "all" | "commercial" | "residential" | "healthcare"
  >("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem>(projects[0]);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* PAGE HEADER / HERO */}
      <section className="relative bg-stone overflow-hidden pt-12 md:pt-20 pb-16 border-b border-rule/60">
        <div className="wrap">
          <div className="max-w-3xl">
            <span className="tab-badge mb-4">Portfolio</span>
            <p className="tagline my-3">
              Craft<b className="text-blue font-bold mx-1">&bull;</b>
              Engineering<b className="text-blue font-bold mx-1">&bull;</b>
              Delivery
            </p>
            <h1 className="font-light text-[38px] sm:text-[50px] lg:text-[62px] leading-[1.08] text-ink my-4">
              Selected Works<span className="dot text-blue font-bold text-[1.2em]">.</span>
            </h1>
            <p className="text-slate text-lg md:text-xl font-light leading-relaxed">
              From corporate headquarters to grand residential society lobbies. Every space is engineered with millimeter precision, delivered turnkey under one accountable team.
            </p>
          </div>

          <div className="mt-10">
            <Measure label="Turnkey interior architecture &amp; fit-outs" />
          </div>
        </div>
        <OutlineA className="outline-a right-4 w-[220px] md:w-[320px] h-auto opacity-40 pointer-events-none" />
      </section>

      {/* FILTER BUTTONS */}
      <section className="bg-white border-b border-rule sticky top-[84px] md:top-[104px] z-30">
        <div className="wrap py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "All Projects" },
              { id: "residential", label: "Residential & Lobbies" },
              { id: "commercial", label: "Corporate & Commercial" },
              { id: "healthcare", label: "Healthcare & Specialized" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 text-xs md:text-sm uppercase tracking-wider font-medium transition-all ${
                  activeFilter === tab.id
                    ? "bg-tab text-white shadow-sm"
                    : "bg-stone/60 text-slate hover:bg-stone hover:text-ink"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <p className="text-xs font-medium tracking-label uppercase text-slate hidden sm:block">
            Showing {filteredProjects.length} completed spaces
          </p>
        </div>
      </section>

      {/* FEATURED CASE STUDY: SUNRAYS C.H.S. LTD */}
      <section className="bg-white py-16 md:py-24 border-b border-rule">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-12">
            <div className="lg:col-span-7">
              <span className="tab-badge mb-3">Flagship Case Study</span>
              <h2 className="font-semibold text-[32px] sm:text-[40px] text-ink mt-3 mb-2">
                Sunrays C.H.S. Ltd
              </h2>
              <p className="label-caps mb-6">
                Entrance porch, double-height main lobby &amp; lift lobby <b className="text-blue mx-1">/</b> Thane
              </p>
              <p className="text-body text-base md:text-lg leading-relaxed font-light mb-6">
                Sunrays C.H.S. Ltd sought a complete modernization of their residential towers&rsquo; arrival sequence. Ina SpaceWorks provided end-to-end design, civil structural reinforcement, MEPF redesign, bespoke joinery, and Italian marble laying, transforming a dated entrance into an elegant, light-filled architectural statement.
              </p>

              {/* Scope Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-stone/70 border border-rule/50">
                  <span className="text-[11px] tracking-label uppercase text-slate block mb-1">
                    Location
                  </span>
                  <span className="text-sm font-medium text-ink">Thane West</span>
                </div>
                <div className="p-3 bg-stone/70 border border-rule/50">
                  <span className="text-[11px] tracking-label uppercase text-slate block mb-1">
                    Carpet Area
                  </span>
                  <span className="text-sm font-medium text-ink">8,500 sq.ft</span>
                </div>
                <div className="p-3 bg-stone/70 border border-rule/50">
                  <span className="text-[11px] tracking-label uppercase text-slate block mb-1">
                    Delivery Model
                  </span>
                  <span className="text-sm font-medium text-ink">Full Turnkey EPC</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-stone p-6 md:p-8 border border-rule">
              <h3 className="font-medium text-lg text-ink mb-4 pb-2 border-b border-rule flex items-center justify-between">
                <span>Key Deliverables</span>
                <Sparkles className="w-4 h-4 text-tab" />
              </h3>
              <ul className="space-y-3.5 text-sm text-body">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-tab shrink-0 mt-0.5" />
                  <span>
                    <strong>Structural Refurbishment:</strong> Cladding of existing load-bearing columns with laser-cut bronze screens and durable stone veneers.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-tab shrink-0 mt-0.5" />
                  <span>
                    <strong>Skylight &amp; Diffused Daylighting:</strong> Natural daylighting design optimized for energy conservation throughout lobby hours.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-tab shrink-0 mt-0.5" />
                  <span>
                    <strong>Custom Security &amp; Concierge Console:</strong> Ergonomic reception desk with integrated CCTV feeds, intercom, and visitor access control.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-tab shrink-0 mt-0.5" />
                  <span>
                    <strong>Facility Handover:</strong> Operation and maintenance protocols coordinated directly with Ina TechFM facility management.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* 4 Photo Showcase Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <figure className="relative h-[340px] sm:h-[440px] overflow-hidden group border border-rule">
              <img
                src="/images/sunrays-main-lobby.jpg"
                alt="Main lobby with skylights, reception desk and lounge seating"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute left-4 bottom-4 bg-stone/95 backdrop-blur-sm px-4 py-2 text-xs font-medium tracking-label uppercase text-slate border border-rule/50">
                01 / Main Lobby Double-Height Volume
              </figcaption>
            </figure>

            <figure className="relative h-[340px] sm:h-[440px] overflow-hidden group border border-rule">
              <img
                src="/images/sunrays-lift-lobby.jpg"
                alt="Lift lobby corridor with marble floor and warm cove lighting"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute left-4 bottom-4 bg-stone/95 backdrop-blur-sm px-4 py-2 text-xs font-medium tracking-label uppercase text-slate border border-rule/50">
                02 / Lift Lobby &amp; Cove Detailing
              </figcaption>
            </figure>

            <figure className="relative h-[340px] sm:h-[440px] overflow-hidden group border border-rule">
              <img
                src="/images/sunrays-entrance-porch.jpg"
                alt="Entrance porch with columns, bronze screen and planters"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute left-4 bottom-4 bg-stone/95 backdrop-blur-sm px-4 py-2 text-xs font-medium tracking-label uppercase text-slate border border-rule/50">
                03 / Entrance Porch &amp; Landscape Drop-off
              </figcaption>
            </figure>

            <figure className="relative h-[340px] sm:h-[440px] overflow-hidden group border border-rule">
              <img
                src="/images/sunrays-entrance-lobby.jpg"
                alt="Entrance lobby with Sunrays signage and lounge"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute left-4 bottom-4 bg-stone/95 backdrop-blur-sm px-4 py-2 text-xs font-medium tracking-label uppercase text-slate border border-rule/50">
                04 / Arrival Portal &amp; Bronze Signage
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ALL PROJECTS GRID */}
      <section className="bg-stone py-20 md:py-28">
        <div className="wrap">
          <div className="max-w-2xl mb-12">
            <span className="tab-badge mb-3">Project Archive</span>
            <h2 className="font-light text-[30px] sm:text-[42px] text-ink my-3">
              Crafted Across Sectors<span className="dot text-blue font-bold text-[1.2em]">.</span>
            </h2>
            <p className="text-slate text-base md:text-lg font-light">
              Explore our ongoing and delivered spatial transformations across corporate, luxury residential, and technical facility domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-rule flex flex-col justify-between hover:shadow-md transition-shadow group"
              >
                <div>
                  <div className="relative h-[240px] overflow-hidden">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 bg-stone/95 backdrop-blur-sm px-3 py-1 text-[11px] font-medium tracking-label uppercase text-ink border border-rule/40">
                      {project.area}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-slate uppercase tracking-wider mb-2">
                      <MapPin className="w-3.5 h-3.5 text-tab" />
                      <span>{project.location}</span>
                    </div>

                    <h3 className="font-medium text-xl text-ink mb-1 group-hover:text-tab transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-tab font-medium uppercase tracking-wider mb-4">
                      {project.subtitle}
                    </p>

                    <p className="text-body text-sm leading-relaxed font-light mb-6 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="space-y-1.5 pt-4 border-t border-rule/60">
                      {project.scope.slice(0, 3).map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-xs text-slate"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 border border-ink text-ink text-xs uppercase font-medium tracking-wider hover:bg-ink hover:text-white transition-colors"
                  >
                    Inquire For Similar Scope
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Measure bar */}
          <div className="mt-16">
            <Measure label="Design • Build • Evolve" centered />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer showContactCTA={true} />
    </>
  );
}

