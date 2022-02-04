import React, {useState} from "react";
import {
    Accordion,
    Button,
    Col,
    Image,
    Nav,
    Offcanvas,
    Row,
    Spinner
} from "react-bootstrap";
import Avatar
    from "react-avatar";
import Link
    from "next/link";


export default function OffCanvasShoppingCart(props){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let totalPrice=0;
    if (!props.isLoading){
        if(props.products.length>0){
            for(const product in props.products){
                totalPrice+=props.products[product].price;
            }
        }
    }
    totalPrice=totalPrice.toFixed(2);
    return (

        <>
            <Nav.Link onClick={handleShow} style={{fontWeight:500,color:"#333"}}>
                <svg
                    style={{margin:0, width:24, height:24,marginRight:10}}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6 2C6.5 2 6.9 2.3 7 2.8L8 7L21 7C21.3 7 21.6 7.1 21.8 7.4C22 7.6 22 7.9 22 8.2L20 16.2C19.9 16.7 19.5 17 19 17L9 17C8.5 17 8.1 16.7 8 16.2L5.2 4L2 4V2L6 2ZM9.8 15L18.2 15L19.7 9L8.4 9L9.8 15ZM18 22C16.8954 22 16 21.1046 16 20C16 18.8954 16.8954 18 18 18C19.1046 18 20 18.8954 20 20C20 21.1046 19.1046 22 18 22ZM8 20C8 21.1046 8.89543 22 10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20Z" fill="#333333"/>
                </svg>
                My Shopping Cart
            </Nav.Link>

            <Offcanvas placement="end" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title style={{fontWeight:700}}>Products</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <hr style={{width:"100%",marginTop:-13}} />
                    {props.isLoading ?
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Fetching products...</span>
                        </Spinner>
                        :
                        props.products.length == 0 ?
                            <p>There is no products in the shopping cart.</p>
                            :

                        props.products.map((product) =>(
                            <Row key={product.id}>
                                <Link href={"/products/"+(product.id)}>
                                    <a style={{textAlign:"start"}}>
                                        <Image style={{verticalAlign:"middle"}} height="64" width="64" src={"data:image/png;base64, "+product.mainImage}/>
                                        <p style={{fontSize:12,color:"#888",verticalAlign:"middle"}}>{product.name}</p>
                                        <p className="fw-bold text-start" style={{color:"#444",fontWeight:700,fontSize:"1.33rem",marginTop:-10}} >{product.price + "€"}</p>
                                    </a>
                                </Link>
                                <hr style={{width:"100%"}} />

                            </Row>
                        ))
                    }
                    {props.isLoading ?
                    null:
                    props.products.length==0?
                        null:
                        <div>
                            <p style={{fontSize:"12px",fontWeight:700,color:"#737373"}}>Total products: <span style={{float:"right"}}>{props.products.length} </span></p>
                            <p style={{color:"#333",fontWeight:700,fontSize:"17px"}}>Total cost:<span style={{float:"right"}}>{totalPrice}€ </span></p>
                            <Link href="/cart">
                                <Button className="orangeButtonProduct" style={{backgroundColor:"#ff6000",borderColor:"#ed6003",width:"100%",height:43}}>
                                    <p className="d-inline orangeButtonProductText" style={{marginLeft:50,color:"#fff",marginRight:50,fontWeight:700}}>Complete order</p>
                                </Button>
                            </Link>
                        </div>
                    }

                </Offcanvas.Body>
            </Offcanvas>
        </>

    );





}