import React
    from "react";
import CategoryBody
    from "./CategoryBody";
import {Container} from "react-bootstrap";
import NavBar
    from "../NavBar";
import Footer
    from "../Footer";


class CategoryContent extends React.Component{

    constructor(props) {
        super(props);
        this.state={CategoryProducts:[],isLoading:true}
    }
    async componentDidMount(){
        let response=null;
        let errorHappened=false;
        try{
            response = await fetch("http://localhost:8082/api/v1/products?maincategory="+this.props.categoryName);
        }catch(error){
            errorHappened=true;
        }
        if (response != null){
            if(response.status != 200){
                errorHappened=true;
            }
        }

        let body=null;
        let CategoryProducts=[]
        if (!errorHappened){
            body = await response.json();

            body.forEach(element =>{
                CategoryProducts.push(element)
            });
        }
        this.timerID = setInterval(
            ()=> this.checkProducts(),
            100
        )
        if (errorHappened){
            this.setState({CategoryProducts:[],isLoading:true});
        }
        else{
            this.setState({CategoryProducts:CategoryProducts,isLoading:false});
        }
    }

    async checkProducts(){
        if (this.state.CategoryProducts.length == 0){
            let response=null;
            let errorHappened=false;
            try{
                response = await fetch("http://localhost:8082/api/v1/products?maincategory="+this.props.categoryName);
            }catch(error){
                errorHappened=true;
            }
            if (response != null){
                if(response.status != 200){
                    errorHappened=true;
                }
            }

            let body=null;
            let CategoryProducts=[]
            if (!errorHappened){
                body = await response.json();
                body.forEach(element =>{
                    CategoryProducts.push(element)
                });
            }
            if (errorHappened){
                this.setState({CategoryProducts:[],isLoading:true});
            }
            else{
                this.setState({CategoryProducts:CategoryProducts,isLoading:false});

            }
        }

    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return(
            <Container fluid>
                <NavBar />
                <CategoryBody categoryProducts={this.state.CategoryProducts} isLoading={this.state.isLoading} />
                <Footer />
            </Container>

        );
    }


}
export default CategoryContent;

