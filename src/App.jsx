function App() {
  const val1 = 5;
  const val2 = 9;

  function someMethod() {
    return "hello js";
  }

  function someMethod2(react) {
    return (
      <p>
        {react} {react}
      </p>
    );
  }

  return (
    <p>
      <p>
        {val1} X {val2} = {val1 * val2}
      </p>
      <p>{someMethod()}</p>
      <p>{someMethod2("react")}</p>
    </p>
  );
}

export default App;
