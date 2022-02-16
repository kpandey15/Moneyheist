import React from 'react'
import a1 from '../image/a1.jpg' 
import a2 from '../image/a2.jpg' 
import a3 from '../image/a3.jpg'
import a4 from '../image/a4.jpg'
import a5 from '../image/a5.png'
import a6 from '../image/a6.jpg'
const Second = () => {
    return (
        <div className = 'second'>
         
           <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
             <div className="carousel-indicators">
               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
              </div>
           <div className="carousel-inner">
              <div className="carousel-item active">
                 <img src={a1} className="d-block w-100" alt="..." />
              </div>
                 <div className="carousel-item">
                   <img src={a2} className="d-block w-100" alt="..."/>
               </div>
              <div className="carousel-item">
                    <img src={a3} className="d-block w-100" alt="..."/>
               </div>
               <div className="carousel-item">
                    <img src={a4} className="d-block w-100" alt="..."/>
               </div>
               <div className="carousel-item">
                    <img src={a5} className="d-block w-100" alt="..."/>
               </div>
               <div className="carousel-item">
                    <img src={a6} className="d-block w-100" alt="..."/>
               </div>
            </div>
           <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
         </button>
          </div>
          </div>
     
    )
}

export default Second
