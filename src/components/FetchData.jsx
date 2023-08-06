import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
const FetchData = ({ cat }) => {
  const [data, setData] = useState([]);
  const [loadder, setLodder] = useState(true);

  const fechData = async () => {
    setLodder(true);
    const { data } = await axios.get(
      cat
        ? `https://gnews.io/api/v4/top-headlines?category=${cat}&lang=en&country=in&max=10&apikey=c7385f00c9c57b315e341769c4bb3ed0`
        : "https://gnews.io/api/v4/top-headlines?lang=en&country=in&max=10&apikey=c7385f00c9c57b315e341769c4bb3ed0"
    );
    setData(data.articles);
    setLodder(false);
  };

  useEffect(() => {
    fechData();
  }, [cat]);
  return (
    <div className="container my-4">
      <h3>
        <u>TOP HEADLINES</u>
      </h3>
      <div
        className="container my-3 d-flex justify-content-center align-items-center flex-column"
        style={{ minHeight: "100vh", width: "auto" }}
      >
        {loadder ? (
          <Spinner animation="border" variant="primary" size="xxl" />
        ) : (
          data.map((items, index) => (
            <div
              className="container my-2 p-3 "
              style={{
                width: "600px",
                boxShadow: "2px 2px 10px silver",
                borderRadius: "10px",
              }}
              key={index}
            >
              <h5 className="my-2">{items.title}</h5>
              <div className=" img-fluid d-flex justify-content-center align-items-center res ">
                <img
                  src={items.image}
                  alt="Image not found"
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <p className="my-2 ">{items.content}</p>
              <a href={items.url} target="blank">
                View More
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FetchData;
