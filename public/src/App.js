import "./App.css";

const sample = async () => {
  const fetchData = await fetch("http://209.97.154.37/data/v1/users", {
    mode: "no-cors",
  });
  const data = await fetchData.json();
  console.log(data);
};

sample();

function App() {
  return (
    <div className="App">
      <h1>{"Zealth Customer Onboarding Flow"}</h1>
    </div>
  );
}

export default App;
