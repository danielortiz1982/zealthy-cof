import Header from "../../components/Header/Header";
import FormComponents from "../../components/FormComponents/FormComponents";
import FlowBuilder from "../../components/FlowBuilder/FlowBuilder";
import "./Admin.css";

const Admin = () => {
  return (
    <div className="Admin">
      <Header />
      <h1>Admin</h1>

      <div className="admin-content">
        <FormComponents />
        <hr />
        <FlowBuilder />
      </div>
    </div>
  );
};

export default Admin;
