import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function page() {
  return (
    <>
      

<div className="inner_page_banner">
					 <Image src="/images/portfolio.jpg" className="img-responsive banner_img" width={1351} height={120} alt="Customization"/>
							<div className="banner_heading">
							<div className="container">
								<h2>Php</h2>
							</div>

							</div>							
				</div>
<div className="imp_main_com">
	   <div className="container">
		<div className="row">
		<div className="col-md-12">
		<div className="small_circle">
		 
		<ul>
		
		 <li><Link href="/portfolio-net"><Image src="/images/.net.png" width={55} height={55} alt=""/></Link><p>.Net</p>
			<div className="triangle-down"></div>
		
		</li>
		
		<li className="active"><Link href="/portfolio-php"><Image src="/images/php.png" width={55} height={55} alt="Customization"/></Link><p>PHP</p>
			<div className="triangle-down"></div>
		
		</li>
		<li><Link href="/portfolio-ios"><Image src="/images/ios.png" width={55} height={55} alt="Customization"/></Link><p>iOS</p>
			<div className="triangle-down"></div>
		
		</li>
		<li><Link href="/portfolio-android"><Image src="/images/android.png" width={55} height={55} alt="Customization"/></Link><p>Android</p>
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
		 
		  <h1>PHP WORK</h1>
		  </div>
		 </div>
	   </div>
		  
		
		  
		  </div>
		  </div>
    </>
  )
}
