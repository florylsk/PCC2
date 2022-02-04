import {
    Breadcrumb,
    Button,
    Col,
    Container,
    Form,
    FormControl,
    Image,
    Nav,
    Navbar,
    NavDropdown,
    Spinner
} from "react-bootstrap";
import React
    from "react";
import { GiHamburgerMenu } from 'react-icons/Gi';
import Link from "next/link"
import Cookies from 'js-cookie';
import Avatar
    from "react-avatar";
import OffCanvasLogin
    from "./OffCanvasLogin";
import ShoppingCart
    from "./ShoppingCart";


class NavBar extends React.Component{
    constructor(props) {
        super(props);
        try{
            let user=JSON.parse(decodeURI(Cookies.get('userToken')));
            this.state={user:user};
        }catch(error){
            this.state={user:null};
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
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 138 48" enableBackground="new 0 0 138 48"><path fill="#FF6000" d="M69.51 27.57h18.4v6.13h-18.4v-6.13z"/><path fill="#575757" d="M90.41 7.15h-36.23v26.55h8.66v-10.42h27.58c2.56 0 4.65-2.11 4.65-4.69v-6.78c0-2.57-2.09-4.66-4.66-4.66zm-3.15 8.7c0 1.28-1.04 2.32-2.32 2.32h-22.16v-5.92h22.18c1.27 0 2.32 1.05 2.32 2.32v1.28h-.02z"/><path fill="#575757" d="M137.98 24.71h-8.54v3.33h-21.47c-1.27 0-2.32-1.05-2.32-2.32v-10.59c0-1.28 1.04-2.32 2.32-2.32h21.47v3.24h8.54v-3.33c-.23-3.09-2.83-5.56-5.96-5.56h-28.95c-3.26 0-5.96 2.7-5.96 6v14.54c0 3.3 2.68 6 5.96 6h28.97c3.15 0 5.77-2.51 5.96-5.66v-3.33h-.02z"/><path fill="#999" d="M59.61 40.53v-.43c0-.25-.04-.42-.08-.55-.06-.13-.14-.23-.3-.28-.12-.06-.32-.11-.55-.13-.24-.02-.55-.02-.89-.02-.4 0-.75.02-.99.06-.26.04-.47.13-.59.26-.14.13-.24.32-.28.55-.04.25-.08.55-.08.95v1.78c0 .4.02.72.06.97s.12.46.26.59c.12.13.32.23.59.28.24.06.61.08 1.03.08.32 0 .61-.02.85-.04s.45-.06.59-.13c.16-.08.28-.19.34-.36.08-.15.12-.38.12-.66v-.44h1.64v.53c.02.61-.06 1.08-.24 1.38-.18.32-.4.55-.73.7-.3.15-.69.23-1.13.26l-1.46.08c-.75.02-1.36-.02-1.82-.11-.45-.11-.83-.28-1.07-.55-.26-.26-.43-.59-.53-1s-.14-.91-.16-1.5v-1.86c0-.64.08-1.16.2-1.57.14-.4.34-.72.65-.97.28-.25.67-.4 1.11-.47.47-.08.99-.13 1.62-.13.53 0 1.01.02 1.42.04.43.02.77.11 1.07.25.28.15.53.38.69.68.16.3.26.76.3 1.33v.44h-1.64v-.01zM66.48 37.88c.44.06.82.19 1.12.4.3.19.52.49.68.89.14.38.22.91.22 1.56v2.17c0 .65-.06 1.16-.2 1.56-.14.4-.34.7-.64.93s-.66.38-1.12.46-1 .11-1.63.11c-.66 0-1.2-.04-1.65-.11s-.82-.23-1.1-.44-.48-.53-.62-.93c-.12-.4-.2-.93-.2-1.6v-2.17c0-.63.06-1.14.18-1.52.12-.38.32-.68.6-.89s.64-.34 1.1-.42 1.02-.1 1.67-.1c.61.01 1.15.04 1.59.1zm-2.62 1.31c-.26.06-.44.13-.58.25-.14.13-.22.28-.26.49-.04.21-.06.47-.08.8v2.17c0 .4.02.7.08.95.06.23.16.42.3.53.14.11.34.19.6.23.26.04.58.06.98.06.36 0 .68-.02.94-.06.26-.04.46-.11.62-.23.16-.13.28-.3.34-.53.06-.25.1-.55.1-.93v-2.17c0-.38-.02-.67-.1-.89-.08-.21-.18-.38-.34-.47-.16-.11-.36-.17-.62-.21-.26-.02-.56-.04-.92-.04-.46-.02-.8 0-1.06.05zM70.93 45.96h-1.42v-8.17h2.43l2.15 6.07h.04l2.11-6.07h2.48v8.17h-1.44v-6.88l-2.48 6.88h-1.34l-2.5-6.84v6.84h-.03zM79.75 37.79h3.39c.51 0 .94.04 1.29.11.35.08.64.23.83.44.22.21.36.49.45.85s.14.84.14 1.41c0 .59-.05 1.04-.14 1.41s-.25.63-.47.82c-.22.19-.49.32-.85.4-.35.06-.76.1-1.27.1h-1.92v2.64h-1.47v-8.17l.02-.01zm3.39 4.18c.27 0 .47-.02.64-.06s.29-.11.38-.21c.09-.1.14-.25.18-.42.04-.17.05-.4.05-.68s-.02-.53-.04-.72c-.02-.19-.09-.34-.18-.46-.09-.11-.22-.19-.38-.23-.18-.04-.4-.06-.65-.06h-1.92v2.85h1.92v-.01zm8.9-4.09c.44.06.82.19 1.12.4.3.19.52.49.66.89.16.38.22.91.22 1.56v2.17c0 .65-.06 1.16-.2 1.56s-.36.7-.64.93c-.3.23-.66.38-1.12.46s-1 .11-1.64.11c-.66 0-1.2-.04-1.66-.11s-.82-.23-1.1-.44c-.28-.21-.48-.53-.6-.93s-.18-.93-.18-1.6v-2.17c0-.63.06-1.14.18-1.52s.32-.68.6-.89c.28-.21.64-.34 1.1-.42s1.02-.1 1.68-.1c.6.01 1.12.04 1.58.1zm-2.63 1.31c-.26.06-.44.13-.58.25-.14.13-.22.28-.26.49-.04.21-.06.47-.08.8v2.17c0 .4.02.7.08.95.06.23.14.42.28.53.14.11.34.19.6.23.26.04.58.06 1 .06.36 0 .68-.02.92-.06.26-.04.46-.11.62-.23.16-.13.26-.3.34-.53.08-.25.1-.55.1-.93v-2.17c0-.38-.02-.67-.08-.89-.08-.21-.2-.38-.34-.47-.16-.11-.36-.17-.62-.21-.26-.02-.56-.04-.92-.04-.46-.02-.8 0-1.06.05zM96.48 45.96h-1.41v-8.17h2.46l3.3 6.82v-6.82h1.39v8.17h-2.46l-3.3-6.82v6.82h.02zm9.19-4.8h3.48v1.29h-3.46v2.16h3.69v1.35h-5.11v-8.17h5.11v1.33h-3.69v2.05l-.02-.01zm6.14 4.8h-1.41v-8.17h2.43l3.31 6.82v-6.82h1.41v8.17h-2.47l-3.29-6.82v6.82h.02zm10.59 0h-1.51v-6.82h-2.31v-1.35h6.13v1.35h-2.31v6.82zm4.76-4.8h3.46v1.29h-3.46v2.16h3.69v1.35h-5.11v-8.17h5.11v1.35h-3.69v2.02zm6.17 2.17v.38c0 .23.02.4.07.55.05.13.14.23.27.29s.3.11.54.13c.21.02.5.02.82.02.34 0 .59-.02.79-.06s.36-.1.45-.19c.11-.1.18-.21.21-.36.04-.15.05-.34.05-.57 0-.29-.04-.49-.11-.65-.07-.13-.18-.23-.32-.29s-.32-.1-.54-.1l-.73-.02-1.14-.1c-.36-.04-.66-.11-.93-.27-.27-.13-.46-.38-.63-.69-.16-.31-.23-.76-.23-1.35 0-.55.07-.97.23-1.29.16-.31.38-.53.64-.69.29-.15.61-.23.98-.27.38-.02.79-.04 1.25-.04.39 0 .75.02 1.09.04.34.04.64.11.88.25.27.13.46.36.61.65.14.31.23.71.23 1.24v.25h-1.45v-.25c0-.21-.02-.38-.07-.51-.04-.11-.12-.21-.23-.27-.11-.06-.25-.1-.41-.11-.16-.02-.38-.02-.64-.02-.36 0-.64.02-.86.04-.21.02-.39.08-.5.15-.11.08-.2.17-.23.31-.04.13-.05.31-.05.53 0 .25.02.44.05.57s.11.25.23.31c.12.08.29.13.5.15.21.02.52.06.88.08.59.04 1.07.08 1.45.13.38.06.68.17.91.32.21.15.38.38.46.67.09.29.14.69.14 1.2 0 .57-.07 1.01-.2 1.33s-.3.57-.55.74c-.25.17-.55.29-.93.32-.36.04-.79.06-1.27.06-.41 0-.8-.02-1.2-.04-.38-.02-.71-.1-1.02-.23-.29-.13-.52-.36-.7-.67-.18-.31-.27-.74-.27-1.33v-.38h1.47l.01.04z"/><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="-224.768" y1="317.768" x2="-223.768" y2="317.768" gradientTransform="matrix(43.956 0 0 -40.851 9879.809 13008.805)"><stop offset="0" stopColor="#FF6000"/><stop offset=".3" stopColor="#FF6000"/><stop offset="1" stopColor="#FFA900"/></linearGradient><path fill="url(#a)" d="M43.95 11.62v24.46c.3 6.53-8.35 10.7-14.42 11.73-4.2.72-8.17-.8-10.66-2.09l-17.5-9.15c-.46-.3-1.37-.83-1.37-2.69v-24.91c0-3.38 3.4-1.2 5.97-.21l13.21 5.54c3.06 1.33 7.52 3.07 11.06 2.73 7.72-.7 13.71-5.41 13.71-5.41z"/><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="-217.5" y1="302.061" x2="-216.5" y2="302.061" gradientTransform="matrix(18.4 0 0 -12.255 4021.336 3708.01)"><stop offset="0" stopColor="#FF6000"/><stop offset=".3" stopColor="#FF6000"/><stop offset="1" stopColor="#FFA900"/></linearGradient><path fill="url(#b)" d="M27.62 12.1c2.57.62 6.28-.62 9.63-2.9.95-.56.87-1.96-1.45-2.97-3.98-1.73-10.75-4.69-10.75-4.69-2.98-1.3-5.63-2.9-5.63.45v6.84s6.53 2.86 8.2 3.27z"/></svg>
                            </Navbar.Brand>
                        </Link>

                        <Form className="d-flex" style={{marginRight:50,marginTop:10}}>

                            <FormControl
                                type="search"
                                placeholder="Search product..."
                                className="me-2"
                                aria-label="Search"
                                style={{width:650,height:48}}
                            />
                        </Form>

                        <Navbar.Collapse >
                            <Nav className="me-auto d-flex" style={{marginTop:20}}>
                                {this.state.user==null ?
                                    <div>
                                        <Link href="/login">
                                            <a style={{marginRight:50,fontWeight:500,textDecoration:"none",marginTop:10,color:"#333"}}>
                                                <svg
                                                    style={{margin:0,width:24,height:24,marginRight:10}}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    enableBackground="new 0 0 24 24">
                                                    <path d="M12 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM20 20h-16v-1c0-3.5 3.3-6 8-6s8 2.5 8 6v1zm-13.8-2h11.7c-.6-1.8-2.8-3-5.8-3s-5.3 1.2-5.9 3z"/>
                                                </svg>My Account</a>
                                        </Link>
                                        <Nav.Link className="d-inline" href="#" style={{fontWeight:500,color:"#333"}}>
                                            <svg
                                                style={{margin:0, width:24, height:24,marginRight:10}}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M6 2C6.5 2 6.9 2.3 7 2.8L8 7L21 7C21.3 7 21.6 7.1 21.8 7.4C22 7.6 22 7.9 22 8.2L20 16.2C19.9 16.7 19.5 17 19 17L9 17C8.5 17 8.1 16.7 8 16.2L5.2 4L2 4V2L6 2ZM9.8 15L18.2 15L19.7 9L8.4 9L9.8 15ZM18 22C16.8954 22 16 21.1046 16 20C16 18.8954 16.8954 18 18 18C19.1046 18 20 18.8954 20 20C20 21.1046 19.1046 22 18 22ZM8 20C8 21.1046 8.89543 22 10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20Z" fill="#333333"/>
                                            </svg>
                                            My Shopping Cart
                                        </Nav.Link>
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
                                <Nav.Link href="#" >
                                    <p className="fw-bold " style={{marginBottom:30}}><GiHamburgerMenu /> &nbsp;Categories</p>
                                </Nav.Link>

                                {this.props.pages == null ?
                                    null
                                    :
                                    this.props.pages.length==1
                                        ?
                                        <Breadcrumb style={{marginTop:11,marginLeft:10,fontSize:"12px"}}>
                                            <Breadcrumb.Item >
                                                <Link href="/">
                                                    Home
                                                </Link>
                                            </Breadcrumb.Item>
                                        <Breadcrumb.Item>
                                            <Link href={"/products/category/"+this.props.pages[0]}>
                                                {this.props.pages[0].charAt(0).toUpperCase() + this.props.pages[0].slice(1)}
                                            </Link>
                                        </Breadcrumb.Item>
                                        </Breadcrumb>
                                        :
                                        <Breadcrumb style={{marginTop:11,marginLeft:10,fontSize:"12px"}}>
                                            <Breadcrumb.Item >
                                                <Link href="/">
                                                    Home
                                                </Link>
                                            </Breadcrumb.Item>
                                            <Breadcrumb.Item>
                                                <Link href={"/products/category/"+this.props.pages[0]}>
                                                    {this.props.pages[0].charAt(0).toUpperCase() + this.props.pages[0].slice(1)}
                                                </Link>
                                            </Breadcrumb.Item>
                                            <Breadcrumb.Item>
                                                <Link href={"/products/category/"+this.props.pages[0]+"?subcategory="+this.props.pages[1]}>
                                                    {this.props.pages[1]}
                                                </Link>
                                            </Breadcrumb.Item>
                                        </Breadcrumb>

                                }

                                {
                                    this.props.product ?
                                    this.props.isLoading?
                                        <Breadcrumb style={{marginTop:11,marginLeft:10,fontSize:"12px"}}>
                                            <Spinner animation="border" role="status">
                                            </Spinner>
                                        </Breadcrumb>
                                        :
                                        <Breadcrumb style={{marginTop:11,marginLeft:10,fontSize:"12px"}}>
                                            <Breadcrumb.Item >
                                                <Link href="/">
                                                    Home
                                                </Link>
                                            </Breadcrumb.Item>
                                            <Breadcrumb.Item>
                                                <Link href={"/products/category/"+this.props.productContent.mainCategory.name}>
                                                    {this.props.productContent.mainCategory.name.charAt(0).toUpperCase() + this.props.productContent.mainCategory.name.slice(1)}
                                                </Link>
                                            </Breadcrumb.Item>
                                            <Breadcrumb.Item>
                                                <Link href={"/products/category/"+this.props.productContent.mainCategory.name+"?subcategory="+this.props.productContent.subCategory.name}>
                                                    {this.props.productContent.subCategory.name}
                                                </Link>
                                            </Breadcrumb.Item>
                                        </Breadcrumb>
                                    :
                                null
                                }


                            </Nav>

                        </Navbar.Collapse>
                        {!this.props.product ? this.props.pages == null ? <p style={{marginBottom:30, marginRight:300}}>Your <span className="fw-bold d-inline" >techonology online shop</span> leader on price, quality and service</p> : null : null}
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