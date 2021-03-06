import {
    Button,
    Col,
    Container,
    Image,
    Row,
    Spinner
} from "react-bootstrap";
import Link from "next/link"





export default function HomeProducts(props){



    return(
      <Container style={{marginTop:100,width:1200}}>
            <Row>
                <h3 style={{fontWeight:300}}><span className=" d-inline" style={{fontWeight:700,color:"#444"}}>Most Relevant </span> Categories</h3>
                <Col>
                    <Link href="/products/category/computers?subcategory=Laptops" passHref>
                        <a>
                            <Image src="/images/familia-portatiles.jpg" />
                            <p className="fw-bold" style={{marginTop:20,marginLeft:40,color:"#444"}}>Laptops</p>
                        </a>
                    </Link>
                </Col>
                <Col>
                    <Link href="/products/category/components" passHref>
                        <a>
                            <img src="/images/familia-pccom.jpg" />
                            <p className="fw-bold" style={{marginTop:20,marginLeft:40,color:"#444"}}>Components</p>
                        </a>
                    </Link>

                </Col>
                <Col>
                    <Link href="/products/category/peripherals?subcategory=Speakers" passHref>
                        <a>
                            <Image src="/images/familia-altavoces.jpg" />
                            <p className="fw-bold" style={{marginTop:20,marginLeft:40,color:"#444"}}>Speakers</p>
                        </a>
                    </Link>
                </Col>
                <Col>
                    <Link href="/products/category/peripherals" passHref>
                        <a>
                            <Image src="/images/familia-perifericos.jpg" />
                            <p className="fw-bold" style={{marginTop:20,marginLeft:30,color:"#444"}}>Peripherals</p>
                        </a>
                    </Link>

                </Col>
                <Col>
                    <Link href="/products/category/Smartphones%20and%20telephony?subcategory=Smartphones" passHref>
                        <a>
                            <Image src="/images/familia-tablets.jpg" />
                            <p className="fw-bold" style={{marginTop:20,marginLeft:55,color:"#444"}}>Tablets</p>
                        </a>
                    </Link>
                </Col>
                <Col>
                    <Link href="/products/category/audiovisual?subcategory=TVs">
                        <a>
                            <Image src="/images/familia-tv.jpg" />
                            <p className="fw-bold" style={{marginTop:20,marginLeft:60,color:"#444"}}>TVs</p>
                        </a>
                    </Link>

                </Col>
            </Row>

          <Row style={{marginTop:50}}>
              <h3 style={{fontWeight:300}}><span className=" d-inline" style={{fontWeight:700,color:"#444"}}>Recommended </span> Products</h3>
              {props.isLoading ?
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Fetching products...</span>
                  </Spinner>
                  :
                  props.RecommendedProducts.map((product) =>(
                      <Col key={product.id}>
                          <Link href={"/products/"+(product.id)}>
                              <a>
                                  <Image height="217" width="217" src={"data:image/png;base64, "+product.mainImage}/>
                                  <p style={{marginTop:20,marginLeft:40,fontSize:13,color:"#888"}}>{product.name.split(/\s+/).slice(0,4).join(" ")}</p>
                                  <p className="fw-bold text-center" style={{color:"#444",fontWeight:700,fontSize:"1.33rem"}} >{product.price + "???"} <span style={{color:"#989898",textDecoration:"line-through",fontSize:15,fontWeight:400}}>{((Math.floor(product.price *1.1)))+".99???"}</span></p>
                              </a>

                          </Link>

                      </Col>
                  ))

              }
          </Row>

          <Row style={{marginTop:50}}>
              <h3 style={{fontWeight:300}}><span className=" d-inline" style={{fontWeight:700,color:"#444"}}>Interesting </span> Products</h3>
              {props.isLoading ?
                  <Spinner animation="border" role="status">
                      <span className="visually-hidden">Fetching products...</span>
                  </Spinner>
                  :
                  props.InterestingProducts.map((product) =>(
                      <Col key={product.name}>
                          <Link href={"/products/"+(product.id)}>
                                <a>
                                    <Image height="217" width="217" src={"data:image/png;base64, "+product.mainImage}/>
                                    <p style={{marginTop:20,marginLeft:40,fontSize:13,color:"#888"}}>{product.name.split(/\s+/).slice(0,4).join(" ")}</p>
                                    <p className="fw-bold text-center" style={{color:"#444",fontWeight:700,fontSize:"1.33rem"}} >{product.price + "???"} <span style={{color:"#989898",textDecoration:"line-through",fontSize:15,fontWeight:400}}>{((Math.floor(product.price *1.1)))+".99???"}</span></p>
                                </a>
                          </Link>
                      </Col>
                  ))
              }
          </Row>

      </Container>
    );





}