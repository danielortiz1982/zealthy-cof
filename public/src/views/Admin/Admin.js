import { set } from "mongoose";
import Header from "../../components/Header/Header";
import "./Admin.css";
import { useEffect, useState } from "react";

const Admin = () => {
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

  return (
    <div className="Admin">
      <Header />
      <h1>Admin</h1>

      <div className="admin-content">
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
                  {e.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
