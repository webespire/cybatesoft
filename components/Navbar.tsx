"use client";
import Image from 'next/image';
import React, { useEffect, useState } from "react";
import Link from 'next/link';


export default function Navbar() {
	const [isFixed, setIsFixed] = useState(false);
     const [isOpen, setIsOpen] = useState(false);
	 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={`navbar navbar-default ${isFixed ? "navbar-fixed-top" : ""}`}>
      <div className="container">
        <div className="navbar-header">
         
	  <Link className="navbar-brand" href="/">
	  <Image src="/media/logo/logo.png" className="img-responsive img-logo" alt="logo" width={155} height={55} /></Link>
                
           <button
      type="button"
      className={isOpen ? "navbar-toggle collapsed" : "navbar-toggle"}
      data-toggle="collapse"
      data-target="#navbar"
      aria-expanded={isOpen ? "true" : "false"}
      aria-controls="navbar"
      onClick={() => setIsOpen(!isOpen)}
    >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>

        <div id="navbar" className={`collapse navbar-collapse ${isOpen ? "in" : ""}`} aria-expanded={isOpen}>
			<ul className="nav navbar-nav navbar-right">
				<li className="dropdown">
					<Link href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Services <span className="caret"></span></Link>
					<ul className="dropdown-menu">
						<li className="dropdown-submenu">
							<Link href="#" className="dropdown-toggle" data-toggle="dropdown">
								<Image src="/images/icon/webdesign.png" alt="ERP &amp; Enterprise Solutions" width={13} height={13} />ERP &amp; Enterprise Solutions</Link>
								<ul className="dropdown-menu services-sub-menu" style={{display: 'none'}}>
								    <li><Link href="/services/erp-solutions/microsoft"><Image className="Image-responsive" alt="" src="/images/icon/erp.png" width={13} height={15} />Microsoft</Link>
								        <ul className="dropdown-menu services-sub-menu2" style={{display: 'none'}}>
									    <li><Link href="/services/erp-solutions/microsoft-platforms"><Image className="Image-responsive" alt="" src="/images/icon/technology.png" width={13} height={15} />Microsoft Platforms</Link>
								            <ul className="dropdown-menu services-sub-menu3" style={{display: 'none'}}>
												<li><Link href="/services/erp-solutions/dynamics-365-implementation">Microsoft Dynamics 365 Finance &amp; Operations</Link></li>
											    <li><Link href="/services/erp-solutions/dynamics-365-business-central">Microsoft Dynamics 365 Business Central</Link></li>
											    <li><Link href="/services/erp-solutions/integration">Microsoft Dynamics 365 Customer Engagement</Link></li>
											    <li><Link href="/services/erp-solutions/customization">Microsoft Dynamics NAV modernization</Link></li>
											    <li><Link href="/services/erp-solutions/customization">Microsoft Dynamics GP modernization</Link></li>
								            </ul>
									    </li>

									    <li><Link href="#"><Image className="Image-responsive" src="/images/icon/technology.png" alt="" width={13} height={15} />Microsoft Power Platform</Link>
								            <ul className="dropdown-menu services-sub-menu3" style={{display: 'none'}}>
											    <li><Link href="/services/erp-solutions/dynamics-365-implementation">Power BI</Link></li>
											    <li><Link href="/services/erp-solutions/dynamics-365-implementation">Power Apps</Link></li>
											    <li><Link href="/services/erp-solutions/integration">Power Automate</Link></li>
											    <li><Link href="/services/erp-solutions/customization">Power Virtual Agents</Link></li>
								            </ul>
									    </li>

									    <li><Link href="#"><Image className="Image-responsive" src="/images/icon/technology.png" alt="" width={13} height={15} />Microsoft Enterprise Capabilities</Link>
								            <ul className="dropdown-menu services-sub-menu3" style={{display: 'none'}}>
											    <li><Link href="/services/erp-solutions/dynamics-365-implementation">Financial Management &amp; Accounting</Link></li>
    											<li><Link href="/services/erp-solutions/dynamics-365-implementation">Supply Chain Optimization &amp; Inventory Management</Link></li>
	    										<li><Link href="/services/erp-solutions/integration">Human Resources &amp; Payroll</Link></li>
		    									<li><Link href="/services/erp-solutions/customization">Customer Engagement &amp; CRM</Link></li>
			    								<li><Link href="/services/erp-solutions/dynamics-365-implementation">Manufacturing &amp; Production Planning</Link></li>
				    							<li><Link href="/services/erp-solutions/dynamics-365-implementation">Project Operations &amp; Service Management</Link></li>
					    						<li><Link href="/services/erp-solutions/integration">Analytics &amp; Dashboards (via Power BI)</Link></li>
						    					<li><Link href="/services/erp-solutions/customization">Business Process Automation (via Power Apps and Power Automate)</Link></li>
							    				<li><Link href="/services/erp-solutions/customization">AI-powered Chatbots (via Power Virtual Agents)</Link></li>
								            </ul>
									    </li>
									   </ul>
								    </li>

									<li><Link href="#"><Image className="Image-responsive" src="/images/icon/erp.png" width={13} height={15} alt="" />Sage </Link>
									    <ul className="dropdown-menu services-sub-menu2" style={{display: 'none'}}>
										    <li><Link href="#"><Image className="Image-responsive" src="/images/icon/technology.png" alt="" width={13} height={15} />Sage Platforms</Link>
											    <ul className="dropdown-menu services-sub-menu3" style={{display: 'none'}}>
											    <li><Link href="/services/erp-solutions/dynamics-365-implementation">Sage X3</Link></li>
											    <li><Link href="/services/erp-solutions/dynamics-365-implementation">Sage 300</Link></li>
											    <li><Link href="/services/erp-solutions/integration">Sage 100</Link></li>
											    <li><Link href="/services/erp-solutions/customization">Sage Intacct</Link></li>
								                </ul>
									        </li>

									        <li><Link href="#"><Image className="Image-responsive" src="/images/icon/technology.png" alt="" width={13} height={15} />Sage Enterprise Capabilities</Link>
								                <ul className="dropdown-menu services-sub-menu3" style={{display: 'none'}}>
											        <li><Link href="/services/erp-solutions/dynamics-365-implementation">Financial Management</Link></li>
											        <li><Link href="/services/erp-solutions/dynamics-365-implementation">Accounting &amp; Reporting</Link></li>
											        <li><Link href="/services/erp-solutions/integration">Supply Chain Management</Link></li>
											        <li><Link href="/services/erp-solutions/customization">Inventory &amp; Warehouse Management</Link></li>
											        <li><Link href="/services/erp-solutions/dynamics-365-implementation">Manufacturing &amp; Production</Link></li>
											        <li><Link href="/services/erp-solutions/dynamics-365-implementation">Human Resources Management(HR)</Link></li>
											        <li><Link href="/services/erp-solutions/integration">Customer Relationship Management (CRM)</Link></li>
											        <li><Link href="/services/erp-solutions/customization">Analytics &amp; Business Intelligence</Link></li>
								                </ul>
											</li>
								        </ul>
									</li>
								
									<li><Link href="#"><Image className="Image-responsive" src="/images/icon/erp.png" width={13} height={15} alt="" />Unit4</Link>
									    <ul className="dropdown-menu services-sub-menu2" style={{display: 'none'}}>
									        <li><Link href="#"><Image className="Image-responsive" src="/images/icon/technology.png" width={13} height={15} alt="" />Unit4 Platforms</Link>
								                <ul className="dropdown-menu services-sub-menu3" style={{display: 'none'}}>
											        <li><Link href="/services/erp-solutions/dynamics-365-implementation">Unit4 ERP</Link></li>
											        <li><Link href="/services/erp-solutions/dynamics-365-implementation">Unit4 Financials</Link></li>
											        <li><Link href="/services/erp-solutions/integration">Unit4 Human Capital Management (HCM)</Link></li>
											        <li><Link href="/services/erp-solutions/customization">Unit4 Projects &amp; Services</Link></li>
											        <li><Link href="/services/erp-solutions/customization">Unit4 Student Management</Link></li>
								                </ul>
											</li>

									        <li><Link href="#"><Image className="Image-responsive" src="/images/icon/technology.png" alt="" width={13} height={15} />Unit4 Enterprise Capabilities</Link>
								                <ul className="dropdown-menu services-sub-menu3" style={{display: 'none'}}>
											        <li><Link href="/services/erp-solutions/dynamics-365-implementation">Financial Management &amp; Accounting</Link></li>
											        <li><Link href="/services/erp-solutions/dynamics-365-implementation">Human Capital Management (HR, Payroll, Talent)</Link></li>
											        <li><Link href="/services/erp-solutions/integration">Project &amp; Services Management</Link></li>
								        			<li><Link href="/services/erp-solutions/customization">Procurement &amp; Supply Chain Management</Link></li>
										        	<li><Link href="/services/erp-solutions/dynamics-365-implementation">Analytics &amp; Reporting</Link></li>
							        				<li><Link href="/services/erp-solutions/dynamics-365-implementation">Student Management (Higher Education Sector)</Link></li>
									        		<li><Link href="/services/erp-solutions/integration">Compliance &amp; Regulatory Reporting</Link></li>
								                </ul>
								            </li>
								        </ul>
									</li>
								</ul>
						</li>
						
						<li className="dropdown-submenu">
							<Link href="#" className="dropdown-toggle" data-toggle="dropdown">
								<Image src="/images/icon/webdesign.png" width={13} height={13} alt="" />Web Development &amp; Digital Services</Link>
								<ul className="dropdown-menu services-sub-menu" style={{display: 'none'}}>
									<li><Link href="/services/power-platform-and-automation/power-app">Power Apps</Link></li>
									<li><Link href="/services/power-platform-and-automation/power-automate">Power Automate</Link></li>
									<li><Link href="/services/power-platform-and-automation/ai-integration">AI integration</Link></li>
								</ul>
						</li>
						
						<li className="dropdown-submenu">
							<Link href="#" className="dropdown-toggle" data-toggle="dropdown">
								<Image src="/images/icon/webdesign.png" width={13} height={13} alt=""/>Mobile Application Development</Link>
								<ul className="dropdown-menu services-sub-menu" style={{display: 'none'}}>
									<li><Link href="/services/web-and-mobile-development/custom-web-apps">Custom web apps</Link></li>
									<li><Link href="/services/web-and-mobile-development/mobile-solutions">Mobile solutions</Link></li>
									<li><Link href="/services/web-and-mobile-development/responsive-design">responsive design</Link></li>
								</ul>
						</li>

						<li className="dropdown-submenu">
							<Link href="#" className="dropdown-toggle" data-toggle="dropdown">
								<Image src="/images/icon/webdesign.png" width={13} height={13} alt="" />Digital Marketing &amp; SEO</Link>
						</li>

						<li className="dropdown-submenu">
							<Link href="#" className="dropdown-toggle" data-toggle="dropdown">
								<Image src="/images/icon/webdesign.png" width={13} height={13} alt="" />Cloud Computing &amp; DevOps</Link>
						</li>

						<li className="dropdown-submenu">
							<Link href="#" className="dropdown-toggle" data-toggle="dropdown">
								<Image src="/images/icon/webdesign.png" width={13} height={13} alt="" />Cybersecurity &amp; Compliance</Link>
						</li>

						<li className="dropdown-submenu">
							<Link href="#" className="dropdown-toggle" data-toggle="dropdown">
								<Image src="/images/icon/webdesign.png" width={13} height={13} alt="" />AI / ML &amp; Automation</Link>
						</li>

						<li className="dropdown-submenu">
							<Link href="#" className="dropdown-toggle" data-toggle="dropdown">
								<Image src="/images/icon/webdesign.png" width={13} height={13} alt=""/>Testing &amp; Quality Assurance (QA)</Link>
						</li>

						<li className="dropdown-submenu">
							<Link href="#" className="dropdown-toggle" data-toggle="dropdown">
								<Image src="/images/icon/webdesign.png" width={13} height={13} alt="" />Integrations &amp; API Development</Link>
						</li>

					</ul>
				</li>


				<li className="dropdown">
					<Link href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">TECHNOLOGIES <span className="caret"></span></Link>
					<ul className="dropdown-menu">
						<li className="dropdown-submenu">
							<Link href="#" className="dropdown-toggle" data-toggle="dropdown">
								<Image src="/images/icon/middleware.png" width={13} height={13} alt="" />ERP Platforms</Link>
								<ul className="dropdown-menu services-sub-menu" style={{display: 'none'}}>
									<li><Link href="/technologies/erp-platforms/dynamics-365">Dynamics 365 F&amp;O</Link></li>
									<li><Link href="/technologies/erp-platforms/scm">SCM</Link></li>
									<li><Link href="/technologies/erp-platforms/power-platform">Power Platform</Link></li>
								</ul>
						</li>
						
						<li className="dropdown-submenu">
							<Link href="#" className="dropdown-toggle" data-toggle="dropdown">
								<Image src="/images/icon/middleware.png" width={13} height={13} alt="" />Web &amp; Frameworks</Link>
								<ul className="dropdown-menu services-sub-menu" style={{display: 'none'}}>
									<li><Link href="/technologies/web-development/react">React</Link></li>
									<li><Link href="/technologies/web-development/angular">Angular</Link></li>
									<li><Link href="/technologies/web-development/nodejs">Node.js</Link></li>
								</ul>
						</li>
						
						<li className="dropdown-submenu">
							<Link href="#" className="dropdown-toggle" data-toggle="dropdown">
								<Image src="/images/icon/middleware.png" width={13} height={13} alt="" />Mobile &amp; Cross-Platform</Link>
								<ul className="dropdown-menu services-sub-menu" style={{display: 'none'}}>
									<li><Link href="/technologies/mobile-development/ios">iOS</Link></li>
									<li><Link href="/technologies/mobile-development/android">Android</Link></li>
									<li><Link href="/technologies/mobile-development/flutter">Flutter</Link></li>
								</ul>
						</li>

						<li className="dropdown-submenu">
							<Link href="#" className="dropdown-toggle" data-toggle="dropdown">
								<Image src="/images/icon/middleware.png" width={13} height={13} alt="" />eCommerce &amp; CMS Platforms</Link>
						</li>

						<li className="dropdown-submenu">
							<Link href="#" className="dropdown-toggle" data-toggle="dropdown">
								<Image src="/images/icon/middleware.png" width={13} height={13} alt=""/>Cloud &amp; DevOps</Link>
						</li>

						<li className="dropdown-submenu">
							<Link href="#" className="dropdown-toggle" data-toggle="dropdown">
								<Image src="/images/icon/middleware.png" width={13} height={13} alt="" />Testing &amp; QA</Link>
						</li>

						<li className="dropdown-submenu">
							<Link href="#" className="dropdown-toggle" data-toggle="dropdown">
								<Image src="/images/icon/middleware.png" width={13} height={13} alt="" />Cybersecurity Tools &amp; Technologies</Link>
						</li>

						<li className="dropdown-submenu">
							<Link href="#" className="dropdown-toggle" data-toggle="dropdown">
								<Image src="/images/icon/middleware.png" width={13} height={13} alt="" />AI / ML &amp; Analytics</Link>
						</li>
					</ul>
				</li>


				<li className="dropdown">
					<Link href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Industries <span className="caret"></span></Link>
					<ul className="dropdown-menu">
						<li className="dropdown-submenu">
							<Link href="#" className="dropdown-toggle" data-toggle="dropdown">
								<Image src="/images/icon/mobapp.png" width={13} height={13} alt="" />Manufacturing</Link>
								<ul className="dropdown-menu services-sub-menu" style={{display: 'none'}}>
									<li><Link href="/solutions/industry-specific-erp-solutions/manufacturing">Manufacturing</Link></li>
									<li><Link href="/solutions/industry-specific-erp-solutions/retail">Retail</Link></li>
									<li><Link href="/solutions/industry-specific-erp-solutions/scm">SCM</Link></li>
								</ul>
						</li>
						
						<li className="dropdown-submenu">
							<Link href="#" className="dropdown-toggle" data-toggle="dropdown">
								<Image src="/images/icon/mobapp.png" width={13} height={13} alt=""/>Retail &amp; eCommerce</Link>
								<ul className="dropdown-menu services-sub-menu" style={{display: 'none'}}>
									<li><Link href="/solutions/custom-development-solutions/tailored-mobile">Tailored mobile</Link></li>
									<li><Link href="/solutions/custom-development-solutions/web-apps-for-business">Web apps for business</Link></li>
								</ul>
						</li>
						
						<li><Link href="/solutions/end-to-end-digital-transformation"><Image className="Image-responsive" src="/images/icon/mobapp.png" width={13} height={13} alt="" />Distribution &amp; Wholesale</Link></li>
						<li><Link href="/solutions/end-to-end-digital-transformation"><Image className="Image-responsive" src="/images/icon/mobapp.png" width={13} height={13} alt="" />Finance &amp; Banking</Link></li>
						<li><Link href="/solutions/end-to-end-digital-transformation"><Image className="Image-responsive" src="/images/icon/mobapp.png" width={13} height={13} alt="" />Healthcare &amp; Pharma</Link></li>
						<li><Link href="/solutions/end-to-end-digital-transformation"><Image className="Image-responsive" src="/images/icon/mobapp.png" width={13} height={13} alt=""/>Education &amp; Public Sector</Link></li>
						<li><Link href="/solutions/end-to-end-digital-transformation"><Image className="Image-responsive" src="/images/icon/mobapp.png" width={13} height={13} alt="" />Hospitality &amp; Travel</Link></li>
						<li><Link href="/solutions/end-to-end-digital-transformation"><Image className="Image-responsive" src="/images/icon/mobapp.png" width={13} height={13}alt="" />Energy &amp; Utilities</Link></li>
					    <li><Link href="/solutions/end-to-end-digital-transformation"><Image className="Image-responsive" src="/images/icon/mobapp.png" width={13} height={13} alt="" />Construction &amp; Projects</Link></li>
					</ul>
				</li>

				<li className="dropdown">
					<Link href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Integrations  <span className="caret"></span></Link>
					<ul className="dropdown-menu">
						<li><Link href="/solutions/end-to-end-digital-transformation"><Image className="Image-responsive" src="/images/icon/mobapp.png" width={13} height={13} alt=""/>ERP Integrations</Link></li>
						<li><Link href="/solutions/end-to-end-digital-transformation"><Image className="Image-responsive" src="/images/icon/mobapp.png" width={13} height={13} alt=""/>eCommerce &amp; Marketplaces</Link></li>
						<li><Link href="/solutions/end-to-end-digital-transformation"><Image className="Image-responsive" src="/images/icon/mobapp.png" width={13} height={13} alt="" />Shipping &amp; Carriers</Link></li>
						<li><Link href="/solutions/end-to-end-digital-transformation"><Image className="Image-responsive" src="/images/icon/mobapp.png" width={13} height={13} alt=""/>Payment Gateways</Link></li>
						<li><Link href="/solutions/end-to-end-digital-transformation"><Image className="Image-responsive" src="/images/icon/mobapp.png" width={13} height={13} alt=""/>Cloud &amp; Middleware</Link></li>


					</ul>
				</li>
				
				
				
				<li className="dropdown">
					<Link href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Products &amp; Solutions<span className="caret"></span></Link>
					<ul className="dropdown-menu">
						<li><Link href="/courier-management">
						<i className="fa fa-truck " style={{color: 'Blue'}}></i>
						WMS Suite</Link></li> 
						<li><Link href="/weapon-tracking">
						<Image className="Image-responsive" src="/images/icon/weapon.png" width={13} height={15} alt="" />Fleet Management</Link></li>
						<li><Link href="/erp-machine">
						<Image className="Image-responsive" src="/images/icon/erp.png" width={13} height={15} alt="" />
						Teleshopping Solutions</Link></li>
						<li><Link href="/hospital-management">
						<i className="fa fa-hospital-o " style={{color: 'lime'}}></i>
						&nbsp;E-SCOP</Link></li>
						<li><Link href="/retail-management">
						<Image className="Image-responsive" src="/images/icon/retail.png" width={13} height={15} alt="" />
						ESSMS</Link></li>
						<li><Link href="/human-resource-management">
						<Image className="Image-responsive" src="/images/icon/hr.png" width={10} height={15} alt="" />DMS</Link></li>
						<li><Link href="/automobile-management">
						<i className="fa fa-automobile  " style={{color: 'red'}}></i>HR/Payroll</Link></li>
						<li><Link href="/pharmacy-management">
						<Image className="Image-responsive" src="/images/icon/pharmacy.png" width={13} height={15} alt="" />Dispatch</Link></li>
						<li><Link href="/pharmacy-management">
						<Image className="Image-responsive" src="/images/icon/pharmacy.png" width={13} height={15} alt="" />International Courier</Link></li>
						<li><Link href="/pharmacy-management">
						<Image className="Image-responsive" src="/images/icon/pharmacy.png" width={13} height={15} alt=""/>Mail Room</Link></li>
						<li><Link href="/pharmacy-management">
						<Image className="Image-responsive" src="/images/icon/pharmacy.png" width={13} height={15} alt="" />Courier</Link></li>
						<li><Link href="/pharmacy-management">
						<Image className="Image-responsive" src="/images/icon/pharmacy.png" width={13} height={15} alt=""/>Weapon</Link></li>
						<li><Link href="/pharmacy-management">
						<Image className="Image-responsive" src="/images/icon/pharmacy.png" width={13} height={15} alt=""/>Agency Management</Link></li>
						
					</ul>
				</li>
			 
			 	<li className="dropdown">
					 <Link href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Success Stories <span className="caret"></span></Link>
					  <ul className="dropdown-menu">
						<li><Link href="/technology-portfolio">
					  <Image className="Image-responsive" src="/images/icon/technology.png" width={13} height={15} alt=""/>
			            ERP Modernization </Link></li>
						 <li role="separator" className="divider"></li>
						<li><Link href="/industry-portfolio">
					<Image className="Image-responsive" src="/images/icon/industry.png" width={13} height={15} alt=""/>

			Warehouse &amp; Supply Chain Automation </Link></li>
			<li><Link href="/technology-portfolio">
					  <Image className="Image-responsive" src="/images/icon/technology.png" width={13} height={15} alt=""/>
			            Custom Web &amp; Mobile Apps </Link></li>
						 <li role="separator" className="divider"></li>
						<li><Link href="/industry-portfolio">
					<Image className="Image-responsive" src="/images/icon/industry.png" width={13} height={15} alt=""/>

			Digital Marketing &amp; Growth </Link></li>
			<li><Link href="/technology-portfolio">
					  <Image className="Image-responsive" src="/images/icon/technology.png" width={13} height={15} alt="" />
			            Cybersecurity &amp; Compliance </Link></li>
						 <li role="separator" className="divider"></li>
						<li><Link href="/industry-portfolio">
					<Image className="Image-responsive" src="/images/icon/industry.png" width={13} height={15} alt=""/>

			Cloud Migration &amp; DevOps </Link></li>
			
					  </ul>
					</li>
					


			 
			 <li><Link href="/contact-us" title="Contact">Contact Us </Link></li>
	    </ul>
        </div>
      </div>
    </nav>
  )
}
