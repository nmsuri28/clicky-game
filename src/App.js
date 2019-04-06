import React from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import MarvelCard from "./components/MarvelCard";
import cards from "./cards.json";

class App extends React.Component {
  state = {
    cards,
    score: 0,
    topScore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score }, function() {
        console.log(this.state.topScore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert("Game Over");
    this.setState({ score: 0 });
    return true;
  };

  clickCount = id => {
    this.state.cards.find((o, i) => {
      if (o.id === id) {
        if (cards[i].count === 0) {
          cards[i].count = cards[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function() {
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5);
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  };

  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} topScore={this.state.topScore} />

        <Instructions />

        {this.state.cards.map(card => (
          <MarvelCard
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
