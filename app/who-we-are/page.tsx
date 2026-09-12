import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Who We Are",
  description:
    "An another open source project of Codeigniter with Bootstrap. It is a Lightweight MVC package for you to build your own Custom CMS.",
  keywords: [
    "Codeigniter CMS",
    "Custom CMS",
    "Customised Content Management System",
    "Lightweight CMS",
    "Tiny CMS",
    "Flexible CMS",
    "Download CMS",
    "Bootstrap CMS",
    "Mobile CMS",
    "Responsive CMS",
  ],
  openGraph: {
    title: "",
    description: "",
  },
};

export default function page() {
  return (
    <>
      <div className="clearfix"></div>
      <div className="inner_page_banner">
        <Image
          src="/images/about us.JPG"
          className="img-responsive banner_img"
          width={1351}
          height={156}
          alt="who we are"
        />

        <div className="banner_heading">
          <div className="container">
            <h2>Who We are</h2>
            <p></p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="tab-content">
            <div className="col-md-9">
              <div className="left_panel">
                <div className="inner_devolopment">
                  <h2>Who We are</h2>
                </div>
              </div>
              <div className="inner_page_pad">
                <div className="inner_devolopment">
                  <h3>Connecting Business, Technology & Innovation</h3>
                  <p>
                    Founded in 2013, CybateSoft is a global technology solutions
                    and digital transformation company helping organizations
                    modernize their operations, strengthen their technology
                    environment, and create connected digital experiences.
                  </p>
                  <p>
                    We combine
                    <b>
                      {" "}
                      business consulting, enterprise applications, software
                      engineering, cloud, AI, cybersecurity, data, automation,
                      integration, web, and mobile technologies
                    </b>{" "}
                    to deliver practical solutions built around our clients'
                    business objectives.
                  </p>
                  <p>
                    From transforming ERP and CRM platforms to developing custom
                    applications, integrating enterprise systems, automating
                    processes, securing digital environments, and building
                    modern customer experiences, we help organizations use
                    technology to operate smarter, respond faster, and grow with
                    confidence
                  </p>
                  <h2>Our Technology Expertise</h2>
                  <h3>Microsoft Dynamics 365 & Business Applications</h3>
                  <p>
                    We help organizations implement, modernize, integrate,
                    customize, and support Microsoft business applications.
                  </p>
                  <ul>
                    <li className="p-1">Dynamics 365 Finance & Operations</li>
                    <li className="p-1">Supply Chain Management</li>
                    <li className="p-1">Warehouse Management</li>
                    <li className="p-1">Manufacturing & Production</li>
                    <li className="p-1">Procurement & Sourcing</li>
                    <li className="p-1">Inventory & Planning</li>
                    <li className="p-1">Product Information Management</li>
                    <li className="p-1">Dynamics 365 Sales</li>
                    <li className="p-1">Dynamics 365 Customer Service</li>
                    <li className="p-1">Customer Engagement & CRM</li>
                    <li className="p-1">Dynamics 365 Business Central</li>
                    <li className="p-1">
                      Dynamics AX modernization and migration
                    </li>
                  </ul>
                  <p>
                    We connect business processes across finance, supply chain,
                    operations, sales, customer service, and commerce.
                  </p>
                </div>
                <div className="inner_devolopment">
                  <h3>Connecting Business, Technology & Innovation</h3>
                  <p>
                    Founded in 2013, CybateSoft is a global technology solutions
                    and digital transformation company helping organizations
                    modernize their operations, strengthen their technology
                    environment, and create connected digital experiences.
                  </p>
                  <p>
                    We combine
                    <b>
                      {" "}
                      business consulting, enterprise applications, software
                      engineering, cloud, AI, cybersecurity, data, automation,
                      integration, web, and mobile technologies
                    </b>{" "}
                    to deliver practical solutions built around our clients'
                    business objectives.
                  </p>
                  <p>
                    From transforming ERP and CRM platforms to developing custom
                    applications, integrating enterprise systems, automating
                    processes, securing digital environments, and building
                    modern customer experiences, we help organizations use
                    technology to operate smarter, respond faster, and grow with
                    confidence
                  </p>

                  <h3>Microsoft Power Platform</h3>
                  <p>
                    We extend business applications through low-code
                    development, automation, analytics, and connected data.
                  </p>
                  <ul>
                    <li className="p-1">Power Apps</li>
                    <li className="p-1">Power Automate</li>
                    <li className="p-1"> Power BI</li>
                    <li className="p-1"> Power Pages</li>
                    <li className="p-1">Dataverse</li>
                    <li className="p-1">Copilot Studio</li>
                    <li className="p-1">Business process automation</li>
                    <li className="p-1">Workflow solutions</li>
                    <li className="p-1">Enterprise dashboards</li>
                  </ul>

                  <h3>AI & Intelligent Solutions</h3>
                  <p>
                    We help businesses identify practical opportunities to apply
                    artificial intelligence to their operations and
                    applications.
                  </p>
                  <ul>
                    <li className="p-1">Generative AI</li>
                    <li className="p-1">AI assistants</li>
                    <li className="p-1">Enterprise chatbots</li>
                    <li className="p-1">Intelligent document processing</li>
                    <li className="p-1">AI-powered search</li>
                    <li className="p-1">Predictive analytics</li>
                    <li className="p-1">Intelligent automation</li>
                    <li className="p-1">AI-enabled applications</li>
                    <li className="p-1">Machine learning solutions</li>
                    <li className="p-1">
                      AI integration with enterprise systems
                    </li>
                  </ul>
                  <h3>Cloud & Modern Technology</h3>
                  <p>
                    We help organizations adopt and optimize cloud technologies
                    to build scalable and flexible technology environments.
                  </p>
                  <ul>
                    <li className="p-1">Cloud application development</li>
                    <li className="p-1">Cloud migration</li>
                    <li className="p-1">Cloud integration</li>
                    <li className="p-1">Microsoft Azure solutions</li>
                    <li className="p-1">Cloud infrastructure</li>
                    <li className="p-1">Application modernization</li>
                    <li className="p-1">Cloud-based data solutions</li>
                    <li className="p-1">Hybrid technology environments</li>
                  </ul>
                  <h3>Cybersecurity</h3>
                  <p>
                    Security is an essential part of every modern technology
                    environment.
                  </p>
                  <p>
                    CybateSoft helps organizations strengthen their
                    applications, infrastructure, data, and digital operations
                    through:
                  </p>
                  <ul>
                    <li className="p-1">Cybersecurity assessments</li>
                    <li className="p-1">Application security</li>
                    <li className="p-1">Cloud security</li>
                    <li className="p-1">Identity and access management</li>
                    <li className="p-1">Security monitoring</li>
                    <li className="p-1">Vulnerability assessment</li>
                    <li className="p-1">Data protection</li>
                    <li className="p-1">Security best practices</li>
                    <li className="p-1">Risk assessment</li>
                    <li className="p-1">
                      Security-focused solution architecture
                    </li>
                    <li className="p-1">
                      Security awareness and operational guidance
                    </li>
                  </ul>
                  <p>
                    We consider security throughout the technology
                    lifecycle—from design and development to deployment and
                    ongoing operations.
                  </p>
                  <h3>Enterprise Integration</h3>
                  <p>
                    We connect applications and data across the organization to
                    create reliable digital processes
                  </p>
                  <ul>
                    <li className="p-1">ERP & CRM integration</li>
                    <li className="p-1">API development</li>
                    <li className="p-1">REST APIs</li>
                    <li className="p-1">E-commerce integration</li>
                    <li className="p-1">Shopify & Magento integration</li>
                    <li className="p-1">EDI solutions</li>
                    <li className="p-1">Warehouse & logistics integration</li>
                    <li className="p-1">Payment integrations</li>
                    <li className="p-1">Shipping & carrier integrations</li>
                    <li className="p-1">Third-party application integration</li>
                    <li className="p-1">Cloud integration</li>
                    <li className="p-1">Data synchronization</li>
                  </ul>
                  <h3>Custom Software Development</h3>
                  <p>
                    When standard applications cannot meet a specific business
                    requirement, we build solutions around the organization's
                    processes.
                  </p>
                  <ul>
                    <li className="p-1">Enterprise applications</li>
                    <li className="p-1">Custom business applications</li>
                    <li className="p-1">SaaS platforms</li>
                    <li className="p-1">Business portals</li>
                    <li className="p-1">Customer portals</li>
                    <li className="p-1">Vendor portals</li>
                    <li className="p-1">Workflow applications</li>
                    <li className="p-1">API-driven applications</li>
                    <li className="p-1">Legacy application modernization</li>
                    <li className="p-1">Industry-specific solutions</li>
                  </ul>
                  <h3>Web &amp; Digital Solutions</h3>
                  <p>
                    We create modern digital experiences that help businesses
                    engage customers and operate online.
                  </p>
                  <ul>
                    <li className="p-1">Corporate websites</li>
                    <li className="p-1">Custom web applications</li>
                    <li className="p-1">E-commerce platforms</li>
                    <li className="p-1">Customer portals</li>
                    <li className="p-1">Responsive websites</li>
                    <li className="p-1">UI/UX design</li>
                    <li className="p-1">Digital platforms</li>
                    <li className="p-1">Business dashboards</li>
                    <li className="p-1">Content management solutions</li>
                    <li className="p-1">Website modernization</li>
                  </ul>
                  <h3>Mobile Solutions</h3>
                  <p>
                    We develop mobile applications that bring business processes
                    and services directly to employees and customers.
                  </p>
                  <ul>
                    <li className="p-1">Enterprise mobile applications</li>
                    <li className="p-1">Customer applications</li>
                    <li className="p-1">Field service applications</li>
                    <li className="p-1">Warehouse applications</li>
                    <li className="p-1">Inventory applications</li>
                    <li className="p-1">Delivery and logistics applications</li>
                    <li className="p-1">Mobile business solutions</li>
                    <li className="p-1">Mobile-enabled workflows</li>
                  </ul>
                  <h3>Data &amp; Analytics</h3>
                  <p>
                    We help organizations turn business data into useful
                    information for better decisions.
                  </p>
                  <ul>
                    <li className="p-1">Business intelligence</li>
                    <li className="p-1">Power BI</li>
                    <li className="p-1">Data integration</li>
                    <li className="p-1">Data visualization</li>
                    <li className="p-1">Operational dashboards</li>
                    <li className="p-1">Reporting solutions</li>
                    <li className="p-1">Data analytics</li>
                    <li className="p-1">Data modernization</li>
                    <li className="p-1">Business performance insights</li>
                  </ul>
                  <h3>DevOps &amp; Application Support</h3>
                  <p>
                    Technology requires continuous management after it goes
                    live.
                  </p>
                  <p>Our capabilities include:</p>
                  <ul>
                    <li className="p-1">Application support</li>
                    <li className="p-1">Production support</li>
                    <li className="p-1">Performance optimization</li>
                    <li className="p-1">Release management</li>
                    <li className="p-1">Deployment support</li>
                    <li className="p-1">Environment management</li>
                    <li className="p-1">Monitoring</li>
                    <li className="p-1">Troubleshooting</li>
                    <li className="p-1">Application maintenance</li>
                    <li className="p-1">Continuous improvement</li>
                  </ul>
                  <b>
                    From Business Challenge to Technology Solution <br />
                    Understand. Design. Build. Secure. Improve. <br />
                    Understand
                  </b>
                  <p className="py-2">
                    We start with your business objectives, processes, users,
                    technology environment, and challenges.
                  </p>
                  <b>Design </b>
                  <p>
                    We create a technology strategy and solution architecture
                    aligned with your requirements, security needs, and future
                    growth.{" "}
                  </p>
                  <b>Build</b>
                  <p>
                    Our teams configure, develop, integrate, test, and deploy
                    the solution using the right technologies.{" "}
                  </p>
                  <b>Secure</b>
                  <p>
                    Security, data protection, access, and operational
                    reliability are considered throughout the solution
                    lifecycle.{" "}
                  </p>
                  <b>Improve</b>
                  <p>
                    We continue to support, optimize, automate, modernize, and
                    enhance solutions as business and technology requirements
                    evolve.{" "}
                  </p>
                  <h3>Why CybateSoft?</h3>

                  <b>Broad Technology Expertise</b>
                  <p>
                    From Dynamics 365 and CRM to AI, cloud, cybersecurity, data,
                    integration, web, mobile, and custom software, our teams
                    bring multiple technology capabilities together.
                  </p>

                  <b>Business-Focused Solutions</b>
                  <p>
                    We begin with the business problem and then identify the
                    technology that can solve it effectively.
                  </p>

                  <b>Connected Technology</b>
                  <p>
                    We help organizations connect applications, data, people,
                    and processes rather than creating isolated systems.
                  </p>

                  <b>Security-Minded Approach</b>
                  <p>
                    We consider security and data protection as fundamental
                    components of modern technology solutions.
                  </p>

                  <b>Innovation With Purpose</b>
                  <p>
                    We adopt emerging technologies such as AI, automation,
                    cloud, and modern application development when they can
                    create meaningful business value.
                  </p>

                  <b>Long-Term Partnership</b>
                  <p>
                    Our relationship extends beyond project delivery. We support
                    organizations through implementation, optimization,
                    modernization, integration, support, and continuous
                    improvement.
                  </p>
                </div>
              </div>
              <div className="map">
                <Image
                  src="/images/about-us.jpg"
                  width="690"
                  height="540"
                  alt="About Us Image"
                  className="img-responsive"
                />
              </div>
              <div className="">
                <div className="inner_devolopment">
                  <h3>Our Vision</h3>

                  <p>
                    <strong>
                      To help organizations transform through innovative,
                      secure, and practical technology solutions that create
                      lasting business value.
                    </strong>
                  </p>

                  <p>
                    We aim to turn complex business challenges into
                    opportunities through technology, human expertise,
                    collaboration, and continuous innovation.
                  </p>

                  <ul>
                    <li className="p-1">
                      <strong>Drive Business Transformation</strong> – Use
                      modern technologies to help organizations simplify
                      operations, improve customer experiences, and achieve
                      their business goals.
                    </li>

                    <li className="p-1">
                      <strong>Innovate for the Future</strong> – Continuously
                      explore emerging technologies such as AI, cloud,
                      automation, Dynamics 365, and modern application
                      development to create solutions that support our clients'
                      evolving needs.
                    </li>

                    <li className="p-1">
                      <strong>Build for Long-Term Growth</strong> – Develop
                      scalable, secure, and adaptable technology solutions that
                      grow with our clients and their businesses.
                    </li>

                    <li className="p-1">
                      <strong>Turn Challenges Into Opportunities</strong> –
                      Combine technology expertise, business knowledge, and
                      human creativity to transform complex business challenges
                      into practical solutions.
                    </li>
                  </ul>
                  <h3>Our Values</h3>

                  <p>
                    <strong>Integrity</strong> - We build relationships through
                    honesty, transparency, accountability, and trust.
                  </p>

                  <p>
                    <strong>Collaboration</strong> - We work as an extension of
                    our clients' teams and believe the best solutions come from
                    working together.
                  </p>

                  <p>
                    <strong>Innovation</strong>
                  </p>

                  <p>
                    We continuously explore new technologies and ideas while
                    remaining focused on practical business outcomes.
                  </p>

                  <p>
                    <strong>Security</strong>
                  </p>

                  <p>
                    We respect the importance of protecting business systems,
                    information, and customer data.
                  </p>

                  <p>
                    <strong>Customer Success</strong>
                  </p>

                  <p>
                    Our success is measured by the value and outcomes our
                    solutions deliver—not simply by completing a project.
                  </p>

                  <p>
                    <strong>Continuous Improvement</strong>
                  </p>

                  <p>
                    We continuously learn, improve, and adapt our solutions as
                    our clients and technology evolve.
                  </p>
                  <h3>One Technology Partner. Multiple Possibilities.</h3>

                  <p>
                    From{" "}
                    <strong>
                      Microsoft Dynamics 365 and Customer Engagement
                    </strong>{" "}
                    to
                    <strong>
                      {" "}
                      Power Platform, AI, Cloud, Cybersecurity, Data &amp;
                      Analytics, Enterprise Integration, Custom Software, Web,
                      Mobile, and IT Support
                    </strong>
                    , CybateSoft brings together the technology expertise
                    organizations need to modernize and grow.
                  </p>

                  <p>
                    <strong>
                      We don't just deliver technology. We help businesses
                      transform challenges into opportunities, connect systems
                      and people, and build solutions for what's next.
                    </strong>
                  </p>

                  <p>
                    <strong>Let's Build What's Next</strong>
                  </p>

                  <a href="#" className="btn btn-primary">
                    <strong>Talk to CybateSoft →</strong>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="right_panel">
                <div className="right_panel_heading">
                  <h3>Company</h3>
                </div>
                <div className="programming_platforms_list">
                  <ul className="nav nav-pills nav-stacked " id="tab">
                    <li role="presentation" className="active">
                      <Link href="/who-we-are"> Who We are</Link>
                    </li>
                    <li role="presentation">
                      <Link href="/our-work-process">Our Work Process</Link>
                    </li>
                    <li role="presentation">
                      <Link href="/faqs">FAQs</Link>
                    </li>
                    <li role="presentation">
                      <Link href="/why-cybatesoft">Why CybateSoft</Link>
                    </li>
                    <li role="presentation">
                      <Link href="/our-quality-policy">
                        {" "}
                        Our Quality Policy
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="right_panel_heading">
                  <h3>Request Information</h3>
                </div>
                <div className="programming_platforms_list">
                  <p>
                    {" "}
                    Please complete our request information form and our
                    consulting representative shall get in touch with you
                    shortly.
                  </p>
                  <ul className="nav nav-pills nav-stacked " id="tab">
                    <li role="presentation" className="active">
                      <Link href="/request-a-quote">Request a Quote</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
