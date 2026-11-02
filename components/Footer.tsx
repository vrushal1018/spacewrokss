import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Measure from "./Measure";
import OutlineA from "./OutlineA";

interface FooterProps {
  showContactCTA?: boolean;
}

export default function Footer({ showContactCTA = true }: FooterProps) {
  return (
    <footer className="relative bg-stone overflow-hidden border-t border-rule/60">
      <div className="wrap pt-16 md:pt-24 pb-12">
        {showContactCTA && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-16 md:mb-24">
            <div className="lg:col-span-5 flex flex-col items-start">
              <span className="tab-badge mb-4">Contact</span>
              <h2 className="font-light text-[34px] sm:text-[44px] lg:text-[54px] leading-[1.1] my-4 text-ink">
                Let&rsquo;s build<br />
                your space<span className="dot text-blue font-bold text-[1.2em]">.</span>
              </h2>
              <p className="text-slate text-base md:text-lg mb-8 max-w-md leading-relaxed">
                From preliminary feasibility and conceptual design to complete turnkey fit-out and lifetime support.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Start a project
                </Link>
                <a
                  href="tel:+919156802555"
                  className="btn-outline"
                >
                  Call +91 9156 802 555
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-end">
              <dl className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-x-8 gap-y-5 text-base md:text-lg">
                <dt className="text-[12px] font-medium tracking-label uppercase text-slate sm:pt-1">
                  Visit
                </dt>
                <dd className="m-0 leading-relaxed text-ink font-light">
                  1st Floor, C-Wing, MBC Park, G.B. Road,
                  <br />
                  Kasarvadavli, Thane West 400 615
                </dd>

                <dt className="text-[12px] font-medium tracking-label uppercase text-slate sm:pt-1">
                  Call
                </dt>
                <dd className="m-0 leading-relaxed">
                  <a
                    href="tel:+919156802555"
                    className="text-ink hover:text-tab font-medium transition-colors"
                  >
                    +91 9156 802 555
                  </a>
                </dd>

                <dt className="text-[12px] font-medium tracking-label uppercase text-slate sm:pt-1">
                  Write
                </dt>
                <dd className="m-0 leading-relaxed">
                  <a
                    href="mailto:jaisalil.s@inaspaceworks.com"
                    className="text-ink hover:text-tab font-medium transition-colors"
                  >
                    jaisalil.s@inaspaceworks.com
                  </a>
                </dd>

                <dt className="text-[12px] font-medium tracking-label uppercase text-slate sm:pt-1">
                  Vertical
                </dt>
                <dd className="m-0 leading-relaxed text-slate font-light">
                  Interior vertical of Ina TechFM (<a href="https://inatechfm.com" target="_blank" rel="noreferrer" className="text-tab underline">inatechfm.com</a>)
                </dd>
              </dl>
            </div>
          </div>
        )}

        {/* Measure Line with Ina TechFM Blue Dimension Ticks */}
        <div className="my-8">
          <Measure label="An interior vertical of Ina TechFM" />
        </div>

        {/* Brand & Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-6 text-[13px] text-slate">
          <div className="flex items-center gap-6">
            <Link href="/" aria-label="Ina SpaceWorks Home">
              <Logo className="w-[120px] md:w-[140px] h-auto" />
            </Link>
            <div className="hidden sm:block h-4 w-px bg-rule" />
            <p className="tagline hidden sm:block">
              Design<b className="text-blue font-bold mx-1">&bull;</b>
              Build<b className="text-blue font-bold mx-1">&bull;</b>
              Evolve
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-[13px]">
            <Link href="/work" className="hover:text-tab transition-colors">
              Work
            </Link>
            <Link href="/services" className="hover:text-tab transition-colors">
              Services
            </Link>
            <Link href="/about" className="hover:text-tab transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-tab transition-colors">
              Contact
            </Link>
            <span className="text-slate/70">
              &copy; {new Date().getFullYear()} Ina SpaceWorks. All rights reserved.
            </span>
          </div>
        </div>
      </div>
      <OutlineA className="outline-a right-6 w-[200px] md:w-[280px] h-auto opacity-40 pointer-events-none" />
    </footer>
  );
}

