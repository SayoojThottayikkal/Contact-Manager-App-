import React, { useEffect, useState } from "react";
import image from "../assets/images/20943984.jpg";
import { useDispatch } from "react-redux";
import { addContact, updateContact } from "../redux/slice/ContactSlice";
function AddContact({ editData, setEditData }) {
  const dispatch = useDispatch();
  const [data, setData] = useState({ name: "", email: "", phonenumber: "" });

  useEffect(() => {
    if (editData) {
      setData(editData);
    }
  }, [editData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editData) {
      dispatch(updateContact(data));
      setEditData(null);
    } else {
      dispatch(addContact(data));
    }
    setData({ name: "", email: "", phonenumber: "" });
  };

  return (
    <div className="  p-5">
      <div className="flex flex-col md:flex-row justify-center gap-3 items-center">
        <div className="w-full md:w-1/2 h-1/3">
          <img src={image} alt="" className="object-cover" />
        </div>
        <div className=" w-full md:w-2/5">
          <form onSubmit={handleSubmit} className="flex flex-col ">
            <input
              type="text"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              placeholder="Name"
              className=" border-2 border-gray-400 rounded w-full shadow-xl mb-5 px-3 py-2"
              required
            />
            <input
              type="email"
              value={data.email}
              onChange={(e) => {
                setData({ ...data, email: e.target.value });
              }}
              placeholder="Email"
              className=" border-2 border-gray-400 rounded w-full shadow-xl mb-5 px-3 py-2"
              required
            />
            <input
              type="number"
              value={data.phonenumber}
              onChange={(e) => {
                setData({ ...data, phonenumber: e.target.value });
              }}
              placeholder="PhoneNumber"
              className=" border-2 border-gray-400 rounded w-full shadow-xl mb-5 px-3 py-2"
              required
            />
            <button className="bg-blue-500 text-white py-2 rounded">
              {editData ? "Update Contact" : "Add Contact"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddContact;
