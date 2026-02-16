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
								<h2>Hospital Management</h2>
								</div>
							</div>							
						 
				</div>
			
			 
	<div className="container">
			
			<div className="row">
			<div className="tab-content">
             	<div className="col-md-9">
				<div className="left_panel">
						<div className="inner_devolopment">
							<h2>Hospital Management</h2>
						
					
					<p>Machine's Hospital Management Machine has made the management of hospitals, simple and efficient. This solution has both the web based as well as local server based solution to manage even an 
						organization with a chain of hospitals across the globe. The integration of various modules helps easy flow of data among different departments making data available at finger tips immediately, which in 
						turn helps in providing proper treatment to the patients, thus installing a factor of thrust and confidence among them.</p>
					
					<p>Our solution has been instrumental in transforming the management of hospitals. The entire infrastructure of health care organizations can be managed using this comprehensive suite. The solution 
						is customizable to meet the unique needs of your hospital. The management of real time information is efficient and extremely secured. Proper utilization of this solution leads to proper information to the 
						management without missing out even minute details. It solution can be integrated with third party solutions like biometrics, RFID, Smartcard, Barcode. The solution is highly scalable and flexible and 
						boasts of a robust and secure design.</p>
				
					<p>Integration with mobile and email facilities enables the hospital management to send sms and email messages instantly whenever required.</p>
					
					<h3>The various modules under the solution are as under:</h3>
                        <div className="row">
                        <div className="col-md-6">
                        <ul className="listing_content">
						
                        <li><i className="fa lccr fa-chevron-circle-right"></i> Out Patient Module</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Inpatient Module</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i> Visiting Doctors Management</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i> Laboratory Management</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Radiology Management</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i> Pharmacy Management</li>
                        
						</ul></div>
                        <div className="col-md-6">
                        <ul className="listing_content">
							
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Administration</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Payroll Management</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i> Inventory Management</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Purchase Management</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i> User Management (Security and Identity)</li>
                        
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
							<li role="presentation"  className="active" >
							<Link href="/courier-management" >Courier Management Software</Link></li>
							<li role="presentation">
							<Link href="/weapon-tracking">Weapon Tracking System</Link></li>
							<li role="presentation" ><Link href="/erp-machine">ERP Machine</Link></li>
							<li role="presentation" className="active" ><Link href="/hospital-management">Hospital Management</Link></li>
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
