import React, { useEffect, useState } from "react";
import Windows1 from "../assets/windows-1.jpg";
import Windows2 from "../assets/windows-2.jpg";
import Windows3 from "../assets/windows-3.jpg";
import Windows4 from "../assets/windows-4.jpg";
import news1 from "../assets/news-1.jpg"
import news2 from "../assets/news-2.jpg"
import news3 from "../assets/news-3.jpg"
const Product = () => {
  const images = [Windows1, Windows2, Windows3, Windows4];
  const [val, setVal] = useState(0);
  useEffect(() => {}, [val]);
  return (
    <>
      <div className="product-Tab">
        <img className="product-logo" src={images[val]} alt="Missing" />
      </div>
      <div className="slidingWindow">
        <span className="title" onClick={() => setVal(0)}>
          <h3 style={{ padding: 0, margin: 0 }}>01.</h3>
          <br />
          <p>Windows</p>
        </span>
        <span className="title" onClick={() => setVal(1)}>
          <h3 style={{ padding: 0, margin: 0 }}>02.</h3>
          <br />
          <p>Doors</p>
        </span>
        <span className="title" onClick={() => setVal(2)}>
          <h3 style={{ padding: 0, margin: 0 }}>03.</h3>
          <br />
          <p>Sliding Doors</p>
        </span>
        <span className="title" onClick={() => setVal(3)}>
          <h3 style={{ padding: 0, margin: 0 }}>04.</h3>
          <br />
          <p>Glass Facades</p>
        </span>
      </div>
      <div className="passion-container">
      <div className="passion">
        <p>
        Our passion is quality in every aspect, and we are proud of all our
        customers and deliveries. Are you looking for a partner or supplier for
        your next project? <a href="/">Get in touch</a> - we want to hear about your project and
        your plans.
        </p>
      </div>
      <div className="latest-container">
        <div className="latest-font">
        <font >
            Latest News
        </font>
        </div>
        <div className="news">
         <div className="news1">
            <img src={news1} alt="Missing"/>
         </div>
         <div className="news2">
         <img src={news2} alt="Missing"/>
         </div>
         <div className="news3">
         <img src={news3} alt="Missing"/>
         </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Product;
