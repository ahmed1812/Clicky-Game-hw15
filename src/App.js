import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Footer from "./components/Footer";
import friends from "./friends.json";
import Box from "./components/Box";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function () {
        console.log(this.state.highscore);
      });
    }
    this.state.friends.forEach(friend => {
      friend.count = 0;
    });
    alert(`Game Over :(\nscore: ${this.state.score}`);
    this.setState({ score: 0 });
    return true;
  };
  clickCount = id => {
    this.state.friends.find((o, i) => {
      if (o.id === id) {
        if (friends[i].count === 0) {
          friends[i].count++ // add
          this.setState({ score: this.state.score + 1 }, function () {
            console.log(this.state.score);
          });
          this.state.friends.sort(() => Math.random() - 0.5)
          return true;

        } else {
          this.gameOver();
        }
      }
    })
  }
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
         <Title score={this.state.score} highscore={this.state.highscore}>Click game</Title>
         <Box/>
        <Wrapper>
            {this.state.friends.map(friend => (
              <FriendCard
                clickCount={this.clickCount}
                id={friend.id}
                key={friend.id}
                image={friend.image}
              />
            ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
