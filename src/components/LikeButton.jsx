import { useState } from 'react';
const LikeButton = () => {
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const randomColor = {
    backgroundColor: colors[Math.floor(Math.random() * colors.length)],
    color: 'white',
  };

  const [counter, setCounter] = useState(0);
  const AddLike = () => setCounter((likes) => (likes += 1));
  return (
    <div>
      <button style={randomColor} onClick={AddLike}>
        {counter} Likes
      </button>
    </div>
  );
};

export default LikeButton;
