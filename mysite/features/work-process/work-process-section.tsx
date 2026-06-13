import type { CSSProperties } from "react";
import { Section } from "@/components/layout/section";
import {
  workProcessDescription,
  workSteps,
} from "@/lib/content/work-process";

export function WorkProcessSection() {
  return (
    <Section
      id="process"
      title="Как я работаю"
      description={workProcessDescription}
    >
      <div className="process-pipeline glass-surface">
        <div className="process-pipeline__glow" aria-hidden="true" />
        <ol className="process-timeline">
          {workSteps.map((step, index) => {
            const isFirst = index === 0;
            const isLast = index === workSteps.length - 1;

            return (
              <li
                key={step.step}
                className={[
                  "process-step",
                  isFirst ? "process-step--start" : "",
                  isLast ? "process-step--end" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                style={{ "--step-index": index } as CSSProperties}
              >
                <div className="process-step__rail" aria-hidden="true">
                  <span className="process-step__marker">{step.step}</span>
                </div>
                <article className="process-step__card">
                  <span className="process-step__badge">{step.step}</span>
                  <h3 className="process-step__title">{step.title}</h3>
                  <p className="process-step__text">{step.description}</p>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
