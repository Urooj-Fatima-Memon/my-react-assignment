import immg from"../components/image/Image (2).png"
import imgg from "../components/image/Image (3).png"
import img from"../components/image/Image.png"
import sml from"../components/image/Image-2.svg"
import small from"../components/image/Image-1.svg"
import smal from"../components/image/Image-3.svg"
import pict from "../components/image/Minus.svg"

const Card=()=>{
 return(
<div>
    <div className="container">
    <div className="bg-text px-5 py-5 ">
                <h2 className=" name"> 
                From the blog
                </h2>
                <img src={pict} alt=""/>
                </div>
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col f-2">
    <div class="">
    <img class="name" className="" src={imgg} alt="logo"/>
      <div class="card-body">
     
        <h5 class="card-title">Make your team a Design driven company</h5>
        <p class="card-text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
        <h6 class="card-title"><img class="name" className="" src={small} alt="logo"/>BY MIKE DAMON</h6>
      </div>

    </div>
  </div>
  <div class="col">
    <div class="">
    <img class="name" className="" src={ immg} alt="logo"/>
      <div class="card-body">
        

        <h5 class="card-title">How to nurture a calm and organized work culture</h5>
        <p class="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
        <h6 class="card-title"><img class="name" className="" src={sml} alt="logo"/>BY MIKE DAMON</h6>
      </div>
    </div>
  </div>
  <div class="col">
 
    <div class="">
    <img class="name" className="" src={img} alt="logo"/>
      <div class="card-body">
        <h5 class="card-title">How can the architecture influence our mood</h5>
        <p class="card-text">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33.</p>
        <h6 class="card-title"><img class="name" className="" src={smal} alt="logo"/>BY MIKE DAMON</h6>
      </div>

    </div>
  </div>
 <div className="my-4 py-4"></div>
</div>
</div>
</div>   
 )   
}
export default Card