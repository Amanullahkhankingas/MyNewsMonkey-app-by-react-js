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
// new method of using rouer 
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
// } from "react-router-dom"
// // import your route components too





export default class App extends Component {
  // clss = "complete"

  render() {
    return (
      <>

            
        {/* hellow this is class base component and many more{this.clss} */}

        <NavBar/>
        
            {/* <Route exact key={"/"} path="/" ><News pageSize={6}  category={"science"} country={"us"}/></Route> */}
        {/* <News pageSize={6}  category={"science"} country={"us"}/> */}
        {/* <News pageSize={6} /> */}




        {/* old method of using router */}
         {/* <Router>
            <Switch>
             

            <Route exact key={"business"} path="/" ><News pageSize={6}  category={" business"} country={"us"}/></Route>
            <Route exact key={"entertainment"} path="/entertainment" ><News pageSize={6}  category={" entertainment"} country={"us"}/></Route>
            <Route exact key={"general"} path="/general" ><News pageSize={6}  category={" general"} country={"us"}/></Route>
            <Route exact key={"health"} path="/health" ><News pageSize={6}  category={" health"} country={"us"}/></Route>
            <Route exact key={"science"} path="/science" ><News pageSize={6}  category={" science"} country={"us"}/></Route>
            <Route exact key={"sports"} path="/sports" ><News pageSize={6}  category={" sports"} country={"us"}/></Route>
            <Route exact key={"technology"} path="/technology" ><News pageSize={6}  category={" technology"} country={"us"}/></Route>

            </Switch>
             
          </Router> */}
           


         <BrowserRouter>
           <Routes>
            
              <Route key={"/"} path='/' element={ <News pageSize={6}  category={" general"} country={"us"} />   } />
              <Route key={"business"} path='business' element={ <News pageSize={6}  category={" business"} country={"us"} />   } />
              <Route key={"entertainment"} path='entertainment' element={ <News pageSize={6}  category={" entertainment"} country={"us"} />   } />
              <Route key={"health"} path='health' element={ <News pageSize={6}  category={" health"} country={"us"} />   } />
              <Route key={"science"} path='science' element={ <News pageSize={6}  category={" science"} country={"us"} />   } />
              <Route key={"sports"} path='sports' element={ <News pageSize={6}  category={" sports"} country={"us"} />   } />
              <Route key={"technology"} path='technology' element={ <News pageSize={6}  category={" technology"} country={"us"} />   } />

            </Routes>
             
          
            </BrowserRouter>

      </>
    )
  }
}
