import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import FormComponents from "../../components/FormComponents/FormComponents";
import "./Admin.css";

const Admin = () => {
  useEffect(() => {
    const getFormElements = async (url) => {
      const fetchData = await fetch(url);
      const data = await fetchData.json();
      setFormElements(data);
    };
    getFormElements("http://209.97.154.37/data/v1/form-components");
  }, []);

  const [name, setName] = useState();
  const [heading, setHeading] = useState("");
  const [formElements, setFormElements] = useState([]);
  const [select, setSelect] = useState("");
  const [flowEl, setFlowEl] = useState([]);
  const [displayEl, setDisplayEl] = useState([]);

  const addFormEl = () => {
    if (select === "" || select === "Select") {
      alert("Please select a form component");
    } else {
      const elements = [...flowEl, select];

      setFlowEl(elements);
    }
  };

  return (
    <div className="Admin">
      <Header />
      <h1>Admin</h1>

      <div className="admin-content">
        <FormComponents />
        <hr />

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

              {/* end */}
            </div>
            <div style={{ height: "500px" }}></div>
          </div>

          <div className="section-right">right</div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
