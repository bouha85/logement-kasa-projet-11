import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import '../styles/Carrousel.css'
import '../styles/index.css'
import PropTypes from 'prop-types'

function Carrousel({ pictures }) {
  const [item, setitem] = useState(0)
  return (
    <div className="carrousel">
      <button
        className="carrousel__button carrousel__button--left"
        onClick={() => {
          item === 0 ? setitem(pictures.length - 1) : setitem(item - 1)
        }}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <img
        src={pictures[item]}
        alt="Cover location"
        className="carrousel__img"
      />

      <button
        className="carrousel__button carrousel__button--right"
        onClick={() => {
          item === pictures.length - 1 ? setitem(0) : setitem(item + 1)
        }}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  )
}

Carrousel.propTypes = {
  pictures: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
}

export default Carrousel
