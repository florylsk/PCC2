import React
    from "react";
import {
    Button,
    Col,
    Container,
    Form,
    Row
} from "react-bootstrap";
import Cookies from 'js-cookie';
import axios
    from "axios";


let errorLogin=false;
let errorRegister=false;

class LoginContent extends React.Component{
    constructor(props) {
        super(props);
        this.state={showLogin:true,showRegister:false}


    }

    showRegisterForm = ()=>{
        this.setState({showLogin:false,showRegister:true});
    }

    showLoginForm = ()=>{
        this.setState({showLogin:true,showRegister:false});
    }
    errorLogin=false;
    errorRegister=false;

    handleLogin = (event)=>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let mail= data.get('mail');
        let password= data.get('password');
        let user = {
            mail: mail,
            hashedPassword: password,
        };
        axios({
            method: "post",
            url: "http://localhost:8081/api/v1/users/login",
            data: user,
            headers: { "Content-Type": "application/json" },
        })
            .then(function (response) {
                console.log(response.status);
                if (response.status == 200){
                    let name = response.data.name;
                    let surnames = response.data.surnames;
                    let mail = response.data.mail;
                    let id = response.data.id;
                    let productsCart = response.data.productsOnShoppingCart;
                    let productsBought = response.data.productsBought;
                    let token=JSON.stringify({id:id,name:name,surnames:surnames,mail:mail,productsCart:productsCart,productsBought:productsBought});
                    errorLogin=false;
                    errorRegister=false;
                    Cookies.set('userToken', token);
                    window.location.href="/";
                }
                else{
                    errorLogin=true;
                    errorRegister=false;
                }
                console.log(errorLogin);

            })
            .catch(function (response) {
                errorLogin=true;
                errorRegister=false;
            });


    }
    handleRegister = (event)=>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let mail= data.get('mail');
        let password= data.get('password');
        let name=data.get('name');
        let surnames = data.get("surnames");
        let user = {
            name:name,
            surnames:surnames,
            mail: mail,
            hashedPassword: password,
        };
        axios({
            method: "post",
            url: "http://localhost:8081/api/v1/users/register",
            data: user,
            headers: { "Content-Type": "application/json" },
        })
            .then(function (response) {
                if(response.status==200){
                    let name = response.data.name;
                    let surnames = response.data.surnames;
                    let mail = response.data.mail;
                    let id = response.data.id;
                    let productsCart = response.data.productsOnShoppingCart;
                    let productsBought = response.data.productsBought;
                    let token=JSON.stringify({id:id,name:name,surnames:surnames,mail:mail,productsCart:productsCart,productsBought:productsBought});
                    errorLogin=false;
                    errorRegister=false;
                    Cookies.set('userToken', token);
                    window.location.href="/";
                }
                else{
                    errorLogin=false;
                    errorRegister=true;
                }


            })
            .catch(function (response) {
                errorLogin=false;
                errorRegister=true;
            });

    }


    render() {
        return (
            <Container>
                <Row style={{paddingTop:100}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 138 48" enableBackground="new 0 0 138 48" width="138px" height="48px"><path fill="#FF6000" d="M69.51 27.57h18.4v6.13h-18.4v-6.13z"/><path fill="#575757" d="M90.41 7.15h-36.23v26.55h8.66v-10.42h27.58c2.56 0 4.65-2.11 4.65-4.69v-6.78c0-2.57-2.09-4.66-4.66-4.66zm-3.15 8.7c0 1.28-1.04 2.32-2.32 2.32h-22.16v-5.92h22.18c1.27 0 2.32 1.05 2.32 2.32v1.28h-.02z"/><path fill="#575757" d="M137.98 24.71h-8.54v3.33h-21.47c-1.27 0-2.32-1.05-2.32-2.32v-10.59c0-1.28 1.04-2.32 2.32-2.32h21.47v3.24h8.54v-3.33c-.23-3.09-2.83-5.56-5.96-5.56h-28.95c-3.26 0-5.96 2.7-5.96 6v14.54c0 3.3 2.68 6 5.96 6h28.97c3.15 0 5.77-2.51 5.96-5.66v-3.33h-.02z"/><path fill="#999" d="M59.61 40.53v-.43c0-.25-.04-.42-.08-.55-.06-.13-.14-.23-.3-.28-.12-.06-.32-.11-.55-.13-.24-.02-.55-.02-.89-.02-.4 0-.75.02-.99.06-.26.04-.47.13-.59.26-.14.13-.24.32-.28.55-.04.25-.08.55-.08.95v1.78c0 .4.02.72.06.97s.12.46.26.59c.12.13.32.23.59.28.24.06.61.08 1.03.08.32 0 .61-.02.85-.04s.45-.06.59-.13c.16-.08.28-.19.34-.36.08-.15.12-.38.12-.66v-.44h1.64v.53c.02.61-.06 1.08-.24 1.38-.18.32-.4.55-.73.7-.3.15-.69.23-1.13.26l-1.46.08c-.75.02-1.36-.02-1.82-.11-.45-.11-.83-.28-1.07-.55-.26-.26-.43-.59-.53-1s-.14-.91-.16-1.5v-1.86c0-.64.08-1.16.2-1.57.14-.4.34-.72.65-.97.28-.25.67-.4 1.11-.47.47-.08.99-.13 1.62-.13.53 0 1.01.02 1.42.04.43.02.77.11 1.07.25.28.15.53.38.69.68.16.3.26.76.3 1.33v.44h-1.64v-.01zM66.48 37.88c.44.06.82.19 1.12.4.3.19.52.49.68.89.14.38.22.91.22 1.56v2.17c0 .65-.06 1.16-.2 1.56-.14.4-.34.7-.64.93s-.66.38-1.12.46-1 .11-1.63.11c-.66 0-1.2-.04-1.65-.11s-.82-.23-1.1-.44-.48-.53-.62-.93c-.12-.4-.2-.93-.2-1.6v-2.17c0-.63.06-1.14.18-1.52.12-.38.32-.68.6-.89s.64-.34 1.1-.42 1.02-.1 1.67-.1c.61.01 1.15.04 1.59.1zm-2.62 1.31c-.26.06-.44.13-.58.25-.14.13-.22.28-.26.49-.04.21-.06.47-.08.8v2.17c0 .4.02.7.08.95.06.23.16.42.3.53.14.11.34.19.6.23.26.04.58.06.98.06.36 0 .68-.02.94-.06.26-.04.46-.11.62-.23.16-.13.28-.3.34-.53.06-.25.1-.55.1-.93v-2.17c0-.38-.02-.67-.1-.89-.08-.21-.18-.38-.34-.47-.16-.11-.36-.17-.62-.21-.26-.02-.56-.04-.92-.04-.46-.02-.8 0-1.06.05zM70.93 45.96h-1.42v-8.17h2.43l2.15 6.07h.04l2.11-6.07h2.48v8.17h-1.44v-6.88l-2.48 6.88h-1.34l-2.5-6.84v6.84h-.03zM79.75 37.79h3.39c.51 0 .94.04 1.29.11.35.08.64.23.83.44.22.21.36.49.45.85s.14.84.14 1.41c0 .59-.05 1.04-.14 1.41s-.25.63-.47.82c-.22.19-.49.32-.85.4-.35.06-.76.1-1.27.1h-1.92v2.64h-1.47v-8.17l.02-.01zm3.39 4.18c.27 0 .47-.02.64-.06s.29-.11.38-.21c.09-.1.14-.25.18-.42.04-.17.05-.4.05-.68s-.02-.53-.04-.72c-.02-.19-.09-.34-.18-.46-.09-.11-.22-.19-.38-.23-.18-.04-.4-.06-.65-.06h-1.92v2.85h1.92v-.01zm8.9-4.09c.44.06.82.19 1.12.4.3.19.52.49.66.89.16.38.22.91.22 1.56v2.17c0 .65-.06 1.16-.2 1.56s-.36.7-.64.93c-.3.23-.66.38-1.12.46s-1 .11-1.64.11c-.66 0-1.2-.04-1.66-.11s-.82-.23-1.1-.44c-.28-.21-.48-.53-.6-.93s-.18-.93-.18-1.6v-2.17c0-.63.06-1.14.18-1.52s.32-.68.6-.89c.28-.21.64-.34 1.1-.42s1.02-.1 1.68-.1c.6.01 1.12.04 1.58.1zm-2.63 1.31c-.26.06-.44.13-.58.25-.14.13-.22.28-.26.49-.04.21-.06.47-.08.8v2.17c0 .4.02.7.08.95.06.23.14.42.28.53.14.11.34.19.6.23.26.04.58.06 1 .06.36 0 .68-.02.92-.06.26-.04.46-.11.62-.23.16-.13.26-.3.34-.53.08-.25.1-.55.1-.93v-2.17c0-.38-.02-.67-.08-.89-.08-.21-.2-.38-.34-.47-.16-.11-.36-.17-.62-.21-.26-.02-.56-.04-.92-.04-.46-.02-.8 0-1.06.05zM96.48 45.96h-1.41v-8.17h2.46l3.3 6.82v-6.82h1.39v8.17h-2.46l-3.3-6.82v6.82h.02zm9.19-4.8h3.48v1.29h-3.46v2.16h3.69v1.35h-5.11v-8.17h5.11v1.33h-3.69v2.05l-.02-.01zm6.14 4.8h-1.41v-8.17h2.43l3.31 6.82v-6.82h1.41v8.17h-2.47l-3.29-6.82v6.82h.02zm10.59 0h-1.51v-6.82h-2.31v-1.35h6.13v1.35h-2.31v6.82zm4.76-4.8h3.46v1.29h-3.46v2.16h3.69v1.35h-5.11v-8.17h5.11v1.35h-3.69v2.02zm6.17 2.17v.38c0 .23.02.4.07.55.05.13.14.23.27.29s.3.11.54.13c.21.02.5.02.82.02.34 0 .59-.02.79-.06s.36-.1.45-.19c.11-.1.18-.21.21-.36.04-.15.05-.34.05-.57 0-.29-.04-.49-.11-.65-.07-.13-.18-.23-.32-.29s-.32-.1-.54-.1l-.73-.02-1.14-.1c-.36-.04-.66-.11-.93-.27-.27-.13-.46-.38-.63-.69-.16-.31-.23-.76-.23-1.35 0-.55.07-.97.23-1.29.16-.31.38-.53.64-.69.29-.15.61-.23.98-.27.38-.02.79-.04 1.25-.04.39 0 .75.02 1.09.04.34.04.64.11.88.25.27.13.46.36.61.65.14.31.23.71.23 1.24v.25h-1.45v-.25c0-.21-.02-.38-.07-.51-.04-.11-.12-.21-.23-.27-.11-.06-.25-.1-.41-.11-.16-.02-.38-.02-.64-.02-.36 0-.64.02-.86.04-.21.02-.39.08-.5.15-.11.08-.2.17-.23.31-.04.13-.05.31-.05.53 0 .25.02.44.05.57s.11.25.23.31c.12.08.29.13.5.15.21.02.52.06.88.08.59.04 1.07.08 1.45.13.38.06.68.17.91.32.21.15.38.38.46.67.09.29.14.69.14 1.2 0 .57-.07 1.01-.2 1.33s-.3.57-.55.74c-.25.17-.55.29-.93.32-.36.04-.79.06-1.27.06-.41 0-.8-.02-1.2-.04-.38-.02-.71-.1-1.02-.23-.29-.13-.52-.36-.7-.67-.18-.31-.27-.74-.27-1.33v-.38h1.47l.01.04z"/><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="-224.768" y1="317.768" x2="-223.768" y2="317.768" gradientTransform="matrix(43.956 0 0 -40.851 9879.809 13008.805)"><stop offset="0" stopColor="#FF6000"/><stop offset=".3" stopColor="#FF6000"/><stop offset="1" stopColor="#FFA900"/></linearGradient><path fill="url(#a)" d="M43.95 11.62v24.46c.3 6.53-8.35 10.7-14.42 11.73-4.2.72-8.17-.8-10.66-2.09l-17.5-9.15c-.46-.3-1.37-.83-1.37-2.69v-24.91c0-3.38 3.4-1.2 5.97-.21l13.21 5.54c3.06 1.33 7.52 3.07 11.06 2.73 7.72-.7 13.71-5.41 13.71-5.41z"/><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="-217.5" y1="302.061" x2="-216.5" y2="302.061" gradientTransform="matrix(18.4 0 0 -12.255 4021.336 3708.01)"><stop offset="0" stopColor="#FF6000"/><stop offset=".3" stopColor="#FF6000"/><stop offset="1" stopColor="#FFA900"/></linearGradient><path fill="url(#b)" d="M27.62 12.1c2.57.62 6.28-.62 9.63-2.9.95-.56.87-1.96-1.45-2.97-3.98-1.73-10.75-4.69-10.75-4.69-2.98-1.3-5.63-2.9-5.63.45v6.84s6.53 2.86 8.2 3.27z"/></svg>
                </Row>
                <Row style={{paddingTop:50,marginLeft:110}}>
                    <Col style={{paddingTop:50}} xs={5}>
                        <Row>
                            <Col xs={2}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    enableBackground="new 0 0 24 24"
                                    width="64px"
                                    height="64px">
                                    <path fillRule="evenodd" d="M2.25 16.875V5.25h12v7.906H15v-5.28h4.824l1.926 5.05V16.5h-1.937a2.44 2.44 0 0 0-2.375-1.875 2.43 2.43 0 0 0-2.406 2.063H8.594a2.43 2.43 0 0 0-2.406-2.062c-1.28 0-2.336.988-2.43 2.25zm12.78.563H8.594A2.43 2.43 0 0 1 6.188 19.5c-1.152 0-2.117-.797-2.375-1.875H1.5V4.5H15v2.625h5.336L22.5 12.79v4.46h-2.633c-.098 1.262-1.148 2.25-2.43 2.25a2.43 2.43 0 0 1-2.406-2.062zm.72-.375c0 .934.754 1.688 1.688 1.688s1.688-.754 1.688-1.687-.754-1.687-1.687-1.687-1.687.754-1.687 1.688zm-9.562-1.687c.934 0 1.688.754 1.688 1.688S7.12 18.75 6.188 18.75 4.5 17.996 4.5 17.063s.754-1.687 1.688-1.687zM17.625 9.75V12h2.25v.75h-3v-3zm0 0"></path>
                                </svg>
                            </Col>
                            <Col>
                                <p className="d-inline" style={{color:"rgb(51, 51, 51)",fontWeight:700,fontSize:"1.0625rem"}}>Manage your orders</p>
                                <p  style={{fontWeight:400,fontSize:"0.95rem",color:"rgb(51, 51, 51)"}}>Have the control over all your orders and receive notifications about them</p>
                            </Col>
                        </Row>
                        <Row style={{marginTop:40}}>
                            <Col xs={2}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    enableBackground="new 0 0 24 24"
                                    width="64px"
                                    height="64px">
                                    <path fillRule="evenodd" d="M17.1 9.61L12 3.648 6.9 9.61 1.813 5.34l.957 13.14c.082 1.06.977 1.87 2.055 1.87h14.348c1.078 0 1.973-.812 2.055-1.87l.957-13.14zm3.39 8.813c-.05.66-.617 1.18-1.305 1.18H4.824c-.687 0-1.258-.516-1.305-1.18l-.07-.977H20.55zm.125-1.727H3.395L2.688 7.05 7 10.656l5-5.852 5 5.852 4.313-3.605zm0 0"></path>                                </svg>
                            </Col>
                            <Col>
                                <p className="d-inline" style={{color:"rgb(51, 51, 51)",fontWeight:700,fontSize:"1.0625rem"}}>Get Premium!</p>
                                <p  style={{fontWeight:400,fontSize:"0.95rem",color:"rgb(51, 51, 51)"}}>Be a part of our community and enjoy all the advantages</p>
                            </Col>
                        </Row>
                        <Row style={{marginTop:40}}>
                            <Col xs={2}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    enableBackground="new 0 0 24 24"
                                    width="64px"
                                    height="64px">
                                    <path fillRule="evenodd" d="M12 1.293a7.13 7.13 0 0 0-7.125 7.125A7.13 7.13 0 0 0 12 15.543a7.13 7.13 0 0 0 7.125-7.125A7.13 7.13 0 0 0 12 1.293zM4.125 8.418C4.125 4.07 7.648.543 12 .543s7.875 3.527 7.875 7.875c0 1.84-.63 3.53-1.687 4.87l3.44 7.203-3.81-.422-2.117 3.387-3.328-7.172c-.125.008-.246.008-.37.008s-.246-.004-.37-.008L8.3 23.457 6.188 20.07l-3.816.422 3.44-7.2a7.83 7.83 0 0 1-1.687-4.875zm9.04 7.79c1.75-.258 3.31-1.094 4.488-2.305l2.72 5.69-2.94-.328-1.633 2.617zm-6.816-2.3c1.18 1.21 2.738 2.047 4.488 2.305l-2.633 5.676-1.637-2.617-2.94.328zm7.066-7.047l-1.387-2.867-1.43 2.844-3.148.434 2.258 2.242-.562 3.13 2.828-1.457 2.805 1.5-.512-3.14L16.56 7.34zM11.1 7.53l.922-1.84.895 1.852 2.035.31-1.484 1.426.336 2.027-1.812-.97-1.824.94.363-2.027-1.465-1.445zm0 0"></path>                                </svg>
                            </Col>
                            <Col>
                                <p className="d-inline" style={{color:"rgb(51, 51, 51)",fontWeight:700,fontSize:"1.0625rem"}}>Personalized wish list</p>
                                <p  style={{fontWeight:400,fontSize:"0.95rem",color:"rgb(51, 51, 51)"}}>Save your favourite products in personalized wish lists</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={1}>
                        <hr style={{width:1,height:"110%",marginLeft:30,marginRight:30}}/>
                    </Col>
                    <Col>
                        <p style={{fontWeight:700,fontSize:"1.8125rem",color:"rgb(51, 51, 51)",marginBottom:40}}>Login</p>
                        <Button style={{width:"408px",height:"48px",backgroundColor:"#fff",borderColor:"rgb(204, 204, 204)",marginBottom:30}} className="google-button">
                            <p style={{fontWeight:400,color:"rgb(51, 51, 51)",fontSize:"1.2rem",marginTop:3,lineHeight:"1.5rem"}} className="text-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    enableBackground="new 0 0 24 24"
                                    width="20px"
                                    height="20px">
                                    <path
                                        fill="#FBBB00"
                                        d="M6.2 14.2l-.7 2.7-2.7.1c-.8-1.5-1.2-3.2-1.2-5 0-1.7.4-3.4 1.2-4.8l3.3 2.8c-.2.6-.3 1.3-.3 2 0 .8.1 1.5.4 2.2z"></path>
                                    <path
                                        fill="#518EF8"
                                        d="M22.4 12c0 .7-.1 1.5-.2 2.2-.5 2.4-1.8 4.5-3.7 6l-3.4-2.8c1.2-.7 2.2-1.8 2.7-3.2h-5.6v-4.1h10c.2.6.2 1.2.2 1.9z"></path>
                                    <path
                                        fill="#28B446"
                                        d="M18.5 20.1c-1.8 1.4-4.1 2.3-6.5 2.3-4 0-7.4-2.2-9.2-5.5l3.4-2.8c.9 2.4 3.2 4 5.8 4 1.1 0 2.2-.3 3.1-.8l3.4 2.8z"></path>
                                    <path
                                        fill="#F14336"
                                        d="M18.7 4l-3.4 2.8c-1-.6-2.1-.9-3.3-.9-2.7 0-5 1.8-5.9 4.2l-3.4-2.9c1.8-3.4 5.3-5.6 9.3-5.6 2.5 0 4.9.9 6.7 2.4z"></path>
                                </svg>
                                &nbsp;Enter with Google
                            </p>
                        </Button>

                        <p style={{width:"70%",textAlign:"center",borderBottom:"1px solid #808080",lineHeight:"0.1em",margin:"10px 0 20px",marginBottom:50}}><span style={{background:"#fff",padding:"0 10px",color:"rgb(51, 51, 51)",fontWeight:700,fontSize:"0.95rem"}}>Or also</span></p>

                        <Form onSubmit={this.state.showLogin ? this.handleLogin : this.handleRegister}>
                            {this.state.showLogin ?
                                <div>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="email" name="mail" placeholder="E-mail*" style={{width:"408px",height:"48px",color:"rgb(51, 51, 51)",fontWeight:400,fontSize:"1.0625rem"}} className="login-button" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword" style={{marginTop:35}}>
                                        <Form.Control type="password" name="password" placeholder="Password*" style={{width:"408px",height:"48px",color:"rgb(51, 51, 51)",fontWeight:400,fontSize:"1.0625rem"}} className="login-button" />
                                    </Form.Group>
                                    <p>{this.errorLogin ? "Invalid credentials!" : null}</p>

                                </div>


                                :
                                <div>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="text" name="name" placeholder="Name*" style={{width:"408px",height:"48px",color:"rgb(51, 51, 51)",fontWeight:400,fontSize:"1.0625rem"}} className="login-button" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail" style={{marginTop:35}}>
                                        <Form.Control type="text" name="surnames" placeholder="Surnames*" style={{width:"408px",height:"48px",color:"rgb(51, 51, 51)",fontWeight:400,fontSize:"1.0625rem"}} className="login-button" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail" style={{marginTop:35}}>
                                        <Form.Control type="email" name="mail" placeholder="E-Mail*" aria-required={true} style={{width:"408px",height:"48px",color:"rgb(51, 51, 51)",fontWeight:400,fontSize:"1.0625rem"}} className="login-button" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword" style={{marginTop:35}}>
                                        <Form.Control type="password" name="password" placeholder="Password*" style={{width:"408px",height:"48px",color:"rgb(51, 51, 51)",fontWeight:400,fontSize:"1.0625rem"}} className="login-button" />
                                    </Form.Group>
                                    <p>{this.errorRegister ? "Something went wrong" : null}</p>
                                </div>


                            }


                            <Button variant="primary" type="submit" style={{width:"408px",height:"48px",marginTop:30,background:"rgb(255, 96, 0)",border:"1px solid transparent",fontWeight:400,fontSize:"1.2rem"}} className="login-button-submit">
                                {this.state.showLogin? "Login" : "Register"}
                            </Button>
                        </Form>

                        <p style={{width:"70%",textAlign:"center",borderBottom:"1px solid #808080",lineHeight:"0.1em",margin:"10px 0 20px",marginBottom:50,marginTop:50}}><span style={{background:"#fff",padding:"0 10px",color:"rgb(51, 51, 51)",fontWeight:700,fontSize:"0.95rem"}}>{this.state.showLogin ? "New client?" : "Login"}</span></p>
                        <Button onClick={this.state.showLogin ? this.showRegisterForm : this.showLoginForm} style={{width:"408px",height:"48px",background:"rgb(255, 255, 255)",borderColor:"rgb(204, 204, 204)",fontWeight:400,fontSize:"1.1rem",color:"rgb(51, 51, 51)"}} className="google-button">
                           {this.state.showLogin ? "Create account" : "Login"}
                        </Button>
                    </Col>
                </Row>


            </Container>
        );
    }
}

export default LoginContent;