"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";

interface FormData {
  name: string;
  email: string;
  subject: string;
  telephone: string;
  message: string;
}

export default function QuoteForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    telephone: "",
    message: "",
  });

  const [success, setSuccess] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess("");

    const res = await fetch("/api/send-quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      setSuccess("Thank you! Your inquiry has been submitted successfully.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        telephone: "",
        message: "",
      });
    } else {
      setSuccess("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <div className="clearfix"></div>

      <div className="inner_page_banner">
        <Image
          src="/images/request a qoute.jpg"
          className="img-responsive banner_img"
          width={1351}
          height={120}
          alt="Request a Quote"
        />

        <div className="banner_heading">
          <div className="container">
            <h2> Request a Quote</h2>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="tab-content">
            <div className="col-md-9">
              <div className="left_panel">
                <div className="inner_devolopment">
                  <h2>Request a Quote (For Business Inquiry)</h2>
                </div>
              </div>

              <div className="col-md-8">
                {success && (
                  <div style={{ color: "green", marginBottom: "15px" }}>
                    {success}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Name: *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Email: *</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Subject: *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone: *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Comments: *</label>
                    <textarea
                      className="form-control"
                      rows={3}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="SUBMIT INQUIRY"
                  />
                </form>
              </div>
            </div>

            <div className="col-md-3">
              <h3>Follow Us On</h3>
              <div className="social">
                <Link href="https://www.facebook.com/">
                  <i className="fa fa-facebook fa-2x social-icon"></i>
                </Link>
                <Link href="https://twitter.com/">
                  <i className="fa fa-twitter fa-2x social-icon"></i>
                </Link>
                <Link href="https://in.linkedin.com/">
                  <i className="fa fa-linkedin fa-2x social-icon"></i>
                </Link>
                <Link
                    href="https://plus.google.com"
                  >
                    <i className="fa fa-google-plus fa-2x social-icon"></i>
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}