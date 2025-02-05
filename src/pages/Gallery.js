import React, { useState, useEffect } from "react";
import LightGallery from "lightgallery/react/Lightgallery.es5";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";
// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgVideo from "lightgallery/plugins/video";
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";
import gallary1 from '../image/adyarfalls.jpg'
import gallary2 from '../image/adyarviewpoint.jpg'
import gallary3 from '../image/beach.jpg'
import gallary4 from '../image/bejai.jpg'
import gallary5 from '../image/butterfly.png'
import gallary6 from '../image/CityCentre.JPG'
import gallary7 from '../image/kadri.jpg'
import gallary8 from '../image/kadri1.jpg'
import gallary9 from '../image/kateel.JPG'
import gallary10 from '../image/kudroli.jpg'
import gallary11 from '../image/mangaladevi.jpg'
import gallary12 from '../image/mangaluru.jpg'
import gallary13 from '../image/mangfall.jpg'
import gallary16 from '../image/milagres.jpg'
import gallary17 from '../image/panambur.jpg'
import galle from '../image/Sultanbattery.JPG'
import galle1 from '../image/pili.jpg'
import galle2 from '../image/tannirbhavi.jpg'
import galle3 from '../image/thousand.jpg'
import galle4 from '../image/murudeshwar.jpg'
import galle5 from '../image/light.jpg'
import galle6 from '../image/foodthali.jpg'
import galle7 from '../image/kori.jpg'
import galle8 from '../image/Karkala.jpg'
import galle9 from '../image/port2.jpg'
import galle10 from '../image/kambla.jpg'
import galle11 from '../image/yaksh.JPG'
import galle12 from '../image/tulumap.jpg'
import galle13 from '../image/tannirbhavi.jpg'
import logo from '../image/gallerylogo.png';
// image import 
import image from '../image/puritemple.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
import { PulseLoader } from "react-spinners";
// import ParticleCanvas from "../component/ParticleCanvas";

