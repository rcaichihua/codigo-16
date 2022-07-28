const Counter = (props) => {
  const { counter_send, increment_send, decrease_send } = props;
  return (
    <div>
      <h1>Contador: {counter_send}</h1>
      <button onClick={increment_send}>+</button>
      <button onClick={decrease_send}>-</button>
    </div>
  );
};
export default Counter;
