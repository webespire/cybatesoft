import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


export const metadata = {
  title: "Request a Quote",
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
				
					 <Image src="/images/request a qoute.jpg" className="img-responsive banner_img" width={1351} height={120} alt="Request a Quote" />
						 
							<div className="banner_heading">
							<div className="container">
								<h2> Request a  Quote</h2>
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
							<h2>Request a  Quote (For Business Inquiry)</h2>
								
						</div>
					</div>
					
		<div className="col-md-8"> 
					<form method="post" action="">
					            <div className="form-group ">
								<label htmlFor="name">Name:<span style={{color:'red'}} className="red">*&nbsp;</span><span id="error_name" style={{color: '#FF0000'}}> &nbsp;</span></label>
                                  <input type="text" className="form-control " name="name" id="name" placeholder="Enter your name"/>
                                </div>                    
                                <div className="form-group">
                                  <label htmlFor="email">Email:<span style={{color:'red'}} className="red">*&nbsp;</span><span id="error_email" style={{color: '#FF0000'}}> &nbsp;</span></label>
                                  <input type="email" className="form-control" name="email" id="email" placeholder="Your e-mail address"/>
                                </div>
                                <div className="form-group">
                                  <label htmlFor="pwd">Subject:<span style={{color:'red'}} className="red">*&nbsp;</span><span id="error_subject" style={{color: '#FF0000'}}> &nbsp;</span></label>
                                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Your Subject"/>
                                </div>
                                <div className="form-group">
                                  <label htmlFor="phone">phone:<span style={{color:'red'}} className="red">*&nbsp;</span><span id="error_phone" style={{color: '#FF0000'}}> &nbsp;</span></label>
                                  <input type="text" name="telephone" className="form-control" id="phone" placeholder="Your phone"/>
                                </div>
                                <div className="form-group">
                             
							  <label >Comments:<span style={{color:'red'}} className="red">*&nbsp;</span><span id="error_message" style={{color: '#FF0000'}}> &nbsp;</span></label>
                               <textarea className="form-control textarea" rows={3} name="message"></textarea>
                              
							  </div>
							 
							<input type="submit" name="submit" id="SubMitBTN"  className="btn btn-primary" tabIndex={7} value="SUBMIT INQUIRY"/>
					</form>
					 
                 </div>  
					
					
				
					
									
				</div>
			<div className="col-md-3">
				<div className="right_panel">
					<div className="right_panel_heading">
						<h3>Follow Us On</h3>
					</div>
					<div className="programming_platforms_list">
						<div className="social">
                            	<Link href="https://www.facebook.com/"><i className="fa fa-facebook fa-2x social-icon"></i></Link>
                                <Link href="https://twitter.com/"><i className="fa fa-twitter fa-2x social-icon"></i></Link>
                                <Link href="https://in.linkedin.com/"><i className="fa fa-linkedin fa-2x social-icon"></i></Link>
                                <Link href="https://plus.google.com"><i className="fa fa-google-plus fa-2x social-icon"></i></Link>
                        </div>
					</div>
					
				</div>	  
			</div>	  
		</div>
		
           
        </div>
		
        
		</div>
		
		
			
    </>
  )
}
