import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { backendUrl } from '../utils/config';

export const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [qualification, setQualification] = useState("");
  const [skills, setSkills] = useState("");
  const [resume, setResumeUrl] = useState("");
  const navigate = useNavigate();

  const submit = async () => {
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);
    formData.append("qualification", qualification);
    formData.append("skills", skills);
    formData.append("resume", document.getElementById("resumeInput").files[0]); // Assuming the input has id "resumeInput"

    try {
      const response = await fetch(`https://job-apply-portal.vercel.app/apply/user`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        navigate("/submit/success");
      } else {
        navigate("/submit/failure");
      }
    } catch (error) {
      navigate("/submit/failure");
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <div className='w-screen h-screen flex justify-center'>
      <div className='flex w-1/2 items-center justify-center h-screen'>
        <div className='border border-black'>
          <div className='flex flex-wrap items-center justify-center p-10'>
            <input
              type='text'
              className='p-1 m-2 border border-black'
              placeholder='Enter your firstname'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type='text'
              className='p-1 m-2 border border-black'
              placeholder='Enter your lastname'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type='email'
              className='p-1 m-2 border border-black'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='tel'
              className='p-1 m-2 border border-black'
              placeholder='Enter your Phone no.'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
              type='text'
              className='p-1 m-2 border border-black'
              placeholder='Enter your qualification'
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
            />
            <input
              type='text'
              className='p-1 m-2 border border-black'
              placeholder='Enter your skills'
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />
            <input
              type='file'
              className='p-1 m-2 border border-black'
              placeholder='Enter your resume'
              id="resumeInput"
              onChange={(e) => setResumeUrl(e.target.files[0])}
            />
            <button
              onClick={submit}
              className='bg-gray-500 p-2 font-semibold rounded-lg'
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form
