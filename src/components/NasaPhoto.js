import React, { useState } from "react";
import { useEffect } from "react";
import StarfieldAnimation from "react-starfield-animation";

import OnePhoto from "./OnePhoto";

import "./NasaPhoto.css";

const apiKey = process.env.REACT_APP_KEY;

export default function NasaPhoto() {
  const [photo, setPhoto] = useState(null);
  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=10`
      );
      const data = await res.json();
      setPhoto(data);
      console.log(data);
    }
  }, []);
  if (!photo) return <div></div>;
  return (
    <div>
      {photo.map((item) => (
        <>
          <StarfieldAnimation
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          />
          <OnePhoto data={item} />
        </>
      ))}
    </div>
  );
}
