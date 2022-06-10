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


// // new method of using rouetr 
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// import your route components too



// // old method of using router methed 

// import {
  

//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Routes,
// } from "react-router-dom"
// // import your route components too





export default class App extends Component {
  // clss = "complete"

  render() {
    return (
      <>

            
        {/* hellow this is class base component and many more{this.clss} */}

        
            {/* <Route exact key={"/"} path="/" ><News pageSize={6}  category={"science"} country={"us"}/></Route> */}
        {/* <News pageSize={6}  category={"science"} country={"us"}/> */}
        {/* <News pageSize={6} /> */}




        {/* old method of using router */}
         {/* <Router>
           <NavBar/>
            <Switch>
             

            <Route exact key={"business"} path="/" ><News pageSize={6}  category={"business"} country={"us"}/></Route>
            <Route exact key={"entertainment"} path="/entertainment" ><News pageSize={6}  category={"entertainment"} country={"us"}/></Route>
            <Route exact key={"general"} path="/general" ><News pageSize={6}  category={"general"} country={"us"}/></Route>
            <Route exact key={"health"} path="/health" ><News pageSize={6}  category={" health"} country={"us"}/></Route>
            <Route exact key={"science"} path="/science" ><News pageSize={6}  category={"science"} country={"us"}/></Route>
            <Route exact key={"sports"} path="/sports" ><News pageSize={6}  category={"sports"} country={"us"}/></Route>
            <Route exact key={"technology"} path="/technology" ><News pageSize={6}  category={"technology"} country={"us"}/></Route>

            </Switch>
             
          </Router> */}
           


         <BrowserRouter>
            <NavBar/>
           <Routes>
            
              <Route  path='/' element={ <News key={"general"} pageSize={6}  category={"general"} country={"us"} />   } />
               <Route  path='business' element={ <News key={"business"} pageSize={6}  category={"business"} country={"us"} />   } />
              <Route  path='/entertainment' element={ <News key={"entertainment"} pageSize={6}  category={"entertainment"} country={"us"} />   } />
              <Route  path='/health' element={ <News key={"health"} pageSize={6}  category={"health"} country={"us"} />   } />
              <Route  path='/science' element={ <News key={"science"} pageSize={6}  category={"science"} country={"us"} />   } />
              <Route  path='/sports' element={ <News key={"sports"} pageSize={6}  category={"sports"} country={"us"} />   } />
              <Route  path='/technology' element={ <News key={"technology"} pageSize={6}  category={"technology"} country={"us"} />   } />

              </Routes>
             
          
            </BrowserRouter>  

      </>
    )
  }
}