const Gallery = () => {




  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  const [loaderStatus, setLoaderStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoaderStatus(false);
    }, 2000); 
  }, []);



  return (
    <div>
         {loaderStatus ? (
        <div className="loader-container">
          <PulseLoader loading={loaderStatus} size={50} color="#fde02f" />
        </div>
      ) : (
      <>
      <>


      <button
      className={showButton ? "show" : ""}
      onClick={scrollToTop}
      id="button"
    >
    </button>

 <div className="linearbackground" id="galleryherosection">
  <div className="container " >
  <div className="hero p-t40">
  <Slide direction='left'>
  <h1 className="heading">The View Of Incredible<br />Mangalore</h1>
</Slide>
  <div className="grid__container">
    <div className="grid__item one" />
    <div className="grid__item two" />
    <div className="grid__item three" />
    <div className="grid__item four" />
    <div className="grid__item five" />
    <div className="grid__item six" />
    <div className="grid__item seven" />
    <div className="grid__item eight" />
    <div className="grid__item nine" />
    <div className="grid__item ten" />
    <div className="grid__item eleven" />
    <div className="grid__item twelve" />
  </div>
</div>
</div>
</div>

<section className="banner1 linearbackground1">
          <div className="banner-text-item">
            <Slide direction='down'>
            <div className="banner-heading ">
            <h1>The View of Incredible Mangaluru</h1>
            </div>
            </Slide>
            <Slide direction='up'>
            <div className="row" style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center'}}>
                <div className="col-md-6 " id="lordjagannatheyes" style={{textAlign:'end'}}>
                  <img className="gallery-item1" src={gallary1} alt='gallery'></img>
                </div>
                <div className="col-md-6" id="lordjagannatheyes" style={{textAlign:'start'}}>
                <img className="gallery-item2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp6biWRc3G_P7t5wnnjEVT96kT9S-KeKv_SD6I1OetZA&s" alt='gallery'></img>
                </div>
               </div>
              </Slide>
          </div>
        </section>
             
 

      </>
        <>
      <div className="section-wrapper p-t80">
          <div className="container">
            <h1 className="head2 text-center">Tourism Photo of Mangaluru</h1>
            <div className="gallery-container" id="gallery-container">
              <LightGallery
                speed={200}
                plugins={[ lgThumbnail, lgZoom, lgShare, lgRotate, lgVideo, lgAutoplay, ]} >
                
                    <a
                      
                      data-lg-size="1400-1400"
                     className="gallery-item  "
                      data-src={gallary16}
                      data-sub-html="<h4>Deomali</h4>"
                    >
                      <img
                         className="img-fluid"
                        src={gallary16}
                        alt='gallery'
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={gallary1}
                      data-sub-html="<h4>Konark</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={gallary1}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={gallary2}
                      data-sub-html="<h4>Budha</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={gallary2}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={gallary3}
                      // data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={gallary3}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={gallary4}
                      // data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={gallary4}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={gallary5}
                      // data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={gallary5}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={gallary6}
                      // data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={gallary6}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={gallary7}
                      // data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={gallary7}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={gallary8}
                      // data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={gallary8}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={gallary9}
                      // data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={gallary9}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={gallary10}
                      // data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={gallary10}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={gallary11}
                      // data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={gallary11}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={gallary17}
                      // data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={gallary17}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={gallary12}
                      // data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={gallary12}
                        alt=""
                      />
                    </a>
                    <a
                      
                      data-lg-size="1400-1400"
                      className="gallery-item"
                      data-src={gallary13}
                      // data-sub-html="<h4>Heading Here</h4>"
                    >
                      <img
                        className="img-fluid"
                        src={gallary13}
                        alt=""
                      />
                    </a>

              </LightGallery>
            </div>
          </div>
         </div>
      </>
      <>
      <div className='container-fluid'>
              <div
                className="section-full p-t80 p-b80 bg-gray section8"
                id="services"
              >
                {/* <div className="container"> */}
                {/* TITLE START*/}
                
                <div className="section-head text-center p-t80  ">
              <h3 className='h3' data-title="BEAUTY">MOST POPULAR PHOTO'S OF 2K24</h3>
              <div className="wt-separator bg-primarys">
              </div>
              <div className="wt-separator2 bg-primarys">
              </div>
              {/* <p>Connecting with entrepreneurs online, is just a few clicks away.</p> */}
            </div>
                {/* TITLE END*/}
                <div className="section-content " id="header" style={{position:'sticky'}}>
                  <div className="row justify-content-center ">
                    <div classname="swiper-wrapper d-flex align-items-center">
                      <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        loop={true}
                        // centeredSlides={true}
                        slidesPerView={"4"}
                        coverflowEffect={{
                          rotate: 50,
                          stretch: 0,
                          depth: 100,
                          modifier: 1,
                          slideShadows: true,
                        }}
                        // pagination={true}
                        modules={[EffectCoverflow, Pagination, Autoplay]}
                        className="mySwiper"
                        autoplay={{
                          // Add autoplay configuration
                          delay: 1000, // Delay in milliseconds
                          disableOnInteraction: false, // Autoplay continues even when the user interacts with it
                        }}
                        speed={1000} // Set the speed in milliseconds
                      >
                        <SwiperSlide>
                          <img src={galle12} height="250" width="100%" alt='gallery' />
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                           Tulunadu
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={galle} height="250" width="100%" alt='gallery'/>
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                            SULTHAN BATHERY
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={galle1} height="250" width="100%" alt='gallery'/>
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                            Pilikula
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={galle2} height="250" width="100%" alt='gallery'/>
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                            Panambur
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={galle3} height="250" width="100%" alt='gallery'/>
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                            Maha Prashad
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={galle4} height="250" width="100%" alt='gallery'/>
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                           Murudeshwara
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={galle5} height="250" width="100%" alt='gallery'/>
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                           NITK Lighthouse
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={galle6} height="250" width="100%" alt='gallery'/>
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                            Fish thali
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={galle7} height="250" width="100%" alt='gallery'/>
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                            Kori rotti
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={galle8} height="250" width="100%" alt='gallery'/>
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                            Varanga temple
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={galle9} height="250" width="100%" alt='gallery'/>
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                            MANGALORE PORT
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={galle10} height="250" width="100%" alt='gallery'/>
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                            KAMBLA
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={galle11} height="251" width="100%" alt='gallery'/>
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                            Yakshagana
                          </h5>
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src={galle13} height="250" width="100%" alt='gallery'/>
                          <h5
                            style={{
                              textAlign: "center",
                              margin: "5px",
                              padding: "5px",
                              color: "rgb(241, 162, 40)",
                            }}
                          >
                            TANNIRBHAVI
                          </h5>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                </div>
                </div>
              </div>
    </>
    </>
  )}
    </div>
  )
}

export default Gallery