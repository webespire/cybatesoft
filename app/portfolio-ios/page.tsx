import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "IOS",
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
         <div className="container">
      <div className="row" style={{display: 'flex', alignItems: 'center'}}>
	  <div className="col-md-3 text-center">
          <h2 style={{fontSize: '36px', fontWeight: 'bold', margin: 0}}>.Net</h2>
        </div>
        <div className="col-md-9">
          <Image src="/images/portfolio.jpg" alt="Portfolio" className="img-responsive banner_img" width={1000} height={400} style={{width: '100%', height: 'auto'}} />
        </div>

       

      </div>
    </div>
  </div>

<div className="imp_main_com">
	   <div className="container">
		<div className="row">
		<div className="col-md-12">
		<div className="small_circle">
		 
		<ul>
		
		 <li className="active"><Link href="/portfolio-net"><Image src="/images/net.png"  className="img-responsive" 
        width={55} 
        height={55} 
        alt="Customization"/></Link><p>.Net</p>
			<div className="triangle-down"></div>
		
		</li>
		
		<li ><Link href="/portfolio-php"><Image src="/images/php.png"  className="img-responsive" 
        width={55} 
        height={55} 
        alt="PHP"/></Link><p>PHP</p>
			<div className="triangle-down"></div>
		
		</li>
		<li><Link href="/portfolio-ios"><Image src="/images/ios.png"  className="img-responsive" 
        width={55} 
        height={55} 
        alt="iOS"/></Link><p>iOS</p>
			<div className="triangle-down"></div>
		
		</li>
		<li><Link href="/portfolio-android"><Image src="/images/android.png"  className="img-responsive" 
        width={55} 
        height={55} 
        alt="Android"/></Link><p>Android</p>
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
		
		  <h1>iOS WORK</h1>
		  </div>
		 </div>
	   </div>
		  
		
		  
		  </div>
		  </div>
        
    
    </>
  )
}
