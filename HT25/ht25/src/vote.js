import React, { Component } from "react";
import './vote.css';


class EmojiVoting extends Component {
  constructor(props) {
    super(props);
    const savedVotes = JSON.parse(localStorage.getItem("votes")) || {};
    this.state = {
      emojis: ["😊", "😂", "❤️", "👍", "🔥"],
      votes: savedVotes,
      winner: null,
    };
  }

  handleVote = (emoji) => {
    const newVotes = { ...this.state.votes, [emoji]: (this.state.votes[emoji] || 0) + 1 };
    this.setState({ votes: newVotes });
    localStorage.setItem("votes", JSON.stringify(newVotes));
  };

  showResults = () => {
    const { votes } = this.state;
    const winner = Object.keys(votes).reduce((a, b) => (votes[a] > votes[b] ? a : b), null);
    this.setState({ winner });
  };

  clearResults = () => {
    localStorage.removeItem("votes");
    this.setState({ votes: {}, winner: null });
  };

  render() {
    const { emojis, votes, winner } = this.state;
    return (
      <div>
        <h2>Голосуйте за смайлик!</h2>
        <ul>
          {emojis.map((emoji) => (
            <li key={emoji}>
              <span style={{ fontSize: "2rem", cursor: "pointer" }} onClick={() => this.handleVote(emoji)}>
                {emoji}
              </span>
              : {votes[emoji] || 0} голосів
            </li>
          ))}
        </ul>
        <button onClick={this.showResults}>Показати результат</button>
        <button onClick={this.clearResults}>Очистити результати</button>
        {winner && <h3>Переможець: {winner}</h3>}
      </div>
    );
  }
}

export default EmojiVoting;
