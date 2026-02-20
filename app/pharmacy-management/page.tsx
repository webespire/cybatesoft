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
								<h2>Pharmacy Management System</h2>
								</div>
							</div>							
						 
				</div>
			
	<div className="container">
			
			<div className="row">
			<div className="tab-content">
              
				<div className="col-md-9">
				<div className="left_panel">
						<div className="inner_devolopment">
							<h2>Pharmacy Management System</h2>
						
					
					<p>Pharmacy Machine is an end to end solution for management of Pharma Organizations which is robust, cost effective, simple and secure. It is developed keeping in mind the various challenges faced by the 
						Pharma Industry and is fully integrated system that provides you complete control over all the wings of operations. Managing multiple stores, inventory, sales and distribution can be done with minimal effort 
						and unmatched accuracy. Reminders at regular and prompt intervals keep your business ahead of competition. The solution is capable of Mobile App integration, SMS integration and Email integration to 
						allow information to flow freely and securely, making it easy and simple to manage.</p>
					
					<p>Extremely user friendly, Pharmacy Machine is able to deliver easy flow of information between prescribing, pharmacy and admin process. Giving utmost importance to patient well being, Pharma 
						Machine is also capable of highlighting expired stock, stock deficit and urgent requirements. It interfaces easily with third party tools and systems.</p>
					
					<h3>The various modules covered under Pharmacy Management System are :</h3>
                        <div className="row">
                        <div className="col-md-6">
                        <ul className="listing_content">
					
                        <li><i className="fa lccr fa-chevron-circle-right"></i> Billing Management</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Purchase Management</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Discount and Schemes</li>
                        </ul></div>
                        <div className="col-md-6">
                        <ul className="listing_content">
							
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Accounting</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i> Payroll Management</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i> Inventory Management</li>
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
							<li role="presentation" ><Link href="/automobile-management">Aautomobile Management System</Link></li>
							<li role="presentation" className="active"><Link href="/pharmacy-management">Pharmacy Management System</Link></li>
							
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
