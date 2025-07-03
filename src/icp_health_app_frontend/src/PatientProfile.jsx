import React from "react";
import UpdateForm from "./UpdateForm";
import DataShareButton from "./DataShareButton";

function PatientProfile() {
  return (
    <div>
      <h2>Patient Profile</h2>
      <div>
        <p>🩺 Name: Rishitha Rallapalli</p>
        <p>📄 Medical Record: No known allergies. Good health.</p>
      </div>
      <UpdateForm />
      <DataShareButton />
    </div>
  );
}

export default PatientProfile;
