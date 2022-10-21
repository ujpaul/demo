import Carousel from 'react-bootstrap/Carousel';
const Slide = () =>{
    return (
        <Carousel controls={false} pause={false} indicators={false}>
          <Carousel.Item interval={1500}>
          <img
              className="d-block w-100"
              src="https://www.ktpress.rw/wp-content/uploads/2019/10/Kigali-Arena.....jpg"
              alt="First slide"
            />
            </Carousel.Item>
            <Carousel.Item interval={1500} >
            <img
              className="d-block w-100"
              src="https://media.coliseum-online.com/2022/05/Coliseum-Summit-News-Kigali-Arena-Rwanda-naming-rights.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src="https://www.kcc.rw/uploads/9/8/2/4/98249186/kigali-convention-centre-entrance_orig.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500} >
            <img
              className="d-block w-100"
              src="https://www.designbuild-network.com/wp-content/uploads/sites/26/2020/10/Kigali_Arena_Rwanda.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          
          <Carousel.Item interval={1500} >
            <img
              className="d-block w-100"
              src="https://www.hallpax.com/wp-content/uploads/2021/08/Venue-Page-_-Top-Image-scaled.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500} >
            <img
              className="d-block w-100"
              src="https://www.theplan.it/awardsContest/2020/Sport-Leisure/4224/YazganKigali_Arena_28.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      );
}
export default Slide;