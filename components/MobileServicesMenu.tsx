"use client";

import { useState } from "react";
import Link from "next/link";

/* ===== TYPES ===== */

export type SubMenu = {
  title: string;
  icon?: string;
  link?: string;
  sub?: SubMenu[];
};

export type ServiceMenu = {
  title: string;
  icon: string;
  link?: string;
  sub?: SubMenu[];
};

export type TechnologyMenu = ServiceMenu;
export type IndustriesMenu = ServiceMenu;
export type IntegrationsMenu = ServiceMenu;
export type SolutionsMenu = ServiceMenu;
export type StoriesMenu = ServiceMenu;

/* ===== PROPS ===== */

type MobileProps = {
  title: string;
  menu:
    | ServiceMenu[]
    | TechnologyMenu[]
    | IndustriesMenu[]
    | IntegrationsMenu[]
    | SolutionsMenu[]
    | StoriesMenu[];
};

/* ===== COMPONENT ===== */

export default function MobileServicesMenu({
  title,
  menu,
}: MobileProps) {
  const [open1, setOpen1] = useState<number | null>(null);
  const [open2, setOpen2] = useState<number | null>(null);
  const [open3, setOpen3] = useState<number | null>(null);

  return (
    <li className="visible-xs mobile-services">

      {/* ===== TITLE ===== */}
      <button
        className="mobile-title"
        onClick={() => setOpen1(open1 === 0 ? null : 0)}
      >
        {title}
      </button>

      {/* ===== LEVEL 1 ===== */}
      {open1 === 0 && (
        <ul className="mobile-level level-1">

          {menu.map((item: ServiceMenu, i: number) => (
            <li key={i}>

              {/* ITEM */}
              <div
                className="mobile-item"
                onClick={() =>
                  setOpen2(open2 === i ? null : i)
                }
              >
                <div className="item-left">
                  <img
                    src={item.icon}
                    alt=""
                    className="item-icon"
                  />
                  <span className="item-text">
                    {item.title}
                  </span>
                </div>

                {item.sub && (
                  <span className="item-arrow">
                    {/* {open2 === i ? "−" : "+"} */}
                  </span>
                )}
              </div>

              {/* ===== LEVEL 2 ===== */}
              {open2 === i && item.sub && (
                <ul className="mobile-level level-2">

                  {item.sub.map((s: SubMenu, j: number) => (
                    <li key={j}>

                      <div
                        className="mobile-item"
                        onClick={() =>
                          setOpen3(
                            open3 === j ? null : j
                          )
                        }
                      >
                        <span className="item-text">
                          {s.title}
                        </span>

                        {s.sub && (
                          <span className="item-arrow">
                            {/* {open3 === j
                              ? "−"
                              : "+"} */}
                          </span>
                        )}
                      </div>

                      {/* ===== LEVEL 3 ===== */}
                      {open3 === j && s.sub && (
                        <ul className="mobile-level level-3">

                          {s.sub.map(
                            (s2: SubMenu, k: number) => (
                              <li key={k}>
                                <Link
                                  href={
                                    s2.link || "#"
                                  }
                                >
                                  {s2.title}
                                </Link>
                              </li>
                            )
                          )}

                        </ul>
                      )}
                    </li>
                  ))}

                </ul>
              )}
            </li>
          ))}

        </ul>
      )}
    </li>
  );
}
