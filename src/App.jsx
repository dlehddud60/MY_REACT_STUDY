function Mybutton(props) {
  return (
    <div>
      <button>{props.name}</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Mybutton name="버튼1"></Mybutton>
      <Mybutton name="클릭"></Mybutton>
    </div>
  );
}

export default App;
