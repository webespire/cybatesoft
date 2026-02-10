import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Topbar() {
  return (
    <div className="top-bar">
  	<div className="container-fluid">
       <div className="row">	
	   <div className="col-md-5 col-sm-12 pdlr8">
			<div className="topbar_link_new">
			<Link href="/who-we-are">WHO WE ARE</Link>
			<Link href="/career-opportunities"> CAREER</Link>
			<Link href="/cybatesoft-event">CYBATESOFT EVENT</Link>
			</div>
	   </div>
	   
         <div className="col-md-7 col-sm-12 pdlr8">
        	<div className="topbar_right">
			 <span>For business purpose only&nbsp;:</span>
            	<span><p className="call_tor"><Image src="/images/flag_icon.png" alt="flag_icon" width={20} height={13}/> +91 9640508585</p></span>
				<span><p className="call_tor"><Image src="/images/usa.png" alt="flag_icon" width={24} height={16}/> +1(321) 720-5058</p></span>
				<span> 
            	<Link href="/request-a-quote" title="Request a Free Quote/Proposal"><Image src="/images/q.png" alt="Quote Icon" className="img-responsive img_quote" width={195} height={25} /></Link>
               </span>
            </div>
            
        </div>
         
      </div> 
  	</div>
  </div>
  )
}
