import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event){
    event.preventDefault();
    
    if(guess.length!== 5){
      window.alert("Please enter 5 characters.")
    }

    console.log({guess});

    setGuess('');
  }


  return <div>
  <form onSubmit={handleSubmit} className="guess-input-wrapper">
  <label htmlFor="guess-input">Enter guess:</label>
  <input value={guess} onChange={(event) =>{
    const nextGuess = event.target.value.toUpperCase();
    setGuess(nextGuess);
  }}  id="guess-input" type="text" maxLength={5} minLength={5} />
</form>
  </div>;
}

export default GuessInput;
