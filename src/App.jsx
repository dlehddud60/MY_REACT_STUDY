function MyComponent() {
  // return: 화면에 출력할 코드 작성
  return <div>hello component</div>;
}

function MyComp() {
  const myElem = <h1>hi JSX</h1>;

  return myElem;
}

function App() {
  return (
    <>
      <div>
        {/*주석*/}
        <h1>
          hello
          <br />
          react
        </h1>
        <h2>하이 리액트</h2>
        <h3>안녕 리액트</h3>
        <MyComponent />
        <MyComp />
      </div>
    </>
  );
}

export default App;
