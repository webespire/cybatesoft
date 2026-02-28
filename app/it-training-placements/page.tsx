import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "IT Training & Placements",
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
	 <Image src="/images/ittraining.jpg" className="img-responsive banner_img" width={1351} height={120} alt="Customization"/>
	   <div className="banner_heading">
	      <div className="container">
	        <h2>IT Training & Placements</h2>
	        <p></p>
	      </div>
	   </div>
	<div className="container">
		
			<div className="row">
				<div className="col-md-9">
					<div className="left_panel">
						<div className="inner_devolopment">
							<h2>IT Training & Placements</h2>
						
					<p>Alongside providing A to Z web development services,Cybatesoft also acts as an IT consulting and Training. So, why should anyone need IT consulting services? Well, the web development / IT services that we provide are basically meant for small to medium enterprises and startup businesses. The large and already established companies are expected to have their own web development division and staff. However, such companies may lack the knowhow and latest developments in the Internet. We provide a number of IT support services for such companies.</p>
					<h3>What Constitutes IT Consulting Services? </h3>
					<p>Since it is assumed that programming and web design and development part will be looked after the website owners, we as an IT development company provide the following IT support </p>
					<h3>Services:</h3>
					<p>Software Development Estimation: if you want to develop a program on your own but don’t know how to go about it, we can work out the estimates regarding the time, money and technology aspects.Project Management: while developing a project is one thing, managing it is another matter. As an IT consulting firm, we can remotely manage your IT project of any size.Software Programming and Deployment: our IT consulting services also include third-party software programming and/or deployment via outsourcing route.System Administration: we are also capable of administrating or monitoring your IT systems remotely 24×7 so that you may feel safe and secure.You can hire all the above IT support services on fixed cost or contract basis or on monthly or hourly basis, depending on your project and budget. Please contact us anytime and we will work out the exact cost and other variables for IT consulting services you require.</p>
					 <h3>Training the Courses:</h3>
                     <div className="row">
                     <div className="col-md-4">
                     <p><strong>1. Dot net</strong></p>
                    <p><strong>2. Java</strong></p>
                    <p><strong>3. Sap</strong></p>
                    <p><strong>4. Sage</strong></p>
                    <p><strong>6. Dynamics CRM</strong></p>
                    </div>
                    <div className="col-md-4">
                    <p><strong>7. Testing Tools</strong></p>
                    <p><strong>8. Digital Marketing</strong></p>
                    <p><strong>9. PHP</strong></p>
                    <p><strong>10. Cyber Security</strong></p>
                    <p><strong>11. Android and IOS</strong></p>
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
							<li role="presentation" className="active"><Link href="/mobile-apps-development">Mobile Apps Development</Link></li>
							<li role="presentation" ><Link href="/iphone/ipad-apps-development"> 	IPhone/IPad Apps Development</Link></li>
							<li role="presentation"><Link href="/android-app-development">Android Apps Development</Link></li>
							<li role="presentation"><Link href="/cross-platform-apps-development">PCross Platform Apps Development</Link></li>
							<li role="presentation"><Link href="/mobile-theme" >Mobile Themes</Link></li>
							<li role="presentation"><Link href="/phone-gap-app-development">Phone Gap App Development</Link></li>
							<li role="presentation"><Link href="/bootstrap-apps-development" >Bootstrap App Development</Link></li>
							<li role="presentation"><Link href="/blackberry-app-development">Blackberry App Development</Link></li>
						
						</ul>
					</div>
					
					
				</div>	  
			</div>	  
		</div>
		
           
        </div>
		
        
		</div>
		  
  
    </>
  )
}
