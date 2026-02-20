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
  menu: ServiceMenu[];
};

export default function MobileServicesMenu({
  title,
  menu,
}: MobileProps) {
  const [openMain, setOpenMain] = useState(false);
  const [open1, setOpen1] = useState<number | null>(null);
  const [open2, setOpen2] = useState<number | null>(null);
  const [open3, setOpen3] = useState<number | null>(null);

  return (
    <li className="visible-xs mobile-services">
      <button
        className="mobile-title"
        onClick={() => {
          setOpenMain(!openMain);
          setOpen1(null);
          setOpen2(null);
          setOpen3(null);
        }}
      >
        {title}
      </button>

      {openMain && (
        <ul className="mobile-level level-1">
          {menu.map((item, i) => (
            <li key={i}>
              {/* LEVEL 1 ITEM */}
              {item.sub ? (
                <div
                  className="mobile-item"
                  onClick={() =>
                    setOpen1(open1 === i ? null : i)
                  }
                >
                  <div className="item-left">
                    <img
                      src={item.icon}
                      alt=""
                      className="item-icon"
                    />
                    <span>{item.title}</span>
                  </div>
                  <span>{open1 === i ? "−" : "+"}</span>
                </div>
              ) : (
                <Link
                  href={item.link || "#"}
                  className="mobile-item"
                >
                  <div className="item-left">
                    <img
                      src={item.icon}
                      alt=""
                      className="item-icon"
                    />
                    <span>{item.title}</span>
                  </div>
                </Link>
              )}

              {/* LEVEL 2 */}
              {open1 === i && item.sub && (
                <ul className="mobile-level level-2">
                  {item.sub.map((s, j) => (
                    <li key={j}>
                      {s.sub ? (
                        <div
                          className="mobile-item"
                          onClick={() =>
                            setOpen2(
                              open2 === j ? null : j
                            )
                          }
                        >
                          <div className="item-left">
                            {s.icon && (
                              <img
                                src={s.icon}
                                alt=""
                                className="item-icon"
                              />
                            )}
                            <span>{s.title}</span>
                          </div>
                          <span>
                            {open2 === j
                              ? "−"
                              : "+"}
                          </span>
                        </div>
                      ) : (
                        <Link
                          href={s.link || "#"}
                          className="mobile-item"
                        >
                          <div className="item-left">
                            {s.icon && (
                              <img
                                src={s.icon}
                                alt=""
                                className="item-icon"
                              />
                            )}
                            <span>{s.title}</span>
                          </div>
                        </Link>
                      )}

                      {/* LEVEL 3 */}
                      {open2 === j && s.sub && (
                        <ul className="mobile-level level-3">
                          {s.sub.map((s2, k) => (
                            <li key={k}>
                              {s2.sub ? (
                                <div
                                  className="mobile-item"
                                  onClick={() =>
                                    setOpen3(
                                      open3 === k
                                        ? null
                                        : k
                                    )
                                  }
                                >
                                  <div className="item-left">
                                    {s2.icon && (
                                      <img
                                        src={
                                          s2.icon
                                        }
                                        alt=""
                                        className="item-icon"
                                      />
                                    )}
                                    <span>
                                      {s2.title}
                                    </span>
                                  </div>
                                  <span>
                                    {open3 === k
                                      ? "−"
                                      : "+"}
                                  </span>
                                </div>
                              ) : (
                                <Link
                                  href={
                                    s2.link || "#"
                                  }
                                  className="mobile-item"
                                >
                                  <div className="item-left">
                                    {s2.icon && (
                                      <img
                                        src={
                                          s2.icon
                                        }
                                        alt=""
                                        className="item-icon"
                                      />
                                    )}
                                    <span>
                                      {s2.title}
                                    </span>
                                  </div>
                                </Link>
                              )}

                              {/* LEVEL 4 */}
                              {open3 === k &&
                                s2.sub && (
                                  <ul className="mobile-level level-4">
                                    {s2.sub.map(
                                      (
                                        s3,
                                        m
                                      ) => (
                                        <li key={m}>
                                          <Link
                                            href={
                                              s3.link ||
                                              "#"
                                            }
                                            className="mobile-item"
                                          >
                                            <div className="item-left">
                                              {s3.icon && (
                                                <img
                                                  src={
                                                    s3.icon
                                                  }
                                                  alt=""
                                                  className="item-icon"
                                                />
                                              )}
                                              <span>
                                                {
                                                  s3.title
                                                }
                                              </span>
                                            </div>
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
          ))}
        </ul>
      )}
    </li>
  );
}