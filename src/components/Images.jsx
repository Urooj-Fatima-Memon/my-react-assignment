import img from "../components/image/Item - 2.svg"
import img1 from "../components/image/Item - 2 (1).svg"
import img2 from "../components/image/Item - 1.svg"
import img3 from "../components/image/Item - 1 (3).svg"
import img4 from "../components/image/Item - 1 (2).svg"
import img5 from "../components/image/Item - 1 (1).svg"


import logoimg from "../components/image/Minus.svg"

const Image = () => {

    return(
    
<div className="my-3 py-4 namee">

<div className="name text-center py-3"> 

<h2> Featured Projects</h2>
<img className="mx-2 py-2" src={logoimg} alt=""/>
</div>
<div className="my-3 py-4"></div>
     <div className="text-center py-3"> 
     
 <img className="mx-2 py-2" width={339} src={img2}/> 
 <img className="mx-2 py-2" width={339} src={img}/>
 <img className="mx-2 py-2" width={339} src={img5}/>

 </div>  

     <div className="text-center"> 
 <img className="mx-2 py-2" width={339} src={img3}/> 
 <img className="mx-2 py-2" width={339} src={img1}/>
 <img className="mx-2 py-2" width={339} src={img4}/>
 <div className="my-5 py-5"> </div>
 <div className="my-4 py-4"></div>
</div>
</div>

  );
    
}
export  default Image;

