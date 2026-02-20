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
								<h2>PHP Web Development</h2>
								<p></p>
								</div>
							</div>
				</div>
	<div className="container">
		
			<div className="row">
				 <div className="col-md-9">
					<div className="left_panel">
						<div className="inner_devolopment">
							<h2>PHP Web Development</h2>
							<p> Cybatesoft is an offshore PHP Web Development company in India. We have experienced & expert PHP developers who give you high quality, customized, robust and scalable web based solutions.</p>
				</div>
					</div>
                    <div className="row">
                    <div className="col-md-7 col-sm-12">
					<div className="inner_devolopment2">
					<h2>Why Choose PHP Over Other Web Development:</h2>

						<p>With hardly any publicity, PHP has swept the Web. PHP is in style because it’s relatively easy to learn and comparatively cheap to develop web projects. And on the other side, it’s an open source technology and development cost is lower than the other technologies like java and dot net. AI has an experience in developing high-quality PHP and MySQL based web applications.</p>	
					</div>
                    </div>
                    
                    <div className="col-md-5 col-sm-12">
						<div className="img-btn_center">
                     	<Image src="/images/Php1.png" alt="" className="img-responsive" width={261} height={209}/>
						<div className="img_btn_link">
						<Link href="/portfolio-php" className="btn btn-success ">View Portfolio</Link>
						</div>
						</div>
                     </div>
                    
                    </div>
                    
					<div className="inner_devolopment2">
					<h2>Why To Choose Our Company?</h2>

						<p>Support Many PHP Frameworks for Development Experienced PHP developer for multiple industry verticals 10+ years in IT business Large technological support available Provide cost-effective and scalable PHP solutions Advanced web applications at competent rates.</p>
						</div>
					<div className="inner_devolopment2">
					
							<h2>PHP’s Three key Advantages Over Competing Technologies:</h2>

				<p><strong>Designed for the Web –</strong> PHP has built-in features to handle heavily trafficked sites and to simplify common Web programming tasks.</p>	
				<p><strong>Ease of Use –</strong> Companies gain enhanced productivity of development teams and significantly reduced time-to-market of mission critical web applications.</p>
				<p><strong>Open Source –</strong> Collaborative development leads to rapid technology advancement, superior code quality, a massive library of prewritten code, and comprehensive developer support and documentation.</p>
				
					</div>
					<div className="inner_devolopment2">
					<h2>Our PHP Web Development Domain Expertise In:</h2>

						<p>E-commerce Shopping CartsSocial NetworkingRSS FeedsBlogs, Wikis and Internet ForumsMessaging and Mailing SystemsCustom CRM/ERP SolutionsContent Management SystemPayment Gateway IntegrationAdvertisement and Banner ManagementIntegrated Search.</p>
					</div>
					<div className="inner_devolopment2">
					<h2>Our Core Expertise with PHP Lies with Open Source Customization:</h2>

						<p>Open Source is a code / applications or scripts which are created by open community and available for free or under acertain license agreement or at very low cost.Depending on your project type and requirement if there are good quality open source solutions are available we may recommendation to go for it. It helps to reduce total costs of your project. The best part is most of the open source have the flexibility to customize it as per one’s requirement giving it personalize 
						feel.We are capable of doing possible customization and modifications in open source applications / scripts.We have worked on many open source technologies which include, CMS (Content Management System), e-commerce shopping carts, blogs, community services and a variety of open source modules.PHP developers at AI can work in Joomla, Magento, X-cart, Zen cart, OScommerce, WordPress, Dolphin Script, Social Engine and so on. Learning a new tool is not a problem as most of the team at AI is having more than 3+ years of experience.</p>
					</div>
				
						<div className="img-btn_center">
                     	<Image className="img-responsive wd100" src="/images/Php.jpg" width={848} height={132} alt="templates"/>
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
							<li role="presentation" className="active"><Link href="/php-web-development">PHP Web Development</Link></li>
							<li role="presentation"><Link href="/zend-framework-development">Zend framework Development</Link></li>
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
