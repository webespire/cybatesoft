import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "Contact Us",
  description:
    "An another open source project of Codeigniter with Bootstrap. It is a Lightweight MVC package for you to build your own Custom CMS.",
    keywords: [
        "Codeigniter CMS", "Custom CMS", "Customised Content Management System", "Lightweight CMS", "Tiny CMS", "Flexible CMS", "Download CMS", "Bootstrap CMS", "Mobile CMS", "Responsive CMS"
    ],
  openGraph: {
    title: "",
    description:
      "",
  },
};

export default function page() {
  return (
    <>
     <div className="clearfix"></div>
<div className="inner_page_banner">
    <Image src="/images/auto_top.png" className="img-responsive banner_img" width={1351} height={120} alt="Customization"/>
    <div className="banner_heading">
        <div className="container">
            <h2>Automotive</h2>
        </div>
    </div>
</div>

<div className="container">
    <div className="row">
      
        <div className="col-md-9">
            <div className="left_panel">
                <div className="inner_devolopment">
                    <h2>Industry {">>"} Automotive</h2>
                    <h4>Streamlining Dealership, Supply Chain, and Manufacturing Operations</h4>
                    <p>CybateSoft’s Automotive ERP Solutions empower manufacturers, suppliers, and dealerships to achieve end-to-end operational efficiency. Designed for the dynamic automotive industry, our ERP systems simplify complex production cycles, improve collaboration, and offer real-time insights across all business functions.</p>
                    <p>Our integrated ERP platform unites manufacturing, inventory, procurement, sales, finance, and quality control into one intelligent ecosystem. This holistic approach enables businesses to make faster, data-driven decisions while minimizing waste, optimizing resource utilization, and enhancing customer satisfaction.</p>
                </div>

                <div className="row">
                    <div className="col-md-7 col-sm-12">
                        <div className="inner_devolopment">
                            <h3>Our Automotive Services</h3>
                            <ul className="listing_content">
                                <li><i className="fa lccr fa-chevron-circle-right"></i> Production Planning & Control: Optimize production schedules, reduce downtime, and maintain quality consistency.</li>
                                <li><i className="fa lccr fa-chevron-circle-right"></i> Inventory & Material Management: Gain real-time visibility of stock levels and minimize material shortages or overstocking.</li>
                                <li><i className="fa lccr fa-chevron-circle-right"></i> Supplier & Vendor Coordination: Streamline supplier communication, automate purchase orders, and enhance vendor relationships.</li>
                                <li><i className="fa lccr fa-chevron-circle-right"></i> Sales & Distribution Management: Monitor dealership performance and accelerate order-to-delivery cycles.</li>
                                <li><i className="fa lccr fa-chevron-circle-right"></i> AI-Driven Insights: Use predictive analytics to forecast demand, plan resources, and improve decision-making accuracy.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-5 col-sm-12">
                        <div className="img-btn_center">
                            <Image src="/images/Auto.png" alt="Automotive ERP Solution" width={260} height={209} className="img-responsive"/>
                            <div className="img_btn_link">
                                <Link href="/portfolio-php" className="btn btn-success">View Portfolio</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="inner_devolopment">
                    <div className="inner_devolopment2">
                        <div className="row">
                            <div className="col-md-6">
                                <p>CybateSoft transforms automotive operations by connecting every function—from production and logistics to sales and after-sales service—into one intelligent platform. Our ERP systems help automakers enhance efficiency, cut costs, and deliver superior customer experiences while adapting to market demands.</p>
                            </div>
                            <div className="col-md-6">
                                <ul className="listing_content">
                                    <li><i className="fa lccr fa-chevron-circle-right"></i> Production Planning</li>
                                    <li><i className="fa lccr fa-chevron-circle-right"></i> Inventory Optimization</li>
                                    <li><i className="fa lccr fa-chevron-circle-right"></i> Procurement Management</li>
                                    <li><i className="fa lccr fa-chevron-circle-right"></i> Distribution Tracking</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="img-btn_center">
                        <Image className="img-responsive wd100" src="/images/auto2.png" width={848} height={132} alt="Automotive Manufacturing ERP"/>
                        <div className="img_btn_link2">
                            <Link href="/portfolio-php" className="btn btn-success">View Portfolio</Link>
                        </div>
                    </div>
                </div>

                <div className="inner_devolopment">
                    <h3>Comprehensive ERP for Automotive Manufacturing</h3>
                    <div className="inner_devolopment2">
                        <div className="row">
                            <div className="col-md-6">
                                <p>Our Automotive ERP system covers the full spectrum of business operations—manufacturing, procurement, logistics, finance, sales, and service management. It ensures real-time collaboration between departments, improved quality control, and seamless data sharing across the enterprise.</p>
                                <p>By integrating automation, analytics, and cloud technology, CybateSoft delivers scalable and future-ready ERP solutions that empower automotive businesses to innovate faster and stay ahead of the competition.</p>
                            </div>
                            <div className="col-md-6">
                                <ul className="listing_content">
                                    <li><i className="fa lccr fa-chevron-circle-right"></i> Logistics & Distribution</li>
                                    <li><i className="fa lccr fa-chevron-circle-right"></i> Demand Forecasting</li>
                                    <li><i className="fa lccr fa-chevron-circle-right"></i> Quality Management</li>
                                    <li><i className="fa lccr fa-chevron-circle-right"></i> Finance & Cost Tracking</li>
                                    <li><i className="fa lccr fa-chevron-circle-right"></i> After-Sales Service</li>
                                    <li><i className="fa lccr fa-chevron-circle-right"></i> Real-Time Reporting</li>
                                    <li><i className="fa lccr fa-chevron-circle-right"></i> Cloud Integration</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="img-btn_center">
                        <Image className="img-responsive wd100" src="/images/auto1.png" width={848} height={132} alt="Automotive ERP Dashboard"/>
                        <div className="img_btn_link2">
                            <Link href="/portfolio-php" className="btn btn-success">View Portfolio</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        <div className="col-md-3">
            <div className="right_panel">
                <div className="right_panel_heading">
                    <h3>Programming Platforms</h3>
                </div>
                 <div className="programming_platforms_list">
                    <ul className="nav nav-pills nav-stacked" id="tab">
                        <li role="presentation" className="active"><Link href="/industry/automotive"> Automotive</Link></li>
                        <li role="presentation" ><Link href="/industry/banking"> Banking</Link></li>
                        <li role="presentation" ><Link href="/industry/consumer-packaged-goods"> Consumer packaged Goods</Link></li>
                        <li role="presentation" ><Link href="/industry/e-commerce"> E-Commerce</Link></li>
                        <li role="presentation" ><Link href="/industry/education-publishing"> Education Publishing</Link></li>
                        <li role="presentation" ><Link href="/industry/manufacturing"> Manufacturing</Link></li>
                        <li role="presentation"><Link href="/industry/retail"> Retail</Link></li>
                        <li role="presentation" ><Link href="/industry/travel-hospitality"> Travel & Hospitality</Link></li>
                    </ul>
                </div>
            </div>
        </div>
       
    </div>
</div>
    </>
  )
}
