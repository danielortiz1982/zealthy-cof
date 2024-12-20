import { useEffect, useState } from "react";
import "./FormComponents.css";

const FormComponents = () => {
  const [name, setName] = useState("");
  const [htmlID, setHtmlId] = useState("");
  const [htmlType, setType] = useState("");
  const [label, setLabel] = useState("");
  const [formElements, setFormElements] = useState([]);

  useEffect(() => {
    const getFormElements = async (url) => {
      const fetchData = await fetch(url);
      const data = await fetchData.json();
      setFormElements(data);
    };
    getFormElements("http://209.97.154.37/data/v1/form-components");
  }, []);

  const handleSubmit = () => {
    postFormComponent();
    setName("");
    setHtmlId("");
    setType("");
    setLabel("");
  };

  const postFormComponent = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const response = await fetch(
      "http://209.97.154.37/data/v1/form-component/new",
      {
        method: "POST",
        body: JSON.stringify({ name, htmlID, htmlType, label }),
        headers: myHeaders,
      }
    );

    const data = await response.json();
    const d = [...formElements, data];
    setFormElements(d);
    console.log(d);
  };

  const handleDelete = async (e) => {
    const fetchData = await fetch(
      `http://209.97.154.37/data/v1/form-component/delete/${e.target.id}`,
      { method: "DELETE" }
    );
    const data = await fetchData.json();

    // setFormElements(d);
    console.log(data);
  };

  return (
    <div className="form-components">
      <div className="form-el-left">
        <h2>Create Form Element</h2>
        <div className="form-el-builder form-elements">
          <div className="name-el">
            <label htmlFor="name">Name:</label>
            <input
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>

          <div className="name-el">
            <label htmlFor="htmlID">ID:</label>
            <input
              name="htmlID"
              onChange={(e) => setHtmlId(e.target.value)}
              value={htmlID}
            />
          </div>

          <div className="name-el">
            <label htmlFor="htmlType">Input Type:</label>
            <input
              name="htmlType"
              onChange={(e) => setType(e.target.value)}
              value={htmlType}
            />
          </div>

          <div className="name-el">
            <label htmlFor="label">Label:</label>
            <input
              name="label"
              onChange={(e) => setLabel(e.target.value)}
              value={label}
            />
          </div>

          <div className="button-container">
            <button onClick={() => handleSubmit()}>Create Input</button>
          </div>
          {/* end */}
        </div>
      </div>

      <div className="form-el-right">
        <div className="el-display">
          {formElements.map((e) => (
            <div className="el-item" key={e._id}>
              {e.name}{" "}
              <button id={e._id} onClick={(e) => handleDelete(e)}>
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormComponents;
