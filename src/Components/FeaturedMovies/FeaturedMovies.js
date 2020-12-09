import React from "react";
import { Carousel } from "react-bootstrap";
import "./FeaturedMovies.scss";

function FeaturedMovies() {
  return (
    <Carousel title="Featured Movies">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://www.avalontheatregj.com/sites/default/files/Spiderman%20Into%20the%20Spiderverse.jpg"
          alt="Spider-Man"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.indianexpress.com/2019/08/the-dark-knight-759.jpg"
          alt="Dark-Knight"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://miro.medium.com/max/1400/0*vej3BNv4ZI9lb6C6.jpg"
          alt="Your-Name"
        />

        {/* <Carousel.Caption>
          <h3>Your Name</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://w.wallha.com/ws/12/7T52hQYX.jpg"
          alt="klaus"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lh3.googleusercontent.com/proxy/HxzDeLbVnOneqb9nOKo7FMBfq3OZv5n2njZe9_mwIwOqjJyV6grnQGcJcvfhGvETTkRPZTzjKAJfgdTz_myRR21FTX3kZ1relScqb3lVJA7Mxw"
          alt="Ex-machina"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://imgs.capitalfm.com/images/21915?width=1920&crop=16_9&signature=zqppGU-IICYlK2VanWJcvaoTSGM="
          alt="haunting-of-hillhouse"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://thefilmautopsy.files.wordpress.com/2016/11/564300398_1280x720.jpg"
          alt="swiss-army-man"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://getyourcomicon.co.uk/wp-content/uploads/2018/06/WatchmenTV-comiclogo-header.jpg"
          alt="watchmen"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://theaggie.org/wp-content/uploads/2017/04/getout_ar_genesiating-01.png"
          alt="get-out"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default FeaturedMovies;
