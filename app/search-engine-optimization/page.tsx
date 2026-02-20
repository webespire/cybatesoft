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
					 <Image src="/images/seo.jpg" className="img-responsive banner_img" width={1351} height={120} alt="Customization"/>
							<div className="banner_heading">
							<div className="container">
								<h2>Search Engine Optimization</h2>
								<p></p>
								</div>
							</div>
				</div>
	<div className="container">
			
			<div className="row">
				<div className="col-md-9">
					<div className="left_panel">
						<div className="inner_devolopment">
							<h2>Search Engine Optimization</h2>
							<p>When every bit of software programming, application development and customization is done for your site, search engine optimization is the final (and ongoing) chapter of our services. This is because your site is now ready to put before your target audience.We always approach search engine optimization from a client’s standpoint. Our strategies are </p>
                            <div className="img-btn_center pull-right right_img">
                     	<Image src="/images/Search Engine Optimization.png" alt="Search Engine Optimization" className="img-responsive" width={260} height={209}/>
						<div className="img_btn_link">
						<Link href="/portfolio-php" className="btn btn-success ">View Portfolio</Link>
						</div>
						</div>
								<p>programmed to meet the unique needs of your website goals and target market. By working with your company throughout the entire process, we are able to decide exactly which strategy will provide the maximum results for your SEO campaign.Our Search Engine Optimization Campaign We know how the search engines operate and what users search on 
								the internet. That’s why our client sites have to date attained higher rankings in search engines. We know exactly what it takes to get top ranks and more essentially how to maintain that position for a long time thus capitalizing on your traffic and Return on Investment (RoI).	</p>
						</div>
					</div>
					<div>
					
								
				</div>
		
				<div className="inner_devolopment">
				<h3>As an SEO company, our campaign consists of the following steps:</h3>
							<div className="row">

			 <ul className="listing_content">

                        <li><i className="fa lccr fa-chevron-circle-right"></i>Full analysis or your site (readability, usability) with in-depth reporting</li>

                        <li><i className="fa lccr fa-chevron-circle-right"></i>Research into identifying the most relevant keywords</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Complete analysis of your competitor sites for the selected keywords</li>
						<li><i className="fa lccr fa-chevron-circle-right"></i>Further website code enhancement</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i>  Manual submission to all major search engines and directories</li>
                        <li><i className="fa lccr fa-chevron-circle-right"></i> URL optimization – making your URLs search engine friendly</li>
						</ul></div>
						<p>As an SEO Company, AI’s search engine optimization specialists provide genuine, time-tested organic SEO services that have proven to bring amazing results. An important part that differentiates us from 
							mediocre search engine marketers is our ability to provide ongoing and affordable SEO services and maintenance, which guarantees that your top rankings will be taken good care of by professional search engine marketers for very affordable SEO services on monthly fee basis</p>
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
							<li role="presentation" ><Link href="/php-web-development">PHP Web Development</Link></li>
							<li role="presentation" ><Link href="/zend-framework-development">Zend framework Development</Link></li>
							<li role="presentation" ><Link href="/python-web-development">Python Web Development</Link></li>
							<li role="presentation" className="active"><Link href="/search-engine-optimization" >Search Engine Optimization</Link></li>
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
