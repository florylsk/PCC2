import React
    from "react";
import ProductBody
    from "./ProductBody";
import NavBar
    from "../NavBar/NavBar";
import {Container} from "react-bootstrap";
import Footer
    from "../Footer";
import Head from "next/head"
import Cookies
    from "js-cookie";


class ProductContent extends React.Component{
    constructor(props) {
        super(props);
        this.user = null;
        try{
            this.user=JSON.parse(decodeURI(Cookies.get('userToken')));
        }
        catch(error){this.user=null}
        this.state={product:null, isLoading:true}
    }
    async componentDidMount(){
        let response=null;
        let errorHappened=false;
        try{
            response = await fetch("http://localhost:8082/api/v1/products/by-id/"+this.props.productID);
        }catch(error){
            errorHappened=true;
        }
        if(response != null){
            if(response.status!= 200){
                errorHappened=true;
            }
        }
        let product=null;
        if (!errorHappened){
            product = await response.json();
        }
        this.timerID = setInterval(
            ()=> this.checkProducts(),
            100
        )
        if (errorHappened){
            this.setState({product:null,isLoading:true});
        }
        else{
            this.setState({product:product,isLoading:false});
        }
    }

    async checkProducts(){
        if (this.state.product === null){
            let response=null;
            let errorHappened=false;
            try{
                response = await fetch("http://localhost:8082/api/v1/products/by-id/"+this.props.productID);
            }catch(error){
                errorHappened=true;
            }
            if(response != null){
                if(response.status!= 200){
                    errorHappened=true;
                }
            }
            let product=null;
            if (!errorHappened){
                product = await response.json();
            }
            if (errorHappened){
                this.setState({product:null,isLoading:true});
            }
            else{
                this.setState({product:product,isLoading:false});
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
                    <title>{this.state.product === null ? "ComponentsPC" : (this.state.product.name)}</title>
                </Head>
                <NavBar product={true} productContent={this.state.product} isLoading={this.state.isLoading} />
                <ProductBody product={this.state.product} isLoading={this.state.isLoading} user={this.user}/>
                <Footer />
            </Container>

        );
    }
}

export default ProductContent;