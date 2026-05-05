import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "DMS",
  description:
    "An another open source project of Codeigniter with Bootstrap. It is a Lightweight MVC package for you to build your own Custom CMS.",
    keywords: [
        "Codeigniter CMS", "Custom CMS", "Customised Content Management System", "Lightweight CMS", "Tiny CMS", "Flexible CMS", "Download CMS", "Bootstrap CMS", "Mobile CMS", "Responsive CMS"
    ],
  openGraph: {
    title: "DMS",
    description:
      "",
  },
};

export default function page() {
  return (
   <>
   <div className="clearfix"></div>
    <div className="inner_page_banner">
                
                     <Image src="/images/product.jpg" className="img-responsive banner_img" width={1351} height={120} alt="Customization"/>
                         
                            <div className="banner_heading">
                            <div className="container">
                                <h2>DMS</h2>
                                </div>
                            </div>							
                         </div>
            
    <div className="container">
        
            <div className="row">
            <div className="tab-content">
             <div className="col-md-9">
                <div className="left_panel">
                        <div className="inner_devolopment ret_mnt">
                            <h2>DMS</h2>
                        <ul>
                    <li><p>The courier software,is easy-to-use,courier software solution specifically designed for the courier, messenger, expediting and distribution industries. Offer real-time delivery tracking, barcode scanning 
                        and signature capture.</p></li>
                    
                    <li><p>Machine Retail Management Machine is a POS is a solution which permits retail organizations to serve customers quickly and efficiently, hence avoiding large queues at the sales counter. This solution makes 
                        the activities at the sales counter hassle free and builds a sense of satisfaction among your clients. Retail Management Machine helps increase the productivity of the staff many fold.</p></li>
                    
                    <li><p>This solution is also customizable to various other programmers like discount management, coupon management, membership management etc.</p></li>
                    
                    <li><p>Integration with the touch screen allows staff to operate effortlessly and concentrate on providing efficient service to your customers.</p></li>
                    
                    <li><p>Pre entered data enables minimum data entry at the POS and hence efficiency and speed are maintained without compromising on accuracy and security.</p></li>
                    
                    <li><p>Multi currency management and multiple outlet management make the solution the best of its kind.</p></li>
                    
                    <li><p>Developed using Dot Net technologies, this solution can run on different operating systems. With a web interface, senior management can use this solution to get their business reports from across the globe.</p></li>
                    
                    <li><p>Being extremely flexible and customizable, Retail Management Machine can be used for store management, back office management, chain store management, franchise stores management, super 
                    market, hypermarkets etc.</p></li>
                    </ul>
                    </div>
                    </div>
                    
                    </div>

            </div>
            <div className="col-md-3">
                <div className="right_panel">
                    <div className="right_panel_heading">
                        <h3>Cybate Products</h3>
                    </div>
                    <div className="programming_platforms_list">
                        <ul className="nav nav-pills nav-stacked " id="tab">
                            <li role="presentation" >
                            <Link href="/cybate-products/wms-suite" >WMS Suite</Link></li>
                            <li role="presentation"  >
                            <Link href="/cybate-products/fleet-management">Fleet Management</Link></li>
                            <li role="presentation" ><Link href="/cybate-products/teleshopping-solutions">Teleshopping Solutions</Link></li>
                            <li role="presentation" ><Link href="/cybate-products/e-scop">E-SCOP</Link></li>
                            <li role="presentation"  ><Link href="/cybate-products/essms">ESSMS</Link></li>
                            <li role="presentation" className="active"><Link href="/cybate-products/dms">DMS</Link></li>
                            <li role="presentation" ><Link href="/cybate-products/hr-payroll">HR/Payroll</Link></li>
                            <li role="presentation" ><Link href="/cybate-products/dispatch">Dispatch</Link></li>
                            <li role="presentation" ><Link href="/cybate-products/international-courier">International Courier</Link></li>
                             <li role="presentation" ><Link href="/cybate-products/mail-room">Mail Room</Link></li>
                             <li role="presentation" ><Link href="/cybate-products/courier">Courier</Link></li>
                            <li role="presentation" ><Link href="/cybate-products/weapon">Weapon</Link></li>
                             <li role="presentation" ><Link href="/cybate-products/agency-management">Agency Management</Link></li>
                            
                            
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
   
   </>
  )
}
