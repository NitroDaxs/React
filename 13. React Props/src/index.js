import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/Card.jsx";

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Beyonc%C3%A9_-_Tottenham_Hotspur_Stadium_-_1st_June_2023_%2891_of_118%29_%2852945300772%29_%28cropped_2%29.jpg/250px-Beyonc%C3%A9_-_Tottenham_Hotspur_Stadium_-_1st_June_2023_%2891_of_118%29_%2852945300772%29_%28cropped_2%29.jpg"
      tel="111111111"
      email="b@once.com"
    />
    <Card
      name="NotBeyonce"
      img="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Beyonc%C3%A9_-_Tottenham_Hotspur_Stadium_-_1st_June_2023_%2891_of_118%29_%2852945300772%29_%28cropped_2%29.jpg/250px-Beyonc%C3%A9_-_Tottenham_Hotspur_Stadium_-_1st_June_2023_%2891_of_118%29_%2852945300772%29_%28cropped_2%29.jpg"
      tel="111111112"
      email="nob@once.com"
    />
    <Card
      name="YesBeyonce"
      img="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Beyonc%C3%A9_-_Tottenham_Hotspur_Stadium_-_1st_June_2023_%2891_of_118%29_%2852945300772%29_%28cropped_2%29.jpg/250px-Beyonc%C3%A9_-_Tottenham_Hotspur_Stadium_-_1st_June_2023_%2891_of_118%29_%2852945300772%29_%28cropped_2%29.jpg"
      tel="111111113"
      email="yesb@once.com"
    />
  </div>,
  document.getElementById("root")
);
