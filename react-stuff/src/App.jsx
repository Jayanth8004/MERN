// function App() {
//   return (
//     <div className="App">
//       <h1>Hello, India!</h1>
//       <p>hello namaskar sabb kaise hooo, bhai orr behanooooo,Hello Friends
//       </p>
//     </div>
//   );
// }
// export default App;

import "./App.css";
function App() {
  const trainername="Rohit";
  const trainingday=3;
  return (
    <main className="App">
      <section className="App-header">
      <p className="daylabel">React day</p>
      <br></br>
      <h2 className="title">College course explore </h2>
      <p>Trainer:{trainername}</p>
      <p>Training Day:{trainingday}</p>
      <p>used react,jsx,componenrs</p>
    </section>
    </main>
  );
} 
export default App;