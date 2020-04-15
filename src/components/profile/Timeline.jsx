import React from "react";
import { Container } from "react-bootstrap";

export default function TimeLine() {
  const obj = {
    Home: {pos: "timeline-container left", content: 'It will show the author profile and the website guide timeline.'},
    Coins: {pos: "timeline-container right", content: 'It will show BTC, LTC and ETH and several exchange rates with USA dollar.'},
    Dogs: {pos: "timeline-container left", content: 'It is an infinite scroll page to show dogs pics from a third party api.'},
    Movies: {pos: "timeline-container right", content: 'The default search is <<Fast & Furious>>, it will send a search request to a third party API.'},
    Tasks: {pos: "timeline-container left", content: 'It is protected before a use login. After a user login it will show CRUD for tasks.'},
    Auth: {pos: "timeline-container right", content: 'Auth includes register and login, it uses firebases for database and cloud server. When register or login, it will send a async request to firebase.'}
  };

  return (
    <Container className="timeline-bg timeline-title rounded">
      <p className="text-center"><h3>Website Guide</h3></p>
      <div class="timeline">
      {Object.keys(obj).map((key, index) => (
        <div key={index} className={obj[key].pos}>
          <div className="content">
            <h5>{key}</h5>
            <small>{obj[key].content}</small>
          </div>
        </div>
      ))}
      </div>
    </Container>
  );
}