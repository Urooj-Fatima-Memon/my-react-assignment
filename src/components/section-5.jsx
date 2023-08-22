
import pic from "../components/image/Arrow-right-solid.svg"
import picc from "../components/image/Location-outline.svg"
import pict from "../components/image/Minus.svg"
const Section =()=>{
    return(
     <div className="namee">
     
<div className="container ">
<div className="bg-text px-5 py-5 ">
                <h2 className=" name"> 
                Careers at Inertia
                </h2>
                <img src={pict} alt=""/>

                <p className="py-3"> 
                Join us in our quest to bring the best 
                experiences through <br/> design and technology to the world, our most important  <br/>
                vision is to have the best work culture possible.
                </p>

            </div>

          <div class="row pb-5 ">
            <div class="col-md-4 d-grid justify-content-center">
              
               
                    <p className="bg-text fw-bolder name ">Dublin  <img className=" mx-5 px-5" src={picc}/> </p>
                <p class="font-si">Head of Marketing </p>

                 <p className=""> UX Designer</p>

                 <p className="">Senior Programmer</p>
                 <p className="">Mobile UI Designer</p>
                 <p className=""> Lead Product Designer</p>
                
             
               
            </div>

            <div class="col-md-4 py-2">
              <div class="d-flex justify-content-center">
                <div className=""> 
                
                <p className="bg-text fw-bolder mx-5 name">Amsterdam <img className="mx-5 px-5" src={picc}/></p>
                <p class="font-si  mx-5">Head of Operations</p>

                 <p className=" mx-5">Mobile Engineer</p>

                
                 </div>



             
                
              </div>
            </div>
            <div class="col-md-4 ">
              <div class="d-flex justify-content-center">
                <div className=""> 
               
                <p className="bg-text fw-bolder  mx-5 name">Mexico City <img className="mx-5 px-5" src={picc}/></p>
                <p class="font-si  mx-5"> Head of Motion Design</p>

                 <p className=" mx-5">Graphics Engineer</p>
                 <p className=" mx-5">Senior UI Designer</p>
                 <p className=" mx-5">Backend Engineer</p>

                 

                 </div>
                
                 </div>
              </div>
<div className="py-3 mx-5"> <button type="button" class="btn butn text-white MX-5"> Careers At Intertia <img src={pic} /></button></div>                
            </div>
          </div>
          </div>  
    )
}
export default Section; 