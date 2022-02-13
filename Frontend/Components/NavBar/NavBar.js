import {
    Breadcrumb,
    Button,
    Col,
    Container,
    Dropdown,
    Form,
    FormControl,
    Nav,
    Navbar,
    NavDropdown,
    Spinner
} from "react-bootstrap";
import React
    from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import Link from "next/link"
import Cookies from 'js-cookie';
import Avatar
    from "react-avatar";
import OffCanvasLogin
    from "./OffCanvasLogin";
import ShoppingCart
    from "./ShoppingCart";
import DropdownMenu
    from "react-bootstrap/DropdownMenu";
import NavBarSearch
    from "./NavBarSearch";
import Image from "next/image"


class NavBar extends React.Component{
    constructor(props) {
        super(props);
        this.state={user:null};

    }
    componentDidMount() {
        try{
            let user=JSON.parse(decodeURI(Cookies.get('userToken')));
            this.setState({user:user});
        }catch(error){
            this.setState({user:null});
        }
    }

    handleLogout = ()=>{
        Cookies.remove("userToken");
        window.location.reload(false);
    }




    render() {
        return(
            <Container fluid className="sticky-top" style={{backgroundColor:"#ffffff"}}>
                <Container fluid className="d-flex justify-content-center">
                    <Navbar>
                        <Link href="/">
                            <Navbar.Brand href="#" style={{marginRight:100,height:48,width:138}}>
                                <Image src="/images/FOTech-logos_transparent.png" width={139} height={56} />
                            </Navbar.Brand>
                        </Link>

                        <NavBarSearch />

                        <Navbar.Collapse >
                            <Nav className="me-auto d-flex" style={{marginTop:20}}>
                                {this.state.user==null ?
                                    <div>
                                        <Link href="/login">
                                            <a style={{marginRight:50,fontWeight:500,textDecoration:"none",marginTop:10,color:"#333",fontSize:13}}>
                                                <svg
                                                    style={{margin:0,width:24,height:24,marginRight:10}}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    enableBackground="new 0 0 24 24">
                                                    <path d="M12 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM20 20h-16v-1c0-3.5 3.3-6 8-6s8 2.5 8 6v1zm-13.8-2h11.7c-.6-1.8-2.8-3-5.8-3s-5.3 1.2-5.9 3z"/>
                                                </svg>My Account</a>
                                        </Link>
                                        <Link href="/login" passHref>
                                        <Nav.Link className="d-inline" href="#" style={{fontWeight:500,color:"#333",fontSize:13}}>
                                            <svg
                                                style={{margin:0, width:24, height:24,marginRight:10}}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M6 2C6.5 2 6.9 2.3 7 2.8L8 7L21 7C21.3 7 21.6 7.1 21.8 7.4C22 7.6 22 7.9 22 8.2L20 16.2C19.9 16.7 19.5 17 19 17L9 17C8.5 17 8.1 16.7 8 16.2L5.2 4L2 4V2L6 2ZM9.8 15L18.2 15L19.7 9L8.4 9L9.8 15ZM18 22C16.8954 22 16 21.1046 16 20C16 18.8954 16.8954 18 18 18C19.1046 18 20 18.8954 20 20C20 21.1046 19.1046 22 18 22ZM8 20C8 21.1046 8.89543 22 10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20Z" fill="#333333"/>
                                            </svg>
                                            My Shopping Cart
                                        </Nav.Link>
                                        </Link>
                                    </div>
                                :
                                    <div style={{display:"flex"}}>
                                    <OffCanvasLogin userName={this.state.user.name} handleLogout ={this.handleLogout} />
                                    <ShoppingCart user={this.state.user} />
                                    </div>
                                }

                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>

                <Container fluid>
                    <hr style={{position:"absolute",marginBottom:90,marginTop:10}} width="100%"/>
                </Container>
                <Container>
                    <Navbar>

                        <Navbar.Collapse>
                            <Nav>
                                <Dropdown drop="end">
                                    <Dropdown.Toggle className="no-style" style={{marginBottom:45}}>
                                        <p  style={{fontWeight:600}}><GiHamburgerMenu /> &nbsp;Categories</p>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Link href="/products/category/peripherals" passHref>
                                        <Dropdown.Item style={{color:"#444",fontSize:"0.85rem"}}>
                                            Peripherals
                                        </Dropdown.Item>
                                        </Link>
                                        <Link href="/products/category/components" passHref>
                                            <Dropdown.Item style={{color:"#444",fontSize:"0.85rem"}}>
                                                Components
                                            </Dropdown.Item>
                                        </Link>
                                        <Link href="/products/category/telephony" passHref>
                                            <Dropdown.Item style={{color:"#444",fontSize:"0.85rem"}}>
                                                Smartphones and telephony
                                            </Dropdown.Item>
                                        </Link>
                                        <Link href="/products/category/computers" passHref>
                                            <Dropdown.Item style={{color:"#444",fontSize:"0.85rem"}}>
                                                Computers
                                            </Dropdown.Item>
                                        </Link>
                                        <Link href="/products/category/gaming" passHref>
                                            <Dropdown.Item style={{color:"#444",fontSize:"0.85rem"}}>
                                                Gaming
                                            </Dropdown.Item>
                                        </Link>
                                        <Link href="/products/category/audiovisual" passHref>
                                            <Dropdown.Item style={{color:"#444",fontSize:"0.85rem"}}>
                                                Audiovisual
                                            </Dropdown.Item>
                                        </Link>

                                    </Dropdown.Menu>
                                </Dropdown>




                            </Nav>

                        </Navbar.Collapse>
                        {this.props.showMiddle ? <p style={{marginBottom:30, marginRight:300}}>Your <span className="fw-bold d-inline" >online techonology shop</span> leader on price, quality and service</p> : null }
                        <Nav>
                            <Nav.Link href="#" >
                                <p  style={{marginBottom:30,fontWeight:400}}>&nbsp;Special Offers</p>
                            </Nav.Link>
                        </Nav>
                    </Navbar>


                </Container>
                <Container fluid>
                    <hr style={{position:"absolute",marginTop:-40}} width="100%"/>
                </Container>

            </Container>



        )
    }


}

export default NavBar;