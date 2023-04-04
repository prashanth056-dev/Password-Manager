import './index.css'

const PasswordItem = props => {
  const {obj, deletes, isUnhidden} = props
  const {id, website, username, password} = obj

  const func = () => {
    deletes(id)
  }

  return (
    <li className="list">
      <div className="profile">{website[0]}</div>
      <div>
        <p>{website}</p>
        <p>{username}</p>
        <p>
          {isUnhidden ? (
            password
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
            />
          )}
        </p>
      </div>
      <button
        data-testid="delete"
        className="delete-btn"
        type="button"
        onClick={func}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default PasswordItem
