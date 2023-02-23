import {Fragment, useState} from "react"
import {faCheck,faShippingFast,faExchangeAlt,faPhoneVolume} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
function Crousel(){

    function Col1(){
        const [Active,setActive]= useState(0)
        const list = [
            {'data-target': '#header-carousel'},
            {'data-target': '#header-carousel'},
            {'data-target': '#header-carousel'}
        ]
        return (
            <div className="col-lg-8">
                <div id="header-carousel" className="carousel slide carousel-fade mb-30 mb-lg-0" data-ride="carousel">
                    <ol className="carousel-indicators">
                        {
                            list.map((item,index) => 
                            <li 
                                onClick={()=>{setActive(index)}}
                                className={index == Active ? "active" :""}
                                data-target={item["data-target"]} 
                                data-slide-to={`${index+1}`}></li>
                            )
                        }
                    </ol>
                    <div className="carousel-inner" id="carousel-inner">
                        <div className={`carousel-item carousel-itemCustom position-relative ${0==Active?'active':''}`} style={{height: "430px"}}>
                            <img className="position-absolute w-100 h-100" src="img/carousel-1.jpg" style={{objectFit: "cover"}}/>
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{maxWidth:"700px"}}>
                                    <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Men Fashion</h1>
                                    <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                                    <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        
                        <div className={`carousel-item carousel-itemCustom position-relative ${1==Active?'active':''}`} style={{height: "430px"}}>
                        <img className="position-absolute w-100 h-100" src="img/carousel-2.jpg" style={{objectFit: "cover"}}/>
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{maxWidth: "700px"}}>
                                <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Women Fashion</h1>
                                <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                                <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Shop Now</a>
                            </div>
                        </div>
                        </div>

                        <div className={`carousel-item carousel-itemCustom position-relative ${2==Active?'active':''}`}style={{height: "430px"}}>
                        <img className="position-absolute w-100 h-100" src="img/carousel-3.jpg" style={{objectFit: "cover"}} />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{maxWidth: "700px"}}>
                                <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Kids Fashion</h1>
                                <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                                <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Shop Now</a>
                            </div>
                        </div>
                        </div>
                    </div>
                   
                    
                </div>
            </div>
        )
    }
    function Col2(){
        return (
            <div className="col-lg-4">
                <div className="product-offer mb-30" style={{height: "200px"}}>
                    <img className="img-fluid" src="img/offer-1.jpg" alt=""/>
                    <div className="offer-text">
                        <h6 className="text-white text-uppercase">Save 20%</h6>
                        <h3 className="text-white mb-3">Special Offer</h3>
                        <a href="" className="btn btn-primary">Shop Now</a>
                    </div>
                </div>
                <div className="product-offer mb-30" style={{height: "200px"}}>
                    <img className="img-fluid" src="img/offer-2.jpg" alt=""/>
                    <div className="offer-text">
                        <h6 className="text-white text-uppercase">Save 20%</h6>
                        <h3 className="text-white mb-3">Special Offer</h3>
                        <a href="" className="btn btn-primary">Shop Now</a>
                    </div>
                </div>
            </div>
        )
    }
  return(  
    <div className="container-fluid mb-3">
        <div className="row px-xl-5">
            <Col1/>
            <Col2/>
        </div>
    </div>
  )
}
function ContainerFluid(){
    return(
        <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center bg-light mb-4" style={{padding: "30px"}}>
                    <FontAwesomeIcon icon ={faCheck} className="text-primary customd2 m-0 mr-3"/>
                    <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center bg-light mb-4" style={{padding: "30px"}}>
                    <FontAwesomeIcon icon ={faShippingFast} className="text-primary customd2 m-0 mr-2"/>
                    <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center bg-light mb-4" style={{padding: "30px"}}>
                    <FontAwesomeIcon icon ={faExchangeAlt} className="text-primary customd2 m-0 mr-3"/>
                    <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center bg-light mb-4" style={{padding: "30px"}}>
                    <FontAwesomeIcon icon ={faPhoneVolume} className="text-primary customd2 m-0 mr-3"/>
                    <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
                </div>
            </div>
        </div>
    </div>
    )
}

function Home() {
    
    return (
       <Fragment>
            <Crousel/>
            <ContainerFluid/>
       </Fragment>
    );
}

export default Home; 