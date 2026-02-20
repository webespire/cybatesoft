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
								<h2>Automobile Management System</h2>
								</div>
							</div>							
						 
				</div>
			
			 
	<div className="container">
			
			<div className="row">
			<div className="tab-content">
           	<div className="col-md-9">
				<div className="left_panel">
						<div className="inner_devolopment">
							<h2>Automobile Management System</h2>
						
					
					<p>Auto Machine is a solution to automate the activities of an Automobile Dealers. Developed with a lot of research in the automobile industry, Auto Machine provides a simple but robust solution to manage 
						your organization with ease. Sales and Inventory being the key areas of focus for automobile dealers, utmost care has been taken to include even the minutest action and information. With ease of 
						navigation and one screen access to all functionalities, Auto Machine presents an environment where in the dealers can concentrate on Sales and Service with the assurance that all the data is extremely secure 
						and available immediately when needed. With our centralized system, branch management, dealer management and stock transfers has become simple and fast.</p>
					
					<h3>The various modules under the Auto Machine are as under:</h3>
                        <div className="row">
						
                        <div className="col-md-6">
                        <ul className="listing_content">
						
                        <li><i className="fa lccr fa-chevron-circle-right"></i> Vehicle Sales</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Workshop Activities</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i> Spare Parts Inventory</li>
                        </ul></div>
                        <div className="col-md-6">
                        <ul className="listing_content">
							
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Financial Accounting</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Payroll</li>
                        
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
							<li role="presentation"  >
							<Link href="/courier-management" >Courier Management Software</Link></li>
							<li role="presentation">
							<Link href="/weapon-tracking">Weapon Tracking System</Link></li>
							<li role="presentation" ><Link href="/erp-machine">ERP Machine</Link></li>
							<li role="presentation" ><Link href="/hospital-management">Hospital Management</Link></li>
							<li role="presentation" ><Link href="/retail-management">Retail Management</Link></li>
							<li role="presentation" ><Link href="/human-resource-management">Human Resource Management Systems</Link></li>
							<li role="presentation"  className="active"><Link href="/automobile-management">Aautomobile Management System</Link></li>
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
