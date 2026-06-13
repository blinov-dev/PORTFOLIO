"use client";

import { useMemo, useState } from "react";
import type { ServiceTask } from "@/lib/content/services";
import { serviceTasks } from "@/lib/content/services";

type ServicesInteractiveProps = {
  tasks?: ServiceTask[];
};

function TaskDetails({ task }: { task: ServiceTask }) {
  return (
    <article className="services-details__card">
      <h3 className="services-details__title">{task.title}</h3>
      <p className="services-details__text">{task.description}</p>
      <div className="services-details__capabilities">
        <p className="services-details__capabilities-label">Что могу сделать</p>
        <ul className="services-details__list">
          {task.capabilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function ServicesInteractive({
  tasks = serviceTasks,
}: ServicesInteractiveProps) {
  const [activeId, setActiveId] = useState(tasks[0]?.id ?? "");
  const [openMobileId, setOpenMobileId] = useState<string | null>(
    tasks[0]?.id ?? null,
  );

  const activeTask = useMemo(
    () => tasks.find((task) => task.id === activeId) ?? tasks[0],
    [activeId, tasks],
  );

  if (!activeTask) {
    return null;
  }

  return (
    <div className="services-tasks glass-surface">
      <div className="services-tasks__glow" aria-hidden="true" />

      <div className="services-tasks__desktop hidden lg:grid">
        <div
          role="tablist"
          aria-label="Frontend-задачи"
          className="services-tabs"
        >
          {tasks.map((task) => {
            const isActive = task.id === activeId;
            const tabId = `service-tab-${task.id}`;
            const panelId = `service-panel-${task.id}`;

            return (
              <button
                key={task.id}
                type="button"
                role="tab"
                id={tabId}
                aria-selected={isActive}
                aria-controls={panelId}
                tabIndex={isActive ? 0 : -1}
                className={[
                  "services-tab",
                  isActive ? "services-tab--active" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => setActiveId(task.id)}
              >
                <span className="services-tab__title">{task.title}</span>
              </button>
            );
          })}
        </div>

        <div
          key={activeTask.id}
          role="tabpanel"
          id={`service-panel-${activeTask.id}`}
          aria-labelledby={`service-tab-${activeTask.id}`}
          className="services-details"
        >
          <TaskDetails task={activeTask} />
        </div>
      </div>

      <div className="services-accordion lg:hidden">
        {tasks.map((task) => {
          const isOpen = task.id === openMobileId;
          const triggerId = `service-accordion-trigger-${task.id}`;
          const panelId = `service-accordion-panel-${task.id}`;

          return (
            <div
              key={task.id}
              className={[
                "services-accordion__item",
                isOpen ? "services-accordion__item--open" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <button
                type="button"
                id={triggerId}
                className="services-accordion__trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() =>
                  setOpenMobileId((current) =>
                    current === task.id ? null : task.id,
                  )
                }
              >
                <span className="services-accordion__trigger-text">
                  {task.title}
                </span>
                <span className="services-accordion__chevron" aria-hidden="true" />
              </button>
              <div
                id={panelId}
                className={[
                  "services-accordion__panel",
                  isOpen ? "services-accordion__panel--open" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                aria-hidden={!isOpen}
              >
                <div className="services-accordion__panel-content">
                  <div className="services-accordion__panel-inner">
                    <TaskDetails task={task} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
