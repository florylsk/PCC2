import {
    Col,
    Container,
    Image,
    Row,
    Spinner
} from "react-bootstrap";
import Link
    from "next/link";
import {AiFillStar} from "react-icons/ai"

export default function SubCategoryBody(props){

    return(
        <Container>

            <Row xs={12}>
                <p style={{color:"#444",fontSize:"1.74rem",fontWeight:300}}>{props.isLoading? <Spinner animation="border" role="status"><span className="visually-hidden">Fetching products...</span></Spinner> : props.subCategory} </p>
                <hr style={{width:"100%"}} />
                <p style={{color:"#888"}}><span style={{fontWeight:700,}}>{props.isLoading ? <Spinner animation="border" role="status"><span className="visually-hidden">Fetching products...</span></Spinner> : props.products.length}</span> products</p>
                <hr style={{width:"100%"}} />
                {props.isLoading ?
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Fetching products...</span>
                    </Spinner>
                    :
                    props.products.map((product) =>(
                        <Col key={product.id} xs={3}>
                            <Link href={"/products/"+(product.id)}>
                                <a>
                                    <Image height="217" width="217" src={"data:image/png;base64, "+product.mainImage}/>
                                    <p style={{fontSize:"1rem",color:"#414040"}}>{product.name}</p>
                                    <p className="fw-bold text-start" style={{marginTop:-10,color:"#333",fontWeight:700,fontSize:"14px"}} >{product.price + "€"}</p>
                                    <p style={{marginTop:-10,color:"#118000",fontSize:"13px",marginBottom:60}}>Receive tomorrow</p>
                                    <div style={{marginTop:-55,marginBottom:60}}>
                                        <p style={{fontSize:"12px",color:"#333"}} className="d-inline">{(Math.floor(Math.random()*(3)+3))}.{(Math.floor(Math.random()*9))}</p>
                                        <AiFillStar color="black" className="d-inline" style={{marginLeft:3,marginRight:3}} />
                                        <p style={{fontSize:"12px",color:"#333"}}className="d-inline">{(Math.floor(Math.random()*1000))} Reviews</p>
                                    </div>
                                </a>

                            </Link>

                        </Col>
                    ))

                }


            </Row>
        </Container>

    );
}