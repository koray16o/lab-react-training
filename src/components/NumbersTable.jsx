const NumbersTable = ({ limit }) => {
  const numbers = limit;
  return (
    <div className="NumbersTable">
      {[...new Array(numbers)].map((arr, i) => (
        <div style={{ backgroundColor: (i + 1) % 2 === 0 ? 'red' : 'white' }}>
          {i + 1}
        </div>
      ))}
    </div>
  );
};

export default NumbersTable;
