import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function page() {
  return (
   <>
   <div className="clearfix"></div>
			<div className="inner_page_banner">
						 
                         <Image src="/images/react.png" className="img-responsive banner_img" width={1351} height={120} alt="Customization"/>
								<div className="banner_heading">
									 <div className="container">
									  <h2>React</h2>
									</div>
								</div>
			</div> 
	<div className="container">
			
			<div className="row">
								<div className="col-md-9">
					<div className="left_panel">
						<div className="inner_devolopment">
							<h2>Web Development {" >>"} React</h2>
							<h4>Using React to Create Dynamic and Interactive Web Interfaces</h4>
							<p>Some of the most potent, quick, and scalable web apps in the world are built using the React framework. CybateSoft makes use of React's capabilities to create dynamic, fast interfaces that improve user experiences.</p>
						    <p>Our group specializes in developing adaptable, component-based architectures that promote smooth data flow, efficiency, and responsiveness.</p>
						</div>
					
                    <div className="row">
                    <div className="col-md-7 col-sm-12">
                    
					<div className="inner_devolopment">
						<h3>Our Services for React Development</h3>
					<ul className="listing_content">
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Custom Web Applications: React solutions that are specifically designed to meet a range of business requirements.</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Single Page Applications (SPA): blazingly quick performance and seamless navigation.</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Component-Based Architecture: Scalability through reusable components.</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  API Integration: Link your application to robust backend systems.</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Create cross-platform mobile apps quickly with React Native development.</li>
						<li><i className="fa lccr fa-chevron-circle-right"></i>  SEO-Friendly SSR (Next.js): Boost performance and visibility.</li>
                        </ul>
					</div>
                    </div>
                     <div className="col-md-5 col-sm-12">
						<div className="img-btn_center">
                     	<Image src="/images/react_logo.png" alt="" className="img-responsive" width={260} height={210}/>
						<div className="img_btn_link">
						<Link href="" className="btn btn-success ">View Portfolio</Link>
						</div>
						</div>
                     </div>
                     </div>

					  <div className="inner_devolopment">
                        <h3>Creative React Solutions</h3>
					<div className="inner_devolopment2">
                        <div className="row">
                        <div className="col-md-6">
                        <ul className="listing_content">
                        <p>CybateSoft develops React solutions that combine functionality, creativity, and technology to make sure your digital products are reliable and user-focused.</p>
                        <p>CybateSoft builds powerful React applications that blend functionality, creativity, and cutting-edge technology. Our user-focused approach ensures your digital products are not only visually engaging but also reliable, scalable, and performance-driven—delivering seamless experiences across every device and platform.</p>
                        
                    </ul></div>
                        <div className="col-md-6">
                        <ul className="listing_content">
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Custom Web Applications</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Single Page Application (SPA) Development</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Responsive UI/UX Design</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Component-Based Architecture</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  API Integration</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  React Native App Development</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Real-Time UI Updates</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  State Management (Redux)</li>
                        </ul></div>
						
						
						
						
                        </div>
					</div>

					<div className="img-btn_center">
                     	<Image className="img-responsive wd100" src="/images/react1.png" alt="templates" width={848} height={132}/>
						<div className="img_btn_link2">
						<Link href="" className="btn btn-success ">View Portfolio</Link>
						</div>
						</div>
					 
					</div>
                    <div className="inner_devolopment">
                        <h3>Scalable Web Solutions</h3>
					<div className="inner_devolopment2">
                        <div className="row">
                        <div className="col-md-6">
                        <ul className="listing_content">
						<p>CybateSoft builds dynamic, scalable, and high-performance web solutions using modern technologies like React, Angular, and Node.js. Our development process ensures exceptional speed, security, and seamless integration — creating digital experiences that drive engagement and deliver measurable business results.</p>
                        </ul></div>
                        <div className="col-md-6">
                        <ul className="listing_content">
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Cross-Platform Compatibility</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Third-Party Integration</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Cloud Deployment</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Performance Optimization</li>
                        </ul></div>
						
                        </div>
					</div>
					<div className="img-btn_center">
                     	<Image className="img-responsive wd100" src="/images/react2.png" alt="templates" width={848} height={132}/>
						<div className="img_btn_link2">
						<Link href=">" className="btn btn-success ">View Portfolio</Link>
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
						<ul className="nav nav-pills nav-stacked " id="tab">
							<li role="presentation" className="active"><Link href="/technologies/web-development/react"> React</Link></li>
							<li role="presentation"><Link href="/technologies/web-development/angular">Angular</Link></li>
							<li role="presentation"><Link href="/technologies/web-development/nodejs">Node.js</Link></li>
							</ul>
					</div>
					
					
				</div>	  
			</div>	  
		</div>
		
           
        </div>
		
        
		
   </>
  )
}
