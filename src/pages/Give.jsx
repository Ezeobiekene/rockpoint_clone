import React from "react";
import Givecard from "../components/Givecard";
import give from "../assets/give_give.webp";
import online from "../assets/give_online.webp";
import cashapp from "../assets/give_cashapp.webp";
import text from "../assets/give_text.webp";
import mail from "../assets/give_mail.webp";

const Give = () => {
  return (
    <>
      <img src={give} />
      <Givecard image={online} title="Online Giving" text=''/>
      <Givecard image={cashapp} title="Cash App" text='$RockPointChurchGA'/>
      <Givecard image={text} title="Text" text='your gift of any amount to 404-998-8836'/>
      <Givecard image={mail} title="Mail" text='RockPoint Church, 1485 South Marietta Pkwy SE
Marietta , GA 30067

' />
    </>
  );
};

export default Give;
