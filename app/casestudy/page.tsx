import React from 'react';
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
    <div className="inner_page_banner">
				
					 <Image src="/images/casestudy.jpg" className="img-responsive banner_img" width={1351} height={120} alt="Customization"/>
						 
							<div className="banner_heading">
							<div className="container">
								<h2>OUR INDUSTRIES CASE STUDIES</h2>
								</div>
							</div>							
						
				</div>
 <div className="body_str">
		   <div className="container">
		    <div className="row">
		     <div className="col-md-12">
		      <div className="java_work">
		
		  <h1>CASE STUDIES</h1>
		  </div>
		 </div>
	   </div>
		  
		  <div className="row">
	
		  </div>
		  
		  </div>
		  </div>

    </>
  )
}
