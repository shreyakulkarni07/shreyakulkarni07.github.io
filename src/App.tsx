import { Github, Linkedin } from "lucide-react";

export default function App() {
  return (
    <main className="bg-white text-slate-900">
      <div className="max-w-3xl mx-auto px-6 py-20">
        {/* INTRO */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold leading-tight">
            Shreya Kulkarni Nizampetkar
          </h1>

          <p className="mt-2 text-slate-600">Pega PRPC Developer · Cognizant</p>

          <p className="mt-6 text-slate-700 leading-relaxed">
            Pega-certified developer with over 3 years of experience designing,
            developing, and supporting enterprise-scale Pega PRPC applications
            within the telecom domain. I have worked extensively on Verizon
            programs at Cognizant, building high-volume, decision-driven
            workflows with strong guardrail compliance and production stability.
          </p>

          <p className="mt-4 text-slate-700 leading-relaxed">
            My expertise spans Pega case management, rule design, decisioning,
            system integrations, and performance optimization. I focus on
            delivering scalable, maintainable solutions that align business
            requirements with technical best practices.
          </p>

          <div className="mt-6 flex items-center gap-6 text-sm">
            <a href="/Shreya Kulkarni Nizampetkar - Resume.pdf" download className="underline">
              Download Resume
            </a>

            <a
              href="https://github.com/nshreyak"
              target="_blank"
              className="flex items-center gap-2 hover:text-slate-600"
            >
              <Github size={18} />
              /shreyakulkarni07
            </a>

            <a
              href="https://www.linkedin.com/in/shreyakulkarni07"
              target="_blank"
              className="flex items-center gap-2 hover:text-slate-600"
            >
              <Linkedin size={18} />
              /nshreyak
            </a>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold mb-4">Experience</h2>

          <div>
            <p className="font-medium">
              Associate — Cognizant Technology Solutions
            </p>
            <p className="text-sm text-slate-600">
              Oct 2022 – Present · Hyderabad
            </p>

            <ul className="mt-4 list-disc list-inside text-slate-700 space-y-2">
              <li>
                Designed, developed, and maintained enterprise Pega PRPC
                applications for Verizon, supporting high-volume telecom
                workflows across web, POS, and representative-assisted channels.
              </li>
              <li>
                Implemented case management workflows, rule logic, and
                decisioning using When rules, activities, declarative rules, and
                decision tables in alignment with Pega guardrails.
              </li>
              <li>
                Reduced development effort by <strong>30%</strong> through
                reusable activity snippets, standardized rule patterns, and
                optimized class structures.
              </li>
              <li>
                Improved application quality by increasing guardrail compliance
                by <strong>20%</strong> and reducing production escalations.
              </li>
              <li>
                Performed advanced debugging and root cause analysis using
                Tracer, Clipboard, and Rules Inspector, achieving a
                <strong> 90%</strong> issue resolution rate within SLA
                timelines.
              </li>
            </ul>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold mb-4">Projects</h2>

          <div className="space-y-12">
            {/* PROJECT 1 */}
            <div>
              <p className="font-medium">Profile Update — Verizon</p>
              <p className="text-sm text-slate-600">Pega PRPC 8.7</p>

              <p className="mt-3 text-slate-700 leading-relaxed">
                Profile Update is an enterprise application that enables
                existing users to securely update personal information such as
                user ID, email address, and password. The solution orchestrates
                downstream system integrations after successful Cassandra
                database updates, ensuring transactional consistency and data
                integrity.
              </p>

              <ul className="mt-4 list-disc list-inside text-slate-700 space-y-2">
                <li>
                  Implemented automated decision-making and routing using When
                  rules and conditional logic to streamline request processing.
                </li>
                <li>
                  Designed a reusable business logic framework leveraging
                  activities, embedded pages, and declarative rules, reducing
                  error rates by <strong>40%</strong>.
                </li>
                <li>
                  Coordinated system integrations and transaction completion
                  flows with downstream services.
                </li>
                <li>
                  Designed and executed a comprehensive unit testing strategy
                  covering 200+ scenarios, significantly reducing post-release
                  defects.
                </li>
              </ul>
            </div>

            {/* PROJECT 2 */}
            <div>
              <p className="font-medium">
                Transfer Your Service (TYS) — Verizon
              </p>
              <p className="text-sm text-slate-600">Pega PRPC 8.7</p>

              <p className="mt-3 text-slate-700 leading-relaxed">
                Transfer Your Service is a multi-channel telecom application
                that enables mobile number ownership transfer between users
                while retaining existing promotions and offers. Requests can be
                initiated via web, POS, and assisted channels.
              </p>

              <ul className="mt-4 list-disc list-inside text-slate-700 space-y-2">
                <li>
                  Analyzed business requirements and translated them into
                  scalable Pega rule designs, reducing functional error rates by{" "}
                  <strong>20%</strong>.
                </li>
                <li>
                  Designed and implemented over 50 business rules across flows,
                  activities, and decision tables, improving processing time by{" "}
                  <strong>40%</strong>.
                </li>
                <li>
                  Developed SQL connectors and RDB methods to integrate external
                  databases in alignment with project RuleSets.
                </li>
                <li>
                  Contributed to class structure and RuleSet design to ensure
                  long-term maintainability and scalability.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold mb-4">
            Skills & Certifications
          </h2>

          <p className="text-slate-700">
            <strong>Pega Platform:</strong> Pega PRPC, Case Management,
            Decisioning, Rule Design, Guardrails, Flows, Activities, Declarative
            Rules, Integrations
          </p>

          <p className="mt-2 text-slate-700">
            <strong>Tools & Technologies:</strong> Tracer, Clipboard, Rules
            Inspector, SQL Connectors, RDB Methods
          </p>

          <p className="mt-2 text-slate-700">
            <strong>Programming & Databases:</strong> Java, JavaScript, HTML,
            MySQL
          </p>

          <p className="mt-2 text-slate-700">
            <strong>Certifications:</strong> Pega Certified System Architect
            (CSA), Pega Certified Senior System Architect (CSSA), Pega Certified
            Decisioning Consultant (PCDC)
          </p>
        </section>

        {/* WHY ME */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Why Hire Me</h2>

          <p className="text-slate-700 leading-relaxed">
            I bring strong ownership, architectural thinking, and enterprise
            delivery experience to every assignment. I focus on building Pega
            solutions that are not only functionally correct, but also scalable,
            maintainable, and aligned with guardrail best practices.
          </p>

          <p className="mt-3 text-slate-700 leading-relaxed">
            I am comfortable working across the full delivery lifecycle — from
            requirement analysis and design to development, testing, and
            production support — and I consistently deliver measurable
            improvements in performance, quality, and reliability.
          </p>
        </section>
      </div>
    </main>
  );
}
