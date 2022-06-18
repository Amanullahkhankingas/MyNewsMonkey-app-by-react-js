// import { getByTitle } from '@testing-library/react'
import React from 'react'

const NewsItem =(props)=> {


    const {title , description ,ImageUrl ,newsUrl ,source,date, author } = props;
    return (
      <div>
        {/* NewsItem is here */}


        <div className='container  ' style={{margin:"30px 0px"}}> 
          <div className="card" >

            <div style={{display:'flex', flexDirection:'flex-end', position:'absolute', right:'0' }}>
            {/* <span className='position-absolute top-0 translate-middle badge rounded-pill bg-danger' style={{left:'90%' ,zIndex:1}}> */}
               
            <span className=' badge rounded-pill bg-danger' style={{left:'90%' ,zIndex:1}}>
              {source}
              </span>

              {/* </span> */}
            </div>

            <img src={ImageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}. . .</p>
            <p className='card-text'><small className='text-muted'>By {!author ? "Unknown" :author} on {new Date(date).toGMTString()}</small></p>
              <a href={newsUrl}  target="_blank" without rel="noopener noreferrer" className="btn btn-primary">Read More</a>
            </div>
          </div> 
        </div>

      </div>
    )
  
}

export default NewsItem


