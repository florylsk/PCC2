import {
    Button,
    Col,
    Container,
    Form,
    Navbar,
    Row,
    Spinner
} from "react-bootstrap";
import {MdLocalShipping} from "react-icons/md";
import {GiRecycle} from "react-icons/gi";
import {
    AiFillGithub,
    AiFillSafetyCertificate
} from "react-icons/ai";
import React
    from "react";
import Link
    from "next/link";
import axios
    from "axios";
import Cookies
    from "js-cookie";
import OrderReceipt
    from "./OrderReceipt";
import NavBar
    from "../NavBar/NavBar";
import Footer
    from "../Footer";
import Image
    from "next/image";


export default function OrderBody(props){
    const [transaction,setTransaction] = React.useState(null);
    const [codeTransaction,setCodeTransaction] = React.useState(null);
    const [isLoading,setIsLoading] = React.useState(false);
    let totalPrice=0;
    if (!props.isLoading){
        if(props.userItems.length>0){
            for(const product in props.userItems){
                totalPrice+=props.userItems[product].price;
            }
        }
    }
    totalPrice=totalPrice.toFixed(2);
    const handleSubmit = (event)=>{
        event.preventDefault();
        setIsLoading(true);
        const data = new FormData(event.currentTarget);
        let userId=props.user.id;
        let userItems=props.userItems;
        let name= data.get('name');
        let surnames= data.get('surnames');
        let dni = data.get("dni");
        let phone = data.get("phone");
        let address = data.get("address");
        let country = data.get("country");
        let zipCode = data.get("zipCode");
        let city = data.get("city");
        let province = data.get("province");
        let cardNumber = data.get("cardNumber");
        let cardName = data.get("cardName");
        let cardExpiration = data.get("cardExpiration");
        let cardSecurityCode = data.get("cardSecurityCode");
        let transaction = {
            name:name,
            surnames:surnames,
            userId: userId,
            userItems: userItems,
            dni:dni,
            phone:phone,
            address:address,
            country:country,
            zipCode:zipCode,
            city:city,
            province:province,
            cardNumber:cardNumber,
            cardName:cardName,
            cardExpiration:cardExpiration,
            cardSecurityCode:cardSecurityCode,
            totalPrice:totalPrice
        };
        console.log(transaction);
        axios({
            method: "post",
            url: "http://localhost:8083/api/v1/process-transaction",
            data: transaction,
            headers: { "Content-Type": "application/json" },
        })
            .then(function (response) {
                if(response.status==200){
                    console.log(response.data);
                    setTransaction({
                        name:name,
                        surnames:surnames,
                        userId: userId,
                        userItems: userItems,
                        dni:dni,
                        phone:phone,
                        address:address,
                        country:country,
                        zipCode:zipCode,
                        city:city,
                        province:province,
                        cardNumber:cardNumber,
                        cardName:cardName,
                        cardExpiration:cardExpiration,
                        cardSecurityCode:cardSecurityCode,
                        totalPrice:totalPrice
                    });
                    setCodeTransaction(response.data);

                }
                else{
                    console.log("fail");
                }


            })
            .catch(function (response) {
            })


    }


    if (transaction == null){
        return(
            <Container fluid>
                <Row style={{paddingLeft:150}} className="justify-content-center align-content-center align-items-center">
                    <Col xs={2}>
                        <Link href="/" passHref>
                            <a className="d-inline d-flex">
                                <Image src="/images/FOTech-logos_transparent.png" width={138} height={48} />
                            </a>
                        </Link>
                    </Col>                    <Col xs={2}>
                        <Row style={{marginTop:20}}>
                            <div style={{display:"flex"}}>
                                <MdLocalShipping style={{width:55,height:58,color:"#ccc"}}/>
                                <p style={{color:"#888",fontWeight:700,fontSize:"0.8rem",marginLeft:10,marginTop:5}}>Shipping</p>

                                <p style={{fontSize:"0.8rem",color:"#888",marginLeft:-54}}><br />Monitor your orders and refunds</p>
                            </div>
                        </Row>


                    </Col>
                    <Col xs={2}>
                        <Row style={{marginTop:20}}>
                            <div style={{display:"flex"}}>
                                <GiRecycle style={{width:55,height:58,color:"#ccc"}}/>
                                <p style={{color:"#888",fontWeight:700,fontSize:"0.8rem",marginLeft:10,marginTop:5}}>Refunds</p>

                                <p style={{fontSize:"0.8rem",color:"#888",marginLeft:-50}}><br />30 day margin for refunds</p>
                            </div>
                        </Row>

                    </Col>
                    <Col xs={3}>
                        <Row style={{marginTop:20}}>
                            <div style={{display:"flex"}}>
                                <AiFillSafetyCertificate style={{width:55,height:58,color:"#ccc"}}/>
                                <p style={{color:"#888",fontWeight:700,fontSize:"0.8rem",marginLeft:10,marginTop:5}}>Safe payments</p>

                                <p style={{fontSize:"0.8rem",color:"#888",marginLeft:-90}}><br />100% safe payments</p>
                            </div>
                        </Row>

                    </Col>
                </Row>
                <hr width="100%" />
                <Form onSubmit={handleSubmit}>
                <Row style={{paddingLeft:500,paddingTop:30}}>

                        <Col xs={6}>
                            <h4>Checkout data</h4>
                            {isLoading ? <Spinner animation="border" style={{width:60,height:60,float:"right"}} /> : null}

                            <Row style={{paddingTop:50}}>

                                <h6 style={{paddingBottom:20}}>Shipping Address</h6>

                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control required type="text" name="name" placeholder={props.user?.name}/>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control required type="text" name="surnames" placeholder={props.user?.surnames}/>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>DNI/CIE/NIF</Form.Label>
                                            <Form.Control required type="text" name="dni" placeholder="Enter your personal identificador"/>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Phone</Form.Label>
                                            <Form.Control required type="text" name="phone" placeholder="Enter your phone number"/>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control required type="text" name="address" placeholder="Enter your address"/>
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Country</Form.Label>
                                            <Form.Control required type="text" name="country" placeholder="Enter your country of residence"/>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Zip Code</Form.Label>
                                            <Form.Control required type="text" name="zipCode" placeholder="Enter your city zip code"/>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>City</Form.Label>
                                            <Form.Control required type="text" name="city" placeholder="Enter your city"/>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Province</Form.Label>
                                            <Form.Control required type="text" name="province" placeholder="Enter your province"/>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <h6 style={{paddingBottom:20,paddingTop:20}}>Credit Card</h6>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Card Number</Form.Label>
                                            <Form.Control required type="text" name="cardNumber" placeholder="Enter your credit card number"/>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Card Name</Form.Label>
                                            <Form.Control required type="text" name="cardName" placeholder="Enter your credit card full name"/>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Expiration Date</Form.Label>
                                            <Form.Control required type="month" name="cardExpiration" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Security Code</Form.Label>
                                            <Form.Control required type="number" name="cardSecurityCode" placeholder="Enter your security code" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                            </Row>
                        </Col>
                        <Col xs={5}>
                            {
                                <div style={{backgroundColor:"#fff",border:"1px solid #ccc",width:362,height:158}}>
                                    <p style={{fontSize:"0.8rem",fontColor:"#444",paddingLeft:10,paddingTop:10}}>We thank you at <span style={{color:"#444",fontWeight:700,fontSize:"0.8rem"}}>FOTech</span> for trusting us and hopefully you enjoy your products!</p>
                                    <Form.Check type="checkbox" label="Are you satisfied?"  style={{marginLeft:10,fontSize:13,fontWeight:700,color:"#555"}} className="checkForm" />
                                    <hr style={{width:"90%",marginLeft:10}}  />
                                    <h5 style={{marginLeft:10,marginTop:-8,color:"#444"}}>TOTAL</h5>
                                    <h5 className="text-end" style={{marginTop:-33,marginRight:25,color:"#444"}}>{totalPrice}€</h5>
                                    <Button type="submit" className="orangeButtonProduct" style={{backgroundColor:"#ff6000",borderColor:"#ed6003",width:362,height:43,marginLeft:0,marginTop:30}}>
                                        <p className="d-inline orangeButtonProductText" style={{marginLeft:50,color:"#fff",marginRight:50,fontWeight:700}}>Finish order</p>
                                    </Button>

                                </div>
                            }
                        </Col>


                </Row>
                </Form>
                <hr style={{marginTop:120,position:"absolute"}} width="100%"/>
                <Navbar style={{marginTop:120}}>
                    <p  style={{color:"#000",fontSize:"13px",marginTop:10}}>Developed by Florinel Olteanu &copy; 2022 FO <a href="https://github.com/florylsk/PCC2" rel="noreferrer" target="_blank" style={{marginLeft:500}}><AiFillGithub color="#000" /> source code available here</a></p>
                </Navbar>
                <hr style={{marginTop:-10,position:"absolute"}} width="100%"/>
            </Container>


        );
    }

    else{
        return(
            <Container fluid>
                <NavBar noCenter={true} />
                <OrderReceipt transaction={transaction} codeTransaction = {codeTransaction} user={props.user} userItems={props.userItems} totalPrice={totalPrice}/>
                <Footer />
            </Container>
        );
    }

}