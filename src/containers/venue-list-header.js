import React from 'react'
import { Link } from 'react-router-dom'

const VenueListHeader = props => {
  return (
    <header className="athelas flex flex-row justify-center items-center bg-dark-gray h3">
      {/*<div className="ml2">
        <Link className="Link white-60" to="/venues">
          <i className="f3 ion-chevron-left" />
        </Link>
      </div>*/}
      <div className="white-60 athelas f4">Venues</div>
      <div className="mr2" />
    </header>
  )
}

export default VenueListHeader
