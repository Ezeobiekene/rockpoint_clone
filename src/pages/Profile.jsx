import React from "react";
import { useState } from "react";

const Profile = () => {
  const [title, setTitle] = useState("");
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [age, setAge] = useState("");
  const [photo, setPhoto] = useState("");
  const [gender, setGender] = useState("");
  const [maritalstatus, setMaritalstatus] = useState("");

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleRole = (event) => {
    setRole(event.target.value);
  };
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleAddress = (event) => {
    setAddress(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleBirthday = (event) => {
    setBirthday(event.target.value);
  };
  const handleAge = (event) => {
    setAge(event.target.value);
  };
  const handleMaritalstatus = (event) => {
    setMaritalstatus(event.target.value);
  };
  const handleGender = (event) => {
    setGender(event.target.value);
  };
  const handlePhoto = (event) => {
    console.log(event)
    const file = event.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
    // setPhoto(event.target.value);
    // setPhoto(URL.createObjectURL(file))
  };

  return (
    <>
      <form>
        <label htmlFor="title">Title</label>
        <span>Required</span>
        <input onChange={handleTitle} required id="title" />
        <br />
        <label htmlFor="role">Role</label>
        <span>Required</span>
        <input onChange={handleRole} required id="role" />
        <br />
        <label htmlFor="name">Name</label>
        <span>Required</span>
        <input onChange={handleName} required id="name" />
        <br />
        <label htmlFor="address">Address</label>
        <span>Required</span>
        <input onChange={handleAddress} required id="address" />
        <br />
        <label htmlFor="email">Email</label>
        <span>Required</span>
        <input onChange={handleEmail} required id="email" />
        <br />
        <label htmlFor="phone">Phone</label>
        <span>Required</span>
        <input onChange={handlePhone} required type="tel" id="phone" />
        <br />

        <label htmlFor="birthday">Birthday</label>
        <span>Required</span>
        <input onChange={handleBirthday} required type="date" id="birthday" />

        <br />
        <label htmlFor="gender">Gender</label>
        <span>Required</span>
        <input onChange={handleGender} required id="gender" />
        <br />
        <label htmlFor="maritalstatus">Marital Status</label>
        <span>Required</span>
        <input onChange={handleMaritalstatus} required id="maritalstatus" />
        <br />
        <label htmlFor="age">Age Group</label>
        <span>Required</span>
        <input onChange={handleAge} required id="age" />
        <br />
        <label htmlFor="photo">Photo</label>
        <span>Required</span>
        <input onChange={handlePhoto} type="file" required id="photo" />
        <br />
      </form>
      <img src={photo} />
      <p>
        {title} {role} {name} {age} {address} {gender} {maritalstatus} {phone}{" "}
        {birthday} {email}
      </p>
    </>
  );
};

export default Profile;
