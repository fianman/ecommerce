
import React from 'react'
import axios from 'axios'

class Profile extends React.Component {

  componentDidMount() {
    this.insertProfile();
  }

  insertProfile() {
    axios.get('/api/current_user', {}).then((response) => {
      const data = response.data
      if (data !== "Please log in first") {
        const username = data.username
        const image = `<img src="${data.image}" />`

        this.refs.username.insertAdjacentHTML('beforeend', username)
        this.refs.image.insertAdjacentHTML('beforeend', image)
      }
    });
  }

  render() {
    return(
      <div>
        <h2 ref="username">Hello, </h2>
        <div ref="image"></div>
      </div>
    )
  }
}

export default Profile
