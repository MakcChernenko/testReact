const AppClick = ({ value, onUpdate }) => {
  return (
    <div>
      <button onClick={onUpdate}>{value}</button>
      <button onClick={onUpdate}>{value}</button>
      <button onClick={onUpdate}>{value}</button>
    </div>
  );
};

export default AppClick;
