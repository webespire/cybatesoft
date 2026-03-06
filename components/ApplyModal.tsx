"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";

interface ApplyModalProps {
  show: boolean;
  jobTitle: string;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  mobile: string;
  city: string;
  cv: File | null;
  agree: boolean;
}

const ApplyModal: React.FC<ApplyModalProps> = ({
  show,
  jobTitle,
  onClose,
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobile: "",
    city: "",
    cv: null,
    agree: false,
  });

  if (!show) return null;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files?.[0] || null
          : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log("Form Data:", { ...formData, jobTitle });

    alert("Application Submitted Successfully!");
    onClose();
  };

  return (
    <div
      className="modal d-block"
      style={{
        background: "rgba(0,0,0,0.6)",
        position: "fixed",
        inset: 0,
        zIndex: 1050,
      }}
      onClick={onClose}
    >
      <div
        className="modal-dialog"
        style={{ marginTop: "100px" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">
              Apply for {jobTitle}
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="modal-body">

              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Mobile</label>
                <input
                  type="tel"
                  name="mobile"
                  className="form-control"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">City</label>
                <input
                  type="text"
                  name="city"
                  className="form-control"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  CV (Only .doc/.docx)
                </label>
                <input
                  type="file"
                  name="cv"
                  className="form-control"
                  accept=".doc,.docx"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  name="agree"
                  className="form-check-input"
                  required
                  onChange={handleChange}
                />
                <label className="form-check-label">
                  I agree to terms and conditions
                </label>
              </div>

            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="btn btn-primary"
              >
                Apply
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default ApplyModal;