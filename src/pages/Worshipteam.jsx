import React from 'react'
import Newscards from '../components/Newscards'
import worship from '../assets/worship_worshiptm.webp'
import pic from '../assets/worship_worshiptm.webp'

const Worshipteam = () => {
  return (
    <>
      <img src={worship} />

      <button>Create New Post</button>
      <input type="text" placeholder='Search' />

{/* Load posts from db */}
      <Newscards image={pic} title='A title of News' author='Ekene Ezeobi'/>
    </>
  )
}

export default Worshipteam