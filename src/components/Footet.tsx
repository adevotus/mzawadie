    
function Footer (){

    return(
  
      <>

{/* Footer Start */}
<div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5">
    <div className="container py-5">
        <div
            className="pb-4 mb-4"
            style={{ borderBottom: "1px solid rgba(226, 175, 24, 0.5)" }}
        >
            <div className="row g-4">
                <div className="col-lg-3">
                    <a href="#">
                    <img  src="../src/assets/img/Logos/Mzawa1-04.png" className="img-fluid rounded-top" alt="" style={{width:120}} />

                       
                    </a>
                </div>
                <div className="col-lg-6">
                    {/* <div className="position-relative mx-auto">
                        <input
                            className="form-control border-0 w-100 py-3 px-4 rounded-pill"
                            type="number"
                            placeholder="Your Email"
                        />
                        <button
                            type="submit"
                            className="btn btn-primary border-0 border-secondary py-3 px-4 position-absolute rounded-pill text-white"
                            style={{ top: 0, right: 0 }}
                        >
                            Subscribe Now
                        </button>
                    </div> */}
                </div>
                <div className="col-lg-3">
                    <div className="d-flex justify-content-end pt-3">
                        <a
                            className="btn  btn-outline-secondary me-2 btn-md-square rounded-circle"
                            href=""
                        >
                            <i className="fab fa-twitter" />
                        </a>
                        <a
                            className="btn btn-outline-secondary me-2 btn-md-square rounded-circle"
                            href=""
                        >
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a
                            className="btn btn-outline-secondary me-2 btn-md-square rounded-circle"
                            href=""
                        >
                            <i className="fab fa-youtube" />
                        </a>
                        <a
                            className="btn btn-outline-secondary btn-md-square rounded-circle"
                            href=""
                        >
                            <i className="fab fa-linkedin-in" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="row g-5">
            <div className="col-lg-3 col-md-6">
                <div className="footer-item">
                    <h4 className="text-light mb-3">Why People Like us!</h4>
                    <p className="mb-4">
                        typesetting, remaining essentially unchanged. It was popularised
                        in the 1960s with the like Aldus PageMaker including of Lorem
                        Ipsum.
                    </p>
                    <a
                        href=""
                        className="btn border-secondary py-2 px-4 rounded-pill text-white"
                    >
                        Read More
                    </a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="d-flex flex-column text-start footer-item">
                    <h4 className="text-light mb-3">Mzawadie Shops</h4>
                    <a className="btn-link" href="">
                        About Us
                    </a>
                    <a className="btn-link" href="">
                        Contact Us
                    </a>
                    <a className="btn-link" href="">
                        Shoppings
                    </a>
                    <a className="btn-link" href="">
                        Terms &amp; Condition
                    </a>
                    <a className="btn-link" href="">
                        Return Policy
                    </a>
                    <a className="btn-link" href="">
                        FAQs &amp; Help
                    </a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="d-flex flex-column text-start footer-item">
                    <h4 className="text-light mb-3">Categories</h4>
                    <a className="btn-link" href="">
                     Birthday
                    </a>
                    <a className="btn-link" href="">
                    Unversary Gift
                    </a>
                    <a className="btn-link" href="">
                        Shopping Cart
                    </a>
                    <a className="btn-link" href="">
                    Valentine Gift
                    </a>
                    <a className="btn-link" href="">
                    Occuption
                    </a>
                    <a className="btn-link" href="">
                    Flowers & Cakes

                    </a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="footer-item">
                    <h4 className="text-light mb-3">Contact</h4>
                    <p>Address: Kijtonyama Dar es salaam</p>
                    <p>Email: info@mzawdie.co.tz</p>
                    <p>Phone: +255 4567 8910</p>
                    <p>Payment Accepted</p>
                    <img src="../src/assets/img/payment.png" className="img-fluid" alt="" />
                </div>
            </div>
        </div>
    </div>
</div>
{/* Footer End */}
{/* Copyright Start */}
<div className="container-fluid copyright bg-dark py-4">
    <div className="container">
        <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                <span className="text-light">
                    <a href="#">
                        <i className="fas fa-copyright text-light me-2" />
                        2023 | 
                    </a>
                     All right reserved.
                </span>
            </div>
            <div className="col-md-6 my-auto text-center text-md-end text-white">
              
                <a className="border-bottom text-danger" href="#">
                   Mzawadie Gifts
                </a>
              
            </div>
        </div>
    </div>
</div>
{/* Copyright End */}
      </>

        )
    }
    export default Footer

