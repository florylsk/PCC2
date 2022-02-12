import NavBar
    from "../NavBar/NavBar";
import React
    from "react";
import {Container} from "react-bootstrap";
import HomeButtons
    from "./HomeButtons";
import HomeProducts
    from "./HomeProducts";
import {isLocalURL} from "next/dist/shared/lib/router/router";
import Footer
    from "../Footer";

import Head from "next/head"

class HomePage extends React.Component{

    constructor(props) {
        super(props);
        this.state={RecommendedProducts:[],InterestingProducts:[],isLoading:true}
    }

    async componentDidMount(){
        let response=null;
        let errorHappened=false;
        try{
            response = await fetch("http://localhost:8082/api/v1/products?type=recommended");
        }catch(error){
            errorHappened=true;
        }
        if (response != null){
            if(response.status != 200){
                errorHappened=true;
            }
        }

        let body=null;
        let RecommendedProducts=[]
        if (!errorHappened){
            body = await response.json();

            body.forEach(element =>{
                RecommendedProducts.push(element)
            });
        }
        try{
            response = await fetch("http://localhost:8082/api/v1/products?type=interesting");
        }catch(error){
            errorHappened=true;
        }
        body=null;
        let InterestingProducts=[]
        if (!errorHappened){
            body = await response.json();

            body.forEach(element =>{
                InterestingProducts.push(element)
            });
        }
        this.timerID = setInterval(
            ()=> this.checkProducts(),
            200
        )
        if (errorHappened){
            this.setState({RecommendedProducts:[],InterestingProducts:[],isLoading:true});
        }
        else{
            this.setState({RecommendedProducts:RecommendedProducts,InterestingProducts:InterestingProducts,isLoading:false});
        }
    }

    async checkProducts(){
        if(this.state.RecommendedProducts.length == 0 || this.state.InterestingProducts.length == 0){
        let response=null;
        let errorHappened=false;
        try{
            response = await fetch("http://localhost:8082/api/v1/products?type=recommended");
        }
        catch(error){
            errorHappened=true;
        }
        if (response != null){
            if(response.status != 200){
                errorHappened=true;
            }
        }
        let body=null;
        let RecommendedProducts=[]
        if (!errorHappened){
            body = await response.json();

            body.forEach(element =>{
                RecommendedProducts.push(element)
            });
        }

        try{
            response = await fetch("http://localhost:8082/api/v1/products?type=interesting");
        }catch(error){
            errorHappened=true;
        }
        body=null;
        let InterestingProducts=[]
        if (!errorHappened){
            body = await response.json();

            body.forEach(element =>{
                InterestingProducts.push(element)
            });
        }

        if (errorHappened){
            this.setState({RecommendedProducts:[],InterestingProducts:[],isLoading:true});
        }
        else{
            this.setState({RecommendedProducts:RecommendedProducts,InterestingProducts:InterestingProducts,isLoading:false});
        }
        }
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {

        return(
            <Container fluid>
                <Head>
                    <title>FOTech</title>
                </Head>
                <NavBar showMiddle={true} />
                <HomeButtons />
                <HomeProducts RecommendedProducts={this.state.RecommendedProducts} InterestingProducts={this.state.InterestingProducts} isLoading={this.state.isLoading} />
                <Footer />
            </Container>


        )
    }
}


export default HomePage;