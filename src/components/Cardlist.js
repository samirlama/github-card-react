import React from 'react';
 const Cardlist = ({cards}) => {
     return(
         <div>
             <img src={cards.avatar_url} style={{width: "75px" , height: "75px"}} />
             <p>{cards.login}</p>
         </div>

     )
 }
 export default Cardlist;