import './Head.css';
import './App.css';
import Body from './Body';
function Head (){
    return(
      <div className="top position-relative">
     <nav className=" container-fluid navbar navbar-expand-lg bg-danger">
         
  <div className="container justify">
    <div className="image">
    <a className="navbar-brand" href="#"> <img src="https://flowbite.com/docs/images/logo.svg"></img></a>
    <h5>Geek Ster</h5>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Queto</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Restaurent</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Foods</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
        {/* <li class="nav-item p-2"><i class="fa-solid fa-bag-shopping"></i></li>
      <li class="nav-item p-2"><i class="fa-solid fa-magnifying-glass"></i></li>
      <li class="nav-item p-2"><i class="fa-solid fa-list-ul"></i></li> */}
      </ul>
      <form className="d-flex" role="search">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        <button className="btn btn-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<img src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" className="imgfluid"></img>
<div className="row position-absolute content">
<div className="col-12">
  <h2>Let us Find Your <br></br> Forever Food</h2>
  <p className='text-light fs-6'>Lorem ipsum dolor sit amet conterd  <br></br> ducimil Lorem ipsum dolor sit amet</p>
  <button type="button" className="btn btn-primary">Search Now</button><button type="button" className="btn btn-primary">Know More</button>
</div>
</div>
<div className="row mt-2 p-5">
<div className="col-md-6">
<img src="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="img-fluid"></img>
</div>
<div className="col-md-6 bg-light">
  <h2 className=" text-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
  <button type="button" className="btn btn-primary">Search Now</button>
</div>

</div>

  <Body />
      </div>
    );
}
export default Head;