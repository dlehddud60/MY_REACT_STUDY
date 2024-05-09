function App() {
  const myTag = <h1>hello</h1>;
  const vall1 = "흥민";
  const vall2 = 3.14;
  const vall3 = 456;
  const vall4 = true;
  const vall5 = false;
  const vall6 = [2, 3];
  const vall7 = { age: 3, name: "이강인" };
  return (
    <>
      <div>{myTag}</div>
      <div>{vall1}</div>
      <div>{vall2}</div>
      <div>{vall3}</div>
      <div>{vall4}</div>
      <div>{vall5}</div>
      <div>{vall6}</div>
      <div>{vall7.age}</div>
      <div>{vall7.name}</div>
    </>
  );
}

export default App;
