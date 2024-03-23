import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footet'
import OwlCarousel from 'react-owl-carousel2';


function Home() {
    const [count, setCount] = useState(0)

    const options12 = {
        items: 4,
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        navText: ['>', '<'],
        autoplayTimeout: 3000,
        smartSpeed: 800
    };

    const options = {
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        nav: true, // Show navigation arrows
        navText: ['>', '<'], // Set custom navigation text
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            768: {
                items: 2,
                nav: true,

            },
        },
    };
    const owlCarouselOptions = {
        items: 2,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1,
                nav: true
            },

        },
    };

    const testimonialData = [
        {
            id: 1,
            quote: "Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s.",
            clientName: 'Client Name',
            profession: 'Profession',
            starRating: 4,
            imageSrc: '../src/assets/img/testimonial-1.jpg',
        },
        {
            id: 2,
            quote: "Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s.",
            clientName: 'Client Name',
            profession: 'Profession',
            starRating: 4,
            imageSrc: '../src/assets/img/testimonial-1.jpg',
        },
        // Add more testimonials as needed
    ];
    return (

        <>
            <Header />
            {/* Navbar End */}
            {/* Modal Search Start */}
            <div className="modal fade" id="searchModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content rounded-0">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Search by keyword
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body d-flex align-items-center">
                            <div className="input-group w-75 mx-auto d-flex">
                                <input
                                    type="search"
                                    className="form-control p-3"
                                    placeholder="keywords"
                                    aria-describedby="search-icon-1"
                                />
                                <span id="search-icon-1" className="input-group-text p-3">
                                    <i className="fa fa-search" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal Search End */}
            {/* Hero Start */}
            <div className="container-fluid py-5 mb-5 hero-header" style={{ paddingLeft: 660 }}>
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-md-12 col-lg-7">
                            <h4 className="mb-3 text-secondary" style={{}}>Uniquie yours </h4>
                            <h1 className="mb-5 display-3 text-primary">
                                Gift For All &amp; Together
                            </h1>
                            {/* <div className="position-relative mx-auto">
                                <input
                                    className="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill"
                                    type="number"
                                    placeholder="Search"
                                />
                                <button
                                    type="submit"
                                    className="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100"
                                    style={{ top: 0, right: "25%" }}
                                >
                                    Submit Now
                                </button>
                            </div> */}
                        </div>
                        <div className="col-md-12 col-lg-5">
                            <div id="carouselId" className="carousel slide position-relative" data-bs-ride="carousel" >
                                <div className="carousel-inner" role="listbox">
                                    <div className="carousel-item active rounded">
                                        <img
                                            src="../src/assets/img/mzd_1.jpg"
                                            className="img-fluid  w-100 h-100 bg-secondary rounded"
                                            alt="First slide"
                                        />
                                        <a href="#" className="btn px-4 py-2 text-white rounded">
                                            Fruites
                                        </a>
                                    </div>
                                    <div className="carousel-item rounded">
                                        <img
                                            src="../src/assets/img/mzd_2.jpg"
                                            className="img-fluid w-100 h-100 rounded"
                                            alt="Second slide"
                                        />
                                        <a href="#" className="btn px-4 py-2 text-white rounded">
                                            Vesitables
                                        </a>
                                    </div>
                                </div>
                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carouselId"
                                    data-bs-slide="prev"
                                >
                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#carouselId"
                                    data-bs-slide="next"
                                >
                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Hero End */}
            {/* Category Section Start */}
            <div className="container-fluid featurs py-5">
                <div className="container py-5">
                    <div className="row g-4">
                        <div className="text-start">
                            <h5>Category</h5>
                        </div>
                        <div className="col-md-6 col-lg-2">
                            <div className="featurs-item text-center rounded bg-light p-4">
                                <div className="mb-3 mx-auto">
                                    <i className="fas fa-birthday-cake fa-3x text-default" />
                                </div>
                                <div className="featurs-content text-center">
                                    <h6>Birthday Gift</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-2">
                            <div className="featurs-item text-center rounded bg-light p-4">
                                <div className="mb-3 mx-auto">

                                    <i className="fas fa-tree fa-3x text-default" />
                                </div>
                                <div className="featurs-content text-center">
                                    <h6>Merry Christmass</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-2">
                            <div className="featurs-item text-center rounded bg-light p-4">
                                <div className="mb-3 mx-auto">
                                    <i className="fas fa-gifts fa-3x text-default" />
                                </div>
                                <div className="featurs-content text-center">
                                    <h6>Unversary Gift</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-2">
                            <div className="featurs-item text-center rounded bg-light p-4">
                                <div className="mb-3 mx-auto">
                                    <i className="fas fa-heart fa-3x text-default" />
                                </div>
                                <div className="featurs-content text-center">
                                    <h6>Valentine Gift</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-2">
                            <div className="featurs-item text-center rounded bg-light p-4">
                                <div className="mb-3 mx-auto">
                                    <i className="fas fa-user-md fa-3x text-default" />
                                </div>
                                <div className="featurs-content text-center">
                                    <h6>Occuption</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-2">
                            <div className="featurs-item text-center rounded bg-light p-4">
                                <div className="mb-3 mx-auto">
                                    <i className="fas fa-user-md fa-3x text-default" />
                                </div>
                                <div className="featurs-content text-center">
                                    <h6>Flowers & Cakes</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Featurs Section End */}



            {/* Fruits Shop Start*/}
            <div className="container-fluid fruite py-5">
                <div className="container py-5">
                    <div className="tab-class text-center">
                        <div className="row g-4">
                            <div className="col-lg-4 text-start">
                                <h3>Birthday Gifts</h3>
                            </div>
                            <div className="col-lg-8 text-end">
                                <ul className="nav nav-pills d-inline-flex text-center mb-5">
                                    <li className="nav-item">
                                        <a className="d-flex m-1 py-2 bg-light rounded-pill active" data-bs-toggle="pill" href="#tab-1">
                                            <span className="text-dark" style={{ width: 100 }}>
                                                Mens
                                            </span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="d-flex py-2 m-1 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-2">
                                            <span className="text-dark" style={{ width: 100 }}>
                                                Womens
                                            </span>
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="tab-content">
                            <div id="tab-1" className="tab-pane fade show p-0 active">
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        <div className="vesitable">
                                            <OwlCarousel options={options12}>
                                                {/* Vegetable 1 */}
                                                <div className="item">
                                                    <div className="border border-secondary rounded position-relative vesitable-item">
                                                        <div className="vesitable-img">
                                                            <img src="../src/assets/img/His_Boxers.png" className="img-fluid w-100 rounded-top" alt="" style={{ width: 500 }} />
                                                        </div>
                                                        <div className="text-white bg-danger px-2 py-1  rounded position-absolute" style={{ top: '10px', right: '10px' }}>
                                                            Offer 20%
                                                        </div>
                                                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                            <h5 style={{ fontWeight: 700 }}>Mens Boxes </h5>
                                                            <p className="text-small" style={{ fontSize: 11 }}>
                                                                Lorem ipsum dolor sit amet consectetur adipisicing
                                                                elit sed do eiusmod te incididunt
                                                            </p>

                                                            <div className="d-flex justify-content-between flex-lg-wrap">
                                                                <p className="text-dark fs-5 fw-bold mb-0" style={{ fontSize: 12 }}>
                                                                    Tsh 12000/=

                                                                </p>
                                                                <a href="#" className="btn btn-sm border border-secondary px-2 text-secondary text-center">
                                                                    <i className="fas fa-cart-plus me-2 text-secondary text-center"></i>{" "}
                                                                </a>
                                                            </div>

                                                            <div className="d-flex justify-content-center flex-lg-wrap mt-3">

                                                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-secondary text-small">
                                                                    View Details
                                                                </a>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Vegetable 2 */}
                                                <div className="item">
                                                    <div className="border border-secondary rounded position-relative vesitable-item">
                                                        <div className="vesitable-img">
                                                            <img src="../src/assets/img/mzd_3.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                        </div>
                                                        <div className="text-white bg-danger px-2 py-1 rounded position-absolute" style={{ top: 10, left: 10 }} >
                                                            Offer 20%
                                                        </div>
                                                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                            <h5 style={{ fontWeight: 700 }}>After Shaves </h5>
                                                            <p className="text-small" style={{ fontSize: 11 }}>
                                                                Lorem ipsum dolor sit amet consectetur adipisicing
                                                                elit sed do eiusmod te incididunt
                                                            </p>

                                                            <div className="d-flex justify-content-between flex-lg-wrap">
                                                                <p className="text-dark fs-5 fw-bold mb-0" style={{ fontSize: 12 }}>
                                                                    Tsh 22000/=

                                                                </p>
                                                                <a href="#" className="btn btn-sm border border-secondary px-2 text-secondary text-center">
                                                                    <i className="fas fa-cart-plus me-2 text-secondary text-center"></i>{" "}
                                                                </a>
                                                            </div>

                                                            <div className="d-flex justify-content-center flex-lg-wrap mt-3">

                                                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-secondary text-small">
                                                                    View Details
                                                                </a>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="item">
                                                    <div className="border border-secondary rounded position-relative vesitable-item">
                                                        <div className="vesitable-img">
                                                            <img src="../src/assets/img/mzd_4.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                        </div>
                                                        <div className="text-white bg-danger px-2 py-1 rounded position-absolute" style={{ top: 10, left: 10 }} >
                                                            Offer 20%
                                                        </div>
                                                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                            <h5 style={{ fontWeight: 700 }}>Brecilete </h5>
                                                            <p className="text-small" style={{ fontSize: 11 }}>
                                                                Lorem ipsum dolor sit amet consectetur adipisicing
                                                                elit sed do eiusmod te incididunt
                                                            </p>

                                                            <div className="d-flex justify-content-between flex-lg-wrap">
                                                                <p className="text-dark fs-5 fw-bold mb-0" style={{ fontSize: 12 }}>
                                                                    Tsh 10000/=

                                                                </p>
                                                                <a href="#" className="btn btn-sm border border-secondary px-2 text-secondary text-center">
                                                                    <i className="fas fa-cart-plus me-2 text-secondary text-center"></i>{" "}
                                                                </a>
                                                            </div>

                                                            <div className="d-flex justify-content-center flex-lg-wrap mt-3">

                                                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-secondary text-small">
                                                                    View Details
                                                                </a>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="item">
                                                    <div className="border border-secondary rounded position-relative vesitable-item">
                                                        <div className="vesitable-img">
                                                            <img src="../src/assets/img/mzd_5.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                        </div>
                                                        <div className="text-white bg-danger px-2 py-1 rounded position-absolute" style={{ top: 10, left: 10 }} >
                                                            New
                                                        </div>
                                                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                            <h5 style={{ fontWeight: 700 }}>Glass </h5>
                                                            <p className="text-small" style={{ fontSize: 11 }}>
                                                                Lorem ipsum dolor sit amet consectetur adipisicing
                                                                elit sed do eiusmod te incididunt
                                                            </p>

                                                            <div className="d-flex justify-content-between flex-lg-wrap">
                                                                <p className="text-dark fs-5 fw-bold mb-0" style={{ fontSize: 12 }}>
                                                                    Tsh 1000/=

                                                                </p>
                                                                <a href="#" className="btn btn-sm border border-secondary px-2 text-secondary text-center">
                                                                    <i className="fas fa-cart-plus me-2 text-secondary text-center"></i>{" "}
                                                                </a>
                                                            </div>

                                                            <div className="d-flex justify-content-center flex-lg-wrap mt-3">

                                                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-secondary text-small">
                                                                    View Details
                                                                </a>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="item">
                                                    <div className="border border-secondary rounded position-relative vesitable-item">
                                                        <div className="vesitable-img">
                                                            <img src="../src/assets/img/mzd_8.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                        </div>
                                                        <div className="text-white bg-danger px-2 py-1 rounded position-absolute" style={{ top: 10, left: 10 }} >
                                                            Offer 20%
                                                        </div>
                                                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                            <h5 style={{ fontWeight: 700 }}>Brecilete </h5>
                                                            <p className="text-small" style={{ fontSize: 11 }}>
                                                                Lorem ipsum dolor sit amet consectetur adipisicing
                                                                elit sed do eiusmod te incididunt
                                                            </p>

                                                            <div className="d-flex justify-content-between flex-lg-wrap">
                                                                <p className="text-dark fs-5 fw-bold mb-0" style={{ fontSize: 12 }}>
                                                                    Tsh 10000/=

                                                                </p>
                                                                <a href="#" className="btn btn-sm border border-secondary px-2 text-secondary text-center">
                                                                    <i className="fas fa-cart-plus me-2 text-secondary text-center"></i>{" "}
                                                                </a>
                                                            </div>

                                                            <div className="d-flex justify-content-center flex-lg-wrap mt-3">

                                                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-secondary text-small">
                                                                    View Details
                                                                </a>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="item">
                                                    <div className="border border-secondary rounded position-relative vesitable-item">
                                                        <div className="vesitable-img">
                                                            <img src="../src/assets/img/mzd_9.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                        </div>
                                                        <div className="text-white bg-danger px-2 py-1 rounded position-absolute" style={{ top: 10, left: 10 }} >
                                                            Offer 20%
                                                        </div>
                                                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                            <h5 style={{ fontWeight: 700 }}>Brecilete </h5>
                                                            <p className="text-small" style={{ fontSize: 11 }}>
                                                                Lorem ipsum dolor sit amet consectetur adipisicing
                                                                elit sed do eiusmod te incididunt
                                                            </p>

                                                            <div className="d-flex justify-content-between flex-lg-wrap">
                                                                <p className="text-dark fs-5 fw-bold mb-0" style={{ fontSize: 12 }}>
                                                                    Tsh 10000/=

                                                                </p>
                                                                <a href="#" className="btn btn-sm border border-secondary px-2 text-secondary text-center">
                                                                    <i className="fas fa-cart-plus me-2 text-secondary text-center"></i>{" "}
                                                                </a>
                                                            </div>

                                                            <div className="d-flex justify-content-center flex-lg-wrap mt-3">

                                                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-secondary text-small">
                                                                    View Details
                                                                </a>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="item">
                                                    <div className="border border-secondary rounded position-relative vesitable-item">
                                                        <div className="vesitable-img">
                                                            <img src="../src/assets/img/mzd_6.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                        </div>
                                                        <div className="text-white bg-danger px-2 py-1 rounded position-absolute" style={{ top: 10, left: 10 }} >
                                                            Offer 20%
                                                        </div>
                                                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                            <h5 style={{ fontWeight: 700 }}>Brecilete </h5>
                                                            <p className="text-small" style={{ fontSize: 11 }}>
                                                                Lorem ipsum dolor sit amet consectetur adipisicing
                                                                elit sed do eiusmod te incididunt
                                                            </p>

                                                            <div className="d-flex justify-content-between flex-lg-wrap">
                                                                <p className="text-dark fs-5 fw-bold mb-0" style={{ fontSize: 12 }}>
                                                                    Tsh 10000/=

                                                                </p>
                                                                <a href="#" className="btn btn-sm border border-secondary px-2 text-secondary text-center">
                                                                    <i className="fas fa-cart-plus me-2 text-secondary text-center"></i>{" "}
                                                                </a>
                                                            </div>

                                                            <div className="d-flex justify-content-center flex-lg-wrap mt-3">

                                                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-secondary text-small">
                                                                    View Details
                                                                </a>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="item">
                                                    <div className="border border-secondary rounded position-relative vesitable-item">
                                                        <div className="vesitable-img">
                                                            <img src="../src/assets/img/mzd_7.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                        </div>
                                                        <div className="text-white bg-danger px-2 py-1 rounded position-absolute" style={{ top: 10, left: 10 }} >
                                                            Offer 20%
                                                        </div>
                                                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                            <h5 style={{ fontWeight: 700 }}>Brecilete </h5>
                                                            <p className="text-small" style={{ fontSize: 11 }}>
                                                                Lorem ipsum dolor sit amet consectetur adipisicing
                                                                elit sed do eiusmod te incididunt
                                                            </p>

                                                            <div className="d-flex justify-content-between flex-lg-wrap">
                                                                <p className="text-dark fs-5 fw-bold mb-0" style={{ fontSize: 12 }}>
                                                                    Tsh 10000/=

                                                                </p>
                                                                <a href="#" className="btn btn-sm border border-secondary px-2 text-secondary text-center">
                                                                    <i className="fas fa-cart-plus me-2 text-secondary text-center"></i>{" "}
                                                                </a>
                                                            </div>

                                                            <div className="d-flex justify-content-center flex-lg-wrap mt-3">

                                                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-secondary text-small">
                                                                    View Details
                                                                </a>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                            </OwlCarousel>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-2" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        <div className="row g-4">
                                            <div className="col-lg-12">
                                                <div className="vesitable">
                                                    <OwlCarousel options={options12}>
                                                        {/* Vegetable 1 */}
                                                        <div className="item">
                                                            <div className="border border-secondary rounded position-relative vesitable-item">
                                                                <div className="vesitable-img">
                                                                    <img src="../src/assets/img/mzd_16.jpg" className="img-fluid w-100 rounded-top" alt="" style={{ width: 500 }} />
                                                                </div>
                                                                <div className="text-white bg-danger px-2 py-1  rounded position-absolute" style={{ top: '10px', right: '10px' }}>
                                                                    Offer 20%
                                                                </div>
                                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                                    <h5 style={{ fontWeight: 700 }}>Mens Boxes </h5>
                                                                    <p className="text-small" style={{ fontSize: 11 }}>
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing
                                                                        elit sed do eiusmod te incididunt
                                                                    </p>

                                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                                        <p className="text-dark fs-5 fw-bold mb-0" style={{ fontSize: 12 }}>
                                                                            Tsh 12000/=

                                                                        </p>
                                                                        <a href="#" className="btn btn-sm border border-secondary px-2 text-secondary text-center">
                                                                            <i className="fas fa-cart-plus me-2 text-secondary text-center"></i>{" "}
                                                                        </a>
                                                                    </div>

                                                                    <div className="d-flex justify-content-center flex-lg-wrap mt-3">

                                                                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-secondary text-small">
                                                                            View Details
                                                                        </a>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Vegetable 2 */}
                                                        <div className="item">
                                                            <div className="border border-secondary rounded position-relative vesitable-item">
                                                                <div className="vesitable-img">
                                                                    <img src="../src/assets/img/mzd_3.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                                </div>
                                                                <div className="text-white bg-danger px-2 py-1 rounded position-absolute" style={{ top: 10, left: 10 }} >
                                                                    Offer 20%
                                                                </div>
                                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                                    <h5 style={{ fontWeight: 700 }}>After Shaves </h5>
                                                                    <p className="text-small" style={{ fontSize: 11 }}>
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing
                                                                        elit sed do eiusmod te incididunt
                                                                    </p>

                                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                                        <p className="text-dark fs-5 fw-bold mb-0" style={{ fontSize: 12 }}>
                                                                            Tsh 22000/=

                                                                        </p>
                                                                        <a href="#" className="btn btn-sm border border-secondary px-2 text-secondary text-center">
                                                                            <i className="fas fa-cart-plus me-2 text-secondary text-center"></i>{" "}
                                                                        </a>
                                                                    </div>

                                                                    <div className="d-flex justify-content-center flex-lg-wrap mt-3">

                                                                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-secondary text-small">
                                                                            View Details
                                                                        </a>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="item">
                                                            <div className="border border-secondary rounded position-relative vesitable-item">
                                                                <div className="vesitable-img">
                                                                    <img src="../src/assets/img/mzd_17.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                                </div>
                                                                <div className="text-white bg-danger px-2 py-1 rounded position-absolute" style={{ top: 10, left: 10 }} >
                                                                    Offer 20%
                                                                </div>
                                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                                    <h5 style={{ fontWeight: 700 }}>Brecilete </h5>
                                                                    <p className="text-small" style={{ fontSize: 11 }}>
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing
                                                                        elit sed do eiusmod te incididunt
                                                                    </p>

                                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                                        <p className="text-dark fs-5 fw-bold mb-0" style={{ fontSize: 12 }}>
                                                                            Tsh 10000/=

                                                                        </p>
                                                                        <a href="#" className="btn btn-sm border border-secondary px-2 text-secondary text-center">
                                                                            <i className="fas fa-cart-plus me-2 text-secondary text-center"></i>{" "}
                                                                        </a>
                                                                    </div>

                                                                    <div className="d-flex justify-content-center flex-lg-wrap mt-3">

                                                                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-secondary text-small">
                                                                            View Details
                                                                        </a>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="item">
                                                            <div className="border border-secondary rounded position-relative vesitable-item">
                                                                <div className="vesitable-img">
                                                                    <img src="../src/assets/img/mzd_18.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                                </div>
                                                                <div className="text-white bg-danger px-2 py-1 rounded position-absolute" style={{ top: 10, left: 10 }} >
                                                                    New
                                                                </div>
                                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                                    <h5 style={{ fontWeight: 700 }}>Glass </h5>
                                                                    <p className="text-small" style={{ fontSize: 11 }}>
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing
                                                                        elit sed do eiusmod te incididunt
                                                                    </p>

                                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                                        <p className="text-dark fs-5 fw-bold mb-0" style={{ fontSize: 12 }}>
                                                                            Tsh 1000/=

                                                                        </p>
                                                                        <a href="#" className="btn btn-sm border border-secondary px-2 text-secondary text-center">
                                                                            <i className="fas fa-cart-plus me-2 text-secondary text-center"></i>{" "}
                                                                        </a>
                                                                    </div>

                                                                    <div className="d-flex justify-content-center flex-lg-wrap mt-3">

                                                                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-secondary text-small">
                                                                            View Details
                                                                        </a>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="item">
                                                            <div className="border border-secondary rounded position-relative vesitable-item">
                                                                <div className="vesitable-img">
                                                                    <img src="../src/assets/img/mzd_19.jpeg" className="img-fluid w-100 rounded-top" alt="" />
                                                                </div>
                                                                <div className="text-white bg-danger px-2 py-1 rounded position-absolute" style={{ top: 10, left: 10 }} >
                                                                    Offer 20%
                                                                </div>
                                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                                    <h5 style={{ fontWeight: 700 }}>Brecilete </h5>
                                                                    <p className="text-small" style={{ fontSize: 11 }}>
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing
                                                                        elit sed do eiusmod te incididunt
                                                                    </p>

                                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                                        <p className="text-dark fs-5 fw-bold mb-0" style={{ fontSize: 12 }}>
                                                                            Tsh 10000/=

                                                                        </p>
                                                                        <a href="#" className="btn btn-sm border border-secondary px-2 text-secondary text-center">
                                                                            <i className="fas fa-cart-plus me-2 text-secondary text-center"></i>{" "}
                                                                        </a>
                                                                    </div>

                                                                    <div className="d-flex justify-content-center flex-lg-wrap mt-3">

                                                                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-secondary text-small">
                                                                            View Details
                                                                        </a>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="item">
                                                            <div className="border border-secondary rounded position-relative vesitable-item">
                                                                <div className="vesitable-img">
                                                                    <img src="./src/assets/img/mzd_20.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                                </div>
                                                                <div className="text-white bg-danger px-2 py-1 rounded position-absolute" style={{ top: 10, left: 10 }} >
                                                                    Offer 20%
                                                                </div>
                                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                                    <h5 style={{ fontWeight: 700 }}>Brecilete </h5>
                                                                    <p className="text-small" style={{ fontSize: 11 }}>
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing
                                                                        elit sed do eiusmod te incididunt
                                                                    </p>

                                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                                        <p className="text-dark fs-5 fw-bold mb-0" style={{ fontSize: 12 }}>
                                                                            Tsh 10000/=

                                                                        </p>
                                                                        <a href="#" className="btn btn-sm border border-secondary px-2 text-secondary text-center">
                                                                            <i className="fas fa-cart-plus me-2 text-secondary text-center"></i>{" "}
                                                                        </a>
                                                                    </div>

                                                                    <div className="d-flex justify-content-center flex-lg-wrap mt-3">

                                                                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-secondary text-small">
                                                                            View Details
                                                                        </a>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="item">
                                                            <div className="border border-secondary rounded position-relative vesitable-item">
                                                                <div className="vesitable-img">
                                                                    <img src="../src/assets/img/mzd_6.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                                </div>
                                                                <div className="text-white bg-danger px-2 py-1 rounded position-absolute" style={{ top: 10, left: 10 }} >
                                                                    Offer 20%
                                                                </div>
                                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                                    <h5 style={{ fontWeight: 700 }}>Brecilete </h5>
                                                                    <p className="text-small" style={{ fontSize: 11 }}>
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing
                                                                        elit sed do eiusmod te incididunt
                                                                    </p>

                                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                                        <p className="text-dark fs-5 fw-bold mb-0" style={{ fontSize: 12 }}>
                                                                            Tsh 10000/=

                                                                        </p>
                                                                        <a href="#" className="btn btn-sm border border-secondary px-2 text-secondary text-center">
                                                                            <i className="fas fa-cart-plus me-2 text-secondary text-center"></i>{" "}
                                                                        </a>
                                                                    </div>

                                                                    <div className="d-flex justify-content-center flex-lg-wrap mt-3">

                                                                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-secondary text-small">
                                                                            View Details
                                                                        </a>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="item">
                                                            <div className="border border-secondary rounded position-relative vesitable-item">
                                                                <div className="vesitable-img">
                                                                    <img src="../src/assets/img/mzd_7.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                                </div>
                                                                <div className="text-white bg-danger px-2 py-1 rounded position-absolute" style={{ top: 10, left: 10 }} >
                                                                    Offer 20%
                                                                </div>
                                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                                    <h5 style={{ fontWeight: 700 }}>Brecilete </h5>
                                                                    <p className="text-small" style={{ fontSize: 11 }}>
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing
                                                                        elit sed do eiusmod te incididunt
                                                                    </p>

                                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                                        <p className="text-dark fs-5 fw-bold mb-0" style={{ fontSize: 12 }}>
                                                                            Tsh 10000/=

                                                                        </p>
                                                                        <a href="#" className="btn btn-sm border border-secondary px-2 text-secondary text-center">
                                                                            <i className="fas fa-cart-plus me-2 text-secondary text-center"></i>{" "}
                                                                        </a>
                                                                    </div>

                                                                    <div className="d-flex justify-content-center flex-lg-wrap mt-3">

                                                                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-secondary text-small">
                                                                            View Details
                                                                        </a>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                        </div>
                                                    </OwlCarousel>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="tab-class text-center mt-5">
                        <div className="row g-4">
                            <div className="col-lg-4 text-start">
                                <h3>Unversary Gift</h3>
                            </div>
                            <div className="col-lg-8 text-end">
                                <ul className="nav nav-pills d-inline-flex text-center mb-5">
                                    <li className="nav-item">
                                        <a className="d-flex m-1 py-2 bg-light rounded-pill active" data-bs-toggle="pill" href="#tab-3">
                                            <span className="text-dark" style={{ width: 100 }}>
                                                Mens
                                            </span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="d-flex py-2 m-1 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-4">
                                            <span className="text-dark" style={{ width: 100 }}>
                                                Womens
                                            </span>
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="tab-content">
                            <div id="tab-3" className="tab-pane fade show p-0 active">
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        <div className="vesitable">
                                            <OwlCarousel options={options12}>
                                                {/* Vegetable 1 */}
                                                <div className="item">
                                                    <div className="border border-secondary rounded position-relative vesitable-item">
                                                        <div className="vesitable-img">
                                                            <img src="../src/assets/img/His_Boxers.png" className="img-fluid w-100 rounded-top" alt="" style={{ width: 500 }} />
                                                        </div>
                                                        <div className="text-white bg-danger px-2 py-1  rounded position-absolute" style={{ top: '10px', right: '10px' }}>
                                                            Offer 20%
                                                        </div>
                                                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                            <h5 style={{ fontWeight: 700 }}>Mens Boxes </h5>
                                                            <p className="text-small" style={{ fontSize: 11 }}>
                                                                Lorem ipsum dolor sit amet consectetur adipisicing
                                                                elit sed do eiusmod te incididunt
                                                            </p>

                                                            <div className="d-flex justify-content-between flex-lg-wrap">
                                                                <p className="text-dark fs-5 fw-bold mb-0" style={{ fontSize: 12 }}>
                                                                    Tsh 12000/=

                                                                </p>
                                                                <a href="#" className="btn btn-sm border border-secondary px-2 text-secondary text-center">
                                                                    <i className="fas fa-cart-plus me-2 text-secondary text-center"></i>{" "}
                                                                </a>
                                                            </div>

                                                            <div className="d-flex justify-content-center flex-lg-wrap mt-3">

                                                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-secondary text-small">
                                                                    View Details
                                                                </a>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Vegetable 2 */}
                                                <div className="item">
                                                    <div className="border border-secondary rounded position-relative vesitable-item">
                                                        <div className="vesitable-img">
                                                            <img src="../src/assets/img/mzd_3.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                        </div>
                                                        <div className="text-white bg-danger px-2 py-1 rounded position-absolute" style={{ top: 10, left: 10 }} >
                                                            Offer 20%
                                                        </div>
                                                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                            <h5 style={{ fontWeight: 700 }}>After Shaves </h5>
                                                            <p className="text-small" style={{ fontSize: 11 }}>
                                                                Lorem ipsum dolor sit amet consectetur adipisicing
                                                                elit sed do eiusmod te incididunt
                                                            </p>

                                                            <div className="d-flex justify-content-between flex-lg-wrap">
                                                                <p className="text-dark fs-5 fw-bold mb-0" style={{ fontSize: 12 }}>
                                                                    Tsh 22000/=

                                                                </p>
                                                                <a href="#" className="btn btn-sm border border-secondary px-2 text-secondary text-center">
                                                                    <i className="fas fa-cart-plus me-2 text-secondary text-center"></i>{" "}
                                                                </a>
                                                            </div>

                                                            <div className="d-flex justify-content-center flex-lg-wrap mt-3">

                                                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-secondary text-small">
                                                                    View Details
                                                                </a>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="item">
                                                    <div className="border border-secondary rounded position-relative vesitable-item">
                                                        <div className="vesitable-img">
                                                            <img src="../src/assets/img/mzd_4.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                        </div>
                                                        <div className="text-white bg-danger px-2 py-1 rounded position-absolute" style={{ top: 10, left: 10 }} >
                                                            Offer 20%
                                                        </div>
                                                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                            <h5 style={{ fontWeight: 700 }}>Brecilete </h5>
                                                            <p className="text-small" style={{ fontSize: 11 }}>
                                                                Lorem ipsum dolor sit amet consectetur adipisicing
                                                                elit sed do eiusmod te incididunt
                                                            </p>

                                                            <div className="d-flex justify-content-between flex-lg-wrap">
                                                                <p className="text-dark fs-5 fw-bold mb-0" style={{ fontSize: 12 }}>
                                                                    Tsh 10000/=

                                                                </p>
                                                                <a href="#" className="btn btn-sm border border-secondary px-2 text-secondary text-center">
                                                                    <i className="fas fa-cart-plus me-2 text-secondary text-center"></i>{" "}
                                                                </a>
                                                            </div>

                                                            <div className="d-flex justify-content-center flex-lg-wrap mt-3">

                                                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-secondary text-small">
                                                                    View Details
                                                                </a>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="item">
                                                    <div className="border border-secondary rounded position-relative vesitable-item">
                                                        <div className="vesitable-img">
                                                            <img src="../src/assets/img/mzd_5.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                        </div>
                                                        <div className="text-white bg-danger px-2 py-1 rounded position-absolute" style={{ top: 10, left: 10 }} >
                                                            New
                                                        </div>
                                                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                            <h5 style={{ fontWeight: 700 }}>Glass </h5>
                                                            <p className="text-small" style={{ fontSize: 11 }}>
                                                                Lorem ipsum dolor sit amet consectetur adipisicing
                                                                elit sed do eiusmod te incididunt
                                                            </p>

                                                            <div className="d-flex justify-content-between flex-lg-wrap">
                                                                <p className="text-dark fs-5 fw-bold mb-0" style={{ fontSize: 12 }}>
                                                                    Tsh 1000/=

                                                                </p>
                                                                <a href="#" className="btn btn-sm border border-secondary px-2 text-secondary text-center">
                                                                    <i className="fas fa-cart-plus me-2 text-secondary text-center"></i>{" "}
                                                                </a>
                                                            </div>

                                                            <div className="d-flex justify-content-center flex-lg-wrap mt-3">

                                                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-secondary text-small">
                                                                    View Details
                                                                </a>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="item">
                                                    <div className="border border-secondary rounded position-relative vesitable-item">
                                                        <div className="vesitable-img">
                                                            <img src="../src/assets/img/mzd_8.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                        </div>
                                                        <div className="text-white bg-danger px-2 py-1 rounded position-absolute" style={{ top: 10, left: 10 }} >
                                                            Offer 20%
                                                        </div>
                                                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                            <h5 style={{ fontWeight: 700 }}>Brecilete </h5>
                                                            <p className="text-small" style={{ fontSize: 11 }}>
                                                                Lorem ipsum dolor sit amet consectetur adipisicing
                                                                elit sed do eiusmod te incididunt
                                                            </p>

                                                            <div className="d-flex justify-content-between flex-lg-wrap">
                                                                <p className="text-dark fs-5 fw-bold mb-0" style={{ fontSize: 12 }}>
                                                                    Tsh 10000/=

                                                                </p>
                                                                <a href="#" className="btn btn-sm border border-secondary px-2 text-secondary text-center">
                                                                    <i className="fas fa-cart-plus me-2 text-secondary text-center"></i>{" "}
                                                                </a>
                                                            </div>

                                                            <div className="d-flex justify-content-center flex-lg-wrap mt-3">

                                                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-secondary text-small">
                                                                    View Details
                                                                </a>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="item">
                                                    <div className="border border-secondary rounded position-relative vesitable-item">
                                                        <div className="vesitable-img">
                                                            <img src="../src/assets/img/mzd_9.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                        </div>
                                                        <div className="text-white bg-danger px-2 py-1 rounded position-absolute" style={{ top: 10, left: 10 }} >
                                                            Offer 20%
                                                        </div>
                                                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                            <h5 style={{ fontWeight: 700 }}>Brecilete </h5>
                                                            <p className="text-small" style={{ fontSize: 11 }}>
                                                                Lorem ipsum dolor sit amet consectetur adipisicing
                                                                elit sed do eiusmod te incididunt
                                                            </p>

                                                            <div className="d-flex justify-content-between flex-lg-wrap">
                                                                <p className="text-dark fs-5 fw-bold mb-0" style={{ fontSize: 12 }}>
                                                                    Tsh 10000/=

                                                                </p>
                                                                <a href="#" className="btn btn-sm border border-secondary px-2 text-secondary text-center">
                                                                    <i className="fas fa-cart-plus me-2 text-secondary text-center"></i>{" "}
                                                                </a>
                                                            </div>

                                                            <div className="d-flex justify-content-center flex-lg-wrap mt-3">

                                                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-secondary text-small">
                                                                    View Details
                                                                </a>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="item">
                                                    <div className="border border-secondary rounded position-relative vesitable-item">
                                                        <div className="vesitable-img">
                                                            <img src="../src/assets/img/mzd_6.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                        </div>
                                                        <div className="text-white bg-danger px-2 py-1 rounded position-absolute" style={{ top: 10, left: 10 }} >
                                                            Offer 20%
                                                        </div>
                                                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                            <h5 style={{ fontWeight: 700 }}>Brecilete </h5>
                                                            <p className="text-small" style={{ fontSize: 11 }}>
                                                                Lorem ipsum dolor sit amet consectetur adipisicing
                                                                elit sed do eiusmod te incididunt
                                                            </p>

                                                            <div className="d-flex justify-content-between flex-lg-wrap">
                                                                <p className="text-dark fs-5 fw-bold mb-0" style={{ fontSize: 12 }}>
                                                                    Tsh 10000/=

                                                                </p>
                                                                <a href="#" className="btn btn-sm border border-secondary px-2 text-secondary text-center">
                                                                    <i className="fas fa-cart-plus me-2 text-secondary text-center"></i>{" "}
                                                                </a>
                                                            </div>

                                                            <div className="d-flex justify-content-center flex-lg-wrap mt-3">

                                                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-secondary text-small">
                                                                    View Details
                                                                </a>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="item">
                                                    <div className="border border-secondary rounded position-relative vesitable-item">
                                                        <div className="vesitable-img">
                                                            <img src="../src/assets/img/mzd_7.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                        </div>
                                                        <div className="text-white bg-danger px-2 py-1 rounded position-absolute" style={{ top: 10, left: 10 }} >
                                                            Offer 20%
                                                        </div>
                                                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                            <h5 style={{ fontWeight: 700 }}>Brecilete </h5>
                                                            <p className="text-small" style={{ fontSize: 11 }}>
                                                                Lorem ipsum dolor sit amet consectetur adipisicing
                                                                elit sed do eiusmod te incididunt
                                                            </p>

                                                            <div className="d-flex justify-content-between flex-lg-wrap">
                                                                <p className="text-dark fs-5 fw-bold mb-0" style={{ fontSize: 12 }}>
                                                                    Tsh 10000/=

                                                                </p>
                                                                <a href="#" className="btn btn-sm border border-secondary px-2 text-secondary text-center">
                                                                    <i className="fas fa-cart-plus me-2 text-secondary text-center"></i>{" "}
                                                                </a>
                                                            </div>

                                                            <div className="d-flex justify-content-center flex-lg-wrap mt-3">

                                                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-secondary text-small">
                                                                    View Details
                                                                </a>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                            </OwlCarousel>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-4" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        <div className="row g-4">
                                            <div className="col-lg-12">
                                                <div className="vesitable">
                                                    <OwlCarousel options={options12}>
                                                        {/* Vegetable 1 */}
                                                        <div className="item">
                                                            <div className="border border-secondary rounded position-relative vesitable-item">
                                                                <div className="vesitable-img">
                                                                    <img src="../src/assets/img/mzd_16.jpg" className="img-fluid w-100 rounded-top" alt="" style={{ width: 500 }} />
                                                                </div>
                                                                <div className="text-white bg-danger px-2 py-1  rounded position-absolute" style={{ top: '10px', right: '10px' }}>
                                                                    Offer 20%
                                                                </div>
                                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                                    <h5 style={{ fontWeight: 700 }}>Mens Boxes </h5>
                                                                    <p className="text-small" style={{ fontSize: 11 }}>
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing
                                                                        elit sed do eiusmod te incididunt
                                                                    </p>

                                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                                        <p className="text-dark fs-5 fw-bold mb-0" style={{ fontSize: 12 }}>
                                                                            Tsh 12000/=

                                                                        </p>
                                                                        <a href="#" className="btn btn-sm border border-secondary px-2 text-secondary text-center">
                                                                            <i className="fas fa-cart-plus me-2 text-secondary text-center"></i>{" "}
                                                                        </a>
                                                                    </div>

                                                                    <div className="d-flex justify-content-center flex-lg-wrap mt-3">

                                                                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-secondary text-small">
                                                                            View Details
                                                                        </a>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Vegetable 2 */}
                                                        <div className="item">
                                                            <div className="border border-secondary rounded position-relative vesitable-item">
                                                                <div className="vesitable-img">
                                                                    <img src="../src/assets/img/mzd_3.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                                </div>
                                                                <div className="text-white bg-danger px-2 py-1 rounded position-absolute" style={{ top: 10, left: 10 }} >
                                                                    Offer 20%
                                                                </div>
                                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                                    <h5 style={{ fontWeight: 700 }}>After Shaves </h5>
                                                                    <p className="text-small" style={{ fontSize: 11 }}>
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing
                                                                        elit sed do eiusmod te incididunt
                                                                    </p>

                                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                                        <p className="text-dark fs-5 fw-bold mb-0" style={{ fontSize: 12 }}>
                                                                            Tsh 22000/=

                                                                        </p>
                                                                        <a href="#" className="btn btn-sm border border-secondary px-2 text-secondary text-center">
                                                                            <i className="fas fa-cart-plus me-2 text-secondary text-center"></i>{" "}
                                                                        </a>
                                                                    </div>

                                                                    <div className="d-flex justify-content-center flex-lg-wrap mt-3">

                                                                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-secondary text-small">
                                                                            View Details
                                                                        </a>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="item">
                                                            <div className="border border-secondary rounded position-relative vesitable-item">
                                                                <div className="vesitable-img">
                                                                    <img src="../src/assets/img/mzd_17.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                                </div>
                                                                <div className="text-white bg-danger px-2 py-1 rounded position-absolute" style={{ top: 10, left: 10 }} >
                                                                    Offer 20%
                                                                </div>
                                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                                    <h5 style={{ fontWeight: 700 }}>Brecilete </h5>
                                                                    <p className="text-small" style={{ fontSize: 11 }}>
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing
                                                                        elit sed do eiusmod te incididunt
                                                                    </p>

                                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                                        <p className="text-dark fs-5 fw-bold mb-0" style={{ fontSize: 12 }}>
                                                                            Tsh 10000/=

                                                                        </p>
                                                                        <a href="#" className="btn btn-sm border border-secondary px-2 text-secondary text-center">
                                                                            <i className="fas fa-cart-plus me-2 text-secondary text-center"></i>{" "}
                                                                        </a>
                                                                    </div>

                                                                    <div className="d-flex justify-content-center flex-lg-wrap mt-3">

                                                                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-secondary text-small">
                                                                            View Details
                                                                        </a>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="item">
                                                            <div className="border border-secondary rounded position-relative vesitable-item">
                                                                <div className="vesitable-img">
                                                                    <img src="../src/assets/img/mzd_18.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                                </div>
                                                                <div className="text-white bg-danger px-2 py-1 rounded position-absolute" style={{ top: 10, left: 10 }} >
                                                                    New
                                                                </div>
                                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                                    <h5 style={{ fontWeight: 700 }}>Glass </h5>
                                                                    <p className="text-small" style={{ fontSize: 11 }}>
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing
                                                                        elit sed do eiusmod te incididunt
                                                                    </p>

                                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                                        <p className="text-dark fs-5 fw-bold mb-0" style={{ fontSize: 12 }}>
                                                                            Tsh 1000/=

                                                                        </p>
                                                                        <a href="#" className="btn btn-sm border border-secondary px-2 text-secondary text-center">
                                                                            <i className="fas fa-cart-plus me-2 text-secondary text-center"></i>{" "}
                                                                        </a>
                                                                    </div>

                                                                    <div className="d-flex justify-content-center flex-lg-wrap mt-3">

                                                                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-secondary text-small">
                                                                            View Details
                                                                        </a>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="item">
                                                            <div className="border border-secondary rounded position-relative vesitable-item">
                                                                <div className="vesitable-img">
                                                                    <img src="../src/assets/img/mzd_19.jpeg" className="img-fluid w-100 rounded-top" alt="" />
                                                                </div>
                                                                <div className="text-white bg-danger px-2 py-1 rounded position-absolute" style={{ top: 10, left: 10 }} >
                                                                    Offer 20%
                                                                </div>
                                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                                    <h5 style={{ fontWeight: 700 }}>Brecilete </h5>
                                                                    <p className="text-small" style={{ fontSize: 11 }}>
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing
                                                                        elit sed do eiusmod te incididunt
                                                                    </p>

                                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                                        <p className="text-dark fs-5 fw-bold mb-0" style={{ fontSize: 12 }}>
                                                                            Tsh 10000/=

                                                                        </p>
                                                                        <a href="#" className="btn btn-sm border border-secondary px-2 text-secondary text-center">
                                                                            <i className="fas fa-cart-plus me-2 text-secondary text-center"></i>{" "}
                                                                        </a>
                                                                    </div>

                                                                    <div className="d-flex justify-content-center flex-lg-wrap mt-3">

                                                                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-secondary text-small">
                                                                            View Details
                                                                        </a>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="item">
                                                            <div className="border border-secondary rounded position-relative vesitable-item">
                                                                <div className="vesitable-img">
                                                                    <img src="./src/assets/img/mzd_20.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                                </div>
                                                                <div className="text-white bg-danger px-2 py-1 rounded position-absolute" style={{ top: 10, left: 10 }} >
                                                                    Offer 20%
                                                                </div>
                                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                                    <h5 style={{ fontWeight: 700 }}>Brecilete </h5>
                                                                    <p className="text-small" style={{ fontSize: 11 }}>
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing
                                                                        elit sed do eiusmod te incididunt
                                                                    </p>

                                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                                        <p className="text-dark fs-5 fw-bold mb-0" style={{ fontSize: 12 }}>
                                                                            Tsh 10000/=

                                                                        </p>
                                                                        <a href="#" className="btn btn-sm border border-secondary px-2 text-secondary text-center">
                                                                            <i className="fas fa-cart-plus me-2 text-secondary text-center"></i>{" "}
                                                                        </a>
                                                                    </div>

                                                                    <div className="d-flex justify-content-center flex-lg-wrap mt-3">

                                                                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-secondary text-small">
                                                                            View Details
                                                                        </a>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="item">
                                                            <div className="border border-secondary rounded position-relative vesitable-item">
                                                                <div className="vesitable-img">
                                                                    <img src="../src/assets/img/mzd_6.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                                </div>
                                                                <div className="text-white bg-danger px-2 py-1 rounded position-absolute" style={{ top: 10, left: 10 }} >
                                                                    Offer 20%
                                                                </div>
                                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                                    <h5 style={{ fontWeight: 700 }}>Brecilete </h5>
                                                                    <p className="text-small" style={{ fontSize: 11 }}>
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing
                                                                        elit sed do eiusmod te incididunt
                                                                    </p>

                                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                                        <p className="text-dark fs-5 fw-bold mb-0" style={{ fontSize: 12 }}>
                                                                            Tsh 10000/=

                                                                        </p>
                                                                        <a href="#" className="btn btn-sm border border-secondary px-2 text-secondary text-center">
                                                                            <i className="fas fa-cart-plus me-2 text-secondary text-center"></i>{" "}
                                                                        </a>
                                                                    </div>

                                                                    <div className="d-flex justify-content-center flex-lg-wrap mt-3">

                                                                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-secondary text-small">
                                                                            View Details
                                                                        </a>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="item">
                                                            <div className="border border-secondary rounded position-relative vesitable-item">
                                                                <div className="vesitable-img">
                                                                    <img src="../src/assets/img/mzd_7.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                                </div>
                                                                <div className="text-white bg-danger px-2 py-1 rounded position-absolute" style={{ top: 10, left: 10 }} >
                                                                    Offer 20%
                                                                </div>
                                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                                    <h5 style={{ fontWeight: 700 }}>Brecilete </h5>
                                                                    <p className="text-small" style={{ fontSize: 11 }}>
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing
                                                                        elit sed do eiusmod te incididunt
                                                                    </p>

                                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                                        <p className="text-dark fs-5 fw-bold mb-0" style={{ fontSize: 12 }}>
                                                                            Tsh 10000/=

                                                                        </p>
                                                                        <a href="#" className="btn btn-sm border border-secondary px-2 text-secondary text-center">
                                                                            <i className="fas fa-cart-plus me-2 text-secondary text-center"></i>{" "}
                                                                        </a>
                                                                    </div>

                                                                    <div className="d-flex justify-content-center flex-lg-wrap mt-3">

                                                                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-secondary text-small">
                                                                            View Details
                                                                        </a>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                        </div>
                                                    </OwlCarousel>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>


            </div>

            {/* Fruits Shop End*/}
            {/* Featurs Start */}
            <div className="container-fluid service py-5">
                <div className="container py-5">
                    <div className="col-lg-4 text-start">
                        <h3>Delivery Packages</h3>
                    </div>
                    <div className="row g-4  mt-4 justify-content-center">

                        <div className="col-md-6 col-lg-4">
                            <a href="#">
                                <div className="service-item bg-secondary rounded border border-secondary">
                                    <img src="../src/assets/img/mzd_14.jpeg" className="img-fluid rounded-top w-100" alt="" style={{ height: 530 }} />
                                    <div className="px-4 rounded-bottom">
                                        <div className="service-content bg-primary text-center p-4 rounded">
                                            <h5 className="text-white">Our Packages</h5>
                                            <h3 className="mb-0">20% OFF</h3>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <a href="#">
                                <div className="service-item bg-dark rounded border border-dark">
                                    <img
                                        src="../src/assets/img/mzd_13.jpeg"
                                        className="img-fluid rounded-top w-100"
                                        alt="" style={{ height: 530 }}
                                    />
                                    <div className="px-4 rounded-bottom">
                                        <div className="service-content bg-light text-center p-4 rounded">
                                            <h5 className="text-primary">Tasty Fruits</h5>
                                            <h3 className="mb-0">Free delivery</h3>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <a href="#">
                                <div className="service-item bg-primary rounded border border-primary">
                                    <img
                                        src="../src/assets/img/mzd_12.jpeg"
                                        className="img-fluid rounded-top w-100"
                                        alt="" style={{ height: 530 }}
                                    />
                                    <div className="px-4 rounded-bottom">
                                        <div className="service-content bg-secondary text-center p-4 rounded">
                                            <h5 className="text-white">Exotic Vegitable</h5>
                                            <h3 className="mb-0">Discount 30$</h3>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Featurs End */}
            {/* Vesitable Shop Start*/}
            <div className="container-fluid vesitable py-5">
                <div className="container py-5">
                    {/* <h1 className="mb-0">Complete Packages</h1> */}
                    <div className="owl-carousel vegetable-carousel justify-content-center">
                        <div className="border border-primary rounded position-relative vesitable-item">
                            <div className="vesitable-img">
                                <img
                                    src="../src/assets/img/vegetable-item-6.jpg"
                                    className="img-fluid w-100 rounded-top"
                                    alt=""
                                />
                            </div>
                            <div
                                className="text-white bg-primary px-3 py-1 rounded position-absolute"
                                style={{ top: 10, right: 10 }}
                            >
                                Vegetable
                            </div>
                            <div className="p-4 rounded-bottom">
                                <h4>Parsely</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                                    eiusmod te incididunt
                                </p>
                                <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                    <a
                                        href="#"
                                        className="btn border border-secondary rounded-pill px-3 text-primary"
                                    >
                                        <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                                        cart
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="border border-primary rounded position-relative vesitable-item">
                            <div className="vesitable-img">
                                <img
                                    src="../src/assets/img/vegetable-item-1.jpg"
                                    className="img-fluid w-100 rounded-top"
                                    alt=""
                                />
                            </div>
                            <div
                                className="text-white bg-primary px-3 py-1 rounded position-absolute"
                                style={{ top: 10, right: 10 }}
                            >
                                Vegetable
                            </div>
                            <div className="p-4 rounded-bottom">
                                <h4>Parsely</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                                    eiusmod te incididunt
                                </p>
                                <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                    <a
                                        href="#"
                                        className="btn border border-secondary rounded-pill px-3 text-primary"
                                    >
                                        <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                                        cart
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="border border-primary rounded position-relative vesitable-item">
                            <div className="vesitable-img">
                                <img
                                    src="../src/assets/img/vegetable-item-3.png"
                                    className="img-fluid w-100 rounded-top bg-light"
                                    alt=""
                                />
                            </div>
                            <div
                                className="text-white bg-primary px-3 py-1 rounded position-absolute"
                                style={{ top: 10, right: 10 }}
                            >
                                Vegetable
                            </div>
                            <div className="p-4 rounded-bottom">
                                <h4>Banana</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                                    eiusmod te incididunt
                                </p>
                                <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                                    <a
                                        href="#"
                                        className="btn border border-secondary rounded-pill px-3 text-primary"
                                    >
                                        <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                                        cart
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="border border-primary rounded position-relative vesitable-item">
                            <div className="vesitable-img">
                                <img
                                    src="../src/assets/img/vegetable-item-4.jpg"
                                    className="img-fluid w-100 rounded-top"
                                    alt=""
                                />
                            </div>
                            <div
                                className="text-white bg-primary px-3 py-1 rounded position-absolute"
                                style={{ top: 10, right: 10 }}
                            >
                                Vegetable
                            </div>
                            <div className="p-4 rounded-bottom">
                                <h4>Bell Papper</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                                    eiusmod te incididunt
                                </p>
                                <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                                    <a
                                        href="#"
                                        className="btn border border-secondary rounded-pill px-3 text-primary"
                                    >
                                        <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                                        cart
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="border border-primary rounded position-relative vesitable-item">
                            <div className="vesitable-img">
                                <img
                                    src="../src/assets/img/vegetable-item-5.jpg"
                                    className="img-fluid w-100 rounded-top"
                                    alt=""
                                />
                            </div>
                            <div
                                className="text-white bg-primary px-3 py-1 rounded position-absolute"
                                style={{ top: 10, right: 10 }}
                            >
                                Vegetable
                            </div>
                            <div className="p-4 rounded-bottom">
                                <h4>Potatoes</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                                    eiusmod te incididunt
                                </p>
                                <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                                    <a
                                        href="#"
                                        className="btn border border-secondary rounded-pill px-3 text-primary"
                                    >
                                        <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                                        cart
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="border border-primary rounded position-relative vesitable-item">
                            <div className="vesitable-img">
                                <img
                                    src="../src/assets/img/vegetable-item-6.jpg"
                                    className="img-fluid w-100 rounded-top"
                                    alt=""
                                />
                            </div>
                            <div
                                className="text-white bg-primary px-3 py-1 rounded position-absolute"
                                style={{ top: 10, right: 10 }}
                            >
                                Vegetable
                            </div>
                            <div className="p-4 rounded-bottom">
                                <h4>Parsely</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                                    eiusmod te incididunt
                                </p>
                                <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                                    <a
                                        href="#"
                                        className="btn border border-secondary rounded-pill px-3 text-primary"
                                    >
                                        <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                                        cart
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="border border-primary rounded position-relative vesitable-item">
                            <div className="vesitable-img">
                                <img
                                    src="../src/assets/img/vegetable-item-5.jpg"
                                    className="img-fluid w-100 rounded-top"
                                    alt=""
                                />
                            </div>
                            <div
                                className="text-white bg-primary px-3 py-1 rounded position-absolute"
                                style={{ top: 10, right: 10 }}
                            >
                                Vegetable
                            </div>
                            <div className="p-4 rounded-bottom">
                                <h4>Potatoes</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                                    eiusmod te incididunt
                                </p>
                                <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                                    <a
                                        href="#"
                                        className="btn border border-secondary rounded-pill px-3 text-primary"
                                    >
                                        <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                                        cart
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="border border-primary rounded position-relative vesitable-item">
                            <div className="vesitable-img">
                                <img
                                    src="../src/assets/img/vegetable-item-6.jpg"
                                    className="img-fluid w-100 rounded-top"
                                    alt=""
                                />
                            </div>
                            <div
                                className="text-white bg-primary px-3 py-1 rounded position-absolute"
                                style={{ top: 10, right: 10 }}
                            >
                                Vegetable
                            </div>
                            <div className="p-4 rounded-bottom">
                                <h4>Parsely</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                                    eiusmod te incididunt
                                </p>
                                <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                                    <a
                                        href="#"
                                        className="btn border border-secondary rounded-pill px-3 text-primary"
                                    >
                                        <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                                        cart
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Vesitable Shop End */}
            {/* Banner Section Start*/}
            <div className="container-fluid banner bg-secondary my-5">
                <div className="container py-5">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6">
                            <div className="py-4">
                                <h1 className="display-3 text-white">Complete Packages</h1>
                                <p className="fw-normal display-3 text-dark mb-4">in Our Store</p>
                                <p className="mb-4 text-dark">
                                    The generated Lorem Ipsum is therefore always free from repetition
                                    injected humour, or non-characteristic words etc.
                                </p>
                                <a
                                    href="#"
                                    className="banner-btn btn border-2 border-white rounded-pill text-dark py-3 px-5"
                                >
                                    Request
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative">
                                <img
                                    src="../src/assets/img/mzd_11.png"
                                    className="img-fluid w-100 rounded"
                                    alt=""
                                />
                                <div
                                    className="d-flex align-items-center justify-content-center bg-danger rounded-circle position-absolute"
                                    style={{ width: 140, height: 140, top: 0, left: 0 }}
                                >

                                    <div className="d-flex flex-column">
                                        <span className="h4 mb-0 text-center text-white fw-bold">Tsh 35000/=</span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Banner Section End */}
            {/* Bestsaler Product Start */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: 700 }}>
                        <h1 className="display-4">Best Packeges Delivery</h1>
                        <p>
                            Latin words, combined with a handful of model sentence structures, to
                            generate Lorem Ipsum which looks reasonable.
                        </p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-6 col-xl-4">
                            <div className="p-4 rounded bg-light">
                                <div className="row align-items-center">
                                    <div className="col-6">
                                        <img
                                            src="../src/assets/img/mzd_14.jpeg"
                                            className="img-fluid rounded-circle w-100"
                                            alt=""
                                        />
                                    </div>
                                    <div className="col-6">
                                        <a href="#" className="h5">
                                            Organic Tomato
                                        </a>
                                        <div className="d-flex my-3">
                                            <i className="fas fa-star text-primary" />
                                            <i className="fas fa-star text-primary" />
                                            <i className="fas fa-star text-primary" />
                                            <i className="fas fa-star text-primary" />
                                            <i className="fas fa-star" />
                                        </div>
                                        <h4 className="mb-3">3.12 $</h4>
                                        <a
                                            href="#"
                                            className="btn border border-secondary rounded-pill px-3 text-primary"
                                        >
                                            <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                                            cart
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-4">
                            <div className="p-4 rounded bg-light">
                                <div className="row align-items-center">
                                    <div className="col-6">
                                        <img
                                            src="../src/assets/img/mzd_13.jpeg"
                                            className="img-fluid rounded-circle w-100"
                                            alt=""
                                        />
                                    </div>
                                    <div className="col-6">
                                        <a href="#" className="h5">
                                            Organic Tomato
                                        </a>
                                        <div className="d-flex my-3">
                                            <i className="fas fa-star text-primary" />
                                            <i className="fas fa-star text-primary" />
                                            <i className="fas fa-star text-primary" />
                                            <i className="fas fa-star text-primary" />
                                            <i className="fas fa-star" />
                                        </div>
                                        <h4 className="mb-3">3.12 $</h4>
                                        <a
                                            href="#"
                                            className="btn border border-secondary rounded-pill px-3 text-primary"
                                        >
                                            <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                                            cart
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-4">
                            <div className="p-4 rounded bg-light">
                                <div className="row align-items-center">
                                    <div className="col-6">
                                        <img
                                            src="../src/assets/img/mzd_12.jpeg"
                                            className="img-fluid rounded-circle w-100"
                                            alt=""
                                        />
                                    </div>
                                    <div className="col-6">
                                        <a href="#" className="h5">
                                            Organic Tomato
                                        </a>
                                        <div className="d-flex my-3">
                                            <i className="fas fa-star text-primary" />
                                            <i className="fas fa-star text-primary" />
                                            <i className="fas fa-star text-primary" />
                                            <i className="fas fa-star text-primary" />
                                            <i className="fas fa-star" />
                                        </div>
                                        <h4 className="mb-3">3.12 $</h4>
                                        <a
                                            href="#"
                                            className="btn border border-secondary rounded-pill px-3 text-primary"
                                        >
                                            <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                                            cart
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-4">
                            <div className="p-4 rounded bg-light">
                                <div className="row align-items-center">
                                    <div className="col-6">
                                        <img
                                            src="../src/assets/img/mzd_13.jpeg"
                                            className="img-fluid rounded-circle w-100"
                                            alt=""
                                        />
                                    </div>
                                    <div className="col-6">
                                        <a href="#" className="h5">
                                            Organic Tomato
                                        </a>
                                        <div className="d-flex my-3">
                                            <i className="fas fa-star text-primary" />
                                            <i className="fas fa-star text-primary" />
                                            <i className="fas fa-star text-primary" />
                                            <i className="fas fa-star text-primary" />
                                            <i className="fas fa-star" />
                                        </div>
                                        <h4 className="mb-3">3.12 $</h4>
                                        <a
                                            href="#"
                                            className="btn border border-secondary rounded-pill px-3 text-primary"
                                        >
                                            <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                                            cart
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-4">
                            <div className="p-4 rounded bg-light">
                                <div className="row align-items-center">
                                    <div className="col-6">
                                        <img
                                            src="../src/assets/img/mzd_12.jpeg"
                                            className="img-fluid rounded-circle w-100"
                                            alt=""
                                        />
                                    </div>
                                    <div className="col-6">
                                        <a href="#" className="h5">
                                            Organic Tomato
                                        </a>
                                        <div className="d-flex my-3">
                                            <i className="fas fa-star text-primary" />
                                            <i className="fas fa-star text-primary" />
                                            <i className="fas fa-star text-primary" />
                                            <i className="fas fa-star text-primary" />
                                            <i className="fas fa-star" />
                                        </div>
                                        <h4 className="mb-3">3.12 $</h4>
                                        <a
                                            href="#"
                                            className="btn border border-secondary rounded-pill px-3 text-primary"
                                        >
                                            <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                                            cart
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-4">
                            <div className="p-4 rounded bg-light">
                                <div className="row align-items-center">
                                    <div className="col-6">
                                        <img
                                            src="../src/assets/img/mzd_14.jpeg"
                                            className="img-fluid rounded-circle w-100"
                                            alt=""
                                        />
                                    </div>
                                    <div className="col-6">
                                        <a href="#" className="h5">
                                            Organic Tomato
                                        </a>
                                        <div className="d-flex my-3">
                                            <i className="fas fa-star text-primary" />
                                            <i className="fas fa-star text-primary" />
                                            <i className="fas fa-star text-primary" />
                                            <i className="fas fa-star text-primary" />
                                            <i className="fas fa-star" />
                                        </div>
                                        <h4 className="mb-3">3.12 $</h4>
                                        <a
                                            href="#"
                                            className="btn border border-secondary rounded-pill px-3 text-primary"
                                        >
                                            <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                                            cart
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            {/* Bestsaler Product End */}
           
            {/* Tastimonial Start */}
            <div className="container-fluid testimonial py-5">
                <div className="container py-5">
                    <div className="testimonial-header text-center">
                        <h4 className="text-primary">Our Testimonial</h4>
                        <h1 className="display-5 mb-5 text-dark">Our Client Saying!</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-12">
                            <OwlCarousel options={options} className="owl-carousel testimonial-carousel">
                                {testimonialData.map((testimonial, index) => (
                                    <div key={index} className="testimonial-item img-border-radius bg-light rounded p-4 m-2">
                                        <div className="position-relative">
                                            <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{ bottom: 30, right: 0 }} />
                                            <div className="mb-4 pb-4 border-bottom border-secondary">
                                                <p className="mb-0">{testimonial.quote}</p>
                                            </div>
                                            <div className="d-flex align-items-center flex-nowrap">
                                                <div className="bg-secondary rounded">
                                                    <img
                                                        src={testimonial.imageSrc}
                                                        className="img-fluid rounded"
                                                        style={{ width: 100, height: 100 }}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="ms-4 d-block">
                                                    <h4 className="text-dark">{testimonial.clientName}</h4>
                                                    <p className="m-0 pb-3">{testimonial.profession}</p>
                                                    <div className="d-flex pe-5">
                                                        {[...Array(testimonial.starRating)].map((star, starIndex) => (
                                                            <i key={starIndex} className="fas fa-star text-primary" />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </OwlCarousel>
                        </div>
                    </div>

                </div>
            </div>
            {/* Tastimonial End */}
            <Footer />

        </>



    )
}

export default Home
