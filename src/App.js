import React from 'react';

const App = () => {

  return(

   <div className="container">
     <div className="valid-keys">
       <span className="matched">Rod</span>
       <span className="remainder">rigo</span>
     </div>
     <div className="typed-keys"></div>
     <div className="completed-word">
       <ol>
         <ul>Chocolate</ul>
         <ul>pizza</ul>
         <ul>Cachorro quente</ul>
       </ol>
     </div>
   </div>

  )

}

export default App;