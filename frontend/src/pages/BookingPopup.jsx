// import React, { useState } from "react";
// import CustomerInformation from "./HotelownerDashboard/CustomerInfo";

// function BookingPopup({ onClose }) {
//   const [step, setStep] = useState(1);

//   const [formData, setFormData] = useState({
//     guestName: "",
//     email: "",
//     phoneCountry: "+91",
//     phone: "",
//     dob: "",
//     age: "",
//     gender: "",
//     address: "",
//     aadhar: "",
//     city: "",
//     state: "",
//     pincode: "",
//   });

//   const [errors, setErrors] = useState({});

//   const cityData = {
//     Pune: {
//       state: "Maharashtra",
//       pincode: "411033",
//     },
//     Mumbai: {
//       state: "Maharashtra",
//       pincode: "400001",
//     },
//     Delhi: {
//       state: "Delhi",
//       pincode: "110001",
//     },
//     Bangalore: {
//       state: "Karnataka",
//       pincode: "560001",
//     },
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const validateStep1 = () => {
//     let err = {};

//     if (!formData.guestName) {
//       err.guestName = "Guest Name required";
//     }

//     if (!formData.email) {
//       err.email = "Email required";
//     }

//     setErrors(err);

//     return Object.keys(err).length === 0;
//   };

//   return (
//     <div className="booking-overlay">
//       <div className="booking-popup">

//         <button
//           className="close-btn"
//           onClick={onClose}
//         >
//           ✕
//         </button>

//         {step === 1 && (
//           <CustomerInformation
//             formData={formData}
//             errors={errors}
//             handleChange={handleChange}
//             cityData={cityData}
//             validateStep1={validateStep1}
//             setStep={setStep}
//           />
//         )}

//       </div>
//     </div>
//   );
// }

// export default BookingPopup;