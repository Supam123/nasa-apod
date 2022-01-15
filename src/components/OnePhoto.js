import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Heart from "react-animated-heart";
import "./OnePhoto.css";
export default function OnePhoto(data) {
  const [isClick, setClick] = useState(false);
  console.log("one pic", data.data.date);
  return (
    <div id="pics">
      <Card sx={{ maxWidth: 1000 }}>
        <div id="oneset">
          <CardMedia
            component="img"
            height="500"
            image={data.data.url}
            alt={data.data.title}
            id="image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.data.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.data.explanation}
              <p>{data.data.date}</p>
              <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
            </Typography>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
