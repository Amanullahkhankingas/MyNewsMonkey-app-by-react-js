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


import React from 'react'
import NavBar from './component/NavBar'
import News from './component/News'


// // new method of using rouetr 
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// import LoadingBar from 'react-top-loading-bar'

// import your route components too



// // old method of using router methed 

// import {
  

//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Routes,
// } from "react-router-dom"
// // import your route components too





const App =()=> {
  // clss = "complete"
  // pageSize = 3
  const apiKey =process.env.REACT_APP_NEWS_API

  // apiKey =  "777dc32111e741b49fa3372cbb479f28"
  // apiKey = "364989c74e6449b5bc9f3867bf1b1015" 
  // const apiKey = 'b295165af8364ddfa6f65a88b1bedf16'   
  // state ={
  //   progress:0
  // }
  // setProgress=(progress)=>{
  //   this.setState({progress:progress})
  // }
   
  //  it is for top laoding bar and i cannot usethem because is damage all my app apfter isntalling the top loading bar packge  
  // const[progress, setProgress] = useState(0);

  
    return (
      <>
            
      {/* hellow this is class base component and many more{this.clss} */}

      
          {/* <Route exact key={"/"} path="/" ><News  setProgress={this.setProgress}  apiKey={this.apiKey}  pageSize={6}  category={"science"} country={"us"}/></Route> */}
      {/* <News  setProgress={this.setProgress}  apiKey={this.apiKey}  pageSize={6}  category={"science"} country={"us"}/> */}
      {/* <News  setProgress={this.setProgress}  apiKey={this.apiKey}  pageSize={6} /> */}




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

            {/* <LoadingBar
            height={5}
            color= '#f11946'
            progress={this.state.progress}
            /> */}


      {/*  it is for top laoding bar and i cannot usethem because is damage all my app apfter isntalling the top loading bar packge   */}
              {/* <Routes>
            
              
              <Route  path='/' element={ <News  setProgress={setProgress}  apiKey={apiKey}  key={"general"} pageSize={6}  category={"general"} country={"us"} />   } />
               <Route  path='business' element={ <News  setProgress={setProgress}  apiKey={apiKey}  key={"business"} pageSize={6}  category={"business"} country={"us"} />   } />
              <Route  path='/entertainment' element={ <News  setProgress={setProgress}  apiKey={apiKey}  key={"entertainment"} pageSize={6}  category={"entertainment"} country={"us"} />   } />
              <Route  path='/health' element={ <News  setProgress={setProgress}  apiKey={apiKey}  key={"health"} pageSize={6}  category={"health"} country={"us"} />   } />
              <Route  path='/science' element={ <News  setProgress={setProgress}  apiKey={apiKey}  key={"science"} pageSize={6}  category={"science"} country={"us"} />   } />
              <Route  path='/sports' element={ <News  setProgress={setProgress}  apiKey={apiKey}  key={"sports"} pageSize={6}  category={"sports"} country={"us"} />   } />
              <Route  path='/technology' element={ <News  setProgress={setProgress}  apiKey={apiKey}  key={"technology"} pageSize={6}  category={"technology"} country={"us"} />   } />

              </Routes> */}

              <Routes>
            
              {/* <Route  path='/' element={ <News  setProgress={this.setProgress}  apiKey={this.apiKey} key={"general"} pageSize={6}  category={"general"} country={"us"} />   } /> */}
              <Route  path='/' element={ <News   apiKey={apiKey}  key={"general"} pageSize={6}  category={"general"} country={"us"} />   } />
               <Route  path='business' element={ <News   apiKey={apiKey}  key={"business"} pageSize={6}  category={"business"} country={"us"} />   } />
              <Route  path='/entertainment' element={ <News   apiKey={apiKey}  key={"entertainment"} pageSize={6}  category={"entertainment"} country={"us"} />   } />
              <Route  path='/health' element={ <News   apiKey={apiKey}  key={"health"} pageSize={6}  category={"health"} country={"us"} />   } />
              <Route  path='/science' element={ <News   apiKey={apiKey}  key={"science"} pageSize={6}  category={"science"} country={"us"} />   } />
              <Route  path='/sports' element={ <News   apiKey={apiKey}  key={"sports"} pageSize={6}  category={"sports"} country={"us"} />   } />
              <Route  path='/technology' element={ <News   apiKey={apiKey}  key={"technology"} pageSize={6}  category={"technology"} country={"us"} />   } />

              </Routes>
             
          
            </BrowserRouter>  

            {/* REACT_APP_NEWS_API = "777dc32111e741b49fa3372cbb479f28" */}

      </>
    )
  
}

export default App;
