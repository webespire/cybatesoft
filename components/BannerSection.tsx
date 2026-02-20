import React from 'react';
import Image from "next/image";
import Link from 'next/link';

export default function BannerSection() {
  return (
    <div className="cybet_ban_ino">
    <div className="container-fluid">
        <div className="row">
           
            <div className="col-xl-9 col-md-9 col-sm-12 pd4">
                <div className="banner-main">
                   
                    <div className="banner-container" >
                       
                        <Image id="bannerImage" src="/media/logo/logo4.jpeg" width={1013} height={330} alt="Banner Image"/>
                       
                        <ul className="image-switcher">
                            <li className="active" data-img="media/logo/images.png" data-text="Cloud Enablement">Cloud Enablement</li>
                            <li data-img="media/logo/business.jpg" data-text="Business Process Automation">Business Process Automation</li>
                            <li data-img="media/logo/col.jpg" data-text="Collaboration">Collaboration</li>
                            <li data-img="media/logo/am.jpg" data-text="Microsoft Dynamics 365">Microsoft Dynamics 365</li>
                        </ul>
                    </div>
                </div>
            </div>

           
            <div className="col-md-3 col-sm-12 pd4">
                <div className="right_ban">
                    <h1>Latest News ##<br/>of<span> CybateSoft</span></h1>
                    <p> CybateSoft Owner of marketing leading Portals Cybate global Solutions for staffing and CybateSoft Products raised the Series of Funding. </p>
                    <div className="text-right xse">
                        <Link href="/news-events">Read More</Link>
                    </div>
                    <hr className="cyb_rgt"/>
                    <Link href="/casestudy" className="view_all">View all case studies... <i className="fa fa-arrow-circle-right"></i></Link>
                </div>
            </div>
        </div>
    </div>
    <div className="color_blue"></div>
</div>
  )
}
