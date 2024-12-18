import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [flows, setFlows] = useState([]);
  const [components, setComponents] = useState([]);

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

  const formElements = () => {
    flows.forEach((f) => {
      const c = components.filter((c) => f.el.includes(c._id));
      f.formEl = c;
    });
    return flows;
  };

  console.log(formElements());

  return (
    <div className="App">
      <h1>{"Zealth Customer Onboarding Flow"}</h1>

      <div className="sample">
        {formElements().map((element) => {
          return (
            <div key={element._id}>
              <h1>{element.heading}</h1>
              {element.formEl.map((form) => {
                return (
                  <div key={form._id}>
                    <input
                      className={form.name}
                      onChange={(e) => console.log(e.target.value)}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
