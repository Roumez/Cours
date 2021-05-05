const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      throw new Error(`unsupported action type ${action.type}`);
  }
};

const Counter = () => {
  const [state, dispatch] = React.useReducer(reducer, 0);
  //  action à réaliser sur cet exo => "increment", "decrement", "reset"
  // State est notre état initial dc ici notre zéro car on le déclare après la fct reducer
  // dispatch appelle reducer pr savoir l’act à réaliser
  // hook sont tjrs ds le body du component
  return (
    <>
      <button
        type="button"
        className="btn btn-danger m-1"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        -1
      </button>
      <button
        type="button"
        className="btn btn-success m-1"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        +1
      </button>
      <button
        type="button"
        className="btn btn-dark m-1"
        onClick={() => dispatch({ type: "RESET" })}
      >
        RESET
      </button>
      <p className="fs-3">Total: {state}</p>
    </>
  );
};

const App = () => <Counter />;

ReactDOM.render(<App />, document.getElementById("root"));