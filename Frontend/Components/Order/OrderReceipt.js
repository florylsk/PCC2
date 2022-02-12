import {
    Col,
    Container,
    Image,
    Row
} from "react-bootstrap";
import React
    from "react";
import Head
    from "next/head";


export default function OrderReceipt(props){
    return(
      <Container>
          <Head>
              <title>Receipt - FOTech</title>
          </Head>
          <Row>
              <h4 className="text-center" style={{color:"#444"}}>Enjoy your products!</h4>
          </Row>

          <Row style={{paddingTop:40,paddingBottom:50}} className="border">
              <Col>
                  <h6 style={{color:"#444"}}>({props.transaction.userItems.length}) Products purchased</h6>
                  <div className="d-flex" style={{backgroundColor:"#ebeced",border:"1px solid #ccc",width:"100%",height:39}}>
                      <p color="#ccc" style={{marginLeft:10,marginTop:3}}>Item</p>
                      <p style={{marginLeft:450,marginTop:3}}>Price</p>
                      <p style={{marginLeft:40,marginTop:3}}>Amount</p>
                      <p style={{marginLeft:40,marginTop:3}}>Total</p>
                  </div>
                  {props.transaction.userItems.map((product) =>(
                      <div key={product.id} className="d-flex" style={{marginTop:30}}>
                          <Col xs={2}>
                              <Image style={{verticalAlign:"middle"}} height="106" width="106" src={"data:image/png;base64, "+product.mainImage}/>
                          </Col>
                          <Col>
                              <p style={{fontSize:13,color:"#555",width:"229px",marginTop:30}}>{product.name}</p>
                          </Col>
                          <Col xs={1} style={{marginRight:33}}>
                              <p className="fw-bold text-start" style={{color:"#888",fontSize:"0.7rem",marginTop:30,marginLeft:10}} >{product.price + "€"}</p>
                          </Col>
                          <Col xs={1} style={{marginRight:15}}>
                              <p className="fw-bold text-start" style={{color:"#888",fontSize:"0.7rem",marginTop:30,marginLeft:10}} >1</p>
                          </Col>
                          <Col xs={1} style={{marginRight:25}}>
                              <p className="fw-bold text-start" style={{color:"#888",fontSize:"0.7rem",marginTop:30,marginLeft:10}} >{product.price + "€"}</p>
                          </Col>
                      </div>
                  ))}
              </Col>
              <Col xs={5} style={{paddingLeft:100}}>
                  <h6 style={{color:"#444",paddingBottom:30}}>Purchase details</h6>
                  <p style={{color:"#666",fontWeight:400}}><span style={{color:"#333",fontWeight:600}}>Name</span>: {props.transaction.name} {props.transaction.surnames}</p>
                  <p style={{color:"#666",fontWeight:400}}><span style={{color:"#333",fontWeight:600}}>Address</span>: {props.transaction.address}</p>
                  <p style={{color:"#666",fontWeight:400}}><span style={{color:"#333",fontWeight:600}}>City</span>: {props.transaction.city}</p>
                  <p style={{color:"#666",fontWeight:400}}><span style={{color:"#333",fontWeight:600}}>Country</span>: {props.transaction.country}</p>
                  <p style={{color:"#666",fontWeight:400}}><span style={{color:"#333",fontWeight:600}}>Total price</span>: {props.transaction.totalPrice}€</p>
                  <p style={{color:"#666",fontWeight:400}}><span style={{color:"#333",fontWeight:600}}>Order ID</span>: {props.codeTransaction}</p>
              </Col>
          </Row>



      </Container>
    );
}