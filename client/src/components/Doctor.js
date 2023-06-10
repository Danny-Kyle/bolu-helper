import React from "react";
import { useNavigate } from "react-router-dom";

function Doctor({ doctor }) {
  const navigate = useNavigate();
  return (
    <div
      className="card p-2 mb-3 cursor-pointer"
    >
      <h1 className="card-title text-primary">
       Dr {doctor.firstName} {doctor.lastName}
      </h1>
      {/* <hr /> */}
      <p>
        <b>Phone Number : </b>
        {doctor.phoneNumber}
      </p>
      <p>
        <b>Location : </b>
        {doctor.address.length > 50 ? `${doctor.address.slice(0, 60)}...` : doctor.address}
      </p>
       <p>
        <b>Specialization : </b>
        {doctor?.specialization}
      </p>

      {/* <p>
        <b>email : </b>
        {doctor?.professionalEmail}
      </p> */}

      <p>
        <b>Fee per Visit : </b>
        ₦ {doctor.feePerCunsultation}
      </p>
      <p>
        <b>Work Timings : </b>
        {doctor.timings[0]} - {doctor.timings[1]}
      </p>
      <div className="row pr-3 pl-3">
      <button onClick={() => navigate(`/book-appointment/${doctor._id}`)} className="btn btn-primary col btn-sm w-50 mt-3 mb-3 mr-2">Appointment</button>
      <button onClick={() => navigate(`/book-appointment/${doctor._id}`)} className="btn btn-outline-primary col btn-sm w-50 mt-3 mb-3">Contact</button>
      </div>
     
    </div>
  );
}

export default Doctor;
