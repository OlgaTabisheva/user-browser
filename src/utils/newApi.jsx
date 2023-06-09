import axios from 'axios';

export const fetchUsers = async () => {
  console.log("fetchUsers")
  const {data} = await axios.get(`https://63c98c0a904f040a9660965d.mockapi.io/users`, {});
  console.log(data)
  return data;
}
export const fetchSignUp = async ({name, email, password, avatar}) => {
  console.log("signup")
  const data = await axios.post(`https://api.escuelajs.co/api/v1/users/`, {
    name: name,
    email: email,
    password: password,
    avatar: avatar
  })
  return data;
}
export const fetchSignIn = async ({email, password}) => {
  console.log("signup")
  const data = await axios.post(`https://api.escuelajs.co/api/v1/auth/login`, {
    email: email,
    password: password,
  })
  return data;
}




