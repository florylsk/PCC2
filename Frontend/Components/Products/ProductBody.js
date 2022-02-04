import {
    Button,
    Col,
    Container,
    Image,
    Row,
    Spinner
} from "react-bootstrap";
import NavBar
    from "../NavBar";
import Footer
    from "../Footer";
import {
    AiFillStar,
    AiOutlineStar,
    AiFillHeart,
    AiOutlineTwitter,
    AiOutlineMail
} from "react-icons/ai";

import {MdAddShoppingCart} from "react-icons/md"
import {HiOutlineInformationCircle} from "react-icons/hi"
import {RiFacebookFill} from "react-icons/ri"
import Avatar from 'react-avatar';
import axios
    from "axios";
import Cookies
    from "js-cookie";


export default function ProductBody(props){

    const handleAddToCart = ()=>{
        let product=props.product;
        let user = props.user;
        axios({
            method: "post",
            url: "http://localhost:8082/api/v1/products/users/shopping-cart/by-id/"+user.id,
            data: product,
            headers: { "Content-Type": "application/json" },
        })
            .then(function (response) {
                if (response.status == 200){
                    console.log("added!");
                }
                else{
                    console.log("error!");
                }

            })
            .catch(function (response) {
                console.log("error!");
            });

    }


    return(
        <Container style={{marginTop:30}}>
            <Row >
                <Col>
                    {props.product === null ? <Spinner /> : <Image width="527" height="527" src={"data:image/png;base64, "+props.product.mainImage} /> }

                </Col>
                <Col>
                    <Row>
                        <p style={{fontWeight:700,fontSize:18,color:"#444"}}>{props.product === null ? <Spinner /> : props.product.name}</p>
                    </Row>
                    <Row>
                        <Col xs={3}>
                            <span style={{fontSize:40,color:"#ff6000",fontWeight:700}}>{props.product === null ? <Spinner /> : (props.product.price + "€")}</span>
                        </Col>
                        <Col xs={2} style={{marginLeft:-30}}>
                            <div>
                                <div>
                                    <p className="d-inline" style={{fontSize:11,color:"#bbb",fontWeight:700, marginLeft:20}}>Without IVA</p>
                                </div>
                                <p className="d-inline" style={{fontSize:19,color:"#888",marginLeft:20}}>{props.product === null ? <Spinner /> : (((Math.floor(props.product.price *0.79)))+"."+(Math.random().toString().substring(2,4))+"€")}</p>
                            </div>
                        </Col>
                        <Col xs={2}>
                            <div>
                                <div>
                                    <p className="d-inline" style={{fontSize:11,color:"#bbb",fontWeight:700, marginLeft:20}}>PVP</p>
                                </div>
                                <p className="d-inline" style={{fontSize:19,color:"#888",marginLeft:20,textDecoration:"line-through"}}>{props.product === null ? <Spinner /> : ((((Math.floor(props.product.price *1.2)))+".99€"))}</p>
                            </div>
                        </Col>
                        <Col xs={3}>
                            <div>
                                <div>
                                    <p className="d-inline" style={{fontSize:11,color:"#bbb",fontWeight:700, marginLeft:20}}>Discount</p>
                                </div>
                                <p className="d-inline" style={{fontSize:14,color:"#fff",marginLeft:20,backgroundColor:"#ee413d",fontWeight:400}}>&nbsp;20%&nbsp;</p>
                            </div>
                        </Col>

                    </Row>
                    <Row>
                        <div>
                            <AiFillStar color="orange" />
                            <AiFillStar color="orange" />
                            <AiFillStar color="orange" />
                            <AiFillStar color="orange" />
                            <AiOutlineStar />
                            <span style={{color:"#888",fontSize:13}}>&nbsp;2 opinions | Review </span>
                        </div>
                        <p style={{color:"#888",fontSize:14,marginTop:7}}>Sold and shipped by <span style={{fontWeight:700}}>ComponentsPC</span></p>
                    </Row>
                    <Row style={{marginTop:20}}>
                        <Col>
                            <p className="fw-bold" style={{color:"#444444",fontSize:14}}>Shipping:</p>
                        </Col>
                        <Col>
                            <p style={{color:"#99be11",fontWeight:700,fontSize:15,width:400}}>FREE SHIPPING!!! <HiOutlineInformationCircle style={{color:"#bababa",width:18,height:18,marginBottom:7}}/></p>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="fw-bold" style={{color:"#444444",fontSize:14}}>Brand:</p>
                        </Col>
                        <Col>
                            <p style={{color:"#ff6000",fontWeight:550,fontSize:14,width:400}}>{props.product === null ? <Spinner /> : props.product.brand}</p>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="fw-bold" style={{color:"#444444",fontSize:14}}>Promo:</p>
                        </Col>
                        <Col>
                            <div style={{backgroundColor:"#ffeac9",border:"1px dashed #f5aa6d",height:"60%",width:400}}>
                                <p style={{color:"#ff6000",fontWeight:700,fontSize:14,marginLeft:10}}>Special week offers</p>
                            </div>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="fw-bold" style={{color:"#444444",fontSize:14}}>Home Shipping:</p>
                        </Col>
                        <Col>
                            <div style={{backgroundColor:"#d6eed1",width:400}}>
                                <p style={{color:"#458057",fontWeight:700,fontSize:14,marginLeft:10}}>In stock! Receive it tomorrow!</p>
                            </div>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="fw-bold" style={{color:"#444444",fontSize:14}}>In-Store pick up:</p>
                        </Col>
                        <Col>
                            <div style={{backgroundColor:"#f2f2f2",width:400}}>
                                <p style={{color:"#444",fontWeight:700,fontSize:14,marginLeft:10}}>Check availability*</p>
                            </div>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="fw-bold" style={{color:"#444444",fontSize:14}}>Financing:</p>
                        </Col>
                        <Col>
                            <div style={{border:"1px solid #dcdcdc",width:400}}>
                                <div style={{height:40}}>
                                    <Image height="15" width="15" src="/images/aplazame.svg" style={{marginLeft:10}}/>
                                    <p className="d-inline" style={{color:"#888",fontWeight:700,fontSize:14,marginLeft:10}}>Aplazame</p>
                                    <p className="d-inline" style={{color:"#888",fontSize:14,marginLeft:10}}>2 to 30 months (immediate)</p>
                                </div>

                            </div>

                        </Col>
                    </Row>
                    <Row style={{marginTop:10}}>
                        <Col>
                            <p className="fw-bold" style={{color:"#444444",fontSize:14}}>Warranty:</p>
                        </Col>
                        <Col>
                            <div style={{backgroundColor:"#ffebca",width:400}}>
                                <div style={{height:40}}>
                                    <Image height="20" width="20" src="/images/warranty-icon.png" style={{marginLeft:10}}/>
                                    <p className="d-inline" style={{color:"#74310a",fontWeight:700,fontSize:14,marginLeft:10}}>Replacement Guarantee in 24h</p>
                                </div>

                            </div>

                        </Col>
                    </Row>
                    <Row style={{marginTop:30}}>
                        <Col xs={2}>
                            <Button className="greyButtonProduct" style={{backgroundColor:"transparent",border:"2px solid #dcdcdc"}}>
                                <AiFillHeart className="greyButtonProductIcon" style={{width:30,height:35,color:"#888"}} />
                            </Button>
                        </Col>
                        <Col>
                            <Button onClick={props.user == null ? null : handleAddToCart} className="greyButtonProduct" style={{backgroundColor:"transparent",border:"2px solid #dcdcdc",height:50,width:226,marginLeft:-40}}>
                                <MdAddShoppingCart className="greyButtonProductIcon" style={{width:30,height:35,color:"#888"}} />
                                <p className="d-inline greyButtonProductText" style={{color:"#888",fontWeight:700}}>Add to cart</p>
                            </Button>
                        </Col>
                        <Col>
                            <Button className="orangeButtonProduct" style={{backgroundColor:"#ff6000",borderColor:"#ed6003",width:226,height:50,marginLeft:-70}}>
                                <p className="d-inline orangeButtonProductText" style={{marginLeft:50,color:"#fff",marginRight:50,fontWeight:700}}>Buy</p>
                            </Button>
                        </Col>

                    </Row>

                    <Row style={{marginTop:15}}>
                        <div>
                            <a className="social-icon" href="#" style={{color:"#888"}}>
                                <AiOutlineTwitter style={{width:32,height:35}} />
                            </a>
                            <a className="social-icon" href="#" style={{color:"#888"}}>
                                <RiFacebookFill style={{width:26,height:43}}/>
                            </a>
                            <a className="social-icon" href="#" style={{color:"#888"}}>
                                <AiOutlineMail style={{width:30,height:36}} />
                            </a>
                        </div>

                    </Row>
                    <Row style={{marginTop:25}}>
                        <Col xs={4}>
                            <p style={{fontWeight:700,color:"#565656",fontSize:17}}>Featured Review</p>
                            <div>
                                <div>
                                    <Avatar name="Max" round={"50%"} size={40} style={{marginBottom:-20}}/>
                                    <p className="d-inline" style={{fontSize:11,color:"#888",fontWeight:700, marginLeft:20}}>Max</p>
                                </div>
                                <p className="d-inline" style={{fontSize:11,color:"#888",marginLeft:50}}>30/12/2021</p>
                            </div>
                        </Col>
                        <Col style={{marginTop:40}}>
                            <div>
                                <AiFillStar color="orange" />
                                <AiFillStar color="orange" />
                                <AiFillStar color="orange" />
                                <AiFillStar color="orange" />
                                <AiOutlineStar />
                            </div>
                            <p style={{color:"#888",fontWeight:400}}>Very good product, I would buy it again for sure!</p>

                        </Col>

                    </Row>
                </Col>
            </Row>


        </Container>
        );

}