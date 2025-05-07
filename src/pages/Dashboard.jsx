import React from 'react'
import Dboardcard from '../components/Dboardcard'
import qrcode from '../assets/dboard_qrcode.svg'

const Dashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>

      <Dboardcard text='a piece of text' number={4} />
      <Dboardcard text='a piece of text' number={4} />
      <Dboardcard text='a piece of text' number={4} />
      <Dboardcard text='a piece of text' number={4} />

      <img src={qrcode} />

      <h2>Use this QR code to share the Rockpoint App</h2>
    </>
  )
}

export default Dashboard