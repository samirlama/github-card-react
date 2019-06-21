import React , {Component } from 'react';
import Cardlist from './Cardlist.js';
import Form from './Form.js';
import axios from 'axios';
class Card extends Component{
   state = {
        cards: [] , 
        username: ""
    }   
  

   addCard = async (event) =>{
       event.preventDefault();
       console.log(this.state.username);
      const resp = await
      //  axios.get(`https://api.github.com/users/${user}`)
      axios.get(`https://api.github.com/users/${this.state.username}`);
        //.then(data => console.log(data.data));
        console.log(resp.data);
        let data = resp.data;
        let cards = this.state.cards
        cards.push({
            avatar_url: data.avatar_url,
            login: data.login
        })
        this.setState({
            cards
        })
       
   }
  
   updateCard = event => {
       this.setState({
           username: event.target.value
       })
   }
    render(){
        return(
            <div>
                This is a Card Component
                <Form 
                    username = {this.state.username} 
                    addCard = {this.addCard}
                    updateCard = {this.updateCard}
                    />
                {this.state.cards.map(
                    card => {
                        return(
                    <Cardlist cards={card} />
                    )}
                )}

            </div>
        )
    }
}
export default Card;