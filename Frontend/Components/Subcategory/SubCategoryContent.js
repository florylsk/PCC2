import React
    from "react";
import {Container} from "react-bootstrap";
import NavBar
    from "../NavBar/NavBar";
import SubCategoryBody
    from "./SubCategoryBody";
import Footer
    from "../Footer";
import Head
    from "next/head";



class SubCategoryContent extends React.Component{
    constructor(props) {
        super(props);
        this.state={products:[],isLoading:true}
    }

    async componentDidMount(){
        let response=null;
        let errorHappened=false;
        try{
            response = await fetch("http://localhost:8082/api/v1/products?subcategory="+this.props.subCategory);
        }catch(error){
            errorHappened=true;
        }
        if (response != null){
            if(response.status != 200){
                errorHappened=true;
            }
        }
        let body=null;
        let products=[]
        if (!errorHappened){
            body = await response.json();

            body.forEach(element =>{
                products.push(element)
            });
        }
        this.timerID = setInterval(
            ()=> this.checkProducts(),
            100
        )
        if (errorHappened){
            this.setState({products:[],isLoading:true});
        }
        else{
            this.setState({products:products,isLoading:false});
        }
    }

    async checkProducts(){
        if (this.state.products.length == 0){
            let response=null;
            let errorHappened=false;
            try{
                response = await fetch("http://localhost:8082/api/v1/products?subcategory="+this.props.subCategory);
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
            let products=[]
            if (!errorHappened){
                body = await response.json();

                body.forEach(element =>{
                    products.push(element)
                });
            }

            if (errorHappened){
                this.setState({products:[],isLoading:true});
            }
            else{
                this.setState({products:products,isLoading:false});
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
                    <title>{this.props.subCategory === null ? "FOTech" : (this.props.subCategory.charAt(0).toUpperCase() + this.props.subCategory.slice(1) + " - " + "FOTech")}</title>
                </Head>
                <NavBar/>
                <SubCategoryBody products={this.state.products} subCategory={this.props.subCategory} mainCategory={this.props.mainCategory} />
                <Footer />
            </Container>

        );
    }
}

export default SubCategoryContent;