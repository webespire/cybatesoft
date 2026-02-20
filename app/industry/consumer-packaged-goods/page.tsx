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
    <Image src="/images/cpg_top.png" className="img-responsive banner_img" width={1351} height={120} alt="Customization"/>
    <div className="banner_heading">
        <div className="container">
            <h2>Consumer Packaged Goods (CPG)</h2>
        </div>
    </div>
</div>

<div className="container">
    <div className="row">
       
        <div className="col-md-9">
            <div className="left_panel">
                <div className="inner_devolopment">
                    <h2>Industry {">>"} Consumer Packaged Goods (CPG)</h2>
                    <h4>ERP Systems for Supply Chain, Production, and Customer Engagement Optimization</h4>
                    <p>Manufacturers, distributors, and retailers can increase supply chain efficiency, improve customer relations, and streamline production with CybateSoft's Consumer Packaged Goods (CPG) ERP Solutions. Our ERP systems give CPG businesses total operational visibility, enabling them to precisely and nimbly handle everything from product delivery to procurement.</p>
                    <p>Increasing competition, changing consumer preferences, and shifting market conditions are some of the ongoing issues facing the CPG sector. By combining production, inventory, logistics, finance, and customer management into a single digital ecosystem, CybateSoft's ERP solutions tackle these challenges. This integration facilitates real-time decision-making, lowers manual error rates, and guarantees data accuracy.</p>
                </div>

                <div className="row">
                    <div className="col-md-7 col-sm-12">
                        <div className="inner_devolopment">
                            <h3>Our Offerings for CPG</h3>
                            <ul className="listing_content">
                                <li><i className="fa lccr fa-chevron-circle-right"></i> Production Planning & Control: Guarantee timely delivery and effective manufacturing.</li>
                                <li><i className="fa lccr fa-chevron-circle-right"></i> Inventory and Warehouse Management: Preserve precise stock levels and cut down on waste.</li>
                                <li><i className="fa lccr fa-chevron-circle-right"></i> Procurement and Vendor Coordination: Streamline supplier communications and sourcing procedures.</li>
                                <li><i className="fa lccr fa-chevron-circle-right"></i> Sales and Distribution Management: Increase reach by streamlining distribution and retail channels.</li>
                                <li><i className="fa lccr fa-chevron-circle-right"></i> Demand Forecasting and Analytics: Estimate what the market will require and adjust output accordingly.</li>
                                <li><i className="fa lccr fa-chevron-circle-right"></i> Quality and Compliance Management: Uphold industry rules and product standards.</li>
                                <li><i className="fa lccr fa-chevron-circle-right"></i> Finance & Cost Accounting: Get up-to-date information on costs and profitability.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-5 col-sm-12">
                        <div className="img-btn_center">
                            <Image src="/images/cpg.png" alt="Automotive ERP Solution" className="img-responsive" width={261} height={209}/>
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
                                    <li><i className="fa lccr fa-chevron-circle-right"></i> Product lifecycle management</li>
                                    <li><i className="fa lccr fa-chevron-circle-right"></i> Batch and expiry tracking</li>
                                    <li><i className="fa lccr fa-chevron-circle-right"></i> Retailer and distributor management</li>
                                    <li><i className="fa lccr fa-chevron-circle-right"></i> Real-time stock visibility</li>

                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="img-btn_center">
                        <Image className="img-responsive wd100" src="/images/cpg2.png" width={848} height={132} alt="Automotive Manufacturing ERP"/>
                        <div className="img_btn_link2">
                            <Link href="/portfolio-php" className="btn btn-success">View Portfolio</Link>
                        </div>
                    </div>
                </div>

                <div className="inner_devolopment">
                    
                    <div className="inner_devolopment2">
                        <div className="row">
                            <div className="col-md-6">
                                <p>The CPG ERP solutions from CybateSoft enable businesses to integrate all facets of their operations, increasing profitability, brand awareness, and operational efficiency. We assist companies in making well-informed decisions and providing consistent quality across channels by fusing sophisticated analytics with intelligent data systems. The technology-driven strategy of CybateSoft turns CPG companies into flexible, customer-focused organizations that can prosper in the cutthroat global market of today.</p>
                            </div>
                            <div className="col-md-6">
                                <ul className="listing_content">
                                    <li><i className="fa lccr fa-chevron-circle-right"></i> Order processing automation</li>
                                    <li><i className="fa lccr fa-chevron-circle-right"></i> Barcode and labeling integration</li>
                                    <li><i className="fa lccr fa-chevron-circle-right"></i> Return and damage tracking</li>
                                    <li><i className="fa lccr fa-chevron-circle-right"></i> Finance & Cost Tracking</li>
                                    <li><i className="fa lccr fa-chevron-circle-right"></i> Promotions and discount management</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="img-btn_center">
                        <Image className="img-responsive wd100" src="/images/cpg1.png" width={848} height={132} alt="Automotive ERP Dashboard"/>
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
                        <li role="presentation" className="active"><Link href="/industry/consumer-packaged-goods"> Consumer packaged Goods</Link></li>
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
