import React from 'react';
import Image from 'next/image';

export default function KeyMilestones() {
  return (
    <div className="container py-4">
    <div className="row justify-content-center text-center">
        <div className="col-md-12">
            <h2 className="title">DynaTech’s Key Milestones</h2>
            <p className="top_content">
                DynaTech is steered by guiding principles that drive our responsibilities toward our clients, employees, and partners.
                As an award-winning company and a leading <strong>Microsoft Solutions Partner in USA</strong>, we value these principles and sustain lasting industry relationships with successful projects across geographies.
            </p>
        </div>
    </div>

   
    <div className="row text-center">
        <div className="col-lg-3 col-md-6 col-12">
            <div className="counter-box">
                <Image src="https://dynatechconsultancy.com/hubfs/DynaTech_Systems_October2023/Images/Clients.svg" width={105} height={105} alt="Clients" loading="lazy"/>
                <h4 className="count"><span className="purecounter" data-purecounter-start="0" data-purecounter-end="100">100</span> + Clients</h4>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
            <div className="counter-box">
                <Image src="https://dynatechconsultancy.com/hubfs/DynaTech_Systems_October2023/Images/Employee.svg" width={105} height={105}alt="Expert Minds" loading="lazy"/>
                <h4 className="count"><span className="purecounter" data-purecounter-start="0" data-purecounter-end="350">350</span> + Expert Minds</h4>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
            <div className="counter-box">
                <Image src="https://dynatechconsultancy.com/hubfs/DynaTech_Systems_October2023/Images/Location.svg" width={105} height={105}alt="Locations" loading="lazy"/>
                <h4 className="count"><span className="purecounter" data-purecounter-start="0" data-purecounter-end="5">5</span> Locations</h4>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
            <div className="counter-box">
                <Image src="https://dynatechconsultancy.com/hubfs/DynaTech_Systems_October2023/Images/Project.svg" width={105} height={105}alt="Projects" loading="lazy"/>
                <h4 className="count"><span className="purecounter" data-purecounter-start="0" data-purecounter-end="150">150</span> + Projects</h4>
            </div>
        </div>
    </div>
</div>
  )
}
