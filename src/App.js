// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;




// class base component is start from here 

import React, { Component } from 'react'
import NavBar from './component/NavBar'
import News from './component/News'

export default class App extends Component {
  // clss = "complete"

  render() {
    return (
      <div>
        {/* hellow this is class base component and many more{this.clss} */}

        <NavBar/>
        
        <News/>

      </div>
    )
  }
}
