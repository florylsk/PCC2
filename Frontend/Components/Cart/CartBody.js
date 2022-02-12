import {
    Button,
    Col,
    Container,
    Row,
    Spinner,
    Form
} from "react-bootstrap";
import Link
    from "next/link";
import React
    from "react";
import {MdLocalShipping} from "react-icons/md"
import {GiRecycle} from "react-icons/gi"
import {AiFillSafetyCertificate} from "react-icons/ai"
import Head
    from "next/head";
import Image from "next/image"

export default function CartBody(props){
    let totalPrice=0;
    if (!props.isLoading){
        if(props.userItems.length>0){
            for(const product in props.userItems){
                totalPrice+=props.userItems[product].price;
            }
        }
    }
    totalPrice=totalPrice.toFixed(2);


    return (
      <Container style={{paddingLeft:100}}>
          <Head>
              <title>Cart - FOTech</title>
          </Head>
          <Row>
              <Col xs={3}>


              <Link href="/" passHref>
                  <a className="d-inline d-flex" style={{paddingTop:20}}>
                      <Image src="/images/FOTech-logos_transparent.png" width={138} height={48} />
                  </a>
              </Link>
              </Col>
                  <Col xs={2}>
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
          <Row style={{marginTop:10}}>
              <Col>
                  <h4 style={{color:"#444"}}>({props.isLoading ? "X" : props.userItems.length}) Items in cart</h4>
                  <div className="d-flex" style={{backgroundColor:"#ebeced",borderBottom:"1px solid #ccc",borderTop:"1px solid #ccc",width:"100%",height:39}}>
                      <p color="#ccc" style={{marginLeft:10,marginTop:3}}>Item</p>
                      <p style={{marginLeft:300,marginTop:3}}>Price</p>
                      <p style={{marginLeft:40,marginTop:3}}>Amount</p>
                      <p style={{marginLeft:40,marginTop:3}}>Total</p>
                  </div>
                  {
                      props.isLoading ? <Spinner animation="border" role="status">
                                   <span className="visually-hidden">Fetching products...</span>
                               </Spinner>
                          :
                          props.userItems.length==0 ? "Empty cart"
                              :
                          props.userItems.length == 0 ?
                        <p>There is no products in the shopping cart.</p>
                                :

                        props.userItems.map((product) =>(
                            <div key={product.id} className="d-flex" style={{marginTop:30}}>
                                <Col xs={2}>
                                    <Image style={{verticalAlign:"middle",marginLeft:-30}} height="106" width="106" src={"data:image/png;base64, "+product.mainImage}/>
                                </Col>
                                <Col>
                                    <p style={{fontSize:13,color:"#555",width:"229px",marginTop:30}}>{product.name}</p>
                                </Col>
                                <Col xs={2}>
                                    <p className="fw-bold text-start" style={{color:"#888",fontSize:"0.7rem",marginTop:30,marginLeft:10}} >{product.price + "€"}</p>
                                </Col>
                                <Col>
                                    <p className="fw-bold text-start" style={{color:"#888",fontSize:"0.7rem",marginTop:30,marginLeft:10}} >1</p>
                                </Col>
                                <Col>
                                    <p className="fw-bold text-start" style={{color:"#888",fontSize:"0.7rem",marginTop:30,marginLeft:10}} >{product.price}€</p>
                                </Col>
                            </div>
                        ))

                  }


              </Col>
              <Col style={{marginTop:20}}>
                  {
                      <div style={{backgroundColor:"#fff",border:"1px solid #ccc",width:362,height:158}}>
                          <p style={{fontSize:"0.8rem",fontColor:"#444",paddingLeft:10,paddingTop:10}}>With FOTech premium you can benefit from <span style={{color:"#444",fontWeight:700,fontSize:"0.8rem"}}>FREE</span> shipping fees</p>
                          <Form.Check type="checkbox" label="I want premium"  style={{marginLeft:10,fontSize:13,fontWeight:700,color:"#555"}} className="checkForm" />
                          <hr style={{width:"90%",marginLeft:10}}  />
                          <h5 style={{marginLeft:10,marginTop:-8,color:"#444"}}>TOTAL</h5>
                          <h5 className="text-end" style={{marginTop:-33,marginRight:25,color:"#444"}}>{totalPrice}€</h5>
                          <Link href="/cart/order" passHref>
                              <Button className="orangeButtonProduct" style={{backgroundColor:"#ff6000",borderColor:"#ed6003",width:362,height:43,marginLeft:0,marginTop:30}}>
                                  <p className="d-inline orangeButtonProductText" style={{marginLeft:50,color:"#fff",marginRight:50,fontWeight:700}}>Checkout</p>
                              </Button>
                          </Link>
                      </div>
                  }

              </Col>
          </Row>
      </Container>
    );
}
