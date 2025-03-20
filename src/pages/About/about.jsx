import React from "react";
import "./about.css";
import ABOUT from "../../assets/images/about.jpg";

const About = () => {
  return (
   <>
   <div className="about">
    <div className="about-content">
    <h1>
      About
    </h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci perferendis fugiat quibusdam ullam ad exercitationem quos quasi optio doloremque, recusandae ducimus corrupti totam, aliquam magnam assumenda aliquid similique praesentium error!
    Molestiae provident reiciendis eaque obcaecati nihil quos laborum dolores itaque iure eveniet possimus, ipsa dolor quidem. Nulla repellendus odit distinctio architecto. Odit ratione inventore et assumenda ad pariatur cum excepturi!
    Perferendis omnis praesentium incidunt maxime sed earum impedit velit voluptate voluptas iure eos, eius quas ipsum? Vero fugiat, commodi repellendus delectus recusandae, sapiente nisi mollitia voluptatibus nam praesentium ex magni.
  </p>
  <img src={ABOUT} alt="about" />

  <p className="p2">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum recusandae ad sit voluptas? 
  </p>

  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci perferendis fugiat quibusdam ullam ad exercitationem quos quasi optio doloremque, recusandae ducimus corrupti totam, aliquam magnam assumenda aliquid similique praesentium error!
    Molestiae provident reiciendis eaque obcaecati nihil quos laborum dolores itaque iure eveniet possimus, ipsa dolor quidem. Nulla repellendus odit distinctio architecto. Odit ratione inventore et assumenda ad pariatur cum excepturi!
   
  </p>

    </div>
   
   </div>
   
   
   </>
  );
};


export default About;