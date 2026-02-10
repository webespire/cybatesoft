"use client";

import React, { useState } from "react";

export default function Page() {
  const images: string[] = [
    "/images/events/cybatesoft-12.jpg",
    "/images/events/cybatesoft-6.jpg",
    "/images/events/cybatesoft-5.jpg",
    "/images/events/cybatesoft-7.jpg",
    "/images/events/cybatesoft-13.jpg",
    "/images/events/1.jpg",
    "/images/events/2.jpg",
    "/images/events/4.jpg",
  ];

  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const next = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      {/* ===== Gallery ===== */}
      <div className="container-fluid">
        <ul className="row gap_img_low" style={{ listStyle: "none" }}>
          {images.map((img: string, index: number) => (
            <li className="col-md-4" key={index}>
              <img
                src={img}
                className="img-responsive gallery-img"
                onClick={() => openModal(index)}
                alt=""
              />
            </li>
          ))}
        </ul>
      </div>

      {/* ===== Modal ===== */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <img
              src={images[currentIndex]}
              className="modal-image"
              alt=""
            />

            {/* Controls */}
            <div className="modal-controls">
              {currentIndex > 0 && (
                <span className="prev" onClick={prev}>
                  « prev
                </span>
              )}

              {currentIndex < images.length - 1 && (
                <span className="next" onClick={next}>
                  next »
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
