import React from 'react'
import events from '../assets/events_events.webp'

const Events = () => {
  return (
    <>
      <img src={events} />
      <h2>Create Event</h2>
      <form>
        <input placeholder='Search' />
        <button>Add</button>
      </form>
     

      <h2>Current Events</h2>
      <span>None</span>

      <h2>Past Events</h2>
      <h2>All Event Attendees</h2>

      <form>
        <input placeholder='Search' />
        <input placeholder='Filter' />
      </form>

    </>
  )
}

export default Events