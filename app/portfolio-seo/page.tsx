import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Portfolio SEO",
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
     


<div className="inner_page_banner">
					 <Image src="/images/portfolio.jpg" className="img-responsive banner_img" width={1351} height={120} alt="Customization"/>
							<div className="banner_heading">
							<div className="container">
								<h2>Seo</h2>
							</div>

							</div>							
				</div>
<div className="imp_main_com">
	   <div className="container">
		<div className="row">
		<div className="col-md-12">
		<div className="small_circle">
		 
		<ul>
		<li ><Link href="/industry-portfolio"><Image src="/images/ecom_icon.png" width={55} height={55} alt="Ecommerce"/></Link><p>Ecommerce</p>
			<div className="triangle-down"></div>
		
		</li>
		 <li className="active"><Link href="/portfolio-seo"><Image src="/images/seo_icon.png" width={55} height={55} alt="SEO"/></Link><p>SEO</p>
			<div className="triangle-down"></div>
		
		</li>
		
		<li><Link href="/portfolio-internet-marketing"><Image src="/images/in_icon.png" width={55} height={55} alt="Internet Marketing"/></Link><p>Internet-Marketing</p>
			<div className="triangle-down"></div>
		
		</li>
		
		
		
		</ul>
		</div>
		</div>
		</div>
      </div>
    </div>


          <div className="body_str">
		   <div className="container">
		    <div className="row">
		     <div className="col-md-12">
		      <div className="java_work">
		  
		  <h1>SEO WORK</h1>
		  </div>
		 </div>
	   </div>
		  
		  <div className="row">
		  <div className="col-md-4">
		  <div className="zip_main">
		  <div className="image_crl">
		 		  <Link href="http://www.nutrimed.co.in/" target="blank"><Image src="/images/techport/nutrimed.png" className="img-responsive" width={353} height={196} alt="Nutrimed"/></Link>
		  </div>
		  <div className="text_bomt">
		  <h4>Nutrimed</h4>
		  <p>Free shipping on every order.</p>
		  </div>
		  </div>
		  </div>
		  
		  <div className="col-md-4">
		  <div className="zip_main">
		  <div className="image_crl">
		<Link href="http://www.zoroy.com/" target="blank"><Image src="/images/techport/chocolates.png" className="img-responsive" width={353} height={196} alt="Zoroy"/></Link>
		 
		  </div>
		  <div className="text_bomt">
		  <h4>Zoroy</h4>
		  <p>Discover the joy of gifting...</p>
		  </div>
		  </div>
		  </div>
		  
		  </div>
		  
		  </div>
		  </div>
    </>
  )
}
