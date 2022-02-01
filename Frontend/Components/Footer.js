import {
    Button,
    Col,
    Container,
    Dropdown,
    DropdownButton,
    Image,
    Nav,
    Navbar,
    Row
} from "react-bootstrap";
import React
    from "react";
import {MdKeyboardArrowDown} from "react-icons/md"
import Link from 'next/link'

class Footer extends React.Component{
    constructor(props) {
        super(props);
    }


    render() {

        return(
            <Container fluid style={{backgroundColor:"#ffffff",marginTop:100}}>
                <Container fluid>
                    <hr style={{position:"absolute",marginTop:350}} width="100%"/>
                </Container>
                <Container>
                    <Navbar>

                        <Col>
                            <Row>
                                <h6 style={{color:"#333",fontWeight:700,fontSize:"15px",marginBottom:20}} >Why buy</h6>
                            </Row>
                            <Row>
                                <Button className="text-start footerButton" style={{backgroundColor:"#ffffff",borderColor:"#ffffff",color:"#333",width:246}}>Premium</Button>
                            </Row>
                            <Row>
                                <Link href="/how-to-buy">
                                    <Button className="text-start footerButton" style={{backgroundColor:"#ffffff",borderColor:"#ffffff",color:"#333",width:246}}>How to buy</Button>
                                </Link>
                            </Row>
                            <Row>
                                <Button className="text-start footerButton" style={{backgroundColor:"#ffffff",borderColor:"#ffffff",color:"#333",width:246}}>Payment methods</Button>
                            </Row>
                            <Row>
                                <Button className="text-start footerButton" style={{backgroundColor:"#ffffff",borderColor:"#ffffff",color:"#333",width:246}}>Ship Rates</Button>
                            </Row>
                            <Row>
                                <Button className="text-start footerButton" style={{backgroundColor:"#ffffff",borderColor:"#ffffff",color:"#333",width:246}}>Frequently Asked Questions</Button>
                            </Row>
                            <Row>
                                <Button className="text-start footerButton" style={{backgroundColor:"#ffffff",borderColor:"#ffffff",color:"#333",width:246}}>Client Reviews</Button>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <h6 style={{color:"#333",fontWeight:700,fontSize:"15px",marginBottom:20}} >Who we are</h6>
                            </Row>
                            <Row>
                                <Button className="text-start footerButton" style={{backgroundColor:"#ffffff",borderColor:"#ffffff",color:"#333",width:246}}>Who we are</Button>
                            </Row>
                            <Row>
                                <Button className="text-start footerButton" style={{backgroundColor:"#ffffff",borderColor:"#ffffff",color:"#333",width:246}}>Our stores</Button>
                            </Row>
                            <Row>
                                <Button className="text-start footerButton" style={{backgroundColor:"#ffffff",borderColor:"#ffffff",color:"#333",width:246}}>Purchase Conditions</Button>
                            </Row>
                            <Row>
                                <Button className="text-start footerButton" style={{backgroundColor:"#ffffff",borderColor:"#ffffff",color:"#333",width:246}}>Brands</Button>
                            </Row>
                            <Row>
                                <Button className="text-start footerButton" style={{backgroundColor:"#ffffff",borderColor:"#ffffff",color:"#333",width:246}}>Privacy Policy</Button>
                            </Row>
                            <Row>
                                <Button className="text-start footerButton" style={{backgroundColor:"#ffffff",borderColor:"#ffffff",color:"#333",width:246}}>Legal Warning</Button>
                            </Row>
                        </Col>

                        <Col>
                            <Row>
                                <h6 style={{color:"#333",fontWeight:700,fontSize:"15px",marginBottom:20}} >Contact</h6>
                            </Row>
                            <Row>
                                <Button className="text-start footerButton" style={{backgroundColor:"#ffffff",borderColor:"#ffffff",color:"#333",width:246}}>Support</Button>
                            </Row>
                            <Row>
                                <Button className="text-start footerButton" style={{backgroundColor:"#ffffff",borderColor:"#ffffff",color:"#333",width:246}}>Contact</Button>
                            </Row>
                            <Row>
                                <Button className="text-start footerButton" style={{backgroundColor:"#ffffff",borderColor:"#ffffff",color:"#333",width:246}}>Warranty and Refunds</Button>
                            </Row>
                            <Row>
                                <Button className="text-start footerButton" style={{backgroundColor:"#ffffff",borderColor:"#ffffff",color:"#333",width:246}}>Work with us</Button>
                            </Row>
                            <Row>
                                <Button className="text-start footerButton" style={{backgroundColor:"#ffffff",borderColor:"#ffffff",color:"#333",width:246}}>Cookies Policy</Button>
                            </Row>
                            <Row>
                                <Button className="text-start footerButton" style={{backgroundColor:"#ffffff",borderColor:"#ffffff",color:"#333",width:246}}>Advertising</Button>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <h6 style={{color:"#333",fontWeight:700,fontSize:"15px",marginBottom:20}} >Others</h6>
                            </Row>
                            <Row>
                                <Button className="text-start footerButton" style={{backgroundColor:"#ffffff",borderColor:"#ffffff",color:"#333",width:246}}>Outlet</Button>
                            </Row>
                            <Row>
                                <Button className="text-start footerButton" style={{backgroundColor:"#ffffff",borderColor:"#ffffff",color:"#333",width:246}}>Black Friday</Button>
                            </Row>
                            <Row>
                                <Button className="text-start footerButton" style={{backgroundColor:"#ffffff",borderColor:"#ffffff",color:"#333",width:246}}>Cyber Monday</Button>
                            </Row>
                            <Row>
                                <Button className="text-start footerButton" style={{backgroundColor:"#ffffff",borderColor:"#ffffff",color:"#333",width:246}}>PcDays</Button>
                            </Row>
                            <Row>
                                <Button className="text-start footerButton" style={{backgroundColor:"#ffffff",borderColor:"#ffffff",color:"#333",width:246}}>Marketplace</Button>
                            </Row>
                            <Row>
                                <Button className="text-start footerButton" style={{backgroundColor:"#ffffff",borderColor:"#ffffff",color:"#333",width:246}}>Social Responsibility</Button>
                            </Row>
                        </Col>
                        <Col>
                            <Row style={{marginTop:10}}>
                                <h6 style={{color:"#333",fontWeight:700,fontSize:"15px",marginBottom:20}} >Social</h6>
                            </Row>
                            <Row>
                                <Button className="text-start footerButton" style={{backgroundColor:"#ffffff",borderColor:"#ffffff",color:"#333",width:246}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M20.7641 7.27604V17.0915C20.8842 19.7075 17.4004 21.3836 14.9542 21.7975C13.4694 21.9829 11.9642 21.6896 10.6577 20.9605L3.60375 17.2901C3.21927 17.0717 3.00254 16.6449 3.05318 16.2058V6.21607C3.05318 4.86221 4.42199 5.73826 5.45722 6.12942L10.7804 8.34919C12.0138 8.88476 13.8136 9.57891 15.2346 9.4492C17.234 9.21194 19.1385 8.46346 20.7641 7.27604Z" fill="#333333"></path><path fillRule="evenodd" clipRule="evenodd" d="M14.5954 7.06121C15.6323 7.30914 17.1305 6.8081 18.4787 5.9025C18.8573 5.6748 18.8278 5.11671 17.8937 4.71266C16.2901 4.02023 13.5604 2.83351 13.5604 2.83351C12.3609 2.31121 11.2881 1.67531 11.2881 3.0109V5.75208C11.2881 5.75208 13.919 6.89939 14.5954 7.06121Z" fill="#333333"></path></svg> Blog</Button>
                            </Row>
                            <Row>
                                <Button className="text-start footerButton" style={{backgroundColor:"#ffffff",borderColor:"#ffffff",color:"#333",width:246}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16.5 2H7.5C4.5 2 2 4.5 2 7.5V16.5C2 19.5 4.5 22 7.5 22H16.5C19.5 22 22 19.5 22 16.5V7.5C22 4.5 19.5 2 16.5 2ZM20.2 16.5C20.2 18.6 18.5 20.2 16.5 20.2H7.5C5.4 20.2 3.8 18.5 3.8 16.5V7.5C3.8 5.4 5.5 3.8 7.5 3.8H16.5C18.6 3.8 20.2 5.5 20.2 7.5V16.5ZM12 6.8C9.2 6.8 6.8 9.1 6.8 12C6.8 14.8 9.1 17.2 12 17.2C14.9 17.2 17.2 14.9 17.2 12C17.2 9.2 14.8 6.8 12 6.8ZM12 15.4C10.1 15.4 8.6 13.9 8.6 12C8.6 10.1 10.1 8.6 12 8.6C13.9 8.6 15.4 10.1 15.4 12C15.4 13.9 13.9 15.4 12 15.4ZM18.7 6.6C18.7 7.31797 18.118 7.9 17.4 7.9C16.682 7.9 16.1 7.31797 16.1 6.6C16.1 5.88203 16.682 5.3 17.4 5.3C18.118 5.3 18.7 5.88203 18.7 6.6Z" fill="#333333"></path></svg> Instagram</Button>
                            </Row>
                            <Row>
                                <Button className="text-start footerButton" style={{backgroundColor:"#ffffff",borderColor:"#ffffff",color:"#333",width:246}}><svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M7.2999 17.1C14.7999 17.1 18.9999 10.8 18.9999 5.40005V4.90005C19.7999 4.30005 20.4999 3.60005 20.9999 2.80005C20.2999 3.10005 19.4999 3.30005 18.5999 3.40005C19.4999 2.90005 20.0999 2.10005 20.3999 1.10005C19.5999 1.60005 18.6999 1.90005 17.7999 2.10005C16.2999 0.500048 13.6999 0.400048 11.9999 2.00005C10.8999 3.00005 10.4999 4.50005 10.7999 5.90005C7.4999 5.70005 4.4999 4.20005 2.3999 1.60005C1.2999 3.50005 1.8999 5.90005 3.6999 7.10005C2.9999 7.10005 2.3999 6.90005 1.7999 6.60005V6.70005C1.7999 8.70005 3.1999 10.3 5.0999 10.7C4.4999 10.9 3.8999 10.9 3.1999 10.8C3.6999 12.5 5.2999 13.6 6.9999 13.6C5.4999 14.7 3.7999 15.4 1.8999 15.4C1.5999 15.4 1.1999 15.4 0.899902 15.3C2.8999 16.5 5.0999 17.1 7.2999 17.1" fill="#333333"></path></svg> Twitter</Button>
                            </Row>
                            <Row>
                                <Button className="text-start footerButton" style={{backgroundColor:"#ffffff",borderColor:"#ffffff",color:"#333",width:246}}><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M18.9 0H1.1C0.5 0 0 0.5 0 1.1V18.9C0 19.5 0.5 20 1.1 20H10.7V12.3H8.1V9.3H10.7V7C10.7 4.4 12.3 3 14.6 3C15.7 3 16.7 3.1 16.9 3.1V5.8H15.3C14 5.8 13.8 6.4 13.8 7.3V9.2H16.8L16.4 12.2H13.8V20H18.9C19.5 20 20 19.5 20 18.9V1.1C20 0.5 19.5 0 18.9 0Z" fill="#333333"></path></svg> Facebook</Button>
                            </Row>
                            <Row>
                                <Button className="text-start footerButton" style={{backgroundColor:"#ffffff",borderColor:"#ffffff",color:"#333",width:246}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M22.5 6.70005C22.2 5.70005 21.5 5.00005 20.6 4.70005C18.9 4.30005 12 4.30005 12 4.30005C12 4.30005 5.1 4.30005 3.4 4.80005C2.5 5.10005 1.7 5.80005 1.5 6.80005C1 8.40005 1 12 1 12C1 12 1 15.6 1.5 17.3C1.8 18.3 2.5 19 3.4 19.3C5.1 19.8 12 19.8 12 19.8C12 19.8 18.9 19.8 20.6 19.3C21.5 19 22.3 18.3 22.5 17.3C23 15.6 23 12 23 12C23 12 23 8.40005 22.5 6.70005ZM9.8 15.3V8.70005L15.6 12L9.8 15.3Z" fill="#333333"></path></svg> Youtube</Button>
                            </Row>
                            <Row>
                                <Button className="text-start footerButton" style={{backgroundColor:"#ffffff",borderColor:"#ffffff",color:"#333",width:246}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16.3729 2C16.7001 4.83809 18.2702 6.53015 21 6.71015V9.90226C19.418 10.0583 18.0323 9.53624 16.4205 8.55221V14.5224C16.4205 22.1067 8.22506 24.4767 4.93022 19.0406C2.81296 15.5424 4.10948 9.40424 10.9014 9.15823V12.5243C10.384 12.6083 9.83085 12.7403 9.32532 12.9144C7.81469 13.4304 6.95827 14.3964 7.19616 16.1005C7.65411 19.3646 13.5896 20.3306 13.096 13.9524V2.006H16.3729V2Z" fill="#333333"></path></svg> TikTok</Button>
                            </Row>
                        </Col>
                        <Col>
                            <Row style={{marginBottom:120}}>
                                <h6 style={{color:"#333",fontWeight:700,fontSize:"15px",marginBottom:20}} >ComponentsPC in</h6>
                                <Dropdown >
                                    <Dropdown.Toggle className="text-start" style={{width:260,height:43,backgroundColor:"#ffffff",color:"#888",borderColor:"#888"}}>
                                        Spain <MdKeyboardArrowDown />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu style={{width:280}}>
                                        <Dropdown.Item href="#" style={{height:43}}>Spain</Dropdown.Item>
                                        <Dropdown.Item href="#" style={{height:43}}>Portugal</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Container style={{marginTop:20}}>
                                    <Image src="/images/eAward19.png" width="100" height="30" style={{marginLeft:20}}/>
                                    <Image src="/images/eCommerceAwards.png" width="100" height="30" style={{marginLeft:30}}/>
                                </Container>

                            </Row>
                        </Col>



                    </Navbar>
                </Container>
                <Container fluid>
                    <hr style={{marginTop:100,position:"absolute"}} width="100%"/>
                </Container>
                <Container>
                    <Navbar style={{marginTop:50}}>
                        <p style={{color:"#000",fontSize:"13px",marginLeft:150,marginTop:10}}>PC Componentes y Multimedia SLU CIF B73347494. AVDA Europa, Parcela 2-5 y 2-6. Polígono industrial Las Salinas, 30840, Alhama de Murcia, Murcia. ESPAÑA.</p>
                    </Navbar>
                </Container>

            </Container>

        )
    }
}

export default Footer;