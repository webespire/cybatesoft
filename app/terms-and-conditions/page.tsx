import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Terms and Conditions",
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
   <br/><br/><br/><br/>
 <center><div>
<h1 style={{color:'#224ca2'}}>TERMS & CONDITIONS</h1>
<h4 style={{color:'#003c54'}} > Coming Soon..................</h4>
<p>We are updating content soon...! Thanks for your visit...!!</p>

            	<div>
					<Link href="/" className="btn btn-primary btn-lg active" role="button" title="go back  to home page">GO BACK TO HOME PAGE</Link> 
            	</div>
            
</div></center><br/><br/><br/><br/>
   </>
  )
}
