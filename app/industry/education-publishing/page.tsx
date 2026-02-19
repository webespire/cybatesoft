import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


export default function page() {
  return (
    <>
     <div className="clearfix"></div>
<div className="inner_page_banner">
    <Image src="/images/ep_top.png" className="img-responsive banner_img" width={1351} height={120} alt="Customization"/>
    <div className="banner_heading">
        <div className="container">
            <h2>Education Publishing</h2>
        </div>
    </div>
</div>

<div className="container">
    <div className="row">
       
        <div className="col-md-9">
            <div className="left_panel">
                <div className="inner_devolopment">
                    <h2>Industry {">>"} Education Publishing</h2>
                    <h4>Using Integrated Digital Solutions to Transform Learning and Publishing Ecosystems</h4>
                    <p>The purpose of CybateSoft's Education & Publishing ERP Solutions is to completely transform the operations of publishing houses and educational institutions. Our ERP systems improve productivity, teamwork, and digital engagement for all stakeholders by combining administrative, academic, financial, and content management procedures into a single, intelligent platform.</p>
                    <p>Digital learning, online content distribution, and data-driven decision-making are driving the fast evolution of the publishing and education sectors. CybateSoft's automation, analytics, and cloud integration enable publishers and institutions to adjust to this shift. Our solutions facilitate seamless departmental and platform coordination by streamlining intricate workflows, including digital publishing, course scheduling, fee management, student enrollment, and content distribution.</p>
                </div>

                <div className="row">
                    <div className="col-md-7 col-sm-12">
                        <div className="inner_devolopment">
                            <h3>Our Offerings for ERP Solutions in Education and Publishing</h3>
                            <ul className="listing_content">
                                <li><i className="fa lccr fa-chevron-circle-right"></i> Management of Students and Faculty: Simplify HR procedures, performance monitoring, admissions, and attendance.</li>
                                <li><i className="fa lccr fa-chevron-circle-right"></i> Course and Curriculum Planning: Use real-time scheduling and assessment tools to digitize course administration.</li>
                                <li><i className="fa lccr fa-chevron-circle-right"></i> Fee & Finance Management: Make accounting, budgeting, and fee collection procedures simpler.</li>
                                <li><i className="fa lccr fa-chevron-circle-right"></i> Library and Digital Content Management: Effectively manage books, journals, and e-learning materials.</li>
                                <li><i className="fa lccr fa-chevron-circle-right"></i> E-publishing and Content Distribution: Make it possible to publish in multiple formats and distribute content worldwide.</li>
                                <li><i className="fa lccr fa-chevron-circle-right"></i> Learning Management System (LMS) Integration: Provide easy access to improve online learning.</li>
                                <li><i className="fa lccr fa-chevron-circle-right"></i> Analytics & Reporting: Use data insights to monitor institutional performance and academic advancement.</li>
                                <li><i className="fa lccr fa-chevron-circle-right"></i> Cloud & Data Security: Make sure that scholarly and publishing data is accessible and stored securely.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-5 col-sm-12">
                        <div className="img-btn_center">
                            <Image src="/images/ep.png" alt="Automotive ERP Solution" className="img-responsive" width={261} height={209}/>
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
                                <p>The ERP systems from CybateSoft, which place a high priority on usability and scalability, help publishers, training facilities, colleges, and universities achieve accountability, transparency, and expansion. Our integrated solutions foster more intelligent learning and smooth operations by uniting educators, students, and content providers into a single ecosystem.</p>
                            </div>
                            <div className="col-md-6">
                                <ul className="listing_content">
                                    <li><i className="fa lccr fa-chevron-circle-right"></i> Course and curriculum planning</li>
                                    <li><i className="fa lccr fa-chevron-circle-right"></i> Author and editor collaboration</li>
                                    <li><i className="fa lccr fa-chevron-circle-right"></i> Copyright and license tracking</li>
                                    <li><i className="fa lccr fa-chevron-circle-right"></i> Print and digital production control</li>
                                    <li><i className="fa lccr fa-chevron-circle-right"></i> Digital content management</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="img-btn_center">
                        <Image className="img-responsive wd100" src="/images/ep2.png" alt="Automotive Manufacturing ERP" width={848} height={132}/>
                        <div className="img_btn_link2">
                            <Link href="/portfolio-php" className="btn btn-success">View Portfolio</Link>
                        </div>
                    </div>
                </div>

                <div className="inner_devolopment">
                    
                    <div className="inner_devolopment2">
                        <div className="row">
                            <div className="col-md-6">
                                <p>By fusing technology with education and content production, CybateSoft's publishing and education ERP solutions promote innovation. Our systems enable administrators to make well-informed decisions, publishers to increase their digital reach, and educators to concentrate on providing exceptional instruction. CybateSoft gives publishers and institutions a single digital platform that promotes cooperation, effectiveness, and long-term success in the knowledge economy.</p>
                            </div>
                            <div className="col-md-6">
                                <ul className="listing_content">
                                    <li><i className="fa lccr fa-chevron-circle-right"></i> E-learning platform integration</li>
                                    <li><i className="fa lccr fa-chevron-circle-right"></i> Performance and analytics reports</li>
                                    <li><i className="fa lccr fa-chevron-circle-right"></i> Order and billing automation</li>
                                    <li><i className="fa lccr fa-chevron-circle-right"></i> Content version control</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="img-btn_center">
                        <Image className="img-responsive wd100" src="/images/ep1.png" alt="Automotive ERP Dashboard" width={848} height={132}/>
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
                        <li role="presentation" className="active"><Link href="/industry/education-publishing"> Education Publishing</Link></li>
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
