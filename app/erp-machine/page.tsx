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
				
					 <Image src="/images/product.jpg" className="img-responsive banner_img" width={1351} height={120} alt="Customization"/>
						 
							<div className="banner_heading">
							<div className="container">
								<h2>ERP Machine</h2>
								</div>
							</div>							
						
				</div>
			
	<div className="container">
			
			<div className="row">
			<div className="tab-content">
             
				<div className="col-md-9">
				<div className="left_panel">
						<div className="inner_devolopment">
							<h2>ERP Machine</h2>
						
					
					<p>ERP Machine is the best software solution from the stables of Machine. A complete end to end solution that is innovative in its design, robust in architecture, ease in implementation and usability with extreme 
						focus on cutting costs and customer satisfaction.</p>
					
					
					<p>A highly customizable solution, ERP Machine meets the requirement of all almost all the industries.Carefully designed with huge efforts in research and discussions with pioneers in various industries, ERP 
						Machine can be utilized to implement industry-specific functionalities needed, even for the most specialized organizations. After customization, the solution would meet all your expectations covering 
						all unique requirements making your organization stand out in today's competitive arena. ERP Machine provides the ease and command over your organization's operations and assists you to increase productivity, meet client expectations and deliver happiness to all the stake holders including employees 
						and customers. ERP Machine provides you information at your finger tips helping you to take highly informed decisions to surge ahead of competition. Activities can be prioritized, roles tailored and jobs 
						simplified with the implementation of ERP Machine. Access to data from across the globe is simplified with virtue of our ERP solution.</p>
					
					
					<p>Developed on N-Tier architecture, ERP Machine is robust with high level of security. Being a web based application, data can be accessed, practically from any location across the globe.</p>
					
					<h3>The various modules under our ERP Machine are as under:</h3>
                        <div className="row">
                        <div className="col-md-6">
                        <ul className="listing_content">
						
                        <li><i className="fa lccr fa-chevron-circle-right"></i> Accounting</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Controlling</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Sales and Distribution</li>
						 <li><i className="fa lccr fa-chevron-circle-right"></i>  Material Management</li>
                        </ul></div>
                        <div className="col-md-6">
                        <ul className="listing_content">
						<li><i className="fa lccr fa-chevron-circle-right"></i>  Ware House Management</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Payroll Management</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Customer Relationship Management</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i> Supply Chain Management</li>
                        </ul></div>
						</div>
                        </div>

					</div>

                  </div>

   			</div>
			<div className="col-md-3">
				<div className="right_panel">
					<div className="right_panel_heading">
						<h3>Cybateproducts</h3>
					</div>
					<div className="programming_platforms_list">
						<ul className="nav nav-pills nav-stacked " id="tab">
							<li role="presentation"   >
							<Link href="/courier-management" >Courier Management Software</Link></li>
							<li role="presentation" >
							<Link href="/weapon-tracking">Weapon Tracking System</Link></li>
							<li role="presentation" className="active" ><Link href="/erp-machine">ERP Machine</Link></li>
							<li role="presentation" ><Link href="/hospital-management">Hospital Management</Link></li>
							<li role="presentation" ><Link href="/retail-management">Retail Management</Link></li>
							<li role="presentation" ><Link href="/human-resource-management">Human Resource Management Systems</Link></li>
							<li role="presentation" ><Link href="/automobile-management">Aautomobile Management System</Link></li>
							<li role="presentation" ><Link href="/pharmacy-management">Pharmacy Management System</Link></li>
							
						</ul>
					</div>
					<div className="right_panel_heading">
						<h3>Request Information</h3>
					</div>
					<div className="programming_platforms_list">
					<p> Please complete our request information form and our consulting representative shall get in touch with you shortly.</p>
						<ul className="nav nav-pills nav-stacked " id="tab">
							<li role="presentation"  className="active">
							<Link href="/request-a-quote" >Request a Quote</Link></li>
						</ul>
					</div>
					
					
					
					
					
					
				</div>	  
			</div>	  
		</div>
		
        </div>   
     
    </>
  )
}
