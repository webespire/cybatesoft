"use client";
import React, { useState } from "react";

export default function ContactForm() {

const [formData, setFormData] = useState({
fullName:"",
emailAddress:"",
phoneNumber:"",
service:"",
message:""
});

const [success,setSuccess] = useState("");

const handleChange = (e:any)=>{
setFormData({
...formData,
[e.target.id]:e.target.value
})
}

const handleSubmit = async(e:any)=>{
e.preventDefault();

const res = await fetch("/api/contact",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(formData)
})

const data = await res.json();

if(data.success){

setSuccess("Thank you! Your message has been sent successfully.");

setFormData({
fullName:"",
emailAddress:"",
phoneNumber:"",
service:"",
message:""
})

}else{
setSuccess("Something went wrong. Please try again.");
}

}

return(

<form onSubmit={handleSubmit}>

{/* SUCCESS MESSAGE */}

{success && (
<div className="alert alert-success">
{success}
</div>
)}

<div className="row">

<div className="col-md-6">

<label className="form-label">
Full Name <span className="text-danger">*</span>
</label>

<input
type="text"
className="form-control"
id="fullName"
value={formData.fullName}
onChange={handleChange}
style={{color:"white"}}
/>

</div>

<div className="col-md-6">

<label className="form-label">
Email Address <span className="text-danger">*</span>
</label>

<input
type="email"
className="form-control"
id="emailAddress"
value={formData.emailAddress}
onChange={handleChange}
style={{color:"white"}}
/>

</div>

</div>

<div className="row">

<div className="col-md-6">

<label className="form-label">
Phone Number <span className="text-danger">*</span>
</label>

<input
type="text"
className="form-control"
id="phoneNumber"
value={formData.phoneNumber}
onChange={handleChange}
style={{color:"white"}}
/>

</div>

<div className="col-md-6">

<label className="form-label">
Service <span className="text-danger">*</span>
</label>

<select
className="form-control"
id="service"
value={formData.service}
onChange={handleChange}
style={{color:"#ffffff"}}
>

<option value="">Select Service</option>
<option style={{color:"black"}} value="ERP Implementation">
ERP Implementation
</option>

</select>

</div>

</div>

<div className="row">

<div className="col-md-12">

<label className="form-label">
Message <span className="text-danger">*</span>
</label>

<textarea
className="form-control"
id="message"
rows={4}
value={formData.message}
onChange={handleChange}
style={{color:"white"}}
/>

</div>

</div>

<button type="submit" className="btn btn-primary" style={{marginTop:"20px"}}>
Send Message
</button>

</form>

)

}