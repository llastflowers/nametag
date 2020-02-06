import React, { useState } from 'react';

const TextSelector = () => {
  const [textContent, setTextContent] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
  };

  const handleContentChange = ({ target }) => setTextContent(target.value);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={textContent} onChange={handleContentChange} />
    </form>
  );
};

export default TextSelector;
