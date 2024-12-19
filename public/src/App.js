import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [flows, setFlows] = useState([]);
  const [components, setComponents] = useState([]);
  const [user, setUser] = useState({
    email: "",
    password: "",
    details: {},
    role: "user",
  });
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

    // flows.forEach((f) => {});
    // console.log(flows);
    return flows;
  };

  const f = flowArray()[counter];

  const handlePrevious = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const hanldeNext = () => {
    if (counter < flows.length - 1 || counter !== flows.length - 1) {
      setCounter(counter + 1);
    }
  };

  const hanldeSubmit = () => {};

  return (
    <div className="App">
      <h1 className="header-banner">{"Zealth Customer Onboarding Flow"}</h1>

      {f === undefined ? (
        "loading"
      ) : (
        <div className="user-flow">
          <h1>{f.heading}</h1>
          <div className="form-elements">
            {f.formEl.map((el) => (
              <div className={`${el.name} form-element`} key={el._id}>
                <label htmlFor={el.name}>{el.label}</label>
                <input
                  type={el.htmlType}
                  id={el.htmlID}
                  name={el.name}
                  onChange={(e) => console.log(e.target.value)}
                />
              </div>
            ))}

            <div className="step-counter">
              Steps: {counter + 1} of {flows.length}
            </div>
          </div>

          <div className="button-container">
            <div className="left">
              {counter > 0 && (
                <button onClick={() => handlePrevious()}>Previous</button>
              )}
            </div>

            <div className="right">
              {counter > flows.length - 1 ||
                (counter !== flows.length - 1 && (
                  <button onClick={() => hanldeNext()}>Next</button>
                ))}

              {counter < flows.length - 1 ||
                (counter === flows.length - 1 && (
                  <button
                    className="submit-button"
                    onClick={() => hanldeSubmit()}
                  >
                    Submit
                  </button>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
