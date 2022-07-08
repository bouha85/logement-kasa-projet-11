import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import '../styles/Collase.css'
import PropTypes from 'prop-types'

function Collase({ datas, title }) {
  const [isActive, setIsActive] = useState(true)
  datas = Array.isArray(datas) ? datas : [datas]

  return isActive ? (
    <div className="Dropdown">
      <button
        className="Dropdown__label 
        "
        onClick={() => setIsActive(false)}
      >
        {title} <FontAwesomeIcon icon={faChevronUp} />
      </button>
    </div>
  ) : (
    <div className="Dropdown">
      <button className="Dropdown__label" onClick={() => setIsActive(true)}>
        {title} <FontAwesomeIcon icon={faChevronDown} />
      </button>
      <ul className="Dropdown__list">
        {datas.map((item, index) => (
          <div key={`${item}-${index}`}>{item}</div>
        ))}
      </ul>
    </div>
  )
}

Collase.propTypes = {
  datas: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  title: PropTypes.string.isRequired,
}

export default Collase
