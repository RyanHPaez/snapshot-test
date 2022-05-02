import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

function GitHubCard() {
  const [gitHubName, setGitHubName] = useState("");

  return (
    <div className="GitHubCard">
      <h1>Ryan's Github Profile Info:</h1>
      <h2>{gitHubName}</h2>
      <Card
        style={{
          width: "100%",
          backgroundImage:
            "url(https://avatars.githubusercontent.com/u/93347623?v=4)",
          height: "500px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundColor: "lightblue",
          backgroundSize: "200px 200px",
        }}
      >
        <Card.Subtitle style={{ fontSize: "15px" }} className="paragraph">
          {" "}
          Self-belief and hard work will always earn you success.{" "}
        </Card.Subtitle>
      </Card>
    </div>
  );
}

export default GitHubCard;
