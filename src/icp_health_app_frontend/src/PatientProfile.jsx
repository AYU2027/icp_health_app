import UpdateForm from "./UpdateForm";
import DataShareButton from "./DataShareButton";

function PatientProfile() {
  return (
    <div>
      <h2>Patient Profile</h2>
      <p>🩺 Name: Rishitha Rallapalli</p>
      <p>📄 Medical Record: No known allergies. Good health.</p>

      <UpdateForm />
      <DataShareButton />
    </div>
  );
}

export default PatientProfile;
