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
						 <Image src="/images/banner_inner.jpg" className="img-responsive banner_img" width={1351} height={120} alt="Customization"/>
								<div className="banner_heading">
									 <div className="container">
									  <h2>Zend framework Development</h2>
									   <p>	</p>
									</div>
								</div>
			</div> 
	<div className="container">
			
			<div className="row">
								<div className="col-md-9">
					<div className="left_panel">
						<div className="inner_devolopment">
							<h2>Zend framework Development</h2>
									<p>If you are looking 100% Object oriented code with Latest PHP feature, late static binding, lambda functions, namely namespaces than zend framework is best choice. It’s offer advanced model view controller (MVC) implementation.Its important to know all salient feature of Zend before give a label of Best php framework 2016.</p>
					</div>
					</div>
                    
                    <div className="row">
                    	<div className="col-md-7 col-sm-12">
                    
					<div className="inner_devolopment2">
					<h2>Web & CLI Programming :</h2>

						<p>ZF2 is uesed to write CLI scripts.</p>
						</div>
					<div className="inner_devolopment2">
					<h2>MVC Components :</h2>

						<p>mvc is oldest popular architecture model helps. Its divides a given application into three internally representations part – Model, View & Controller. This framework used MVC model.</p>
					</div>
                    </div>
                    
                    <div className="col-md-5 col-sm-12">
						<div className="img-btn_center">
                     	<Image src="/images/zend1.png" alt="" className="img-responsive" width={261} height={209}/>
						<div className="img_btn_link">
						<Link href="/portfolio-php" className="btn btn-success ">View Portfolio</Link>
						</div>
						</div>
                     </div>
                    
                    </div>
					<div className="inner_devolopment2">
					
							<h2>Loosely coupled :</h2>

				<p>Zend have own component library which one help you to choose to use only one or a subset of components available within the framework.</p>
					</div>
					<div className="inner_devolopment2">
					<h2>Quality :</h2>

						<p>EZend Framework was developed using industry best practices and proven object oriented design patterns with extendable components feature.</p>
				</div>
					<div className="inner_devolopment2">
					<h2>Extend classNamees :</h2>

						<p>You can easily extend Zend Library with your custom solution for your unique product. There are other lots of feature available on ZF. please review  Zend Framework official website to get details information.</p>
						</div>
						<div className="inner_devolopment2">
					<h2>What we do:</h2>

						<div className="row">
					
                        <div className="col-md-6">
                        <ul className="listing_content">
						
                        <li><i className="fa lccr fa-chevron-circle-right"></i>Zend Website Design & Development</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Zend customisation portal development.</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i> Migration from ZF2 to ZF3</li>
                        
						</ul></div>
                        <div className="col-md-6">
                        <ul className="listing_content">
							
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  software migration to zend framework</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>Zend Application optimization for High Volume Traffic</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i> Hire Zend Framework Developers & Programmers</li>
                       
						</ul></div>
		
						</div>
				
					</div>			
					<div className="inner_devolopment2">
					<h2>Our Successful application is running in below domain :</h2>

						<div className="row">
					
                        <div className="col-md-6">
                        <ul className="listing_content">
						
                        <li><i className="fa lccr fa-chevron-circle-right"></i>Global Retail E-Commerce Store</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>Software solutions for the Travel & Tourism industry</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i> Custom Industrial Manufacturing Solutions</li>
                        
						</ul></div>
                        <div className="col-md-6">
                        <ul className="listing_content">
							
                        <li><i className="fa lccr fa-chevron-circle-right"></i> Aviation industry software</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>Healthcare Mobility solution</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i> Data analysis and interpretation Solution</li>
                       
						</ul></div>
		
						</div>
				
					</div>	
                    <div className="img-btn_center">
                     	<Image className="img-responsive wd100" src="/images/Zend.jpg" width={848} height={132} alt="Zend"/>
						<div className="img_btn_link2">
						<Link href="/portfolio-php" className="btn btn-success ">View Portfolio</Link>
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
							<li role="presentation" ><Link href="/web-design-branding"> Web Design and Branding</Link></li>
							<li role="presentation"><Link href="/php-web-development">PHP Web Development</Link></li>
							<li role="presentation" className="active"><Link href="/zend-framework-development">Zend framework Development</Link></li>
							<li role="presentation"><Link href="/python-web-development">Python Web Development</Link></li>
							<li role="presentation"><Link href="/search-engine-optimization" >Search Engine Optimization</Link></li>
							<li role="presentation"><Link href="/testing-and-qa-services">Testing and QA Services</Link></li>
							<li role="presentation"><Link href="/offshore-staffing" >Offshore Staffing</Link></li>
							</ul>
					</div>
				
				</div>	  
			</div>	  
		</div>
		
           
        </div>
		
      
    </>
  )
}
