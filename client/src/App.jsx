import React from "react"
import FormComponenet from "./crud/Form"
import "bootstrap/dist/css/bootstrap.css"
import {Container} from "react-bootstrap"


const App = ()=>{
	return(
	 <Container className="mt-3 border p-3">
       <FormComponenet />
     </Container>
	)
}
export default App;