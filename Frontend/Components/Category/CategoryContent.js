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
        this.state={Subcategories:[],isLoading:true}
    }
    async componentDidMount(){
        let response=null;
        let errorHappened=false;
        try{
            response = await fetch("http://localhost:8082/api/v1/subcategories?maincategory="+this.props.categoryName);
        }catch(error){
            errorHappened=true;
        }
        if (response != null){
            if(response.status != 200){
                errorHappened=true;
            }
        }

        let body=null;
        let Subcategories=[]
        if (!errorHappened){
            body = await response.json();

            body.forEach(element =>{
                Subcategories.push(element)
            });
        }
        this.timerID = setInterval(
            ()=> this.checkProducts(),
            100
        )
        if (errorHappened){
            this.setState({Subcategories:[],isLoading:true});
        }
        else{
            this.setState({Subcategories:Subcategories,isLoading:false});
        }
    }

    async checkProducts(){
        if (this.state.Subcategories.length == 0){
            let response=null;
            let errorHappened=false;
            try{
                response = await fetch("http://localhost:8082/api/v1/subcategories?maincategory="+this.props.categoryName);
            }catch(error){
                errorHappened=true;
            }
            if (response != null){
                if(response.status != 200){
                    errorHappened=true;
                }
            }

            let body=null;
            let Subcategories=[]
            if (!errorHappened){
                body = await response.json();
                body.forEach(element =>{
                    Subcategories.push(element)
                });
            }
            if (errorHappened){
                this.setState({Subcategories:[],isLoading:true});
            }
            else{
                this.setState({Subcategories:Subcategories,isLoading:false});

            }
        }

    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return(
            <Container  fluid>
                <NavBar />
                <CategoryBody subCategories={this.state.Subcategories} isLoading={this.state.isLoading} mainCategory={this.props.categoryName} />
                <Footer />
            </Container>

        );
    }


}
export default CategoryContent;

