function MyTag() {
  return <h3>hello component</h3>;
}

function MyContent() {
  return <p> my content </p>;
}
function MyComponent() {
  // 최상위 컴포넌트 사용하지 않을 때-> reagment<></> 사용
  return (
    <>
      <p>test</p>
      <p>test</p>
    </>
  );
}
function App() {
  return (
    <>
      <div>
        {/*주석*/}
        <h1>hello</h1>
        <MyTag />
        <MyContent />
        <MyComponent />
      </div>
    </>
  );
}

export default App;
