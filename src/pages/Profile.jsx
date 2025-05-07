import React from "react";

const Profile = () => {
  return (
    <>
      <form>
        <label htmlFor="title">Title</label>
        <span>Required</span>
        <input required id="title" />
        <br />
        <label htmlFor="role">Role</label>
        <span>Required</span>
        <input required id="role" />
        <br />
        <label htmlFor="name">Name</label>
        <span>Required</span>
        <input required id="name" />
        <br />
        <label htmlFor="address">Address</label>
        <span>Required</span>
        <input required id="address" />
        <br />
        <label htmlFor="email">Email</label>
        <span>Required</span>
        <input required id="email" />
        <br />
        <label htmlFor="phone">Phone</label>
        <span>Required</span>
        <input required type="tel" id="phone" />
        <br />

        <label htmlFor="birthday">Birthday</label>
        <span>Required</span>
        <input required type="date" id="birthday" />

        <br />
        <label htmlFor="gender">Gender</label>
        <span>Required</span>
        <input required id="gender" />
        <br />
        <label htmlFor="maritalstatus">Marital Status</label>
        <span>Required</span>
        <input required id="maritalstatus" />
        <br />
        <label htmlFor="age">Age Group</label>
        <span>Required</span>
        <input required id="age" />
        <br />
        <label htmlFor="photo">Photo</label>
        <span>Required</span>
        <input type="file" required id="photo" />
        <br />
      </form>
    </>
  );
};

export default Profile;
