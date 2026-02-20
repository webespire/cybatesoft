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
				
					 <Image src="/images/faq.jpg" className="img-responsive banner_img" width={1351} height={120} alt="Customization"/>
						 
							<div className="banner_heading">
							<div className="container">
								<h2>FAQs</h2>
								<p>	</p>
								
								</div>
							</div>							
						 					
					 				
				
				</div>		
			 
	<div className="container">
			
			<div className="row">
			
     
   <div className="col-md-9">
					<div className="left_panel">
						<div className="inner_devolopment">
							<h2>FAQs</h2>
						</div>
					</div>
                   
                    
                    <div className="inner_page_pad">
					<div className="inner_devolopment">
					<h3>what will be the cost of my Website?</h3>
					
					<p>The major part of the project cost is based on the technology platform is used, time taken for completion and level of complexity of the project. This is the reason why different types of websites like static website, dynamic websites, Interactive websites, E-commerce websites, Content Management Systems (CMS), social networking websites and corporate websites have got different costing.
<br/><br/>
					Once we finalize the scope of work, technology platform and required efforts, we finalize the costing for the website. For Cybatesoft every project is unique and we always try to make sure that our pricing is best match with your budget.
					</p>
					
					<h3>Are there any hidden costs linked with your web development services?</h3>
					
					<p>Absolutely not. Our charges remain same as the quotation we provide. The charges at time may vary if you add or change your requirements which cost us significant amount of time and efforts but there are no hidden costs.
					

					</p>
					
					<h3>Will my website work in with different devices and web browsers?</h3>
					
					<p>Yes. We make sure that your website works with different devices like PC, laptop, tablet and mobile by proving the responsive web design. We also test your website in most popular web browsers for optimum cross-browser compatibility.
					

					</p>
					
					<h3>Do your websites are SEO friendly?</h3>
					
					<p>Yes. All our websites are SEO friendly. We also offer Search Engine Optimization services which helps you to get top rankings in major search engines like Google, yahoo and Bing. Our SEO experts will help you in deciding the right keywords for your website.
					

					</p>
					
					<h3>who owns the website after the development?</h3>
					
					<p>Once full payment is done, the project along with the code belongs to you. Do you provide complete website solutions? (Web Hosting + Internet Marketing + Web Development)Yes. We provide 
						complete web solution which comes with domain registration, server hosting, web designing, website development and website promotion on leading search engines (internet marketing).</p>
					
					
					<h3>Do you provide any after sales service/support once the project is completed?</h3>
					
					<p>Yes. Once the project is completed and delivered to you, we are still bound to give you our services in terms of support for 90 Days. We provide support for bug fixing, flaws in the functionality from 
						our end and minor changes that are part of project scope without any extra charges. Once free support is over, based on the project’s requirement you can always have option to go with paid maintenance and support.</p>
					
					<h3>What is site maintenance ?</h3>
					
					<p>Maintenance is a paid monthly/annually contract between Cybatesoft and you to provide your website an on-going support. This is good option if you want to keep your website updated with new content because all good web sites have new content updated regularly. Fresh content is what drives your online traffic.
					

					</p>
					
					<h3>Do you sign non-disclosure agreements?</h3>
					
					<p>At Cybatesoft we always take care and protect the confidentiality of the project information. If you wish to keep the ownership of the developed software to yourself then we are always ready to sign non-disclosure agreement. You will be the only owner and a person who owns rights of the software develped by us. You can review our IP Protection and Privacy Policy for more details.
					

					</p>
					
					<h3>Can I view my website while it is being built ?</h3>
					
					<p>Yes. We will provide you the URL of our demo server where you can see the development progress of your website. Your can also review your website and provide your suggestions to us.
					

					</p>
					
					</div>
                    </div>
					
					
				
					
									
				</div>
   
   
			<div className="col-md-3">
				<div className="right_panel">
					<div className="right_panel_heading">
						<h3>Company</h3>
					</div>
					<div className="programming_platforms_list">
						<ul className="nav nav-pills nav-stacked " id="tab">
							<li role="presentation">
							<Link href="/who-we-are"> Who We are</Link></li>
							<li role="presentation">
							<Link href="/our-work-process">Our Work Process</Link></li>
							<li role="presentation"  className="active"><Link href="/faqs">FAQs</Link></li>
							<li role="presentation"><Link href="/why-cybatesoft">Why CybateSoft</Link></li>
							<li role="presentation"><Link href="/our-quality-policy"> Our Quality Policy</Link></li>
							
						</ul>
					</div>
					
					
				</div>	  
			</div>	  
		</div>
		
           
        </div>
		
        
		
   </>
  )
}
