import React,{Fragment,Component} from "react"
import {Form,Button} from "react-bootstrap"
import axios from "axios"

class FormComponenet extends Component{
    state={
    	name:"",
        tech:[]
     
    }
    checkedValue = []
    handleChange = (e)=>{
       if(e.target.checked){
           this.checkedValue.push(e.target.value)
       }else{
       	 let checkIndex = this.checkedValue.indexOf(e.target.value)
       	 if(checkIndex > -1){
       	 	this.checkedValue.splice(checkIndex,1)
       	 }
       }

        this.setState({
        	...this.state,
        	value:this.checkedValue.toString(),
           [e.target.name]:e.target.value
       })
      
    }

	submitHandler = async (e) =>{
        e.preventDefault()
         console.log(this.state)
        let state = this.state

        await axios.post("https://localhost:9000/aliens",state, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
                timeout: 15000
            })
        .then(res=>console.log(res))
        .catch(err=> console.log(err))
	}
	render(){
	return(
     <Fragment>
     	<h1 className="text-center">Form</h1>
     	<Form onSubmit={this.submitHandler}>
     	  <Form.Group>
     		<Form.Label className="h4">Name</Form.Label>
     		<Form.Control type="text" name="name" placeholder="Enter Name" value={this.state.name}onChange={(e)=>this.handleChange(e)} />
     	  </Form.Group>
     	  <div className="form--check h5">	
     	  	<Form.Check inline 	label="Node" name="tech" value="Node" type="checkbox" className="checkdata" onChange={(e)=>this.handleChange(e)} id="Checkbox-1"/>
     	    <Form.Check inline 	label="Javascript" name="tech" value="Javascript" type="checkbox" className="checkdata" onChange={(e)=>this.handleChange(e)} id="Checkbox-2"/>
          </div>
          
     	  <Button type="submit" className="text-center d-block w-100 h3">SUBMIT</Button>
     	 </Form>
     </Fragment>
	)
 }
}
export default FormComponenet