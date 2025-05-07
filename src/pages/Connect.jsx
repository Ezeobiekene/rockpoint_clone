import React from "react";
import destiny from "../assets/connect_destiny.webp";

const Connect = () => {
  return (
    <>
      <img src={destiny} />

      <form>
        <label htmlFor="date">Date</label>
        <span>Required</span>
        <br />
        <input type="datetime-local" id="date" />
        <br />
        <br />
        <label htmlFor="name">Name</label>
        <span>Required</span>
        <br />
        <input type="text" id="name" />
        <br />
        <br />
        <label htmlFor="address">Address</label>
        <span>Required</span>
        <br />
        <input type="text" id="address" />
        <br />
        <br />
        <label htmlFor="email">Email</label>
        <span>Required</span>
        <br />
        <input type="text" id="email" />
        <br />
        <br />
        <label htmlFor="phone">Phone</label>
        <span>Required</span>
        <br />
        <input id="phone" />
        <br />
        <br />
        <label htmlFor="call">Can we call you?</label>
        <input id="call" type="checkbox" />
        <p>How can we serve you?</p>
        <span>Request type</span>
        <br />
        <br />
        <button>Join Rockpoint Church</button>
        <button>Prayer Request</button>
        <button>Children's Minnistry</button>
        <button>Baptism</button>
        <button>In Need</button>
        <button>Other</button>
        <br />
        <br />
        <label htmlFor="details">Details</label>
        <br />
        <textarea rows={10} cols={80}></textarea> <br /> <br />
        <label htmlFor="confirm">I confirm my request</label>
        <input id="confirm" type="checkbox" />
        <button>Reset</button>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Connect;
