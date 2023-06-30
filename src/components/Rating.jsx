const Rating = ({ children }) => {
  let stars = '';

  function checkNumberRange(number) {
    if (number >= 0 && number <= 0.99) {
      stars = '☆☆☆☆☆';
      return stars;
    } else if (number >= 1 && number <= 1.4) {
      stars = '★☆☆☆☆';
      return stars;
    } else if (number >= 1.5 && number <= 2.4) {
      stars = '★★☆☆☆';
      return stars;
    } else if (number >= 2.5 && number <= 3.4) {
      stars = '★★★☆☆';
      return stars;
    } else if (number >= 3.5 && number <= 4.4) {
      stars = '★★★★☆';
      return stars;
    } else if (number >= 4.5 && number <= 5) {
      stars = '★★★★★';
      return stars;
    } else {
      return number;
    }
  }

  checkNumberRange(children);

  return (
    <div>
      <h1>{stars}</h1>
    </div>
  );
};

export default Rating;
