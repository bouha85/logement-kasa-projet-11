// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import '../styles/Dropdown.css'
import '../styles/index.css'
import PropTypes from 'prop-types'

function Dropdown({ datas, title }) {
  const [isActive, setIsActive] = useState(true)
  datas = Array.isArray(datas) ? datas : [datas]

  return isActive ? (
    <div className="Dropdown">
      <button className="Dropdown__label" onClick={() => setIsActive(false)}>
        {title}
      </button>
    </div>
  ) : (
    <div className="Dropdown">
      <button className="Dropdown__label" onClick={() => setIsActive(true)}>
        {title}
      </button>
      <ul className="Dropdown__list">
        {datas.map((item, index) => (
          <div key={`${item}-${index}`}>{item}</div>
        ))}
      </ul>
    </div>
  )
}

Dropdown.propTypes = {
  datas: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  title: PropTypes.string.isRequired,
}

export default Dropdown
