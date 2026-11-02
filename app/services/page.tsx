import React from "react";
import Link from "next/link";
import OutlineA from "@/components/OutlineA";
import Measure from "@/components/Measure";
import Footer from "@/components/Footer";
import {
  Compass,
  Hammer,
  RefreshCw,
  Wrench,
  CheckCircle2,
  FileCheck2,
  Sliders,
  Shield,
  Zap,
  Wind,
  Layers,
  ArrowRight,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <>
      {/* SERVICES HERO */}
      <section className="relative bg-stone overflow-hidden pt-12 md:pt-20 pb-16 border-b border-rule/60">
        <div className="wrap">
          <div className="max-w-3xl">
            <span className="tab-badge mb-4">What we do</span>
            <p className="tagline my-3">
              Design<b className="text-blue font-bold mx-1">&bull;</b>
              Build<b className="text-blue font-bold mx-1">&bull;</b>
              Evolve
            </p>
            <h1 className="font-light text-[38px] sm:text-[50px] lg:text-[62px] leading-[1.08] text-ink my-4">
              Integrated Design &amp; Build<span className="dot text-blue font-bold text-[1.2em]">.</span>
            </h1>
            <p className="text-slate text-lg md:text-xl font-light leading-relaxed">
              We bridge the gap between architectural imagination and on-site engineering reality. One team carries your project from initial brief to long-term lifecycle care.
            </p>
          </div>

          <div className="mt-10">
            <Measure label="One accountable team from brief to handover" />
          </div>
        </div>
        <OutlineA className="outline-a right-4 w-[220px] md:w-[320px] h-auto opacity-40 pointer-events-none" />
      </section>

      {/* THREE CORE PILLARS DETAIL */}
      <section className="bg-white py-20 md:py-28 border-b border-rule" id="pillars">
        <div className="wrap space-y-24">
          {/* PILLAR 1: DESIGN */}
          <div id="design" className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 text-tab text-xs font-medium tracking-label uppercase mb-3">
                <Compass className="w-4 h-4 text-tab" />
                <span>Pillar 01</span>
              </div>
              <h2 className="font-light text-[34px] sm:text-[44px] text-ink mb-4">
                Design<span className="dot text-blue font-bold text-[1.2em]">.</span>
              </h2>
              <p className="text-body text-base md:text-lg leading-relaxed font-light mb-6">
                Interior architecture starts with rigorous site diagnostics and functional understanding. We avoid superficial styling, focusing instead on spatial optimization, material durability, natural illumination, and precise MEPF coordination before a single hammer is raised.
              </p>
              <div className="p-4 bg-stone border-l-2 border-tab text-sm text-slate">
                &ldquo;A successful space is measured by how seamlessly it performs under daily operational load.&rdquo;
              </div>
            </div>

            <div className="lg:col-span-7 bg-stone/40 p-6 sm:p-8 border border-rule">
              <h3 className="font-medium text-base uppercase tracking-wider text-ink mb-6 pb-2 border-b border-rule">
                Design Scope &amp; Deliverables
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-ink text-sm mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue shrink-0" />
                    Spatial Planning &amp; Test-Fits
                  </h4>
                  <p className="text-xs text-body leading-relaxed">
                    Circulation studies, volumetric analysis, and ergonomic layout modeling to optimize every square foot.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-ink text-sm mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue shrink-0" />
                    3D Visualizations &amp; Renders
                  </h4>
                  <p className="text-xs text-body leading-relaxed">
                    Photorealistic visual renderings, lighting simulations, and material tactile boards for confident decision-making.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-ink text-sm mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue shrink-0" />
                    MEPF &amp; Working Drawings
                  </h4>
                  <p className="text-xs text-body leading-relaxed">
                    Coordinated electrical, plumbing, HVAC ducting, and acoustic engineering blueprints down to millimeter accuracy.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-ink text-sm mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue shrink-0" />
                    Bill of Quantities (BOQ)
                  </h4>
                  <p className="text-xs text-body leading-relaxed">
                    Detailed line-item pricing and material specifications with zero ambiguous contingency clauses.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-rule" />

          {/* PILLAR 2: BUILD */}
          <div id="build" className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 text-tab text-xs font-medium tracking-label uppercase mb-3">
                <Hammer className="w-4 h-4 text-tab" />
                <span>Pillar 02</span>
              </div>
              <h2 className="font-light text-[34px] sm:text-[44px] text-ink mb-4">
                Build<span className="dot text-blue font-bold text-[1.2em]">.</span>
              </h2>
              <p className="text-body text-base md:text-lg leading-relaxed font-light mb-6">
                Execution is where most interior projects stumble due to subcontractor fragmentation. At Ina SpaceWorks, our dedicated civil engineers, master carpenters, and certified MEPF technicians work under single-point project management on site every day.
              </p>
              <div className="p-4 bg-stone border-l-2 border-tab text-sm text-slate">
                &ldquo;No handoff excuses. The team that designed your space is directly responsible for executing it.&rdquo;
              </div>
            </div>

            <div className="lg:col-span-7 bg-stone/40 p-6 sm:p-8 border border-rule">
              <h3 className="font-medium text-base uppercase tracking-wider text-ink mb-6 pb-2 border-b border-rule">
                Turnkey Construction Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-ink text-sm mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue shrink-0" />
                    Turnkey Civil &amp; Structural
                  </h4>
                  <p className="text-xs text-body leading-relaxed">
                    Demolition, structural retrofitting, masonry, screeding, Italian marble laying, and premium tile work.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-ink text-sm mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue shrink-0" />
                    Architectural Joinery &amp; Millwork
                  </h4>
                  <p className="text-xs text-body leading-relaxed">
                    Custom wall paneling, acoustic timber baffles, reception desks, bespoke cabinetry, and metal fabrication.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-ink text-sm mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue shrink-0" />
                    MEPF Infrastructure
                  </h4>
                  <p className="text-xs text-body leading-relaxed">
                    High/low voltage electrical distributions, fire alarm &amp; sprinkler lines, data cabling, and sanitary fixtures.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-ink text-sm mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue shrink-0" />
                    On-Site QA &amp; Safety Compliance
                  </h4>
                  <p className="text-xs text-body leading-relaxed">
                    Strict adherence to labor safety standards, zero-dust barriers, material testing, and weekly progress audits.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-rule" />

          {/* PILLAR 3: EVOLVE */}
          <div id="evolve" className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 text-tab text-xs font-medium tracking-label uppercase mb-3">
                <RefreshCw className="w-4 h-4 text-tab" />
                <span>Pillar 03</span>
              </div>
              <h2 className="font-light text-[34px] sm:text-[44px] text-ink mb-4">
                Evolve<span className="dot text-blue font-bold text-[1.2em]">.</span>
              </h2>
              <p className="text-body text-base md:text-lg leading-relaxed font-light mb-6">
                Most interior contractors disappear the moment the final cheque clears. As an interior vertical of Ina TechFM, we provide seamless lifecycle operations, proactive maintenance, and planned space reconfigurations for years after completion.
              </p>
              <div className="p-4 bg-stone border-l-2 border-tab text-sm text-slate">
                &ldquo;Spaces don&rsquo;t stay static. We build with the lifecycle knowledge of facility engineers.&rdquo;
              </div>
            </div>

            <div className="lg:col-span-7 bg-stone/40 p-6 sm:p-8 border border-rule">
              <h3 className="font-medium text-base uppercase tracking-wider text-ink mb-6 pb-2 border-b border-rule">
                Post-Handover &amp; Facility Continuity
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-ink text-sm mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue shrink-0" />
                    As-Built Documentation
                  </h4>
                  <p className="text-xs text-body leading-relaxed">
                    Accurate digital records of all concealed conduits, valves, plumbing runs, and structural anchors.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-ink text-sm mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue shrink-0" />
                    Ina TechFM Facility Integration
                  </h4>
                  <p className="text-xs text-body leading-relaxed">
                    Direct handoff to certified facility management teams for routine operation and preventive maintenance.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-ink text-sm mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue shrink-0" />
                    Defect Liability &amp; Warranty Care
                  </h4>
                  <p className="text-xs text-body leading-relaxed">
                    Rapid-response support during the defect liability period with scheduled quarterly check-ins.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-ink text-sm mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue shrink-0" />
                    Churn &amp; Space Reconfiguration
                  </h4>
                  <p className="text-xs text-body leading-relaxed">
                    Quick modifications as tenant headcount grows or spatial utilization requirements pivot.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6-STEP DELIVERY PROCESS WORKFLOW */}
      <section className="bg-stone py-20 md:py-28 border-b border-rule">
        <div className="wrap">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="tab-badge">Our Methodology</span>
            <h2 className="font-light text-[32px] sm:text-[42px] text-ink mt-4 mb-3">
              How We Deliver Turnkey Spaces<span className="dot text-blue font-bold text-[1.2em]">.</span>
            </h2>
            <p className="text-slate text-base md:text-lg font-light">
              A structured 6-phase engineering workflow designed to eliminate budget overruns and schedule delays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Brief",
                desc: "Site survey, structural inspection, MEPF capacity review, budget alignment, and stakeholder requirement gathering.",
              },
              {
                step: "02",
                title: "Spatial Concept & 3D",
                desc: "Space allocation, material palette selection, photorealistic 3D visualization, and client feedback iterations.",
              },
              {
                step: "03",
                title: "Detailed Engineering & BOQ",
                desc: "Architectural & MEPF working drawings, statutory fire compliance check, fixed-price itemized BOQ sign-off.",
              },
              {
                step: "04",
                title: "Turnkey Site Execution",
                desc: "Civil work, structural retrofits, electrical cabling, HVAC ducting, bespoke joinery fabrication, and painting.",
              },
              {
                step: "05",
                title: "Quality Audit & Snagging",
                desc: "Multi-point QA checklist, air balancing, lux level verification, electrical load tests, and zero-defect snagging.",
              },
              {
                step: "06",
                title: "Handover & Evolve",
                desc: "Official handover, as-built documentation delivery, operational training, and facility management alignment.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white p-8 border border-rule relative group hover:border-tab transition-colors"
              >
                <span className="text-3xl font-light text-tab/80 font-mono block mb-3">
                  {item.step}
                </span>
                <h3 className="text-lg font-semibold text-ink mb-2">
                  {item.title}
                </h3>
                <p className="text-body text-xs md:text-sm font-light leading-relaxed">
                  {item.desc}
                </p>
                <div className="w-8 h-[2px] bg-tab mt-6 group-hover:w-full transition-all duration-300" />
              </div>
            ))}
          </div>

          <div className="mt-16">
            <Measure label="Disciplined execution from concept to handover" centered />
          </div>
        </div>
      </section>

      {/* SPECIALIZED CAPABILITIES STRIP */}
      <section className="bg-white py-20">
        <div className="wrap">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="tab-badge">Specialized Units</span>
              <h2 className="font-semibold text-2xl md:text-3xl text-ink mt-3 mb-1">
                Engineering Support Services
              </h2>
              <p className="label-caps">
                Available as standalone solutions or bundled within turnkey contracts
              </p>
            </div>
            <Link href="/contact" className="btn-primary text-xs">
              Request Service Quote
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-stone/50 border border-rule">
              <Wrench className="w-8 h-8 text-tab mb-4" />
              <h3 className="font-medium text-base text-ink mb-2">
                Repair &amp; Maintenance
              </h3>
              <p className="text-xs text-body font-light leading-relaxed">
                Emergency civil repairs, tile replacements, waterproofing, marble polishing, and interior refurbishments.
              </p>
            </div>

            <div className="p-6 bg-stone/50 border border-rule">
              <Layers className="w-8 h-8 text-tab mb-4" />
              <h3 className="font-medium text-base text-ink mb-2">
                Custom Joinery &amp; Millwork
              </h3>
              <p className="text-xs text-body font-light leading-relaxed">
                In-house architectural woodcraft, reception consoles, veneer wall paneling, and bespoke acoustic baffles.
              </p>
            </div>

            <div className="p-6 bg-stone/50 border border-rule">
              <Zap className="w-8 h-8 text-tab mb-4" />
              <h3 className="font-medium text-base text-ink mb-2">
                MEPF Infrastructure
              </h3>
              <p className="text-xs text-body font-light leading-relaxed">
                Complete mechanical, electrical, plumbing, low-voltage ELV, and fire fighting network execution.
              </p>
            </div>

            <div className="p-6 bg-stone/50 border border-rule">
              <Wind className="w-8 h-8 text-tab mb-4" />
              <h3 className="font-medium text-base text-ink mb-2">
                HVAC &amp; Ventilation
              </h3>
              <p className="text-xs text-body font-light leading-relaxed">
                VRV/VRF systems, ductable AC, air balancing, HEPA filtration, and indoor air quality management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer showContactCTA={true} />
    </>
  );
}

