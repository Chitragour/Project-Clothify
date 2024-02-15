import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../../Images/Brands.png';  
import image2 from '../../Images/offers.jpg';
 import '../../Css/Home/ImageCaresoul.css';

const ImageCarousel =()=>{
    const images=[
        {src:image1, text:'brands coupons'},
    {src:image2, text:'exchnage offers'}
]
return (
    <div>
      
<div className="image-carousel-container">
<Carousel
  showStatus={false}
  showThumbs={false}
  infiniteLoop={true}
  autoPlay={true}
  interval={3000}
  transitionTime={500}
  showIndicators={false}
>
  
    {images.map((image, index) => (
        <div key={index}>
           <img src={image.src} alt={`Image ${index + 1}`} />
         <h3> <p className="carousel-text">{image.text}</p></h3>
        </div>
      ))}
        </Carousel>
    </div>
    </div>
)
}
export default ImageCarousel;