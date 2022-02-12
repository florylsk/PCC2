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
import Head
    from "next/head";
import Image from "next/image"


class LoginContent extends React.Component{
    constructor(props) {
        super(props);
        this.state={showLogin:true,showRegister:false,errorLogin:false,errorRegister:false}


    }

    showRegisterForm = ()=>{
        this.setState({showLogin:false,showRegister:true,errorLogin:false,errorRegister:false});
    }

    showLoginForm = ()=>{
        this.setState({showLogin:true,showRegister:false,errorLogin:false,errorRegister:false});
    }

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
                if (response.status == 200){
                    let name = response.data.name;
                    let surnames = response.data.surnames;
                    let mail = response.data.mail;
                    let id = response.data.id;
                    let token=JSON.stringify({id:id,name:name,surnames:surnames,mail:mail});
                    Cookies.set('userToken', token);
                    console.log(token);
                    window.location.href="/";
                }
                else{
                    this.setState({showLogin:true,showRegister:false,errorLogin:true,errorRegister:false});
                }

            })
            .catch(function (response) {
                this.setState({showLogin:true,showRegister:false,errorLogin:true,errorRegister:false});
            }.bind(this));


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
                    Cookies.set('userToken', token);
                    window.location.href="/";
                }
                else{
                    this.setState({showLogin:false,showRegister:true,errorLogin:false,errorRegister:true});
                }


            })
            .catch(function (response) {
                this.setState({showLogin:false,showRegister:true,errorLogin:false,errorRegister:true});
            }.bind(this));

    }


    render() {

        return (
            <Container>
                <Head>
                    <title>Auth - FOTech</title>
                </Head>
                <Row style={{paddingTop:100}} className="justify-content-center align-items-center">
                    <Image src="/images/FOTech-logos_transparent.png" width={139} height={60}/>
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
                                    <p style={{color:"red"}}>{this.state.errorLogin ? "Invalid credentials!" : null}</p>

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
                                    <p style={{color:"red"}}>{this.state.errorRegister ? "Something went wrong" : null}</p>
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