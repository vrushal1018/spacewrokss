"use client";

import React, { useState } from "react";
import OutlineA from "@/components/OutlineA";
import Measure from "@/components/Measure";
import Footer from "@/components/Footer";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  CheckCircle2,
  Send,
  HelpCircle,
  ChevronDown,
  Building2,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "Corporate Office / Commercial",
    carpetArea: "3,000 - 10,000 sq.ft",
    timeline: "Next 1-3 Months",
    location: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful form dispatch
    setSubmitted(true);
  };

  const faqs = [
    {
      q: "How does the turnkey model differ from hiring an independent architect?",
      a: "With an independent architect, you still have to independently bid, hire, and supervise civil contractors, electricians, plumbers, and carpenters. In our turnkey model, Ina SpaceWorks assumes end-to-end legal and operational accountability from initial concept drawings through to on-site civil delivery and final handover. You get a single point of responsibility, a fixed budget, and guaranteed timelines.",
    },
    {
      q: "Can you take over projects that are already partially designed?",
      a: "Yes. We frequently collaborate with client-appointed design consultants to provide comprehensive turnkey execution, cost engineering (BOQ audits), and MEPF integration.",
    },
    {
      q: "How is the Bill of Quantities (BOQ) priced?",
      a: "Every BOQ prepared by Ina SpaceWorks is fully itemized by material specifications, brand names, thickness, and certified testing standards. We do not provide vague lumped estimates; you see exactly where every rupee is invested.",
    },
    {
      q: "What post-handover warranty or support do you provide?",
      a: "All our turnkey projects include a comprehensive defect liability period backed by warranty documentation. Furthermore, because we are the interior vertical of Ina TechFM, our clients can seamlessly transition into long-term facility management and maintenance agreements.",
    },
  ];

  return (
    <>
      {/* CONTACT HERO */}
      <section className="relative bg-stone overflow-hidden pt-12 md:pt-20 pb-16 border-b border-rule/60">
        <div className="wrap">
          <div className="max-w-3xl">
            <span className="tab-badge mb-4">Contact &amp; Consultation</span>
            <p className="tagline my-3">
              Design<b className="text-blue font-bold mx-1">&bull;</b>
              Build<b className="text-blue font-bold mx-1">&bull;</b>
              Evolve
            </p>
            <h1 className="font-light text-[38px] sm:text-[50px] lg:text-[62px] leading-[1.08] text-ink my-4">
              Let&rsquo;s Build Your Space<span className="dot text-blue font-bold text-[1.2em]">.</span>
            </h1>
            <p className="text-slate text-lg md:text-xl font-light leading-relaxed">
              Have an upcoming site handover or planning an interior transformation? Share your site details and our team will get in touch within 24 hours.
            </p>
          </div>

          <div className="mt-10">
            <Measure label="Turnkey consultation &amp; feasibility" />
          </div>
        </div>
        <OutlineA className="outline-a right-4 w-[220px] md:w-[320px] h-auto opacity-40 pointer-events-none" />
      </section>

      {/* INTERACTIVE FORM & DIRECT DETAILS GRID */}
      <section className="bg-white py-16 md:py-24 border-b border-rule">
        <div className="wrap grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Interactive Project Inquiry Form */}
          <div className="lg:col-span-7 bg-stone/40 p-8 md:p-10 border border-rule">
            <span className="tab-badge mb-3">Project Brief</span>
            <h2 className="font-semibold text-2xl md:text-3xl text-ink mt-2 mb-2">
              Start a Project Enquiry
            </h2>
            <p className="text-slate text-sm font-light mb-8">
              Fill in your spatial scope below for a tailored initial feasibility review and estimate.
            </p>

            {submitted ? (
              <div className="bg-white p-8 border-2 border-tab text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-tab mx-auto" />
                <h3 className="text-xl font-medium text-ink">
                  Enquiry Received
                </h3>
                <p className="text-sm text-body font-light max-w-md mx-auto">
                  Thank you, <strong>{formData.name || "valued client"}</strong>. Our principal project team has received your brief and will contact you via {formData.email || "email"} / {formData.phone || "phone"} shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn-outline text-xs mt-4"
                >
                  Submit Another Project Brief
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium tracking-label uppercase text-slate mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-white border border-rule px-4 py-3 text-sm text-ink placeholder-slate/50 focus:outline-none focus:border-tab"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium tracking-label uppercase text-slate mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      placeholder="e.g. Acme Corp / Housing Society"
                      className="w-full bg-white border border-rule px-4 py-3 text-sm text-ink placeholder-slate/50 focus:outline-none focus:border-tab"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium tracking-label uppercase text-slate mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="name@company.com"
                      className="w-full bg-white border border-rule px-4 py-3 text-sm text-ink placeholder-slate/50 focus:outline-none focus:border-tab"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium tracking-label uppercase text-slate mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+91 98765 43210"
                      className="w-full bg-white border border-rule px-4 py-3 text-sm text-ink placeholder-slate/50 focus:outline-none focus:border-tab"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium tracking-label uppercase text-slate mb-2">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({ ...formData, projectType: e.target.value })
                      }
                      className="w-full bg-white border border-rule px-4 py-3 text-sm text-ink focus:outline-none focus:border-tab"
                    >
                      <option>Corporate Office / Commercial</option>
                      <option>Residential Lobby / Society Common Areas</option>
                      <option>High-End Luxury Residence</option>
                      <option>Healthcare / Specialized Facility</option>
                      <option>Renovation &amp; Maintenance</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium tracking-label uppercase text-slate mb-2">
                      Estimated Carpet Area
                    </label>
                    <select
                      value={formData.carpetArea}
                      onChange={(e) =>
                        setFormData({ ...formData, carpetArea: e.target.value })
                      }
                      className="w-full bg-white border border-rule px-4 py-3 text-sm text-ink focus:outline-none focus:border-tab"
                    >
                      <option>Under 3,000 sq.ft</option>
                      <option>3,000 - 10,000 sq.ft</option>
                      <option>10,000 - 25,000 sq.ft</option>
                      <option>25,000+ sq.ft</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium tracking-label uppercase text-slate mb-2">
                      Project Location / City
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })
                      }
                      placeholder="e.g. Thane / BKC / Navi Mumbai"
                      className="w-full bg-white border border-rule px-4 py-3 text-sm text-ink placeholder-slate/50 focus:outline-none focus:border-tab"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium tracking-label uppercase text-slate mb-2">
                      Target Execution Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) =>
                        setFormData({ ...formData, timeline: e.target.value })
                      }
                      className="w-full bg-white border border-rule px-4 py-3 text-sm text-ink focus:outline-none focus:border-tab"
                    >
                      <option>Immediate (Ready to Start)</option>
                      <option>Next 1-3 Months</option>
                      <option>3-6 Months</option>
                      <option>Feasibility &amp; Budgeting Stage</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium tracking-label uppercase text-slate mb-2">
                    Project Scope &amp; Notes
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about the current state of the space, specific architectural goals, or structural requirements..."
                    className="w-full bg-white border border-rule px-4 py-3 text-sm text-ink placeholder-slate/50 focus:outline-none focus:border-tab resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full sm:w-auto"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Project Brief</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Office Contact & Coordinates */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-stone p-8 border border-rule">
              <span className="tab-badge mb-3">Office Location</span>
              <h3 className="font-medium text-xl text-ink mt-2 mb-4">
                Headquarters
              </h3>

              <div className="space-y-6 text-sm text-body">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-tab shrink-0 mt-1" />
                  <div>
                    <strong className="text-ink block mb-0.5">Physical Address</strong>
                    <p className="font-light leading-relaxed">
                      1st Floor, C-Wing, MBC Park, G.B. Road,
                      <br />
                      Kasarvadavli, Thane West 400 615, Maharashtra
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-tab shrink-0 mt-1" />
                  <div>
                    <strong className="text-ink block mb-0.5">Telephone</strong>
                    <a
                      href="tel:+919156802555"
                      className="text-ink hover:text-tab font-medium transition-colors"
                    >
                      +91 9156 802 555
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-tab shrink-0 mt-1" />
                  <div>
                    <strong className="text-ink block mb-0.5">Project Correspondence</strong>
                    <a
                      href="mailto:jaisalil.s@inaspaceworks.com"
                      className="text-tab hover:text-ink font-medium transition-colors"
                    >
                      jaisalil.s@inaspaceworks.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Globe className="w-5 h-5 text-tab shrink-0 mt-1" />
                  <div>
                    <strong className="text-ink block mb-0.5">Official Website</strong>
                    <a
                      href="https://inaspaceworks.com"
                      className="text-ink hover:text-tab transition-colors"
                    >
                      inaspaceworks.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-tab shrink-0 mt-1" />
                  <div>
                    <strong className="text-ink block mb-0.5">Operating Hours</strong>
                    <p className="font-light">
                      Monday to Saturday: 9:30 AM &ndash; 6:30 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Parent Organization Card */}
            <div className="p-6 bg-white border border-rule">
              <span className="text-xs uppercase tracking-label font-medium text-slate block mb-2">
                Parent Vertical
              </span>
              <h4 className="font-medium text-base text-ink mb-2">
                An interior vertical of Ina TechFM
              </h4>
              <p className="text-xs text-body font-light leading-relaxed mb-4">
                Ina TechFM delivers pan-India facility management, MEPF engineering, and workplace operations for top-tier corporate campuses and residential societies.
              </p>
              <a
                href="https://inatechfm.com"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium tracking-wider uppercase text-tab hover:text-ink transition-colors"
              >
                Visit inatechfm.com &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ ACCORDION SECTION */}
      <section className="bg-stone py-20 md:py-28 border-b border-rule">
        <div className="wrap max-w-4xl">
          <div className="text-center mb-14">
            <span className="tab-badge">Common Questions</span>
            <h2 className="font-light text-[30px] sm:text-[40px] text-ink mt-3 mb-2">
              Frequently Asked Questions<span className="dot text-blue font-bold text-[1.2em]">.</span>
            </h2>
            <p className="text-slate text-sm md:text-base font-light">
              Clear answers regarding our turnkey process, contracts, and timelines.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-rule transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 font-medium text-ink text-base md:text-lg focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-tab shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm md:text-base text-body font-light leading-relaxed border-t border-rule/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-16">
            <Measure label="Design • Build • Evolve" centered />
          </div>
        </div>
      </section>

      {/* FOOTER (CTA hidden since already on Contact page) */}
      <Footer showContactCTA={false} />
    </>
  );
}

