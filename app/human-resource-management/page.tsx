import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function page() {
  return (
   <>
   <div className="clearfix"></div>
	<div className="inner_page_banner">
				
					 <Image src="/images/product.jpg" className="img-responsive banner_img" width={1351} height={120} alt="Customization"/>
						 
							<div className="banner_heading">
							<div className="container">
								<h2>Human Resource Management Systems</h2>
								</div>
							</div>							
						 	
				</div>
			
	<div className="container">
			
			<div className="row">
			<div className="tab-content">

				<div className="col-md-9">
				<div className="left_panel">
						<div className="inner_devolopment">
							<h2>Human Resource Management Systems</h2>
						
					
					<p>A combination of processes and systems, HR Machine connects human resource management and information technology. With coverage over all the modules of HR activities, HR Machine is one of the 
					most powerful HR Management systems which can make managing HR activities simple, efficient and quick. Developed by analysts with over 15 years of experience in the HR arena, HR Machine boasts of 
					the best in className efficiency and security, with no compromise on security of the employee data. HR Machine enables your organization to manage and stream line the most valuable asset of your 
					organization - your people. It is a one stop solution for managers to save time, have information on tips and manage expenses.</p>
					
					<p>Available in both desktop and web based versions, HR Machine is extremely user friendly, cost effective and integrates with third party applications like Bio Metrics, RFID etc.</p>
				
					<h3>The various modules under our HR Machine are detailed below:</h3>
                        <div className="row">
                        <div className="col-md-6">
                        <ul className="listing_content">
						
                        <li><i className="fa lccr fa-chevron-circle-right"></i> Employee Data Base Management</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Payroll Compliances Management</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Attendance and Leave Management</li>
						 <li><i className="fa lccr fa-chevron-circle-right"></i>  Benefits and Compensation Management</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Time and Attendance</li>
                        </ul></div>
                        <div className="col-md-6">
                        <ul className="listing_content">
							
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Employee Self Service</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Recruitment Management</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i> Training and Performance Management</li>
						<li><i className="fa lccr fa-chevron-circle-right"></i>  Travel and Expenses Management</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i> Management Information Reports</li>
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
							<li role="presentation" className="active"><Link href="/human-resource-management">Human Resource Management Systems</Link></li>
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
