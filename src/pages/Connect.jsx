import React from "react";
import { useState } from "react";
import destiny from "../assets/connect_destiny.webp";

const Connect = () => {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [requesttype, setRequesttype] = useState('')
  const [details, setDetails] = useState('')

  const handleDate = (event) => {
    setDate(event.target.value)
  }
  const handleName = (event) => {
    setName(event.target.value)
  }
  const handleAddress = (event) => {
    setAddress(event.target.value)
  }
  const handleEmail = (event) => {
    setEmail(event.target.value)
  }
  const handlePhone = (event) => {
    setPhone(event.target.value)
  }
  const handleDetails = (event) => {
    setDetails(event.target.value)
  }
  const handleRequesttype = (event) => {
    event.preventDefault()
    setRequesttype(event.target.textContent)
  }
  

  return (
    <>
      <img src={destiny} />

      <form>
        <label htmlFor="date">Date</label>
        <span>Required</span>
        <br />
        <input onChange={handleDate} required type="datetime-local" id="date" />
        <br />
        <br />
        <label htmlFor="name">Name</label>
        <span>Required</span>
        <br />
        <input onChange={handleName} required type="text" id="name" />
        <br />
        <br />
        <label  htmlFor="address">Address</label>
        <span>Required</span>
        <br />
        <input onChange={handleAddress} required type="text" id="address" />
        <br />
        <br />
        <label htmlFor="email">Email</label>
        <span>Required</span>
        <br />
        <input onChange={handleEmail} required type="text" id="email" />
        <br />
        <br />
        <label htmlFor="phone">Phone</label>
        <span>Required</span>
        <br />
        <input onChange={handlePhone} required id="phone" />
        <br />
        <br />
        <label htmlFor="call">Can we call you?</label>
        <input id="call" type="checkbox" />
      
        <p>How can we serve you?</p>
        <span>Request type</span>
        <br />
        <br />
        <div id="request_type">
          <button onClick={handleRequesttype}>Join Rockpoint Church</button>
          <button onClick={handleRequesttype}>Prayer Request</button>
          <button onClick={handleRequesttype}>Children's Minnistry</button>
          <button onClick={handleRequesttype}>Baptism</button>
          <button onClick={handleRequesttype}>In Need</button>
          <button onClick={handleRequesttype}>Other</button>
        </div>
        <br />
        <br />
        <label htmlFor="details">Details</label>
        <br />
        <textarea onChange={handleDetails} rows={10} cols={80}></textarea> <br /> <br />
        <label htmlFor="confirm">I confirm my request</label>
        <input id="confirm" type="checkbox" />
        <button>Reset</button>
        <button>Submit</button>

        <p>{date} {name} {address} {email} {phone} {details} {requesttype}</p>
      </form>
    </>
  );
};

export default Connect;
