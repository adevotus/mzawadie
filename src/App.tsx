import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footet'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
<>
  <div className="page-wrapper">
   <Header/>
    {/* End .header */}
    <main className="main">
      <div className="intro-slider-container mb-5">
        <div
          className="intro-slider owl-carousel owl-theme owl-nav-inside owl-light"
          data-toggle="owl"
          data-owl-options='{
                  "dots": true,
                  "nav": false, 
                  "responsive": {
                      "1200": {
                          "nav": true,
                          "dots": false
                      }
                  }
              }'
        >
          <div
            className="intro-slide"
            style={{
              backgroundImage:
                "url(./src/assets/images/demos/demo-4/slider/slide-1.png)"
            }}
          >
            <div className="container intro-content">
              <div className="row justify-content-end">
                <div className="col-auto col-sm-7 col-md-6 col-lg-5">
                  <h3 className="intro-subtitle text-third">
                    Deals and Promotions
                  </h3>
                  {/* End .h3 intro-subtitle */}
                  <h1 className="intro-title">Beats by</h1>
                  <h1 className="intro-title">Dre Studio 3</h1>
                  {/* End .intro-title */}
                  <div className="intro-price">
                    <sup className="intro-old-price">$349,95</sup>
                    <span className="text-third">
                      $279<sup>.99</sup>
                    </span>
                  </div>
                  {/* End .intro-price */}
                  <a href="category.html" className="btn btn-primary btn-round">
                    <span>Shop More</span>
                    <i className="icon-long-arrow-right" />
                  </a>
                </div>
                {/* End .col-lg-11 offset-lg-1 */}
              </div>
              {/* End .row */}
            </div>
            {/* End .intro-content */}
          </div>
          {/* End .intro-slide */}
          <div
            className="intro-slide"
            style={{
              backgroundImage:
                "url(./src/assets/images/demos/demo-4/slider/slide-2.png)"
            }}
          >
            <div className="container intro-content">
              <div className="row justify-content-end">
                <div className="col-auto col-sm-7 col-md-6 col-lg-5">
                  <h3 className="intro-subtitle text-primary">New Arrival</h3>
                  {/* End .h3 intro-subtitle */}
                  <h1 className="intro-title">
                    Apple iPad Pro <br />
                    12.9 Inch, 64GB{" "}
                  </h1>
                  {/* End .intro-title */}
                  <div className="intro-price">
                    <sup>Today:</sup>
                    <span className="text-primary">
                      $999<sup>.99</sup>
                    </span>
                  </div>
                  {/* End .intro-price */}
                  <a href="category.html" className="btn btn-primary btn-round">
                    <span>Shop More</span>
                    <i className="icon-long-arrow-right" />
                  </a>
                </div>
                {/* End .col-md-6 offset-md-6 */}
              </div>
              {/* End .row */}
            </div>
            {/* End .intro-content */}
          </div>
          {/* End .intro-slide */}
        </div>
        {/* End .intro-slider owl-carousel owl-simple */}
        <span className="slider-loader" />
        {/* End .slider-loader */}
      </div>
      {/* End .intro-slider-container */}
      <div className="container">
        <h2 className="title text-center mb-4">Explore Popular Categories</h2>
        {/* End .title text-center */}
        <div className="cat-blocks-container">
          <div className="row">
            <div className="col-6 col-sm-4 col-lg-2">
              <a href="category.html" className="cat-block">
                <figure>
                  <span>
                    <img
                      src="./src/assets/images/demos/demo-4/cats/1.png"
                      alt="Category image"
                    />
                  </span>
                </figure>
                <h3 className="cat-block-title">Computer &amp; Laptop</h3>
                {/* End .cat-block-title */}
              </a>
            </div>
            {/* End .col-sm-4 col-lg-2 */}
            <div className="col-6 col-sm-4 col-lg-2">
              <a href="category.html" className="cat-block">
                <figure>
                  <span>
                    <img
                      src="./src/assets/images/demos/demo-4/cats/2.png"
                      alt="Category image"
                    />
                  </span>
                </figure>
                <h3 className="cat-block-title">Digital Cameras</h3>
                {/* End .cat-block-title */}
              </a>
            </div>
            {/* End .col-sm-4 col-lg-2 */}
            <div className="col-6 col-sm-4 col-lg-2">
              <a href="category.html" className="cat-block">
                <figure>
                  <span>
                    <img
                      src="./src/assets/images/demos/demo-4/cats/3.png"
                      alt="Category image"
                    />
                  </span>
                </figure>
                <h3 className="cat-block-title">Smart Phones</h3>
                {/* End .cat-block-title */}
              </a>
            </div>
            {/* End .col-sm-4 col-lg-2 */}
            <div className="col-6 col-sm-4 col-lg-2">
              <a href="category.html" className="cat-block">
                <figure>
                  <span>
                    <img
                      src="./src/assets/images/demos/demo-4/cats/4.png"
                      alt="Category image"
                    />
                  </span>
                </figure>
                <h3 className="cat-block-title">Televisions</h3>
                {/* End .cat-block-title */}
              </a>
            </div>
            {/* End .col-sm-4 col-lg-2 */}
            <div className="col-6 col-sm-4 col-lg-2">
              <a href="category.html" className="cat-block">
                <figure>
                  <span>
                    <img
                      src="./src/assets/images/demos/demo-4/cats/5.png"
                      alt="Category image"
                    />
                  </span>
                </figure>
                <h3 className="cat-block-title">Audio</h3>
                {/* End .cat-block-title */}
              </a>
            </div>
            {/* End .col-sm-4 col-lg-2 */}
            <div className="col-6 col-sm-4 col-lg-2">
              <a href="category.html" className="cat-block">
                <figure>
                  <span>
                    <img
                      src="./src/assets/images/demos/demo-4/cats/6.png"
                      alt="Category image"
                    />
                  </span>
                </figure>
                <h3 className="cat-block-title">Smart Watches</h3>
                {/* End .cat-block-title */}
              </a>
            </div>
            {/* End .col-sm-4 col-lg-2 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .cat-blocks-container */}
      </div>
      {/* End .container */}
      <div className="mb-4" />
      {/* End .mb-4 */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="banner banner-overlay banner-overlay-light">
              <a href="#">
                <img
                  src="./src/assets/images/demos/demo-4/banners/banner-1.png"
                  alt="Banner"
                />
              </a>
              <div className="banner-content">
                <h4 className="banner-subtitle">
                  <a href="#">Smart Offer</a>
                </h4>
                {/* End .banner-subtitle */}
                <h3 className="banner-title">
                  <a href="#">
                    Save $150{" "}
                    <strong>
                      on Samsung <br />
                      Galaxy Note9
                    </strong>
                  </a>
                </h3>
                {/* End .banner-title */}
                <a href="#" className="banner-link">
                  Shop Now
                  <i className="icon-long-arrow-right" />
                </a>
              </div>
              {/* End .banner-content */}
            </div>
            {/* End .banner */}
          </div>
          {/* End .col-md-4 */}
          <div className="col-md-6 col-lg-4">
            <div className="banner banner-overlay banner-overlay-light">
              <a href="#">
                <img
                  src="./src/assets/images/demos/demo-4/banners/banner-2.jpg"
                  alt="Banner"
                />
              </a>
              <div className="banner-content">
                <h4 className="banner-subtitle">
                  <a href="#">Time Deals</a>
                </h4>
                {/* End .banner-subtitle */}
                <h3 className="banner-title">
                  <a href="#">
                    <strong>Bose SoundSport</strong> <br />
                    Time Deal -30%
                  </a>
                </h3>
                {/* End .banner-title */}
                <a href="#" className="banner-link">
                  Shop Now
                  <i className="icon-long-arrow-right" />
                </a>
              </div>
              {/* End .banner-content */}
            </div>
            {/* End .banner */}
          </div>
          {/* End .col-md-4 */}
          <div className="col-md-6 col-lg-4">
            <div className="banner banner-overlay banner-overlay-light">
              <a href="#">
                <img
                  src="./src/assets/images/demos/demo-4/banners/banner-3.png"
                  alt="Banner"
                />
              </a>
              <div className="banner-content">
                <h4 className="banner-subtitle">
                  <a href="#">Clearance</a>
                </h4>
                {/* End .banner-subtitle */}
                <h3 className="banner-title">
                  <a href="#">
                    <strong>GoPro - Fusion 360</strong> <br />
                    Save $70
                  </a>
                </h3>
                {/* End .banner-title */}
                <a href="#" className="banner-link">
                  Shop Now
                  <i className="icon-long-arrow-right" />
                </a>
              </div>
              {/* End .banner-content */}
            </div>
            {/* End .banner */}
          </div>
          {/* End .col-lg-4 */}
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}
      <div className="mb-3" />
      {/* End .mb-5 */}
      <div className="container new-arrivals">
        <div className="heading heading-flex mb-3">
          <div className="heading-left">
            <h2 className="title">New Arrivals</h2>
            {/* End .title */}
          </div>
          {/* End .heading-left */}
          <div className="heading-right">
            <ul
              className="nav nav-pills nav-border-anim justify-content-center"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="new-all-link"
                  data-toggle="tab"
                  href="#new-all-tab"
                  role="tab"
                  aria-controls="new-all-tab"
                  aria-selected="true"
                >
                  All
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="new-tv-link"
                  data-toggle="tab"
                  href="#new-tv-tab"
                  role="tab"
                  aria-controls="new-tv-tab"
                  aria-selected="false"
                >
                  TV
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="new-computers-link"
                  data-toggle="tab"
                  href="#new-computers-tab"
                  role="tab"
                  aria-controls="new-computers-tab"
                  aria-selected="false"
                >
                  Computers
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="new-phones-link"
                  data-toggle="tab"
                  href="#new-phones-tab"
                  role="tab"
                  aria-controls="new-phones-tab"
                  aria-selected="false"
                >
                  Tablets &amp; Cell Phones
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="new-watches-link"
                  data-toggle="tab"
                  href="#new-watches-tab"
                  role="tab"
                  aria-controls="new-watches-tab"
                  aria-selected="false"
                >
                  Smartwatches
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="new-acc-link"
                  data-toggle="tab"
                  href="#new-acc-tab"
                  role="tab"
                  aria-controls="new-acc-tab"
                  aria-selected="false"
                >
                  Accessories
                </a>
              </li>
            </ul>
          </div>
          {/* End .heading-right */}
        </div>
        {/* End .heading */}
        <div className="tab-content tab-content-carousel just-action-icons-sm">
          <div
            className="tab-pane p-0 fade show active"
            id="new-all-tab"
            role="tabpanel"
            aria-labelledby="new-all-link"
          >
            <div
              className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
              data-toggle="owl"
              data-owl-options='{
                          "nav": true, 
                          "dots": true,
                          "margin": 20,
                          "loop": false,
                          "responsive": {
                              "0": {
                                  "items":2
                              },
                              "480": {
                                  "items":2
                              },
                              "768": {
                                  "items":3
                              },
                              "992": {
                                  "items":4
                              },
                              "1200": {
                                  "items":5
                              }
                          }
                      }'
            >
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-top">
                    Top
                  </span>
                  <a href="product.html">
                    <img
                      src="./src/assets/images/demos/demo-4/products/product-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Laptops</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">MacBook Pro 13" Display, i5</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$1,199.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "100%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 4 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="./src/assets/images/demos/demo-4/products/product-2.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Audio</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">
                      Bose - SoundLink Bluetooth Speaker
                    </a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$79.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "60%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 6 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-new">
                    New
                  </span>
                  <a href="product.html">
                    <img
                      src="./sassets/images/demos/demo-4/products/product-3.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Tablets</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">
                      Apple - 11 Inch iPad Pro with Wi-Fi 256GB{" "}
                    </a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$899.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "80%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 4 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                  <div className="product-nav product-nav-dots">
                    <a href="#" style={{ background: "#edd2c8" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#eaeaec" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a
                      href="#"
                      className="active"
                      style={{ background: "#333333" }}
                    >
                      <span className="sr-only">Color name</span>
                    </a>
                  </div>
                  {/* End .product-nav */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-top">
                    Top
                  </span>
                  <span className="product-label label-circle label-sale">
                    Sale
                  </span>
                  <a href="product.html">
                    <img
                      src="./src/assets/images/demos/demo-4/products/product-4.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Cell Phone</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">Google - Pixel 3 XL 128GB</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">
                    <span className="new-price">$35.41</span>
                    <span className="old-price">Was $41.67</span>
                  </div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "100%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 10 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                  <div className="product-nav product-nav-dots">
                    <a
                      href="#"
                      className="active"
                      style={{ background: "#edd2c8" }}
                    >
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#eaeaec" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#333333" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                  </div>
                  {/* End .product-nav */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-top">
                    Top
                  </span>
                  <a href="product.html">
                    <img
                      src="./src/assets/images/demos/demo-4/products/product-5.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">TV &amp; Home Theater</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">
                      Samsung - 55" Class LED 2160p Smart
                    </a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$899.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "60%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 5 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-top">
                    Top
                  </span>
                  <a href="product.html">
                    <img
                      src="./src/assets/images/demos/demo-4/products/product-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Laptops</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">MacBook Pro 13" Display, i5</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$1,199.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "100%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 4 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
            </div>
            {/* End .owl-carousel */}
          </div>
          {/* .End .tab-pane */}
          <div
            className="tab-pane p-0 fade"
            id="new-tv-tab"
            role="tabpanel"
            aria-labelledby="new-tv-link"
          >
            <div
              className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
              data-toggle="owl"
              data-owl-options='{
                          "nav": true, 
                          "dots": true,
                          "margin": 20,
                          "loop": false,
                          "responsive": {
                              "0": {
                                  "items":2
                              },
                              "480": {
                                  "items":2
                              },
                              "768": {
                                  "items":3
                              },
                              "992": {
                                  "items":4
                              },
                              "1200": {
                                  "items":5
                              }
                          }
                      }'
            >
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-new">
                    New
                  </span>
                  <a href="product.html">
                    <img
                      src="./src/assets/images/demos/demo-4/products/product-3.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Tablets</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">
                      Apple - 11 Inch iPad Pro with Wi-Fi 256GB{" "}
                    </a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$899.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "80%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 4 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                  <div className="product-nav product-nav-dots">
                    <a href="#" style={{ background: "#edd2c8" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#eaeaec" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a
                      href="#"
                      className="active"
                      style={{ background: "#333333" }}
                    >
                      <span className="sr-only">Color name</span>
                    </a>
                  </div>
                  {/* End .product-nav */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="./src/assets/images/demos/demo-4/products/product-2.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Audio</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">
                      Bose - SoundLink Bluetooth Speaker
                    </a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$79.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "60%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 6 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-top">
                    Top
                  </span>
                  <span className="product-label label-circle label-sale">
                    Sale
                  </span>
                  <a href="product.html">
                    <img
                      src="./src/assets/images/demos/demo-4/products/product-4.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Cell Phone</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">Google - Pixel 3 XL 128GB</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">
                    <span className="new-price">$35.41</span>
                    <span className="old-price">Was $41.67</span>
                  </div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "100%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 10 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                  <div className="product-nav product-nav-dots">
                    <a
                      href="#"
                      className="active"
                      style={{ background: "#edd2c8" }}
                    >
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#eaeaec" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#333333" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                  </div>
                  {/* End .product-nav */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-top">
                    Top
                  </span>
                  <a href="product.html">
                    <img
                      src="./src/assets/images/demos/demo-4/products/product-5.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">TV &amp; Home Theater</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">
                      Samsung - 55" Class LED 2160p Smart
                    </a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$899.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "60%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 5 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-top">
                    Top
                  </span>
                  <a href="product.html">
                    <img
                      src="./src/assets/images/demos/demo-4/products/product-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Laptops</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">MacBook Pro 13" Display, i5</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$1,199.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "100%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 4 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
            </div>
            {/* End .owl-carousel */}
          </div>
          {/* .End .tab-pane */}
          <div
            className="tab-pane p-0 fade"
            id="new-computers-tab"
            role="tabpanel"
            aria-labelledby="new-computers-link"
          >
            <div
              className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
              data-toggle="owl"
              data-owl-options='{
                          "nav": true, 
                          "dots": true,
                          "margin": 20,
                          "loop": false,
                          "responsive": {
                              "0": {
                                  "items":2
                              },
                              "480": {
                                  "items":2
                              },
                              "768": {
                                  "items":3
                              },
                              "992": {
                                  "items":4
                              },
                              "1200": {
                                  "items":5
                              }
                          }
                      }'
            >
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-top">
                    Top
                  </span>
                  <a href="product.html">
                    <img
                      src="./src/assets/images/demos/demo-4/products/product-5.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">TV &amp; Home Theater</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">
                      Samsung - 55" Class LED 2160p Smart
                    </a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$899.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "60%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 5 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-top">
                    Top
                  </span>
                  <a href="product.html">
                    <img
                      src="./src/assets/images/demos/demo-4/products/product-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Laptops</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">MacBook Pro 13" Display, i5</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$1,199.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "100%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 4 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-new">
                    New
                  </span>
                  <a href="product.html">
                    <img
                      src="./src/assets/images/demos/demo-4/products/product-3.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Tablets</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">
                      Apple - 11 Inch iPad Pro with Wi-Fi 256GB{" "}
                    </a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$899.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "80%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 4 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                  <div className="product-nav product-nav-dots">
                    <a href="#" style={{ background: "#edd2c8" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#eaeaec" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a
                      href="#"
                      className="active"
                      style={{ background: "#333333" }}
                    >
                      <span className="sr-only">Color name</span>
                    </a>
                  </div>
                  {/* End .product-nav */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="./src/assets/images/demos/demo-4/products/product-2.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Audio</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">
                      Bose - SoundLink Bluetooth Speaker
                    </a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$79.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "60%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 6 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-top">
                    Top
                  </span>
                  <span className="product-label label-circle label-sale">
                    Sale
                  </span>
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-4/products/product-4.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Cell Phone</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">Google - Pixel 3 XL 128GB</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">
                    <span className="new-price">$35.41</span>
                    <span className="old-price">Was $41.67</span>
                  </div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "100%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 10 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                  <div className="product-nav product-nav-dots">
                    <a
                      href="#"
                      className="active"
                      style={{ background: "#edd2c8" }}
                    >
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#eaeaec" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#333333" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                  </div>
                  {/* End .product-nav */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
            </div>
            {/* End .owl-carousel */}
          </div>
          {/* .End .tab-pane */}
          <div
            className="tab-pane p-0 fade"
            id="new-phones-tab"
            role="tabpanel"
            aria-labelledby="new-phones-link"
          >
            <div
              className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
              data-toggle="owl"
              data-owl-options='{
                          "nav": true, 
                          "dots": true,
                          "margin": 20,
                          "loop": false,
                          "responsive": {
                              "0": {
                                  "items":2
                              },
                              "480": {
                                  "items":2
                              },
                              "768": {
                                  "items":3
                              },
                              "992": {
                                  "items":4
                              },
                              "1200": {
                                  "items":5
                              }
                          }
                      }'
            >
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-top">
                    Top
                  </span>
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-4/products/product-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Laptops</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">MacBook Pro 13" Display, i5</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$1,199.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "100%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 4 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="./src/assets/images/demos/demo-4/products/product-2.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Audio</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">
                      Bose - SoundLink Bluetooth Speaker
                    </a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$79.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "60%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 6 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-new">
                    New
                  </span>
                  <a href="product.html">
                    <img
                      src="./src/assets/images/demos/demo-4/products/product-3.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Tablets</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">
                      Apple - 11 Inch iPad Pro with Wi-Fi 256GB{" "}
                    </a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$899.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "80%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 4 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                  <div className="product-nav product-nav-dots">
                    <a href="#" style={{ background: "#edd2c8" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#eaeaec" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a
                      href="#"
                      className="active"
                      style={{ background: "#333333" }}
                    >
                      <span className="sr-only">Color name</span>
                    </a>
                  </div>
                  {/* End .product-nav */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-top">
                    Top
                  </span>
                  <a href="product.html">
                    <img
                      src="./src/assets/images/demos/demo-4/products/product-5.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">TV &amp; Home Theater</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">
                      Samsung - 55" Class LED 2160p Smart
                    </a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$899.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "60%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 5 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-top">
                    Top
                  </span>
                  <a href="product.html">
                    <img
                      src="./src/assets/images/demos/demo-4/products/product-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Laptops</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">MacBook Pro 13" Display, i5</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$1,199.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "100%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 4 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-top">
                    Top
                  </span>
                  <span className="product-label label-circle label-sale">
                    Sale
                  </span>
                  <a href="product.html">
                    <img
                      src="./src/assets/images/demos/demo-4/products/product-4.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Cell Phone</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">Google - Pixel 3 XL 128GB</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">
                    <span className="new-price">$35.41</span>
                    <span className="old-price">Was $41.67</span>
                  </div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "100%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 10 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                  <div className="product-nav product-nav-dots">
                    <a
                      href="#"
                      className="active"
                      style={{ background: "#edd2c8" }}
                    >
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#eaeaec" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#333333" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                  </div>
                  {/* End .product-nav */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
            </div>
            {/* End .owl-carousel */}
          </div>
          {/* .End .tab-pane */}
          <div
            className="tab-pane p-0 fade"
            id="new-watches-tab"
            role="tabpanel"
            aria-labelledby="new-watches-link"
          >
            <div
              className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
              data-toggle="owl"
              data-owl-options='{
                          "nav": true, 
                          "dots": true,
                          "margin": 20,
                          "loop": false,
                          "responsive": {
                              "0": {
                                  "items":2
                              },
                              "480": {
                                  "items":2
                              },
                              "768": {
                                  "items":3
                              },
                              "992": {
                                  "items":4
                              },
                              "1200": {
                                  "items":5
                              }
                          }
                      }'
            >
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-top">
                    Top
                  </span>
                  <span className="product-label label-circle label-sale">
                    Sale
                  </span>
                  <a href="product.html">
                    <img
                      src="./src/assets/images/demos/demo-4/products/product-4.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Cell Phone</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">Google - Pixel 3 XL 128GB</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">
                    <span className="new-price">$35.41</span>
                    <span className="old-price">Was $41.67</span>
                  </div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "100%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 10 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                  <div className="product-nav product-nav-dots">
                    <a
                      href="#"
                      className="active"
                      style={{ background: "#edd2c8" }}
                    >
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#eaeaec" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#333333" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                  </div>
                  {/* End .product-nav */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-top">
                    Top
                  </span>
                  <a href="product.html">
                    <img
                      src="./src/assets/images/demos/demo-4/products/product-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Laptops</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">MacBook Pro 13" Display, i5</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$1,199.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "100%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 4 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="./src/assets/images/demos/demo-4/products/product-2.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Audio</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">
                      Bose - SoundLink Bluetooth Speaker
                    </a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$79.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "60%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 6 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-new">
                    New
                  </span>
                  <a href="product.html">
                    <img
                      src="./src/assets/images/demos/demo-4/products/product-3.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Tablets</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">
                      Apple - 11 Inch iPad Pro with Wi-Fi 256GB{" "}
                    </a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$899.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "80%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 4 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                  <div className="product-nav product-nav-dots">
                    <a href="#" style={{ background: "#edd2c8" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#eaeaec" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a
                      href="#"
                      className="active"
                      style={{ background: "#333333" }}
                    >
                      <span className="sr-only">Color name</span>
                    </a>
                  </div>
                  {/* End .product-nav */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
            </div>
            {/* End .owl-carousel */}
          </div>
          {/* .End .tab-pane */}
          <div
            className="tab-pane p-0 fade"
            id="new-acc-tab"
            role="tabpanel"
            aria-labelledby="new-acc-link"
          >
            <div
              className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
              data-toggle="owl"
              data-owl-options='{
                          "nav": true, 
                          "dots": true,
                          "margin": 20,
                          "loop": false,
                          "responsive": {
                              "0": {
                                  "items":2
                              },
                              "480": {
                                  "items":2
                              },
                              "768": {
                                  "items":3
                              },
                              "992": {
                                  "items":4
                              },
                              "1200": {
                                  "items":5
                              }
                          }
                      }'
            >
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-top">
                    Top
                  </span>
                  <a href="product.html">
                    <img
                      src="./src/assets/images/demos/demo-4/products/product-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Laptops</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">MacBook Pro 13" Display, i5</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$1,199.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "100%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 4 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-top">
                    Top
                  </span>
                  <a href="product.html">
                    <img
                      src="./src/assets/images/demos/demo-4/products/product-5.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">TV &amp; Home Theater</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">
                      Samsung - 55" Class LED 2160p Smart
                    </a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$899.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "60%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 5 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-top">
                    Top
                  </span>
                  <a href="product.html">
                    <img
                      src="./src/assets/images/demos/demo-4/products/product-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Laptops</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">MacBook Pro 13" Display, i5</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$1,199.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "100%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 4 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="./src/assets/images/demos/demo-4/products/product-2.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Audio</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">
                      Bose - SoundLink Bluetooth Speaker
                    </a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$79.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "60%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 6 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-new">
                    New
                  </span>
                  <a href="product.html">
                    <img
                      src="./src/assets/images/demos/demo-4/products/product-3.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Tablets</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">
                      Apple - 11 Inch iPad Pro with Wi-Fi 256GB{" "}
                    </a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$899.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "80%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 4 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                  <div className="product-nav product-nav-dots">
                    <a href="#" style={{ background: "#edd2c8" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#eaeaec" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a
                      href="#"
                      className="active"
                      style={{ background: "#333333" }}
                    >
                      <span className="sr-only">Color name</span>
                    </a>
                  </div>
                  {/* End .product-nav */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
            </div>
            {/* End .owl-carousel */}
          </div>
          {/* .End .tab-pane */}
        </div>
        {/* End .tab-content */}
      </div>
      {/* End .container */}
      <div className="mb-6" />
      {/* End .mb-6 */}
      <div className="container">
        <div
          className="cta cta-border mb-5"
          style={{
            backgroundImage: "url(./src/assets/images/demos/demo-4/bg-1.jpg)"
          }}
        >
          <img
            src="./src/assets/images/demos/demo-4/camera.png"
            alt="camera"
            className="cta-img"
          />
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="cta-content">
                <div className="cta-text text-right text-white">
                  <p>
                    Shop Today’s Deals <br />
                    <strong>Awesome Made Easy. HERO7 Black</strong>
                  </p>
                </div>
                {/* End .cta-text */}
                <a href="#" className="btn btn-primary btn-round">
                  <span>Shop Now - $429.99</span>
                  <i className="icon-long-arrow-right" />
                </a>
              </div>
              {/* End .cta-content */}
            </div>
            {/* End .col-md-12 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .cta */}
      </div>
      {/* End .container */}
      <div className="container">
        <div className="heading text-center mb-3">
          <h2 className="title">Deals &amp; Outlet</h2>
          {/* End .title */}
          <p className="title-desc">Today’s deal and more</p>
          {/* End .title-desc */}
        </div>
        {/* End .heading */}
        <div className="row">
          <div className="col-lg-6 deal-col">
            <div
              className="deal"
              style={{
                backgroundImage:
                  'url("./src/assets/images/demos/demo-4/deal/bg-1.jpg")'
              }}
            >
              <div className="deal-top">
                <h2>Deal of the Day.</h2>
                <h4>Limited quantities. </h4>
              </div>
              {/* End .deal-top */}
              <div className="deal-content">
                <h3 className="product-title">
                  <a href="product.html">
                    Home Smart Speaker with Google Assistant
                  </a>
                </h3>
                {/* End .product-title */}
                <div className="product-price">
                  <span className="new-price">$129.00</span>
                  <span className="old-price">Was $150.99</span>
                </div>
                {/* End .product-price */}
                <a href="product.html" className="btn btn-link">
                  <span>Shop Now</span>
                  <i className="icon-long-arrow-right" />
                </a>
              </div>
              {/* End .deal-content */}
              <div className="deal-bottom">
                <div
                  className="deal-countdown daily-deal-countdown"
                  data-until="+10h"
                />
                {/* End .deal-countdown */}
              </div>
              {/* End .deal-bottom */}
            </div>
            {/* End .deal */}
          </div>
          {/* End .col-lg-6 */}
          <div className="col-lg-6 deal-col">
            <div
              className="deal"
              style={{
                backgroundImage:
                  'url("./src/assets/images/demos/demo-4/deal/bg-2.jpg")'
              }}
            >
              <div className="deal-top">
                <h2>Your Exclusive Offers.</h2>
                <h4>Sign in to see amazing deals.</h4>
              </div>
              {/* End .deal-top */}
              <div className="deal-content">
                <h3 className="product-title">
                  <a href="product.html">
                    Certified Wireless Charging Pad for iPhone / Android
                  </a>
                </h3>
                {/* End .product-title */}
                <div className="product-price">
                  <span className="new-price">$29.99</span>
                </div>
                {/* End .product-price */}
                <a href="login.html" className="btn btn-link">
                  <span>Sign In and Save money</span>
                  <i className="icon-long-arrow-right" />
                </a>
              </div>
              {/* End .deal-content */}
              <div className="deal-bottom">
                <div
                  className="deal-countdown offer-countdown"
                  data-until="+11d"
                />
                {/* End .deal-countdown */}
              </div>
              {/* End .deal-bottom */}
            </div>
            {/* End .deal */}
          </div>
          {/* End .col-lg-6 */}
        </div>
        {/* End .row */}
        <div className="more-container text-center mt-1 mb-5">
          <a href="#" className="btn btn-outline-dark-2 btn-round btn-more">
            <span>Shop more Outlet deals</span>
            <i className="icon-long-arrow-right" />
          </a>
        </div>
        {/* End .more-container */}
      </div>
      {/* End .container */}
      <div className="container">
        <hr className="mb-0" />
        <div
          className="owl-carousel mt-5 mb-5 owl-simple"
          data-toggle="owl"
          data-owl-options='{
                  "nav": false, 
                  "dots": false,
                  "margin": 30,
                  "loop": false,
                  "responsive": {
                      "0": {
                          "items":2
                      },
                      "420": {
                          "items":3
                      },
                      "600": {
                          "items":4
                      },
                      "900": {
                          "items":5
                      },
                      "1024": {
                          "items":6
                      }
                  }
              }'
        >
          <a href="#" className="brand">
            <img src="./src/assets/images/brands/1.png" alt="Brand Name" />
          </a>
          <a href="#" className="brand">
            <img src="./src/assets/images/brands/2.png" alt="Brand Name" />
          </a>
          <a href="#" className="brand">
            <img src="./src/assets/images/brands/3.png" alt="Brand Name" />
          </a>
          <a href="#" className="brand">
            <img src="./src/assets/images/brands/4.png" alt="Brand Name" />
          </a>
          <a href="#" className="brand">
            <img src="./src/assets/images/brands/5.png" alt="Brand Name" />
          </a>
          <a href="#" className="brand">
            <img src="./src/assets/images/brands/6.png" alt="Brand Name" />
          </a>
        </div>
        {/* End .owl-carousel */}
      </div>
      {/* End .container */}
      <div className="bg-light pt-5 pb-6">
        <div className="container trending-products">
          <div className="heading heading-flex mb-3">
            <div className="heading-left">
              <h2 className="title">Trending Products</h2>
              {/* End .title */}
            </div>
            {/* End .heading-left */}
            <div className="heading-right">
              <ul
                className="nav nav-pills nav-border-anim justify-content-center"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="trending-top-link"
                    data-toggle="tab"
                    href="#trending-top-tab"
                    role="tab"
                    aria-controls="trending-top-tab"
                    aria-selected="true"
                  >
                    Top Rated
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="trending-best-link"
                    data-toggle="tab"
                    href="#trending-best-tab"
                    role="tab"
                    aria-controls="trending-best-tab"
                    aria-selected="false"
                  >
                    Best Selling
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="trending-sale-link"
                    data-toggle="tab"
                    href="#trending-sale-tab"
                    role="tab"
                    aria-controls="trending-sale-tab"
                    aria-selected="false"
                  >
                    On Sale
                  </a>
                </li>
              </ul>
            </div>
            {/* End .heading-right */}
          </div>
          {/* End .heading */}
          <div className="row">
            <div className="col-xl-5col d-none d-xl-block">
              <div className="banner">
                <a href="#">
                  <img
                    src="./src/assets/images/demos/demo-4/banners/banner-4.jpg"
                    alt="banner"
                  />
                </a>
              </div>
              {/* End .banner */}
            </div>
            {/* End .col-xl-5col */}
            <div className="col-xl-4-5col">
              <div className="tab-content tab-content-carousel just-action-icons-sm">
                <div
                  className="tab-pane p-0 fade show active"
                  id="trending-top-tab"
                  role="tabpanel"
                  aria-labelledby="trending-top-link"
                >
                  <div
                    className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
                    data-toggle="owl"
                    data-owl-options='{
                                      "nav": true, 
                                      "dots": false,
                                      "margin": 20,
                                      "loop": false,
                                      "responsive": {
                                          "0": {
                                              "items":2
                                          },
                                          "480": {
                                              "items":2
                                          },
                                          "768": {
                                              "items":3
                                          },
                                          "992": {
                                              "items":4
                                          }
                                      }
                                  }'
                  >
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">
                          Top
                        </span>
                        <a href="product.html">
                          <img
                            src="./src/assets/images/demos/demo-4/products/product-6.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Headphones</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Bose - SoundSport wireless headphones
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$199.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a href="#" style={{ background: "#69b4ff" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#ff887f" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#333333" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="./src/assets/images/demos/demo-4/products/product-7.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Video Games</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Microsoft - Refurbish Xbox One S 500GB
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$279.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 6 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-new">
                          New
                        </span>
                        <a href="product.html">
                          <img
                            src="./src/assets/images/demos/demo-4/products/product-8.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Smartwatches</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Apple Watch Series 4 Gold Aluminum Case
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$499.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a href="#" style={{ background: "#edd2c8" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#eaeaec" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#333333" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">
                          Top
                        </span>
                        <span className="product-label label-circle label-sale">
                          Sale
                        </span>
                        <a href="product.html">
                          <img
                            src="./src/assets/images/demos/demo-4/products/product-9.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">TV &amp; Home Theater</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Sony - Class LED 2160p Smart 4K Ultra HD
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$1,699.99</span>
                          <span className="old-price">Was $1,999.99</span>
                        </div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 10 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-new">
                          New
                        </span>
                        <a href="product.html">
                          <img
                            src="./src/assets/images/demos/demo-4/products/product-3.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Tablets</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Apple - 11 Inch iPad Pro with Wi-Fi 256GB{" "}
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$899.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a href="#" style={{ background: "#edd2c8" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#eaeaec" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#333333" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .owl-carousel */}
                </div>
                {/* .End .tab-pane */}
                <div
                  className="tab-pane p-0 fade"
                  id="trending-best-tab"
                  role="tabpanel"
                  aria-labelledby="trending-best-link"
                >
                  <div
                    className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
                    data-toggle="owl"
                    data-owl-options='{
                                      "nav": true, 
                                      "dots": false,
                                      "margin": 20,
                                      "loop": false,
                                      "responsive": {
                                          "0": {
                                              "items":2
                                          },
                                          "480": {
                                              "items":2
                                          },
                                          "768": {
                                              "items":3
                                          },
                                          "992": {
                                              "items":4
                                          }
                                      }
                                  }'
                  >
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-new">
                          New
                        </span>
                        <a href="product.html">
                          <img
                            src="./src/assets/images/demos/demo-4/products/product-3.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Tablets</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Apple - 11 Inch iPad Pro with Wi-Fi 256GB{" "}
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$899.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a href="#" style={{ background: "#edd2c8" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#eaeaec" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#333333" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="./src/assets/images/demos/demo-4/products/product-2.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Audio</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Bose - SoundLink Bluetooth Speaker
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$79.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 6 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">
                          Top
                        </span>
                        <span className="product-label label-circle label-sale">
                          Sale
                        </span>
                        <a href="product.html">
                          <img
                            src="./src/assets/images/demos/demo-4/products/product-4.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Cell Phone</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">Google - Pixel 3 XL 128GB</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$35.41</span>
                          <span className="old-price">Was $41.67</span>
                        </div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 10 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#edd2c8" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#eaeaec" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#333333" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">
                          Top
                        </span>
                        <a href="product.html">
                          <img
                            src="./src/assets/images/demos/demo-4/products/product-5.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">TV &amp; Home Theater</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Samsung - 55" Class LED 2160p Smart
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$899.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 5 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">
                          Top
                        </span>
                        <a href="product.html">
                          <img
                            src="./src/assets/images/demos/demo-4/products/product-1.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Laptops</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">MacBook Pro 13" Display, i5</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$1,199.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .owl-carousel */}
                </div>
                {/* .End .tab-pane */}
                <div
                  className="tab-pane p-0 fade"
                  id="trending-sale-tab"
                  role="tabpanel"
                  aria-labelledby="trending-sale-link"
                >
                  <div
                    className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
                    data-toggle="owl"
                    data-owl-options='{
                                      "nav": true, 
                                      "dots": false,
                                      "margin": 20,
                                      "loop": false,
                                      "responsive": {
                                          "0": {
                                              "items":2
                                          },
                                          "480": {
                                              "items":2
                                          },
                                          "768": {
                                              "items":3
                                          },
                                          "992": {
                                              "items":4
                                          }
                                      }
                                  }'
                  >
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-new">
                          New
                        </span>
                        <a href="product.html">
                          <img
                            src="./src/assets/images/demos/demo-4/products/product-8.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Smartwatches</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Apple Watch Series 4 Gold Aluminum Case
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$499.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a href="#" style={{ background: "#edd2c8" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#eaeaec" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#333333" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-top">
                          Top
                        </span>
                        <a href="product.html">
                          <img
                            src="./src/assets/images/demos/demo-4/products/product-6.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Headphones</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Bose - SoundSport wireless headphones
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$199.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a href="#" style={{ background: "#69b4ff" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#ff887f" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#333333" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="./src/assets/images/demos/demo-4/products/product-7.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Video Games</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Microsoft - Refurbish Xbox One S 500GB
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$279.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 6 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-new">
                          New
                        </span>
                        <a href="product.html">
                          <img
                            src="./src/assets/images/demos/demo-4/products/product-3.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Tablets</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Apple - 11 Inch iPad Pro with Wi-Fi 256GB{" "}
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$899.99</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a href="#" style={{ background: "#edd2c8" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#eaeaec" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#333333" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .owl-carousel */}
                </div>
                {/* .End .tab-pane */}
              </div>
              {/* End .tab-content */}
            </div>
            {/* End .col-xl-4-5col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </div>
      {/* End .bg-light pt-5 pb-6 */}
      <div className="mb-5" />
      {/* End .mb-5 */}
      <div className="container for-you">
        <div className="heading heading-flex mb-3">
          <div className="heading-left">
            <h2 className="title">Recommendation For You</h2>
            {/* End .title */}
          </div>
          {/* End .heading-left */}
          <div className="heading-right">
            <a href="#" className="title-link">
              View All Recommendadion <i className="icon-long-arrow-right" />
            </a>
          </div>
          {/* End .heading-right */}
        </div>
        {/* End .heading */}
        <div className="products">
          <div className="row justify-content-center">
            <div className="col-6 col-md-4 col-lg-3">
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-sale">
                    Sale
                  </span>
                  <a href="product.html">
                    <img
                      src="./src/assets/images/demos/demo-4/products/product-10.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Headphones</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">
                      Beats by Dr. Dre Wireless Headphones
                    </a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">
                    <span className="new-price">$279.99</span>
                    <span className="old-price">Was $349.99</span>
                  </div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "40%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 4 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                  <div className="product-nav product-nav-dots">
                    <a
                      href="#"
                      className="active"
                      style={{ background: "#666666" }}
                    >
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#ff887f" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#6699cc" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#f3dbc1" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#eaeaec" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                  </div>
                  {/* End .product-nav */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
            </div>
            {/* End .col-sm-6 col-md-4 col-lg-3 */}
            <div className="col-6 col-md-4 col-lg-3">
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="./src/assets/images/demos/demo-4/products/product-11.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Cameras &amp; Camcorders</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">
                      GoPro - HERO7 Black HD Waterproof Action
                    </a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$349.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "60%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 2 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
            </div>
            {/* End .col-sm-6 col-md-4 col-lg-3 */}
            <div className="col-6 col-md-4 col-lg-3">
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-new">
                    New
                  </span>
                  <a href="product.html">
                    <img
                      src="./src/assets/images/demos/demo-4/products/product-12.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                    <img
                      src="./src/assets/images/demos/demo-4/products/product-12-2.jpg"
                      alt="Product image"
                      className="product-image-hover"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Smartwatches</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">
                      Apple - Apple Watch Series 3 with White Sport Band
                    </a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$214.49</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "0%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 0 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                  <div className="product-nav product-nav-dots">
                    <a
                      href="#"
                      className="active"
                      style={{ background: "#e2e2e2" }}
                    >
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#333333" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#f2bc9e" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                  </div>
                  {/* End .product-nav */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
            </div>
            {/* End .col-sm-6 col-md-4 col-lg-3 */}
            <div className="col-6 col-md-4 col-lg-3">
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="./src/assets/images/demos/demo-4/products/product-13.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Laptops</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">Lenovo - 330-15IKBR 15.6"</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">
                    <span className="out-price">$339.99</span>
                    <span className="out-text">Out Of Stock</span>
                  </div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "60%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 11 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
            </div>
            {/* End .col-sm-6 col-md-4 col-lg-3 */}
            <div className="col-6 col-md-4 col-lg-3">
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="./src/assets/images/demos/demo-4/products/product-14.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Digital Cameras</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">
                      Sony - Alpha a5100 Mirrorless Camera
                    </a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$499.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "50%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 11 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
            </div>
            {/* End .col-sm-6 col-md-4 col-lg-3 */}
            <div className="col-6 col-md-4 col-lg-3">
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="./src/assets/images/demos/demo-4/products/product-15.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Laptops</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">
                      Home Mini - Smart Speaker with Google Assistant
                    </a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$49.00</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "60%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 24 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                  <div className="product-nav product-nav-dots">
                    <a
                      href="#"
                      className="active"
                      style={{ background: "#ef837b" }}
                    >
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#333333" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#e2e2e2" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                  </div>
                  {/* End .product-nav */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
            </div>
            {/* End .col-sm-6 col-md-4 col-lg-3 */}
            <div className="col-6 col-md-4 col-lg-3">
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-sale">
                    Sale
                  </span>
                  <a href="product.html">
                    <img
                      src="./src/assets/images/demos/demo-4/products/product-16.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Audio</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">
                      WONDERBOOM Portable Bluetooth Speaker
                    </a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">
                    <span className="new-price">$99.99</span>
                    <span className="old-price">Was $129.99</span>
                  </div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "40%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 4 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                  <div className="product-nav product-nav-dots">
                    <a
                      href="#"
                      className="active"
                      style={{ background: "#666666" }}
                    >
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#ff887f" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#6699cc" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#f3dbc1" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#eaeaec" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                  </div>
                  {/* End .product-nav */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
            </div>
            {/* End .col-sm-6 col-md-4 col-lg-3 */}
            <div className="col-6 col-md-4 col-lg-3">
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="./src/assets/images/demos/demo-4/products/product-17.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Smart Home</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">
                      Google - Home Hub with Google Assistant
                    </a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$149.00</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "60%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 2 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
            </div>
            {/* End .col-sm-6 col-md-4 col-lg-3 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .products */}
      </div>
      {/* End .container */}
      <div className="mb-4" />
      {/* End .mb-4 */}
      <div className="container">
        <hr className="mb-0" />
      </div>
      {/* End .container */}
      <div className="icon-boxes-container bg-transparent">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div className="icon-box icon-box-side">
                <span className="icon-box-icon text-dark">
                  <i className="icon-rocket" />
                </span>
                <div className="icon-box-content">
                  <h3 className="icon-box-title">Free Shipping</h3>
                  {/* End .icon-box-title */}
                  <p>Orders $50 or more</p>
                </div>
                {/* End .icon-box-content */}
              </div>
              {/* End .icon-box */}
            </div>
            {/* End .col-sm-6 col-lg-3 */}
            <div className="col-sm-6 col-lg-3">
              <div className="icon-box icon-box-side">
                <span className="icon-box-icon text-dark">
                  <i className="icon-rotate-left" />
                </span>
                <div className="icon-box-content">
                  <h3 className="icon-box-title">Free Returns</h3>
                  {/* End .icon-box-title */}
                  <p>Within 30 days</p>
                </div>
                {/* End .icon-box-content */}
              </div>
              {/* End .icon-box */}
            </div>
            {/* End .col-sm-6 col-lg-3 */}
            <div className="col-sm-6 col-lg-3">
              <div className="icon-box icon-box-side">
                <span className="icon-box-icon text-dark">
                  <i className="icon-info-circle" />
                </span>
                <div className="icon-box-content">
                  <h3 className="icon-box-title">Get 20% Off 1 Item</h3>
                  {/* End .icon-box-title */}
                  <p>when you sign up</p>
                </div>
                {/* End .icon-box-content */}
              </div>
              {/* End .icon-box */}
            </div>
            {/* End .col-sm-6 col-lg-3 */}
            <div className="col-sm-6 col-lg-3">
              <div className="icon-box icon-box-side">
                <span className="icon-box-icon text-dark">
                  <i className="icon-life-ring" />
                </span>
                <div className="icon-box-content">
                  <h3 className="icon-box-title">We Support</h3>
                  {/* End .icon-box-title */}
                  <p>24/7 amazing services</p>
                </div>
                {/* End .icon-box-content */}
              </div>
              {/* End .icon-box */}
            </div>
            {/* End .col-sm-6 col-lg-3 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </div>
      {/* End .icon-boxes-container */}
    </main>

    {/* End .main */}
   <Footer/>
    {/* End .footer */}


  </div>
  {/* End .page-wrapper */}
  <button id="scroll-top" title="Back to Top">
    <i className="icon-arrow-up" />
  </button>
  {/* Mobile Menu */}
  <div className="mobile-menu-overlay" />
  {/* End .mobil-menu-overlay */}
  <div className="mobile-menu-container mobile-menu-light">
    <div className="mobile-menu-wrapper">
      <span className="mobile-menu-close">
        <i className="icon-close" />
      </span>
      <form action="#" method="get" className="mobile-search">
        <label htmlFor="mobile-search" className="sr-only">
          Search
        </label>
        <input
          type="search"
          className="form-control"
          name="mobile-search"
          id="mobile-search"
          placeholder="Search in..."
      
        />
        <button className="btn btn-primary" type="submit">
          <i className="icon-search" />
        </button>
      </form>
      <ul className="nav nav-pills-mobile nav-border-anim" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link active"
            id="mobile-menu-link"
            data-toggle="tab"
            href="#mobile-menu-tab"
            role="tab"
            aria-controls="mobile-menu-tab"
            aria-selected="true"
          >
            Menu
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="mobile-cats-link"
            data-toggle="tab"
            href="#mobile-cats-tab"
            role="tab"
            aria-controls="mobile-cats-tab"
            aria-selected="false"
          >
            Categories
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div
          className="tab-pane fade show active"
          id="mobile-menu-tab"
          role="tabpanel"
          aria-labelledby="mobile-menu-link"
        >
          <nav className="mobile-nav">
            <ul className="mobile-menu">
              <li className="active">
                <a href="index.html">Home</a>
                <ul>
                  <li>
                    <a href="index-1.html">01 - furniture store</a>
                  </li>
                 
            
              
                  <li>
                    <a href="index-23.html">
                      23 - fashion left navigation store
                    </a>
                  </li>
                  <li>
                    <a href="index-24.html">24 - extreme sport store</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="category.html">Shop</a>
                <ul>
                  <li>
                    <a href="category-list.html">Shop List</a>
                  </li>
                  
                  <li>
                    <a href="category-boxed.html">
                      <span>
                        Shop Boxed No Sidebar
                        <span className="tip tip-hot">Hot</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="category-fullwidth.html">
                      Shop Fullwidth No Sidebar
                    </a>
                  </li>
                  <li>
                    <a href="product-category-boxed.html">
                      Product Category Boxed
                    </a>
                  </li>
                  <li>
                    <a href="product-category-fullwidth.html">
                      <span>
                        Product Category Fullwidth
                        <span className="tip tip-new">New</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="cart.html">Cart</a>
                  </li>
                  <li>
                    <a href="checkout.html">Checkout</a>
                  </li>
                  <li>
                    <a href="wishlist.html">Wishlist</a>
                  </li>
                  <li>
                    <a href="#">Lookbook</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="product.html" className="sf-with-ul">
                  Product
                </a>
                <ul>
                  <li>
                    <a href="product.html">Default</a>
                  </li>
                  <li>
                    <a href="product-centered.html">Centered</a>
                  </li>
                  <li>
                    <a href="product-extended.html">
                      <span>
                        Extended Info<span className="tip tip-new">New</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="product-gallery.html">Gallery</a>
                  </li>
                  <li>
                    <a href="product-sticky.html">Sticky Info</a>
                  </li>
                  <li>
                    <a href="product-sidebar.html">Boxed With Sidebar</a>
                  </li>
                  <li>
                    <a href="product-fullwidth.html">Full Width</a>
                  </li>
                  <li>
                    <a href="product-masonry.html">Masonry Sticky Info</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Pages</a>
                <ul>
                  <li>
                    <a href="about.html">About</a>
                    <ul>
                      <li>
                        <a href="about.html">About 01</a>
                      </li>
                      
                    </ul>
                  </li>
                 
                  <li>
                    <a href="login.html">Login</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQs</a>
                  </li>
                  
                </ul>
              </li>
              <li>
                <a href="blog.html">Blog</a>
                <ul>
                  <li>
                    <a href="blog.html">Classic</a>
                  </li>
                  <li>
                    <a href="blog-listing.html">Listing</a>
                  </li>
                  <li>
                    <a href="#">Grid</a>
                    <ul>
                      <li>
                        <a href="blog-grid-2cols.html">Grid 2 columns</a>
                      </li>
                    
                    </ul>
                  </li>
                  <li>
                    <a href="#">Masonry</a>
                    <ul>
                      <li>
                        <a href="blog-masonry-2cols.html">Masonry 2 columns</a>
                      </li>
                     
                    </ul>
                  </li>
                  <li>
                    <a href="#">Mask</a>
                    <ul>
                      <li>
                        <a href="blog-mask-grid.html">Blog mask grid</a>
                      </li>
                      
                    </ul>
                  </li>
                  <li>
                    <a href="#">Single Post</a>
                    <ul>
                      <li>
                        <a href="single.html">Default with sidebar</a>
                      </li>
                      
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="elements-list.html">Elements</a>
                <ul>
                  <li>
                    <a href="elements-products.html">Products</a>
                  </li>
                 
                  
                </ul>
              </li>
            </ul>
          </nav>
          {/* End .mobile-nav */}
        </div>
        {/* .End .tab-pane */}
        <div
          className="tab-pane fade"
          id="mobile-cats-tab"
          role="tabpanel"
          aria-labelledby="mobile-cats-link"
        >
          <nav className="mobile-cats-nav">
            <ul className="mobile-cats-menu">
              <li>
                <a className="mobile-cats-lead" href="#">
                  Daily offers
                </a>
              </li>
              
           
            
            </ul>
            {/* End .mobile-cats-menu */}
          </nav>
          {/* End .mobile-cats-nav */}
        </div>
        {/* .End .tab-pane */}
      </div>
      {/* End .tab-content */}
      <div className="social-icons">
        <a href="#" className="social-icon" target="_blank" title="Facebook">
          <i className="icon-facebook-f" />
        </a>
       
      </div>
      {/* End .social-icons */}
    </div>
    {/* End .mobile-menu-wrapper */}
  </div>
  {/* End .mobile-menu-container */}
  {/* Sign in / Register Modal */}
  <div
    className="modal fade"
    id="signin-modal"
    tabIndex={-1}
    role="dialog"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-body">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">
              <i className="icon-close" />
            </span>
          </button>
          <div className="form-box">
            <div className="form-tab">
              <ul
                className="nav nav-pills nav-fill nav-border-anim"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="signin-tab"
                    data-toggle="tab"
                    href="#signin"
                    role="tab"
                    aria-controls="signin"
                    aria-selected="true"
                  >
                    Sign In
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="register-tab"
                    data-toggle="tab"
                    href="#register"
                    role="tab"
                    aria-controls="register"
                    aria-selected="false"
                  >
                    Register
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="tab-content-5">
                <div
                  className="tab-pane fade show active"
                  id="signin"
                  role="tabpanel"
                  aria-labelledby="signin-tab"
                >
                  <form action="#">
                    <div className="form-group">
                      <label htmlFor="singin-email">
                        Username or email address *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="singin-email"
                        name="singin-email"
                      
                      />
                    </div>
                    {/* End .form-group */}
                    <div className="form-group">
                      <label htmlFor="singin-password">Password *</label>
                      <input
                        type="password"
                        className="form-control"
                        id="singin-password"
                        name="singin-password"
                     
                      />
                    </div>
                    {/* End .form-group */}
                    <div className="form-footer">
                      <button
                        type="submit"
                        className="btn btn-outline-primary-2"
                      >
                        <span>LOG IN</span>
                        <i className="icon-long-arrow-right" />
                      </button>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="signin-remember"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="signin-remember"
                        >
                          Remember Me
                        </label>
                      </div>
                      {/* End .custom-checkbox */}
                      <a href="#" className="forgot-link">
                        Forgot Your Password?
                      </a>
                    </div>
                    {/* End .form-footer */}
                  </form>
                  <div className="form-choice">
                    <p className="text-center">or sign in with</p>
                    <div className="row">
                      <div className="col-sm-6">
                        <a href="#" className="btn btn-login btn-g">
                          <i className="icon-google" />
                          Login With Google
                        </a>
                      </div>
                      {/* End .col-6 */}
                      <div className="col-sm-6">
                        <a href="#" className="btn btn-login btn-f">
                          <i className="icon-facebook-f" />
                          Login With Facebook
                        </a>
                      </div>
                      {/* End .col-6 */}
                    </div>
                    {/* End .row */}
                  </div>
                  {/* End .form-choice */}
                </div>
                {/* .End .tab-pane */}
                <div
                  className="tab-pane fade"
                  id="register"
                  role="tabpanel"
                  aria-labelledby="register-tab"
                >
                  <form action="#">
                    <div className="form-group">
                      <label htmlFor="register-email">
                        Your email address *
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="register-email"
                        name="register-email"
                 
                      />
                    </div>
                    {/* End .form-group */}
                    <div className="form-group">
                      <label htmlFor="register-password">Password *</label>
                      <input
                        type="password"
                        className="form-control"
                        id="register-password"
                        name="register-password"
                       
                      />
                    </div>
                    {/* End .form-group */}
                    <div className="form-footer">
                      <button
                        type="submit"
                        className="btn btn-outline-primary-2"
                      >
                        <span>SIGN UP</span>
                        <i className="icon-long-arrow-right" />
                      </button>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="register-policy"
                          
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="register-policy"
                        >
                          I agree to the <a href="#">privacy policy</a> *
                        </label>
                      </div>
                      {/* End .custom-checkbox */}
                    </div>
                    {/* End .form-footer */}
                  </form>
                  <div className="form-choice">
                    <p className="text-center">or sign in with</p>
                    <div className="row">
                      <div className="col-sm-6">
                        <a href="#" className="btn btn-login btn-g">
                          <i className="icon-google" />
                          Login With Google
                        </a>
                      </div>
                      {/* End .col-6 */}
                      <div className="col-sm-6">
                        <a href="#" className="btn btn-login  btn-f">
                          <i className="icon-facebook-f" />
                          Login With Facebook
                        </a>
                      </div>
                      {/* End .col-6 */}
                    </div>
                    {/* End .row */}
                  </div>
                  {/* End .form-choice */}
                </div>
                {/* .End .tab-pane */}
              </div>
              {/* End .tab-content */}
            </div>
            {/* End .form-tab */}
          </div>
          {/* End .form-box */}
        </div>
        {/* End .modal-body */}
      </div>
      {/* End .modal-content */}
    </div>
    {/* End .modal-dialog */}
  </div>
  {/* End .modal */}
  <div
    className="container newsletter-popup-container mfp-hide"
    id="newsletter-popup-form"
  >
    <div className="row justify-content-center">
      <div className="col-10">
        <div className="row no-gutters bg-white newsletter-popup-content">
          <div className="col-xl-3-5col col-lg-7 banner-content-wrap">
            <div className="banner-content text-center">
              <img
                src="./src/assets/images/popup/newsletter/logo.png"
                className="logo"
                alt="logo"
                width={60}
                height={15}
              />
              <h2 className="banner-title">
                get{" "}
                <span>
                  25 %
                </span>{" "}
                off
              </h2>
              <p>
                Subscribe to the Molla eCommerce newsletter to receive timely
                updates from your favorite products.
              </p>
              <form action="#">
                <div className="input-group input-group-round">
                  <input
                    type="email"
                    className="form-control form-control-white"
                    placeholder="Your Email Address"
                    aria-label="Email Adress"
                    
                  />
                  <div className="input-group-append">
                    <button className="btn" type="submit">
                      <span>go</span>
                    </button>
                  </div>
                  {/* .End .input-group-append */}
                </div>
                {/* .End .input-group */}
              </form>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="register-policy-2"
                 
                />
                <label
                  className="custom-control-label"
                  htmlFor="register-policy-2"
                >
                  Do not show this popup again
                </label>
              </div>
              {/* End .custom-checkbox */}
            </div>
          </div>
          <div className="col-xl-2-5col col-lg-5 ">
            <img
              src="./src/assets/images/popup/newsletter/img-1.jpg"
              className="newsletter-img"
              alt="newsletter"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  
  )
}

export default App
