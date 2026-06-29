// import React from "react";

// function CustomerInformation({
//   formData,
//   errors,
//   handleChange,
//   cityData,
//   validateStep1,
//   setStep
// }) {
//   return (
//     <>
//       <div className="title-row">
//         <h2>Customer Information</h2>
//       </div>

//       <div className="stepper">
//         <div className="step active">1</div>
//         <div className="line"></div>

//         <div className="step">2</div>
//         <div className="line"></div>

//         <div className="step">3</div>
//         <div className="line"></div>

//         <div className="step">4</div>
//       </div>

//       <p className="step-text">Step 1 of 4</p>

//       <div className="form-grid">

//         {/* Guest Name */}
//         <div className="form-group">
//           <label>Guest Name *</label>

//           <input
//             type="text"
//             name="guestName"
//             placeholder="Enter Guest Name"
//             value={formData.guestName}
//             onChange={handleChange}
//           />

//           {errors.guestName && (
//             <span className="error">{errors.guestName}</span>
//           )}
//         </div>

//         {/* Email */}
//         <div className="form-group">
//           <label>Email ID *</label>

//           <input
//             type="email"
//             name="email"
//             placeholder="Enter Email ID"
//             value={formData.email}
//             onChange={handleChange}
//           />

//           {errors.email && (
//             <span className="error">{errors.email}</span>
//           )}
//         </div>

//         {/* Phone */}
//         <div className="form-group">
//           <label>Phone No *</label>

//           <div className="phone-wrapper">
//             <select
//               name="phoneCountry"
//               value={formData.phoneCountry}
//               onChange={handleChange}
//               className="phone-code"
//             >
//               <option value="+91">+91</option>
//               <option value="+1">+1</option>
//               <option value="+44">+44</option>
//             </select>

//             <input
//               type="text"
//               className="phone-number"
//               name="phone"
//               placeholder="Enter Phone Number"
//               value={formData.phone}
//               onChange={handleChange}
//             />
//           </div>

//           {errors.phone && (
//             <span className="error">{errors.phone}</span>
//           )}
//         </div>

//         {/* DOB */}
//         <div className="form-group">
//           <label>Select DOB *</label>

//           <input
//             type="date"
//             name="dob"
//             value={formData.dob}
//             onChange={handleChange}
//           />

//           {errors.dob && (
//             <span className="error">{errors.dob}</span>
//           )}
//         </div>

//         {/* Age */}
//         <div className="form-group">
//           <label>Age</label>

//           <input
//             type="text"
//             value={formData.age}
//             disabled
//             placeholder="Auto Calculated"
//           />
//         </div>

//         {/* Gender */}
//         <div className="form-group">
//           <label>Gender *</label>

//           <select
//             name="gender"
//             value={formData.gender}
//             onChange={handleChange}
//           >
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//             <option value="Other">Other</option>
//           </select>

//           {errors.gender && (
//             <span className="error">{errors.gender}</span>
//           )}
//         </div>

//         {/* Address */}
//         <div className="form-group">
//           <label>Address *</label>

//           <textarea
//             name="address"
//             placeholder="Enter Complete Address"
//             value={formData.address}
//             onChange={handleChange}
//           />

//           {errors.address && (
//             <span className="error">{errors.address}</span>
//           )}
//         </div>

//         {/* Document Upload */}
//         <div className="form-group">
//           <label>Document Upload</label>

//           <input
//             type="file"
//             name="aadharFile"
//             onChange={handleChange}
//           />
//         </div>

//         {/* Aadhar */}
//         <div className="form-group">
//           <label>Aadhar No *</label>

//           <input
//             type="text"
//             name="aadhar"
//             placeholder="Enter 12 Digit Aadhar No"
//             value={formData.aadhar}
//             onChange={handleChange}
//           />

//           {errors.aadhar && (
//             <span className="error">{errors.aadhar}</span>
//           )}
//         </div>

//         {/* City */}
//         <div className="form-group">
//           <label>City *</label>

//           <select
//             name="city"
//             value={formData.city}
//             onChange={handleChange}
//           >
//             <option value="">Select City</option>

//             {Object.keys(cityData).map((city) => (
//               <option key={city} value={city}>
//                 {city}
//               </option>
//             ))}
//           </select>

//           {errors.city && (
//             <span className="error">{errors.city}</span>
//           )}
//         </div>

//         {/* State */}
//         <div className="form-group">
//           <label>State *</label>

//           <input
//             type="text"
//             value={formData.state}
//             disabled
//             placeholder="State will auto fill"
//           />
//         </div>

//         {/* Pincode */}
//         <div className="form-group">
//           <label>Pincode *</label>

//           <input
//             type="text"
//             value={formData.pincode}
//             disabled
//             placeholder="Pincode will auto fill"
//           />
//         </div>

//       </div>

//      <button
//   className="next-btn"
//   onClick={() => {
//     if (validateStep1()) {
//       setStep(2);
//     }
//   }}
// >
//   Next →
// </button>

//       <div className="footer-note">
//         ℹ️ All fields marked with * are required
//       </div>
//     </>
//   );
// }

// export default CustomerInformation;