import React ,{ useEffect, useState } from "react";
import Loader from "./Loader";
import NewsItem from "./NewsItem";

import PropTypes from "prop-types";

// import InfiniteScroll from "react-infinite-scroll-component";
import InfiniteScroll from 'react-infinite-scroll-component';
// import { useEffect, useState } from "react";

const News =(props)=> {
 
  //no need local json data after fetching  API from news API site with the help of componetDidMount life sycle method
  // articles =  [
  //   {
  //     "source": { "id": "news24", "name": "News24" },
  //     "author": "Heinz Schenk",
  //     "title": "How MS Dhoni inspired Proteas allrounder during IPL: 'Anything is possible'",
  //     "description": "Dwaine Pretorius is too level-headed to suddenly turn into a freewheeling cavalier, but the Proteas all-rounder now believes \"anything is always possible\" on a cricket field.",
  //     "url": "https://www.news24.com/sport/Cricket/Proteas/how-ms-dhoni-inspired-proteas-allrounder-during-ipl-anything-is-possible-20220607",
  //     "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/3461/645b3d906ef24d5788c63d9cbfccf323.jpg",
  //     "publishedAt": "2022-06-07T07:18:38+00:00",
  //     "content": "<ul><li>Proteas all-rounder Dwaine Pretorius now truly believes anything is possible on a cricket field, thanks to MS Dhoni.</li><li>The legendary Indian skipper had a profound effect on the 33-year-… [+3613 chars]"
  //   },
  //   {
  //     "source": { "id": "bbc-sport", "name": "BBC Sport" },
  //     "author": "BBC Sport",
  //     "title": "Shane Warne memorial - watch & follow updates",
  //     "description": "Watch live coverage and follow text updates and tributes from the state memorial for Australian cricket legend Shane Warne at the Melbourne Cricket Ground.",
  //     "url": "http://www.bbc.co.uk/sport/live/cricket/60916236",
  //     "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png",
  //     "publishedAt": "2022-03-30T08:22:26.498888Z",
  //     "content": "Former England bowler and BBC cricket presenter Isa Guha, who became a colleague of Warne's in the commentary box: \"It has been a strange few weeks - a lot of shock and then we did our own tribute at… [+396 chars]"
  //   },
  //   {
  //     "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
  //     "author": null,
  //     "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //     "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //     "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //     "publishedAt": "2020-04-27T11:41:47Z",
  //     "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  //   },
  //   {
  //     "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
  //     "author": null,
  //     "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //     "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //     "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //     "publishedAt": "2020-03-30T15:26:05Z",
  //     "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  //   }
  // ]

  const capitalize = function(strSentence) {
    return strSentence.toLowerCase().replace(/\b[a-z]/g, convertToUpper);

    function convertToUpper() {
      return arguments[0].toUpperCase();
    }
  };

  // constructor(props) {
  //   super(props);
  //   console.log("this is the constructure");
  //   this.state = {
  //     // articles: this.articles,
  //     articles: [],
  //     loading: true,
  //     page: 1,
  //     totalResults: 0
  //   };
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    
    

    // document.title = ` NewsMonkey - ${this.capitalize(props.category)} `; /* eslint-disable */ 

    // console.log(this.state.page)
  // }

  // async componentDidMount(){
  //   console.log("this is mount component life cycle");
  //   let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=b295165af8364ddfa6f65a88b1bedf16";
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   console.log(parsedData);
  //   this.setState({articles: parsedData.articles})

  // }

  // lecture 33 refactoring news component to use the same fucntion

  const updateNews = async ()=>{

    // props.setProgress(10)
    // this.setState({ loading: true });

    setLoading(true);
    
    // console.log("this is mount component life cycle");

    
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b295165af8364ddfa6f65a88b1bedf16&page=${this.state.page}&pagesize=${props.pageSize}`;

    // let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=b364989c74e6449b5bc9f3867bf1b1015&page=1&pagesize=6`;
    // let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=b295165af8364ddfa6f65a88b1bedf16&page=1&pagesize=6`;
    let data = await fetch(url);
    // props.setProgress(30)
    let parsedData = await data.json();
    // props.setProgress(70)


    // console.log(parsedData);
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false,
    // });


    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false)

    // props.setProgress(100)
  }


  useEffect(() => {
  
    document.title = ` NewsMonkey - ${capitalize(props.category)} `;
    updateNews();
  }, []);

  

  // async componentDidMount() {
  //   this.updateNews();

    //  this.setState({loading:true})
    //   // console.log("this is mount component life cycle");
    //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b295165af8364ddfa6f65a88b1bedf16&page=1&pagesize=${props.pageSize}`;
    //   // let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=b295165af8364ddfa6f65a88b1bedf16&page=1&pagesize=${props.pageSize}`;
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   console.log(parsedData);
    //   this.setState({articles: parsedData.articles, totalResults:parsedData.totalResults,
    //     loading:false
    //   })
  // }

  // handleNextChange = async ()=>{
  //    this.setState({page:this.state.page +1})
  //   this.updateNews()

  //   // console.log("next")
  //   // if(!(this.state.page +1 > Math.ceil(this.state.totalResults/props.pageSize))){

    //   //       this.setState({loading:true})
    
    //   //       let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b295165af8364ddfa6f65a88b1bedf16&page=${this.state.page +1}&pagesize=${props.pageSize}`;
    //   //       // let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=b295165af8364ddfa6f65a88b1bedf16&page=${this.state.page +1}&pageSize=${props.pageSize}`;
    //   //       let data = await fetch(url);
    //   //       let parsedData = await data.json();
    
    //   //       this.setState({page:this.state.page +1,
    //   //         articles: parsedData.articles,
    //   //         loading: false
    //   //       })
    
    //   //     }
    
    //     };

    //     handlePreviousChange= async ()=> {
      
      //       this.setState({page:this.state.page - 1})
      //      this.updateNews()
      
      
      
      
      //   // this.setState({loading:true})
      //   // console.log("Previous");
      
      //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b295165af8364ddfa6f65a88b1bedf16&page={${this.state.page - 1}}&pagesize=${props.pageSize}`;
      //   // // let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=b295165af8364ddfa6f65a88b1bedf16&page=${this.state.page -1}&pagesize=${props.pageSize}`;
      //   // let data = await fetch(url);
      //   // let parsedData = await data.json();
      
      //   // this.setState({page:this.state.page -1,
      //   //   articles: parsedData.articles       ,  
      //   // })
      
      // }
      
      const fetchData = async () => {
        // this.setState({ page : this.state.page + 1 });
        
        
        
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pagesize=${props.pageSize}`;
        // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b295165af8364ddfa6f65a88b1bedf16&page=${this.state.page}&pagesize=${props.pageSize}`;
        // let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=b295165af8364ddfa6f65a88b1bedf16&page=1&pagesize=${props.pageSize}`;
        
        // let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=b364989c74e6449b5bc9f3867bf1b1015&page=1&pagesize=6`;
        // let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=b295165af8364ddfa6f65a88b1bedf16&page=1&pagesize=6`;
                    setPage(page + 1)
    let data = await fetch(url);
    let parsedData = await data.json();

    // this.setState({
    //   articles: this.state.articles.concat(parsedData.articles),
    //   totalResults: parsedData.totalResults,
    // });

    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  }

  
    // console.log("render wala part")
    return (
      <div>
        {/* this is a news component */}
        {/* {this.state.articles.map((element)=>{console.log(element)})} */}

        <h1 className="text-center">
          NewsMonkey - Top {capitalize(props.category)} headlines
        </h1>

        {loading && <Loader/>}

        <InfiniteScroll
          dataLength={articles.length} //This is important field to render the next data
          next={fetchData}
          hasMore={articles.length !== totalResults}
          loader={ <Loader />}
          // loader={  this.state.articles.length !== this.state.totalResults -1 ? <Loader /> : "the data is over" }

          // endMessage={
          //   <p style={{ textAlign: 'center' }}>
          //     <b>Yay! You have seen it all</b>
          //   </p>
          // }
             >
          <div className="container">
            <div className="row">
              {/* {!this.state.loading && this.state.articles.map((element)=>{   */}
              {       articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                  {/* <div className="col-md-4" > */}
                    {/* <NewsItem title={element.title.slice(0,45)} description= {element.description.slice(0,88)} ImageUrl={element.urlToImage} newsUrl={element.url}  /> */}
                    <NewsItem
                      title={element.title ? element.title : " "}
                      description={
                        element.description ? element.description : " "
                      }
                      ImageUrl={
                        !element.urlToImage
                          ? "https://c.ndtvimg.com/2022-06/r0emslh_cycling-generic-afp_625x300_08_June_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675"
                          : element.urlToImage
                      }
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between">
         <button type="button" disabled={this.state.page <=1} className="btn btn-dark" onClick={this.handlePreviousChange}> &larr; previous</button>
         <button type="button" disabled= {this.state.page + 1 >Math.ceil(this.state.totalResults/props.pageSize)} className="btn btn-dark" onClick={this.handleNextChange}>Next &rarr;</button>
         </div> */}

        {/* <NewsItem/>
          <NewsItem/>
          <NewsItem/>
          <NewsItem/>
          <NewsItem/> */}
      </div>
    );
  }


News.defaultProps = {
  country: "us",
  pageSize: 6,
  loading: false,
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  loading: PropTypes.bool,
};


export default News;
