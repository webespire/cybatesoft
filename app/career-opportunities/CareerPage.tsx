"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";

interface FormData {
  name: string;
  email: string;
  mobile: string;
  city: string;
  file: File | null;
  agree: boolean;
}

export default function CareerPage() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobile: "",
    city: "",
    file: null,
    agree: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formData, file: files ? files[0] : null });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("mobile", formData.mobile);
    data.append("city", formData.city);
    if (formData.file) {
      data.append("file", formData.file);
    }

    const res = await fetch("/api/apply", {
      method: "POST",
      body: data,
    });

    const result = await res.json();
    setLoading(false);

    if (result.success) {
      setSuccessMsg("Thank you! Your application has been submitted.");
      setFormData({
        name: "",
        email: "",
        mobile: "",
        city: "",
        file: null,
        agree: false,
      });
      setTimeout(() => {
        setShowModal(false);
        setSuccessMsg("");
      }, 3000);
    }
  };

  return (
    <>
      <div className="container mt-5">
        <h2>Career Opportunities</h2>

        <button
          className="btn btn-success"
          onClick={() => setShowModal(true)}
        >
          Apply Now
        </button>
      </div>

      {showModal && (
        <div
          className="modal fade in"
          style={{ display: "block", background: "rgba(0,0,0,0.6)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  className="close"
                  onClick={() => setShowModal(false)}
                >
                  ×
                </button>
                <h4 className="modal-title">Apply for Job</h4>
              </div>

              <div className="modal-body">
                {successMsg && (
                  <div className="alert alert-success">
                    {successMsg}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Email</label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Mobile</label>
                    <input
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>City</label>
                    <input
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>CV (Doc/PDF)</label>
                    <input
                      name="file"
                      onChange={handleChange}
                      type="file"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="checkbox">
                    <label>
                      <input
                        name="agree"
                        type="checkbox"
                        checked={formData.agree}
                        onChange={handleChange}
                        required
                      />
                      I agree to terms
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Apply"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}