import React from 'react'

import './JobSearch.css'

const JobSearch = () => {
  return (
    <div className="container">
      <div className="search-input">
        <input type="text" placeholder="Search for job title or company name" />
        <img className="search-icon" src="https://assets.bossjob.com/website/Search.svg" alt="search" height="18px" width="18px" />
      </div>
      <div className="filter-wrapper">
        <button>Filter Results</button>
      </div>
    </div>
  )
}

export default JobSearch