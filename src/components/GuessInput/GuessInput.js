import React from 'react';

function GuessInput({gameStatus, handleSubmitGuess}) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  function handleSubmit(event){
    event.preventDefault();
    
    if(tentativeGuess.length!== 5){
      window.alert("Please enter 5 characters💖")
    }

    handleSubmitGuess(tentativeGuess);

    setTentativeGuess('');
  }


  return <div>
  <form onSubmit={handleSubmit} className="guess-input-wrapper">
  <label htmlFor="guess-input">Enter guess:</label>
  <input
  disabled = {gameStatus != "running"}
  value={tentativeGuess} onChange={(event) =>{
    const nextGuess = event.target.value.toUpperCase();
    setTentativeGuess(nextGuess);
  }}  id="guess-input" type="text" maxLength={5} minLength={5} />
</form>
  </div>;
}

export default GuessInput;
