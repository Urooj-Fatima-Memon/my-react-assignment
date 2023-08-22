import logoimg from "../components/image/logo.svg"
const Header=()=>{
    return(
     <div>        <div className="coloor">

     <div className="container">
     <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
     <img src={logoimg} alt="logo"/>
     
       <div className ="col-md-3 mb-2 mb-md-0">
       </div >
       
       <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
         <li><a href="#" className="nav-link px-2 text-white">Home Pages</a></li>
         <li><a href="#" className="nav-link px-2 text-white">Blogs</a></li>
         <li><a href="#" className="nav-link px-2 text-white">Pages</a></li>
         <li><a href="#" className="nav-link px-2 text-white">Ecommerce</a></li>
         <li><a href="#" className="nav-link px-2 text-white">About</a></li>
         <li><a href="#" className="nav-link px-2 text-white">Theme</a></li>
       </ul>
     
      
         <button type="button" class="btn butn  text-white">Buy now</button>
      
     </header>
     </div>
     
    
     
     
             
             
        <div className="">
       <div className=" text-center text-white ">
        <div className="py-5"></div>
        <p className="">WE CREATE DIGITAL PRODUCTS</p>
        <h1> Introduce OurCreative <br/> Agency.</h1>
        <button type="button" class="btn butn text-white fw-bold">Get in touch  </button>
       </div>
      
       </div>
     
     
     
     </div></div>
 )
}
export default  Header