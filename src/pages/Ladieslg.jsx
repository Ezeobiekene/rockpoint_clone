import React from 'react'
import ladies from '../assets/ladieslg_ladies.webp'
import pic from '../assets/ladieslg_ladies.webp'
import Newscards from '../components/Newscards'

const Ladieslg = () => {
  return (
    <>
      <img src={ladies} />

      <button>Create New Post</button>
      <input type="text" placeholder='Search' />

{/* load posts from db */}
      <Newscards image={pic} title='A title of News' author='Ekene Ezeobi'/>
    </>
  )
}

export default Ladieslg