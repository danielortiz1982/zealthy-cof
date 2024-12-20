import { useEffect, useState } from "react";
import "./FlowBuilder.css";
const FlowBuilder = () => {
  useEffect(() => {
    const getFormElements = async (url) => {
      const fetchData = await fetch(url);
      const data = await fetchData.json();
      setFormElements(data);
    };
    getFormElements("http://209.97.154.37/data/v1/form-components");

    const getFormFlows = async (url) => {
      const fetchData = await fetch(url);
      const data = await fetchData.json();
      setFormFlows(data);
    };
    getFormFlows("http://209.97.154.37/data/v1/form-flows");
  }, []);

  const [name, setName] = useState();
  const [heading, setHeading] = useState("");
  const [formElements, setFormElements] = useState([]);
  const [select, setSelect] = useState("");
  const [flowEl, setFlowEl] = useState([]);
  const [displayEl, setDisplayEl] = useState([]);
  const [formFlows, setFormFlows] = useState([]);

  const addFormEl = () => {
    if (select === "" || select === "Select") {
      alert("Please select a form component");
    } else {
      const elements = [...flowEl, select];
      const displyFilter = formElements.filter((item) => item._id === select);
      const display = [...displayEl, ...displyFilter];
      setFlowEl(elements);
      setDisplayEl(display);
    }
  };

  const handleSubmit = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const response = await fetch("http://209.97.154.37/data/v1/form-flow/new", {
      method: "POST",
      body: JSON.stringify({ name, heading, el: flowEl }),
      headers: myHeaders,
    });

    const data = await response.json();

    const flowDisplay = [...formFlows, data];

    setFormFlows(flowDisplay);

    setName("");
    setHeading("");
    setFlowEl([]);
    setDisplayEl([]);
  };

  return (
    <div className="flow-section">
      <div className="section-left">
        <h2>Create User Flow</h2>
        <div className="flow-form form-elements">
          <div className="flow-el">
            <label htmlFor="name">Name:</label>
            <input
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flow-el">
            <label htmlFor="heading">Heading:</label>
            <input
              name="heading"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
            />
          </div>

          <div className="flow-el">
            <label htmlFor="select">Form Component:</label>
            <select
              className="fc-select"
              name="select"
              value={select}
              onChange={(e) => setSelect(e.target.value)}
            >
              <option>Select</option>
              {formElements.map((el) => {
                return (
                  <option key={el._id} value={el._id}>
                    {el.label}
                  </option>
                );
              })}
            </select>
            <button className="add-button" onClick={() => addFormEl()}>
              Add Element
            </button>
          </div>

          <div className="flow-el">
            <p style={{ padding: "0" }}>Form Elements:</p>
            <div className="display-fc">
              {displayEl.map((el) => {
                return (
                  <div className="fc-item" key={el._id}>
                    {el.name} <button>X</button>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flow-el">
            <button onClick={() => handleSubmit()}>Create Flow</button>
          </div>

          {/* end */}
        </div>
      </div>

      <div className="section-right">
        <div className="form-flows">
          {formFlows.map((flow) => {
            return (
              <div className="flow" key={flow._id}>
                <p>{flow.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FlowBuilder;
