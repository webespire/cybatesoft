import React from 'react';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="new_contact_area">
        <div className="container">
        	<ul>
        		<li>
                	<div className="circle_area cnt-text">
                		<span><i className="fa fa-2x fa-newspaper-o"></i></span>
                        <h4>270+</h4>
                        <p>Project Developed</p>
                	</div>
                </li>
                <li>
                	<div className="circle_area cnt-text">
                		<span><i className="fa fa-2x fa-globe"></i></span>
                        <h4>3 + Year</h4>
                        <p>global presence</p>
                	</div>
                </li>
                <li>
                	<div className="circle_area cnt-text">
                		<span><i className="fa fa-2x  fa-group"></i></span>
                        <h4>70 + </h4>
                        <p>Employe Strength</p>
                	</div>
                </li>
                <li>
                	<div className="circle_area cnt-text">
                		<span><i className="fa fa-2x fa-support"></i></span>
                        <h4>24*7</h4>
                        <p>Customer Support</p>
                	</div>
                </li>
                <li className="cntt">
                	<div className="circle_area">
                		<div className="cont_us" style={{ display: "flex", justifyContent: "center" }}>
                        	<Link href="/contact-us" className="da-link">Contact Us</Link>
                        </div>
                	</div>
                </li>
        	</ul>
        </div>
        </div>
  )
}
