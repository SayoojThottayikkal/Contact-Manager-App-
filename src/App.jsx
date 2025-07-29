import React, { useState } from "react";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import "./index.css";
function App() {
  const [editData, setEditData] = useState(null);

  return (
    <div className="container mx-auto p-4">
      <AddContact editData={editData} setEditData={setEditData} />
      <hr className="my-6" />
      <ContactList setEditData={setEditData} />
    </div>
  );
}

export default App;
