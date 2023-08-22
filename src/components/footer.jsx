import socialimage from "../components/image/Social.svg"
const Footer = () => {
    return(
       
<div className="colorr">

<div class="container text-white py-5">
    <div class="row py-5">
      <div class=" col-md-3 mb-3">
        <h5>Company</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">Home</li>
          <li class="nav-item mb-2">Features</li>
          
        </ul>
      </div>

      <div class=" col-md-3 mb-3">
      <h5>Offices</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">Home</li>
          <li class="nav-item mb-2">Features</li>
          
        </ul>
      </div>
      <div class=" col-md-3 mb-3">
      <h5> Contact</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">Home</li>
          <li class="nav-item mb-2">Features</li>
          
        </ul>
      </div>

      <div class="col-md-3 mb-3">
      <h5>About</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">Home</li>
          <li class="nav-item mb-2">Features</li>
        </ul>
      </div>
      </div>

<div className="text-center mt-3 d-flex justify-content-center">
<img src={socialimage} alt="JavaScript logo" /></div>

<div className="mt-5 text-white text-center">
  <p>All rights reserved. © 2020.</p>
  <span className="px-5">Privacy & terms</span>  <span> Terms of Service</span> 
</div> 

</div>
      </div>

   
    );
    
    }
    export  default Footer;