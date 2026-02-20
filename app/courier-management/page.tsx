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
								<h2>Courier Management Software</h2>
								</div>
							</div>							
						
				</div>
			
			 
	<div className="container">
		
			<div className="row">
			<div className="tab-content">
               
                

				<div className="col-md-9">
				<div className="left_panel">
						<div className="inner_devolopment">
							<h2>Courier Management Software</h2>
					
					
					<p>The courier software,is easy-to-use,courier software solution specifically designed for the courier, messenger, expediting and distribution industries. Offer real-time delivery tracking, barcode scanning </p>
					
					<h3>&nbsp;The Courier software takes care of following features:</h3>
                        <div className="row">
						
                        <div className="col-md-6">
                        <ul className="listing_content">
						
                        <li><i className="fa lccr fa-chevron-circle-right"></i> From Booking to Billing.</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Operation Outgoing to Incoming, Manifest, Runsheet, Delivery Updation.</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Website Online Tracking.</li>
                        </ul></div>
						<div className="col-md-6">
                        <ul className="listing_content">
						
                        <li><i className="fa lccr fa-chevron-circle-right"></i> Customer Login</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  MIS Reports</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Customer Relationship, etc.</li>
                        </ul></div>
						</div>
						<div className="row">
						<p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Master Files</b></p>
                        <div className="col-md-6">
                        <ul className="listing_content">
							
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Employee Master and Customer Master</li>
						</ul></div>
						<div className="col-md-6">
                        <ul className="listing_content">
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Location Master (for defining Source and Destination)</li>
                        </ul></div>
						</div>
					
				<div className="row">
						<p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Transaction</b></p>
						
                        <div className="col-md-6">
                        <ul className="listing_content">
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Booking slip AWB / Consignment Book maintenance</li>
						<li><i className="fa lccr fa-chevron-circle-right"></i>  Booking of AWB Consignments Single or Bulk</li>
						<li><i className="fa lccr fa-chevron-circle-right"></i>  In Scan Entry Two Types</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Booking Scan</li>
						<li><i className="fa lccr fa-chevron-circle-right"></i>  Transit Scan (is nothing But Delivery Scan or Transshipment through Hub)</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i> Out Scan Entry as Manifest</li>
						<li><i className="fa lccr fa-chevron-circle-right"></i> Invoice Generation for Couriers</li>
						
						</ul></div>
						<div className="col-md-6">
						<ul className="listing_content">
						<li><i className="fa lccr fa-chevron-circle-right"></i> Proof of Delivery (POD)</li>
						<li><i className="fa lccr fa-chevron-circle-right"></i> Delivery tracking of each POD for different Status, at each location – HO, Branch, Franchisee</li>
						<li><i className="fa lccr fa-chevron-circle-right"></i> Barcode Interface to print and scan POD numbers</li>
						<li><i className="fa lccr fa-chevron-circle-right"></i> Excel import of consignee details after booking</li>
						<li><i className="fa lccr fa-chevron-circle-right"></i> Proof of DeScanning the signature of delivered docs</li>
						<li><i className="fa lccr fa-chevron-circle-right"></i> Handling customer complaints</li>
					
                        </ul></div>
						</div>
						
							<h3>&nbsp;Reports</h3>
                        <div className="row">
						
						<p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Customer Reports – the delivery status report gives the details of all the delivered (or RTO’ED) 
							report gives the status of &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;   the delivered (or RTO’ED) documents for a consignment or client for a particular date.</b></p>
						
                        <div className="col-md-6">
                        <ul className="listing_content">
                        <li><i className="fa lccr fa-chevron-circle-right"></i>Consignee list or Consignment booking details</li>
						<li><i className="fa lccr fa-chevron-circle-right"></i> Delivery status report</li>
						</ul></div>
						<div className="col-md-6">
						<ul className="listing_content">
						<li><i className="fa lccr fa-chevron-circle-right"></i>  Undelivered status report</li>
						</ul></div>
						</div>
						<div className="row">
						<p><b>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;Operations Department Reports</b></p>
                      
						<div className="col-md-6">
						<ul className="listing_content">
						
						<li><i className="fa lccr fa-chevron-circle-right"></i>  Run Sheet Generation Report</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i> Load issue summary</li>
						</ul></div>
						<div className="col-md-6">
						<ul className="listing_content">
						<li><i className="fa lccr fa-chevron-circle-right"></i> RTO report</li>
						
						</ul></div>
						</div>
						<div className="row">
						<p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Management Reports</b></p>
						<div className="col-md-6">
						<ul className="listing_content">
						<li><i className="fa lccr fa-chevron-circle-right"></i> Invoice Printing</li>
						<li><i className="fa lccr fa-chevron-circle-right"></i>Daily sales report</li>
						</ul></div>
						<div className="col-md-6">
						<ul className="listing_content">
						<li><i className="fa lccr fa-chevron-circle-right"></i>Sales summary for a period</li>
						<li><i className="fa lccr fa-chevron-circle-right"></i> Invoice summary</li>
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
