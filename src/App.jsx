function MyHeader() {
  return (
    <div>
      <h1>hello header</h1>
      <h3>hello sub eader</h3>
    </div>
  );
}
function MyFooter() {
  return (
    <ul>
      <li>link1</li>
      <li>link2</li>
    </ul>
  );
}
function MyNav() {
  return (
    <>
      <a href="#">link 1</a>
      <a href="#">link 2</a>
    </>
  );
}
function App() {
  return (
    <>
      <div>
        <h1>hello react</h1>
        <MyHeader />
        <MyFooter />
        <MyNav />
      </div>
    </>
  );
}

export default App;
