import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../redux/slice/ContactSlice";

function ContactList({ setEditData }) {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className="bg-white shadow-md rounded p-4 mb-2 flex justify-between items-center"
        >
          <div>
            <p>
              <strong>Name:</strong> {contact.name}
            </p>
            <p>
              <strong>Email:</strong> {contact.email}
            </p>
            <p>
              <strong>Phone:</strong> {contact.phonenumber}
            </p>
          </div>
          <div className="space-x-2">
            <button
              onClick={() => setEditData(contact)}
              className="bg-yellow-400 px-2 py-1 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => dispatch(deleteContact(contact.id))}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactList;
