import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [flows, setFlows] = useState([]);
  const [components, setComponents] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const getFormFlows = async (url) => {
      const fetchData = await fetch(url);
      const data = await fetchData.json();
      const f = data;
      setFlows(f);
    };

    const getFormComponents = async (url) => {
      const fetchData = await fetch(url);
      const data = await fetchData.json();
      const c = data;
      setComponents(c);
    };

    getFormFlows("http://209.97.154.37/data/v1/form-flows");
    getFormComponents("http://209.97.154.37/data/v1/form-components");
  }, []);

  const flowArray = () => {
    flows.forEach((f) => {
      const c = components.filter((c) => f.el.includes(c._id));
      f.formEl = c;
    });
    return flows;
  };

  const f = flowArray()[counter];

  return (
    <div className="App">
      <h1>{"Zealth Customer Onboarding Flow"}</h1>

      {f === undefined ? (
        "loading"
      ) : (
        <div className="user-flow">
          <h1>{f.heading}</h1>
          <div className="form-elements">
            {f.formEl.map((el) => (
              <div className={el.name} key={el._id}>
                <input />
              </div>
            ))}
          </div>

          <div className="button-container">
            <button onClick={(e) => setCounter(counter - 1)}>Previous</button>
            <button onClick={(e) => setCounter(counter + 1)}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
