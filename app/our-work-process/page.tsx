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
				
					 <Image src="/images/about us.JPG" className="img-responsive banner_img" width={1351} height={120} alt="Customization"/>
						 
							<div className="banner_heading">
							<div className="container">
								<h2>Our Work Process</h2>
								<p></p>
								</div>
							</div>							
						 					
					 				
				
				</div>
			
			 
	<div className="container">
			
			<div className="row">
			<div className="tab-content">
               
                

				<div className="col-md-9">
				<div className="left_panel">
						<div className="inner_devolopment">
							<h2>Our Work Process</h2>
						</div>
					</div>
					<div className="inner_page_pad">
					<div className="inner_devolopment">
				
					<p>The team of professionals at CybateSoft follows definite processes for website creation that involves keeping options for software expansion, should the need arise in future. Here is a quick overview of the steps we follow.</p>
					<h3>Analysis:</h3>
					<p>After we receive details of your requirement, our professional analysts examine your necessities. Our team of analysts understands your requirements, and chalk out the steps to follow, to provide you with the best of solutions tailor made to your needs, these are, Understanding of your business 
						type, the current market scenario, and the best practices involved in the technologies to serve your purpose. These findings are necessary before we embark on your project. Our expert analysts carry out this critical job.</p>
					<h3>Design:</h3>
					<p>As discussed with the clients, our designers work on the website design, colour, and customized templates that are creative and apt to meet their requirements. Meanwhile, clients can come up with new ideas and modifications that is, before it move to the next phase. Throughout the process, 
						all related aspects and strategies are discussed threadbare and proceeded with, post the approval of the clients.</p>
					<h3>Building up content:</h3>
					<p>A website without content is of no use. Besides designing websites, also employs experienced content developers who have a flair for writing. They develop content of any type and for any industry, while meeting the requirement of clients. The writing is included and highlighted with the 
						SEO keywords. Analysts are also available for checking the content, who corrects the grammatical and spelling errors existing in the content, if any.</p>
					<h3>Coding and development:</h3>
					<p>Now, it is the turn of our developers and programmers to continue with the encryption process.They put encoding messages without touching the design and template of the website. The technical 
						team also creates suitable applications such as shopping carts, e-catalogues, administrator control panels and others.</p>
					<h3>Testing:</h3>
					<p>Automated and manual assessment is carried out in this step for integration, scalability, resolution, cross-browser and various assessment tools utilized to try out the applications.</p>
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
							<li role="presentation" className="active">
							<Link href="/our-work-process" >Our Work Process</Link></li>
							<li role="presentation"  ><Link href="/faqs">FAQs</Link></li>
							<li role="presentation"><Link href="/why-cybatesoft">Why CybateSoft</Link></li>
							<li role="presentation"><Link href="/our-quality-policy"> Our Quality Policy</Link></li>
							
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
		
        
		</div>
    </>
  )
}
