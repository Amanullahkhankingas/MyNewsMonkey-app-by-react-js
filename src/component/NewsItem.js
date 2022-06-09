// import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export class NewsItem extends Component {


  
  
  



  render() {
        
  


    let {title , description ,ImageUrl ,newsUrl  } = this.props
    return (
      <div>
        {/* NewsItem is here */}


        <div className='container  ' style={{margin:"30px 0px"}}> 
          <div className="card" >
            <img src={ImageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}. . .</p>
              <a href={newsUrl}  target="_blank" without rel="noopener noreferrer" className="btn btn-primary">Read More</a>
            </div>
          </div> 
        </div>

      </div>
    )
  }
}

export default NewsItem


