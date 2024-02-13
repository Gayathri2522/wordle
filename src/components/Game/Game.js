import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';

import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = React.useState('running');
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(tentativeGuess){
    //creating a brand new arrray because setGuessses is a stale array and hence the extra delay in won or lost
    const nextGUESSES = [...guesses, tentativeGuess]
    setGuesses(nextGUESSES);

    if(tentativeGuess.toUpperCase() === answer){
      setGameStatus("won");
    }
      else if(nextGUESSES.length >= NUM_OF_GUESSES_ALLOWED){
        setGameStatus("lost");
      }
  }
  return (
    <>
    {gameStatus}
    <GuessResults guesses={guesses}  answer ={answer}/>
    <GuessInput gameStatus= {gameStatus} handleSubmitGuess={ handleSubmitGuess }  />
    {gameStatus === 'won' && (
      <WonBanner numOfGuesses={guesses.length} />
    )}
    {gameStatus === 'lost' && 
      <LostBanner answer ={answer} />
    }
    </>
  );
}

export default Game;
