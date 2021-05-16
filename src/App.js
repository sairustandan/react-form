
import { useState } from 'react';
import DatePicker from 'react-date-picker';
import Select from 'react-select';
import Uploady from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";



import './App.css';
function App() {
  const [values, setValues] = useState({
    firstName:"",
    lastName:"", 
    gender:"",
    email:"", 
    mobile:"",
    dateOfBirth:"",
    country:"",
    address:"",
    skills:"",
    photo:"",
  }); 


  const App = () => (<Uploady
    destination={{ url: "https://my-server/upload" }}>
    <UploadButton/>
</Uploady>);

  const [value, onChange] = useState(new Date());

  const Countries = [
    { label: "Nepal", value: 355 },
    { label: "India", value: 54 },
    { label: "China", value: 43 },
    { label: "Japan", value: 61 },
    { label: "Kuwait", value: 965 },
    { label: "Sweden", value: 46 },
    { label: "Venezuela", value: 58 }
  ];

  const skills = [
    { label: "Accountant", value: 355 },
    { label: "IT", value: 54 },
    { label: "Admin", value: 43 },
    { label: "Receptionist", value: 61 },
    { label: "Data Analyst", value: 965 },
    { label: "Buisiness Analyst", value: 46 },
    { label: "Data Entry", value: 58 }
  ];
  
  const[submitted, setSubmitted] = useState(false); 
  const[valid, setValid] = useState(false); 

  const handleFirstNameInputChange = (event) => {
    setValues({...values, firstName: event.target.value})
  }
  const handleLastNameInputChange = (event) => {
    setValues({...values, lastName: event.target.value})
  }
  const handleGenderInputChange = (event) => {
    setValues({...values, gender: event.target.value})
  }
  const handleEmailInputChange = (event) => {
    setValues({...values, email: event.target.value})
  }
  const handleMobileInputChange = (event) => {
    setValues({...values, mobile: event.target.value})
  }
  const handleDateOfBirthInputChange = (event) => {
    setValues({...values, dateOfBirth: event.target.value})
  }
  const handleCountryInputChange = (event) => {
    setValues({...values, country: event.target.value})
  }
  const handleAddressInputChange = (event) => {
    setValues({...values, address: event.target.value})
  }
  const handleSkillsInputChange = (event) => {
    setValues({...values, skills: event.target.value})
  }
  const handlePhotoInputChange = (event) => {
    setValues({...values, photo: event.target.value})
  }
  const handleSubmit = (event) => {
    event.preventDefault(); 
    if (values.firstName && values.lastName && values.gender && values.email && values.mobile && values.dateOfBirth && values.country && values.address && values.photo && values.skills){
      setValid(true);
    }
    setSubmitted(true); 
  }
    
  return (
    <div className="form-container">
      <h3 className="title">Employee Registration Form</h3>
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted ? <div className="success-message">Success!!!</div> : null}
        <input
          onChange={handleFirstNameInputChange}
          value={values.firstName}
          className="form-field"
          placeholder="First Name"
          name="firstName" />
         {submitted && !values.firstName ? <span>Please enter first name</span> : null}
        <input
          onChange={handleLastNameInputChange}
          value={values.lastName}
          className="form-field"
          placeholder="Last Name"
          name="lastName" />
          {submitted && !values.lastName ? <span>Please enter last name</span> : null}

          <div>
        <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
        <input type="radio" value="Other" name="gender" /> Other
      </div>

        <input
          onChange={handleEmailInputChange}
          value={values.email}
          className="form-field"
          placeholder="Email"
          name="email" />
          {submitted && !values.email ? <span>Please enter email address</span> : null}

            <div>
              <DatePicker
              className="date"
              onChange={onChange}
              value={value}
              />
            </div>

          
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <Select options={Countries} />
          </div>
          <div className="col-md-4"></div>
        </div>
  
        <input
          onChange={handleAddressInputChange}
          value={values.address}
          className="form-field"
          placeholder="Address"
          name="addres" />
          {submitted && !values.address ? <span>Please enter address</span> : null}

          <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <Select options={skills} />
          </div>
          <div className="col-md-4"></div>
        </div>

      

          <button
            className="form-field"
            type="submit">REGISTER</button>
      </form>
    </div> 

  );
  };
 

export default App;

