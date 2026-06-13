import type { ProjectMockupType } from "@/lib/content/projects";

type ProjectMockupProps = {
  type: ProjectMockupType;
  featured?: boolean;
  compact?: boolean;
};

function mockupClassName(featured: boolean, compact: boolean) {
  return [
    "project-mockup",
    featured ? "project-mockup--featured" : "",
    compact ? "project-mockup--compact" : "",
  ]
    .filter(Boolean)
    .join(" ");
}

export function ProjectMockup({
  type,
  featured = false,
  compact = false,
}: ProjectMockupProps) {
  const baseClass = mockupClassName(featured, compact);

  if (type === "crm") {
    return (
      <div className={`${baseClass} project-mockup--crm`} aria-hidden="true">
        <div className="project-mockup__chrome">
          <div className="project-mockup__dots" />
          <div className="project-mockup__url" />
          <div className="project-mockup__pill">CRM / ITSM</div>
        </div>
        <div className="project-mockup__crm-layout">
          <div className="project-mockup__crm-sidebar">
            <div className="project-mockup__crm-nav project-mockup__crm-nav--active" />
            <div className="project-mockup__crm-nav" />
            <div className="project-mockup__crm-nav" />
            <div className="project-mockup__crm-nav" />
          </div>
          <div className="project-mockup__crm-main">
            <div className="project-mockup__crm-metrics">
              {["Открыто", "В работе", "SLA"].map((label, index) => (
                <div key={label} className="project-mockup__crm-metric">
                  <span className="project-mockup__crm-metric-label">{label}</span>
                  <span className="project-mockup__crm-metric-value">
                    {index === 0 ? "24" : index === 1 ? "11" : "98%"}
                  </span>
                </div>
              ))}
            </div>
            <div className="project-mockup__crm-board">
              {[
                { title: "Новые", count: 5, tone: "primary" },
                { title: "В работе", count: 8, tone: "secondary" },
                { title: "На проверке", count: 3, tone: "accent" },
                { title: "Готово", count: 12, tone: "muted" },
              ].map((column) => (
                <div
                  key={column.title}
                  className={`project-mockup__crm-column project-mockup__crm-column--${column.tone}`}
                >
                  <div className="project-mockup__crm-column-head">
                    <span>{column.title}</span>
                    <span>{column.count}</span>
                  </div>
                  <div className="project-mockup__crm-ticket" />
                  <div className="project-mockup__crm-ticket project-mockup__crm-ticket--short" />
                  {featured && column.tone !== "muted" ? (
                    <div className="project-mockup__crm-ticket project-mockup__crm-ticket--accent" />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "ecommerce") {
    return (
      <div className={`${baseClass} project-mockup--ecommerce`} aria-hidden="true">
        <div className="project-mockup__chrome">
          <div className="project-mockup__dots" />
          <div className="project-mockup__url" />
          <div className="project-mockup__pill">Каталог</div>
        </div>
        <div className="project-mockup__ecom-toolbar">
          <div className="project-mockup__ecom-search" />
          <div className="project-mockup__ecom-cart">Корзина · 3</div>
        </div>
        <div className="project-mockup__ecom-grid">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="project-mockup__ecom-card">
              <div className="project-mockup__ecom-image" />
              <div className="project-mockup__ecom-line" />
              <div className="project-mockup__ecom-price" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "onboarding") {
    return (
      <div className={`${baseClass} project-mockup--onboarding`} aria-hidden="true">
        <div className="project-mockup__chrome">
          <div className="project-mockup__dots" />
          <div className="project-mockup__url" />
          <div className="project-mockup__pill">Onboarding</div>
        </div>
        <div className="project-mockup__onb-steps">
          {["Шаг 1", "Шаг 2", "Шаг 3"].map((step, index) => (
            <div
              key={step}
              className={`project-mockup__onb-step ${
                index === 1 ? "project-mockup__onb-step--active" : ""
              }`}
            >
              {step}
            </div>
          ))}
        </div>
        <div className="project-mockup__onb-panel">
          {["Профиль стажёра", "Onboarding-путь", "Материалы курса"].map(
            (row, index) => (
              <div key={row} className="project-mockup__onb-row">
                <span
                  className={`project-mockup__onb-dot project-mockup__onb-dot--${
                    index === 0 ? "accent" : index === 1 ? "primary" : "secondary"
                  }`}
                />
                <span>{row}</span>
              </div>
            ),
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`${baseClass} project-mockup--uikit`} aria-hidden="true">
      <div className="project-mockup__chrome">
        <div className="project-mockup__dots" />
        <div className="project-mockup__url" />
        <div className="project-mockup__pill">UI-kit</div>
      </div>
      <div className="project-mockup__uikit-grid">
        <div className="project-mockup__uikit-panel">
          <div className="project-mockup__uikit-btn project-mockup__uikit-btn--primary" />
          <div className="project-mockup__uikit-btn project-mockup__uikit-btn--ghost" />
          <div className="project-mockup__uikit-btn project-mockup__uikit-btn--muted" />
        </div>
        <div className="project-mockup__uikit-panel">
          <div className="project-mockup__uikit-line" />
          <div className="project-mockup__uikit-input" />
          <div className="project-mockup__uikit-pills">
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  );
}
