
import React
    from "react";
import Cookies
    from "js-cookie";
import OrderBody
    from "./OrderBody";
import NavBar
    from "../NavBar/NavBar";
import Footer
    from "../Footer";
import {Container} from "react-bootstrap";
import Head
    from "next/head";


class OrderContent extends React.Component{
    constructor(props) {
        super(props);
        this.user = null;

        this.state={userItems:null,isLoading:true}
    }

    async componentDidMount(){
        try{
            this.user=JSON.parse(decodeURI(Cookies.get('userToken')));
        }catch(error){
            window.location.href="/login";
        }
        let response=null;
        let errorHappened=false;
        try{
            response = await fetch("http://localhost:8082/api/v1/products/users/shopping-cart/by-id/"+this.user.id);
        }catch(error){
            errorHappened=true;
        }
        if(response != null){
            if(response.status!= 200){
                errorHappened=true;
            }
        }
        let products=null;
        if (!errorHappened){
            products = await response.json();
        }
        this.timerID = setInterval(
            ()=> this.checkProducts(),
            3000
        )
        if (errorHappened){
            this.setState({userItems:null,isLoading:true});
        }
        else{
            this.setState({userItems:products,isLoading:false});
        }
    }

    async checkProducts(){
        let response=null;
        let errorHappened=false;
        try{
            response = await fetch("http://localhost:8082/api/v1/products/users/shopping-cart/by-id/"+this.user.id);
        }catch(error){
            errorHappened=true;
        }
        if(response != null){
            if(response.status!= 200){
                errorHappened=true;
            }
        }
        let products=null;
        if (!errorHappened){
            products = await response.json();
        }
        if (errorHappened){
            this.setState({userItems:null,isLoading:true});
        }
        else{
            this.setState({userItems:products,isLoading:false});
        }


    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <Container fluid>
                <Head>
                    <title>Finish Order - FOTech</title>
                </Head>
                <OrderBody userItems={this.state.userItems} isLoading={this.state.isLoading} user={this.user} />
            </Container>

        );
    }


}

export default OrderContent;