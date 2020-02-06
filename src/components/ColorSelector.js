import React, { useState } from 'react';

const ColorSelector = () => {
  const [textColor, setTextColor] = useState('');
  const [bgColor, setBgColor] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
  };

  const handleTextChange = ({ target }) => setTextColor(target.value);

  const handleBgChange = ({ target }) => setBgColor(target.value);

  return (
    <form onSubmit={handleSubmit}>
      <input type="color" value={textColor} onChange={handleTextChange} />
      <input type="color" value={bgColor} onChange={handleBgChange}/>
    </form>
  );
};

export default ColorSelector;
