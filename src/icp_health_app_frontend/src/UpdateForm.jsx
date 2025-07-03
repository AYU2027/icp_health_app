import React from "react";

function UpdateForm() {
  return (
    <div>
      <h3>Update Medical Record</h3>
      <textarea
        placeholder="Enter updates to medical record..."
        rows="4"
      ></textarea>
      <button>
        Update Record
      </button>
    </div>
  );
}

export default UpdateForm;
