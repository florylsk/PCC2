import {
    Accordion,
    Button,
    Offcanvas
} from "react-bootstrap";
import React, {useState} from "react";
import Avatar
    from "react-avatar";
import Link
    from "next/link";
import {Navbar,Nav} from "react-bootstrap";

export default function OffCanvasLogin(props){


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Nav.Link onClick={handleShow} style={{fontWeight:500,color:"#333"}}>
                <p style={{fontWeight:500,color:"#333",textDecoration:"none",fontSize:14}}>
                    <Avatar name={props.userName} round="50%" size="26" textSizeRatio={1.75} style={{marginRight:10}} />
                    {props.userName}</p>
            </Nav.Link>

            <Offcanvas placement="end" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title style={{fontWeight:700}}>My account</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <hr style={{width:"100%",marginTop:-13}} />
                    <Accordion defaultActiveKey={['0','1']} alwaysOpen style={{borderColor:"transparent",marginTop:10}}>
                        <Accordion.Item eventKey="0" style={{borderColor:"transparent",backgroundColor:"transparent",marginLeft:-13}}>
                            <Accordion.Header>
                                    <svg
                                        style={{margin:0,width:24,height:24,marginRight:10}}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        enableBackground="new 0 0 24 24">
                                        <path d="M12 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM20 20h-16v-1c0-3.5 3.3-6 8-6s8 2.5 8 6v1zm-13.8-2h11.7c-.6-1.8-2.8-3-5.8-3s-5.3 1.2-5.9 3z"/>
                                    </svg>My Account
                            </Accordion.Header>
                            <Accordion.Body>
                                
                                    <Button style={{color:"#505050",transition:"color .25s ease-out",backgroundColor:"transparent",borderColor:"transparent",width:"100%",height:"32px",fontSize:"0.95rem"}} className="text-start offcanvas-login-link">
                                        My profile
                                    </Button>
                                
                                    <Button style={{color:"#505050",transition:"color .25s ease-out",backgroundColor:"transparent",borderColor:"transparent",width:"100%",height:"32px",fontSize:"0.95rem"}} className="text-start offcanvas-login-link">
                                        Wish list
                                    </Button>

                                    <Button style={{color:"#505050",transition:"color .25s ease-out",backgroundColor:"transparent",borderColor:"transparent",width:"100%",height:"32px",fontSize:"0.95rem"}} className="text-start offcanvas-login-link">
                                        Messages
                                    </Button>

                                    <Button style={{color:"#505050",transition:"color .25s ease-out",backgroundColor:"transparent",borderColor:"transparent",width:"100%",height:"32px",fontSize:"0.95rem"}} className="text-start offcanvas-login-link">
                                        Reviews
                                    </Button>

                                    <Button style={{color:"#505050",transition:"color .25s ease-out",backgroundColor:"transparent",borderColor:"transparent",width:"100%",height:"32px",fontSize:"0.95rem"}} className="text-start offcanvas-login-link">
                                        My premium
                                    </Button>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" style={{borderColor:"transparent",backgroundColor:"transparent",marginLeft:-13}}>
                            <Accordion.Header>
                                <svg
                                    style={{margin:0,width:24,height:24,marginRight:10}}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    enableBackground="new 0 0 24 24">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M21.4 6.10002L12.4 2.10002C12.1 2.00002 11.8 2.00002 11.6 2.10002L2.6 6.10002C2.2 6.20002 2 6.60002 2 7.00002V17C2 17.4 2.2 17.8 2.6 17.9L11.6 21.9C11.7 22 11.9 22 12 22C12.1 22 12.3 22 12.4 21.9L21.4 17.9C21.8 17.7 22 17.4 22 17V7.00002C22 6.60002 21.8 6.20002 21.4 6.10002ZM12 4.10002L18.5 7.00002L16.7 7.80002L10.2 4.90002L12 4.10002ZM12 9.90002L5.5 7.00002L7.8 6.00002L14.3 8.90002L12 9.90002ZM4 8.50002L11 11.6V19.4L4 16.3V8.50002ZM13 19.5V11.7L20 8.60002V16.4L13 19.5Z" fill="#333333"></path></svg>
                                Orders and refunds
                            </Accordion.Header>
                            <Accordion.Body>
                                
                                    <Button style={{color:"#505050",transition:"color .25s ease-out",backgroundColor:"transparent",borderColor:"transparent",width:"100%",height:"32px",fontSize:"0.95rem"}} className="text-start offcanvas-login-link">
                                        Orders, refunds and bills
                                    </Button>

                                    <Button style={{color:"#505050",transition:"color .25s ease-out",backgroundColor:"transparent",borderColor:"transparent",width:"100%",height:"32px",fontSize:"0.95rem"}} className="text-start offcanvas-login-link">
                                        Refund history
                                    </Button>

                                    <Button style={{color:"#505050",transition:"color .25s ease-out",backgroundColor:"transparent",borderColor:"transparent",width:"100%",height:"32px",fontSize:"0.95rem"}} className="text-start offcanvas-login-link">
                                        Pre-orders
                                    </Button>

                                    <Button style={{color:"#505050",transition:"color .25s ease-out",backgroundColor:"transparent",borderColor:"transparent",width:"100%",height:"32px",fontSize:"0.95rem"}} className="text-start offcanvas-login-link">
                                        Digital products
                                    </Button>

                                    <Button style={{color:"#505050",transition:"color .25s ease-out",backgroundColor:"transparent",borderColor:"transparent",width:"100%",height:"32px",fontSize:"0.95rem"}} className="text-start offcanvas-login-link">
                                        Download codes
                                    </Button>

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" style={{borderColor:"transparent",backgroundColor:"transparent",marginLeft:-13}}>
                            <Accordion.Header>
                                <svg
                                    style={{margin:0,width:24,height:24,marginRight:10}}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    enableBackground="new 0 0 24 24">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V12H20V18ZM20 8H4V6H20V8Z" fill="#333333"></path></svg>
                                Payments
                            </Accordion.Header>
                            <Accordion.Body>
                                
                                    <Button style={{color:"#505050",transition:"color .25s ease-out",backgroundColor:"transparent",borderColor:"transparent",width:"100%",height:"32px",fontSize:"0.95rem"}} className="text-start offcanvas-login-link">
                                        Linked credit cards
                                    </Button>

                                    <Button style={{color:"#505050",transition:"color .25s ease-out",backgroundColor:"transparent",borderColor:"transparent",width:"100%",height:"32px",fontSize:"0.95rem"}} className="text-start offcanvas-login-link">
                                        Discount coupons
                                    </Button>

                                    <Button style={{color:"#505050",transition:"color .25s ease-out",backgroundColor:"transparent",borderColor:"transparent",width:"100%",height:"32px",fontSize:"0.95rem"}} className="text-start offcanvas-login-link">
                                        Positive balance
                                    </Button>

                                    <Button style={{color:"#505050",transition:"color .25s ease-out",backgroundColor:"transparent",borderColor:"transparent",width:"100%",height:"32px",fontSize:"0.95rem"}} className="text-start offcanvas-login-link">
                                        Gift cards
                                    </Button>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" style={{borderColor:"transparent",backgroundColor:"transparent",marginLeft:-13}}>
                            <Accordion.Header>
                                <svg
                                    style={{margin:0,width:24,height:24,marginRight:10}}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    enableBackground="new 0 0 24 24">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12ZM4 12C4 7.6 7.6 4 12 4C16.4 4 20 7.6 20 12C20 16.4 16.4 20 12 20C7.6 20 4 16.4 4 12ZM11 15V12H12C13.1 12 14 11.1 14 10C14 8.9 13.1 8 12 8C10.9 8 10 8.9 10 10H8C8 7.8 9.8 6 12 6C14.2 6 16 7.8 16 10C16 11.9 14.7 13.4 13 13.9V15H11ZM13.3 17C13.3 17.718 12.718 18.3 12 18.3C11.282 18.3 10.7 17.718 10.7 17C10.7 16.282 11.282 15.7 12 15.7C12.718 15.7 13.3 16.282 13.3 17Z" fill="#333333"></path></svg>
                                Need help?
                            </Accordion.Header>
                            <Accordion.Body>
                                
                                    <Button style={{color:"#505050",transition:"color .25s ease-out",backgroundColor:"transparent",borderColor:"transparent",width:"100%",height:"32px",fontSize:"0.95rem"}} className="text-start offcanvas-login-link">
                                        Refunds and warranty
                                    </Button>

                                    <Button style={{color:"#505050",transition:"color .25s ease-out",backgroundColor:"transparent",borderColor:"transparent",width:"100%",height:"32px",fontSize:"0.95rem"}} className="text-start offcanvas-login-link">
                                        Repairment service
                                    </Button>

                                    <Button style={{color:"#505050",transition:"color .25s ease-out",backgroundColor:"transparent",borderColor:"transparent",width:"100%",height:"32px",fontSize:"0.95rem"}} className="text-start offcanvas-login-link">
                                        Refund a gift
                                    </Button>

                                    <Button style={{color:"#505050",transition:"color .25s ease-out",backgroundColor:"transparent",borderColor:"transparent",width:"100%",height:"32px",fontSize:"0.95rem"}} className="text-start offcanvas-login-link">
                                        Support center
                                    </Button>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item onClick={props.handleLogout} eventKey="4" style={{borderColor:"transparent",backgroundColor:"transparent",marginLeft:-13}} className="offcanvas-login-logout">
                            <Accordion.Header>
                                <svg
                                    style={{margin:0,width:24,height:24,marginRight:10}}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    enableBackground="new 0 0 24 24">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2H7C5.9 2 5 2.9 5 4V7H7V4H18V20H7V17H5V20C5 21.1 5.9 22 7 22ZM10.3 8.7L11.7 7.3L16.4 12L11.7 16.7L10.3 15.3L12.6 13H4V11H12.6L10.3 8.7Z" fill="#333333"></path></svg>
                                Logout
                            </Accordion.Header>
                        </Accordion.Item>

                    </Accordion>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
