import React, { useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { generateRecipe } from './graphql/mutations';

const App = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleSubmit = async () => {
    try {
      const result = await API.graphql(graphqlOperation(generateRecipe, { input }));
      setOutput(result.data.generateRecipe.output);
    } catch (err) {
      console.log('Error generating recipe: ', err);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Generate Recipe</button>
      {output && <p>{output}</p>}
    </div>
  );
};

export default App;
