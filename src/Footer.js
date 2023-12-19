import './Footer.css';
// import logo from './logo1.svg'; 
function Footer (){
    return(
<div className="container-fluid bg-light ">
    <div className="row parent  mt-5">
        <div className="col-12 fs-1">LOGO</div>
        <br />
        <div className="col-12">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque. <br />Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.</div>
        <div className="col-12 paren">
        <div className="row bottom mt-2">
            <div className="col-2">About</div>
            <div className="col-2">Careers</div>
            <div className="col-2">History</div>
            <div className="col-2">Projects</div>
            <div className="col-2">Blog</div>
        </div>
        <div className="row bottom mt-2">
            <div className="col-2"><i class="fa-brands fa-facebook"></i></div>
            <div className="col-2"><i class="fa-brands fa-github"></i></div>
            <div className="col-2"><i class="fa-brands fa-twitter"></i></div>
            <div className="col-2"><i class="fa-sharp fa-regular fa-basketball"></i></div>
            <div className="col-2"><i class="fa-brands fa-slack"></i></div>
        </div>
           </div>
        
    </div>
</div>
    )
};
export default Footer;


