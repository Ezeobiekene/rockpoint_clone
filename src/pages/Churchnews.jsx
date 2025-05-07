import React from 'react'
import newspic from '../assets/news_header.webp'
import Newscards from '../components/Newscards'
import pic from '../assets/news_header.webp'

const Churchnews = () => {
  return (
    <>
      <img src={newspic} />

      <button>Add Church News</button>
      <input placeholder='Search' />

      <Newscards image={pic} title='Title of the News' author='Ekene Ezeobi' />

      {/* At this point, load the news from the db */}
    </>
  )
}

export default Churchnews