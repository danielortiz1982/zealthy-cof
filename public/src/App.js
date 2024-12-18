import "./App.css";

const sample = async () => {
  const fetchData = await fetch("http://localhost/data/v1/users");
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
