import React , {Component} from 'react';

class Form extends Component{
  /* constructor(){
    super();
    this.addCard = this.addCard.bind(this);
    this.state = {username: ""}
   }
       
   
   addCard(e){
    e.preventDefault();
    console.log(this.state.username);
    
    
} */
    
    render(){
        return(
            <form  onSubmit = {this.props.addCard}>
                <input type="text" placholder="Enter Name" value={this.props.username} onChange = {this.props.updateCard}
                />
                <button type="submit">Submit</button>
    
            </form>
        )
    }
   
}
export default Form;