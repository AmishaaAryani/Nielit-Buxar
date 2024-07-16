// import React from 'react'

// const Course = () => {
//   return (
//     <div>
//       <h1>fgfb</h1>
//     </div>
//   )
// }

// export default Course

// import React, { useState } from "react";

// function SignUp() {
//   const [showSignUp, setShowSignUp] = useState(true);
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [streetAddress, setStreetAddress] = useState("");
//   const [streetAddressLine2, setStreetAddressLine2] = useState("");
//   const [city, setCity] = useState("");
//   const [postalCode, setPostalCode] = useState("");
//   const [stateProvince, setStateProvince] = useState("");
//   const [country, setCountry] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [suggestions, setSuggestions] = useState("");

//   const handleToggle = () => {
//     setShowSignUp(!showSignUp);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Password validation
//     if (password !== confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     // Handle sign up logic here
//     console.log("Sign Up Form submitted:", {
//       firstName,
//       lastName,
//       streetAddress,
//       streetAddressLine2,
//       city,
//       postalCode,
//       stateProvince,
//       country,
//       phoneNumber,
//       email,
//       password,
//       suggestions,
//     });

//     // Optional: Reset form fields after submission
//     resetForm();
//   };

//   const handleSignIn = (event) => {
//     event.preventDefault();
//     // Handle sign in logic here
//     console.log("Sign In Form submitted:", {
//       email,
//       password,
//     });

//     // Optional: Reset form fields after submission
//     resetForm();
//   };

//   const resetForm = () => {
//     setFirstName("");
//     setLastName("");
//     setStreetAddress("");
//     setStreetAddressLine2("");
//     setCity("");
//     setPostalCode("");
//     setStateProvince("");
//     setCountry("");
//     setPhoneNumber("");
//     setEmail("");
//     setPassword("");
//     setConfirmPassword("");
//     setSuggestions("");
//   };

//   return (
//     <div className="signup-container">
//       {showSignUp ? (
//         <>
//           <h2 className="signup-heading">Registration Form</h2>
//           <p className="signup-subheading">Please fill in the form below</p>
//           <form onSubmit={handleSubmit} className="signup-form">
//             <div className="signup-input-group">
//               <label htmlFor="firstName" className="signup-label">
//                 Full Name *
//               </label>
//               <div className="signup-input-row">
//                 <input
//                   type="text"
//                   id="firstName"
//                   className="signup-input"
//                   placeholder="First Name"
//                   value={firstName}
//                   onChange={(e) => setFirstName(e.target.value)}
//                   required
//                 />
//                 <input
//                   type="text"
//                   id="lastName"
//                   className="signup-input"
//                   placeholder="Last Name"
//                   value={lastName}
//                   onChange={(e) => setLastName(e.target.value)}
//                   required
//                 />
//               </div>
//             </div>

//             <div className="signup-input-group">
//               <label htmlFor="streetAddress" className="signup-label">
//                 Address *
//               </label>
//               <div className="signup-input-row">
//                 <input
//                   type="text"
//                   id="streetAddress"
//                   className="signup-input"
//                   placeholder="Street Address"
//                   value={streetAddress}
//                   onChange={(e) => setStreetAddress(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="signup-input-row">
//                 <input
//                   type="text"
//                   id="streetAddressLine2"
//                   className="signup-input"
//                   placeholder="Street Address Line 2"
//                   value={streetAddressLine2}
//                   onChange={(e) => setStreetAddressLine2(e.target.value)}
//                 />
//               </div>
//               <div className="signup-input-row">
//                 <input
//                   type="text"
//                   id="city"
//                   className="signup-input"
//                   placeholder="City"
//                   value={city}
//                   onChange={(e) => setCity(e.target.value)}
//                   required
//                 />
//                 <input
//                   type="text"
//                   id="stateProvince"
//                   className="signup-input"
//                   placeholder="State/Province"
//                   value={stateProvince}
//                   onChange={(e) => setStateProvince(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="signup-input-row">
//                 <input
//                   type="text"
//                   id="postalCode"
//                   className="signup-input"
//                   placeholder="Postal/Zip Code"
//                   value={postalCode}
//                   onChange={(e) => setPostalCode(e.target.value)}
//                   required
//                 />
//                 <select
//                   id="country"
//                   className="signup-select"
//                   value={country}
//                   onChange={(e) => setCountry(e.target.value)}
//                   required
//                 >
//                   <option value="">Country</option>
//                   {/* Add options for countries here */}
//                   <option value="India">India</option>
//                 </select>
//               </div>
//             </div>

//             <div className="signup-input-group">
//               <label htmlFor="phoneNumber" className="signup-label">
//                 Phone Number *
//               </label>
//               <input
//                 type="tel"
//                 id="phoneNumber"
//                 className="signup-input"
//                 placeholder="(000) 000-0000"
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="signup-input-group">
//               <label htmlFor="email" className="signup-label">
//                 E-mail *
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="signup-input"
//                 placeholder="ex: myname@example.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="signup-input-group">
//               <label htmlFor="password" className="signup-label">
//                 Password *
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 className="signup-input"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="signup-input-group">
//               <label htmlFor="confirmPassword" className="signup-label">
//                 Confirm Password *
//               </label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 className="signup-input"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="signup-input-group">
//               <label htmlFor="suggestions" className="signup-label">
//                 Tell us something about yourself
//               </label>
//               <textarea
//                 id="suggestions"
//                 className="signup-textarea"
//                 value={suggestions}
//                 onChange={(e) => setSuggestions(e.target.value)}
//               />
//             </div>

//             <button type="submit" className="signup-button">
//               SUBMIT
//             </button>
//             <p className="toggle-signin">
//               Already registered?{" "}
//               <button
//                 type="button"
//                 onClick={handleToggle}
//                 className="toggle-button"
//               >
//                 Sign In
//               </button>
//             </p>
//           </form>
//         </>
//       ) : (
//         <>
//           <h2 className="signup-heading">Sign In Form</h2>
//           <p className="signup-subheading">Please sign in to your account</p>
//           <form onSubmit={handleSignIn} className="signup-form">
//             <div className="signup-input-group">
//               <label htmlFor="emailSignIn" className="signup-label">
//                 E-mail *
//               </label>
//               <input
//                 type="email"
//                 id="emailSignIn"
//                 className="signup-input"
//                 placeholder="ex: myname@example.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="signup-input-group">
//               <label htmlFor="passwordSignIn" className="signup-label">
//                 Password *
//               </label>
//               <input
//                 type="password"
//                 id="passwordSignIn"
//                 className="signup-input"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="signup-input-group">
//               <label htmlFor="confirmPassword" className="signup-label">
//                 Confirm Password *
//               </label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 className="signup-input"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <button type="submit" className="signup-button">
//               SIGN IN
//             </button>
//             <p className="toggle-signin">
//               New user?{" "}
//               <button
//                 type="button"
//                 onClick={handleToggle}
//                 className="toggle-button"
//               >
//                 Sign Up
//               </button>
//             </p>
//           </form>
//         </>
//       )}
//     </div>
//   );
// }

// export default SignUp
