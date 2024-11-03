import React, { useState } from 'react';

const EmojiVoting = () => {
    // List of emojis with initial votes set to 0
    const [emojis, setEmojis] = useState([
        { id: 1, icon: "😃", votes: 0 },
        { id: 2, icon: "😊", votes: 0 },
        { id: 3, icon: "😎", votes: 0 },
        { id: 4, icon: "🤩", votes: 0 },
        { id: 5, icon: "😍", votes: 0 },
    ]);

    const [showResults, setShowResults] = useState(false);
    const [winner, setWinner] = useState(null);

    // Function to handle voting
    const handleVote = (id) => {
        setEmojis(emojis.map(emoji => 
            emoji.id === id ? { ...emoji, votes: emoji.votes + 1 } : emoji
        ));
    };

    // Function to calculate the winner
    const calculateWinner = () => {
        const maxVotes = Math.max(...emojis.map(e => e.votes));
        const winningEmoji = emojis.find(e => e.votes === maxVotes);
        setWinner(winningEmoji);
        setShowResults(true);
    };

    return (
        <div style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
            <h1>Голосування за найкращий смайлик</h1>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                {emojis.map((emoji) => (
                    <div key={emoji.id} onClick={() => handleVote(emoji.id)} style={{ cursor: 'pointer' }}>
                        <span style={{ fontSize: '2em' }}>{emoji.icon}</span>
                        <div>{emoji.votes}</div>
                    </div>
                ))}
            </div>
            <button 
                onClick={calculateWinner} 
                style={{ marginTop: '20px', padding: '10px 20px', fontSize: '1em', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px' }}
            >
                Show Results
            </button>
            {showResults && (
                <div style={{ marginTop: '20px' }}>
                    <h2>Результати голосування:</h2>
                    <h3>Переможець:</h3>
                    {winner && (
                        <>
                            <div style={{ fontSize: '2em' }}>{winner.icon}</div>
                            <p>Кількість голосів: {winner.votes}</p>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default EmojiVoting;
