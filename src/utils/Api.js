class Api {


  getUsers(setUsers) {
    fetch(
      `https://63c98c0a904f040a9660965d.mockapi.io/users`
    ).then((res) => res.json())
      .then((data) => {
        setUsers(data)
      })
      .catch((error) => console.log(error))

  }
  getUser(id) {
    return fetch(`https://63c98c0a904f040a9660965d.mockapi.io/users:${id}`, {})
      .then(res => console.log(res))
  }


}

export const api = new Api();