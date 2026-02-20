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
    <Image src="/images/th_logo.png" className="img-responsive banner_img" width={1351} height={120} alt="Customization"/>
    <div className="banner_heading">
        <div className="container">
            <h2>Travel & Hospitality</h2>
        </div>
    </div>
</div>

<div className="container">
    <div className="row">
      
        <div className="col-md-9">
            <div className="left_panel">
                <div className="inner_devolopment">
                    <h2>Industry {">>"} Travel & Hospitality</h2>
                    <h4>Using Integrated ERP Systems to Improve Operations and Visitor Experiences</h4>
                    <p>Hotels, resorts, travel agencies, and tour operators can increase operational efficiency, streamline operations, and improve guest experiences with CybateSoft's Travel & Hospitality ERP Solutions. Our ERP systems offer a smooth and data-driven method of managing travel and hospitality enterprises by combining reservations, front-office, finance, inventory, and customer management onto a single platform.</p>
                    <p>To meet guest expectations and sustain profitability, the travel and hospitality sector requires real-time insights, operational agility, and personalized service. These issues are resolved by CybateSoft's ERP solutions, which automate intricate processes, facilitate effective resource management, and offer thorough departmental visibility. Our systems eliminate operational bottlenecks so that companies can concentrate on providing exceptional experiences.</p>
                </div>

                <div className="row">
                    <div className="col-md-7 col-sm-12">
                        <div className="inner_devolopment">
                            <h3>Our Travel & Hospitality ERP Solution Services</h3>
                            <ul className="listing_content">
                                <li><i className="fa lccr fa-chevron-circle-right"></i> Front-office and reservation management: streamline booking procedures and enhance visitor check-in and check-out experiences.</li>
                                <li><i className="fa lccr fa-chevron-circle-right"></i> Finance & Cost Accounting: Get up-to-date information on costs and profitability.</li>
                                <li><i className="fa lccr fa-chevron-circle-right"></i> Front-office and reservation management: streamline booking procedures and enhance visitor check-in and check-out experiences.</li>
                                <li><i className="fa lccr fa-chevron-circle-right"></i> Inventory and resource management: Effectively oversee accommodations, facilities, and travel-related assets.</li>
                                <li><i className="fa lccr fa-chevron-circle-right"></i> Customer relationship management (CRM): Customize visitor interactions and foster greater loyalty.</li>
                                <li><i className="fa lccr fa-chevron-circle-right"></i> Integration of Billing and Finance: Automate accounting, payment, and invoicing procedures.</li>
                                <li><i className="fa lccr fa-chevron-circle-right"></i> Tour & Package Planning: Simplify the coordination of travel packages and itinerary management.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-5 col-sm-12">
                        <div className="img-btn_center">
                            <Image src="/images/th.png" alt="Automotive ERP Solution" className="img-responsive"  width={261} height={209}/>
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
                                <p>CybateSoft's ERP systems are built for performance and scalability, allowing CPG companies to effectively manage product lifecycles, comply with regulatory requirements, and quickly adjust to market trends. Our solutions use cloud, analytics, and automation technologies to improve customer satisfaction, increase productivity, and streamline processes while keeping costs down.</p>
                            </div>
                            <div className="col-md-6">
                                <ul className="listing_content">
                                    <li><i className="fa lccr fa-chevron-circle-right"></i> Barcode and labeling integration</li>
                                    <li><i className="fa lccr fa-chevron-circle-right"></i> Production cost optimization</li>
                                    <li><i className="fa lccr fa-chevron-circle-right"></i> Retailer and distributor management</li>
                                    <li><i className="fa lccr fa-chevron-circle-right"></i> Real-time stock visibility</li>

                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="img-btn_center">
                        <Image className="img-responsive wd100" src="/images/th1.png" alt="Automotive Manufacturing ERP"  width={848} height={132}/>
                        <div className="img_btn_link2">
                            <Link href="/portfolio-php" className="btn btn-success">View Portfolio</Link>
                        </div>
                    </div>
                </div>

                <div className="inner_devolopment">
                    
                    <div className="inner_devolopment2">
                        <div className="row">
                            <div className="col-md-6">
                                <p>The travel and hospitality ERP solutions from CybateSoft revolutionize how businesses run their operations and engage with visitors. We assist companies in achieving smooth operations, excellent visitor experiences, and quantifiable growth by fusing technology with operational best practices. Businesses in the travel and hospitality sectors can increase productivity, improve brand recognition, and keep a competitive edge in a market that is changing quickly with CybateSoft.</p>
                            </div>
                            <div className="col-md-6">
                                <ul className="listing_content">
                                    <li><i className="fa lccr fa-chevron-circle-right"></i> Reservation and booking management</li>
                                    <li><i className="fa lccr fa-chevron-circle-right"></i> Batch and expiry tracking</li>
                                    <li><i className="fa lccr fa-chevron-circle-right"></i> Retailer and distributor management</li>
                                    <li><i className="fa lccr fa-chevron-circle-right"></i> Real-time stock visibility</li>
                                    <li><i className="fa lccr fa-chevron-circle-right"></i> Order processing automation</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="img-btn_center">
                        <Image className="img-responsive wd100" src="/images/th2.png" alt="Automotive ERP Dashboard"  width={848} height={132}/>
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
                        <li role="presentation"><Link href="/industry/automotive"> Automotive</Link></li>
                        <li role="presentation"><Link href="/industry/banking"> Banking</Link></li>
                        <li role="presentation"><Link href="/industry/consumer-packaged-goods"> Consumer packaged Goods</Link></li>
                        <li role="presentation"><Link href="/industry/e-commerce"> E-Commerce</Link></li>
                        <li role="presentation"><Link href="/industry/education-publishing"> Education Publishing</Link></li>
                        <li role="presentation"><Link href="/industry/manufacturing"> Manufacturing</Link></li>
                        <li role="presentation"><Link href="/industry/retail"> Retail</Link></li>
                        <li role="presentation" className="active"><Link href="/industry/travel-hospitality"> Travel & Hospitality</Link></li>
                    </ul>
                </div>
            </div>
        </div>
       
    </div>
</div>

    </>
  )
}
