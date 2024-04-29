import React from "react";
import ReactDOM from "react-dom/client";
// import StarRating from "./StarRating";
import "./index.css";
import App from "./App";

const Test = () => {
  const [movieRating, setMovieRating] = React.useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>this movie was rated {movieRating} stars</p>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />

    {/* <StarRating
      messages={["Terrible", "Bad", "Average", "Good", "Excellent"]}
    />
    <StarRating size={24} color="red" defaultRating={3} />
    <Test /> */}
  </React.StrictMode>
);
