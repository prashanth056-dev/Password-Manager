import './index.css'
import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import PasswordItem from '../PasswordItem'

class PasswordManager extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    list: [],
    showPassword: false,
    search: '',
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    console.log(website, username, password)
    if (website !== '' && password !== '' && username !== '') {
      const newEl = {
        id: uuid(),
        website,
        username,
        password,
      }

      this.setState(prev => ({
        list: [...prev.list, newEl],
        website: '',
        username: '',
        password: '',
      }))
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onDelete = id => {
    const {list} = this.state
    const filteredList = list.filter(each => each.id !== id)
    this.setState({list: filteredList})
  }

  checkUncheck = () => {
    this.setState(prev => ({showPassword: !prev.showPassword}))
  }

  onSearch = event => {
    this.setState({search: event.target.value})
  }

  render() {
    const {showPassword, website, username, password, list, search} = this.state
    const filteredList = list.filter(eachItem =>
      eachItem.website.toLowerCase().includes(search.toLowerCase()),
    )

    return (
      <div className="mainBg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="iconImg"
        />
        <div className="card">
          <form className="formCard" onSubmit={this.onSubmitForm}>
            <h1>Add New Password</h1>
            <div className="inputRow">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="logo"
              />
              <hr className="hr-col" />
              <input
                onChange={this.onChangeWebsite}
                type="text"
                placeholder="Enter Website"
                className="input"
                value={website}
              />
            </div>
            <div className="inputRow">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="logo"
              />
              <hr className="hr-col" />
              <input
                onChange={this.onChangeUsername}
                type="text"
                placeholder="Enter Username"
                className="input"
                value={username}
              />
            </div>
            <div className="inputRow">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="logo"
              />
              <hr className="hr-col" />
              <input
                onChange={this.onChangePassword}
                type="password"
                placeholder="Enter password"
                className="input"
                value={password}
              />
            </div>
            <button type="submit" className="btn">
              Add
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="card1Img"
          />
        </div>
        <div className="card2">
          <div className="row-space">
            <div className="row">
              <h1>Your Passwords </h1>
              <p className="count"> {filteredList.length}</p>
            </div>
            <div className="inputRow2">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-icon"
              />
              <hr />
              <input
                type="search"
                placeholder="Search"
                className="search-input"
                onChange={this.onSearch}
              />
            </div>
          </div>
          <hr className="line" />
          <div className="show-passwords">
            <input id="show" type="checkbox" onClick={this.checkUncheck} />
            <label htmlFor="show">Show Passwords</label>
          </div>
          <ul className="password-list">
            {filteredList.length === 0 ? (
              <div className="noPasswords">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="no-password-img"
                />
                <p>No passwords</p>
              </div>
            ) : (
              filteredList.map(eachItem => (
                <PasswordItem
                  key={eachItem.id}
                  obj={eachItem}
                  deletes={this.onDelete}
                  isUnhidden={showPassword}
                />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default PasswordManager
