import axios from 'axios';


const baseUrl = 'https://user-browser-api.746746746.xyz'
export const fetchUsers = async () => {
  const {data} = await axios.get(`${baseUrl}/api/users`, {withCredentials: false,});
  return data;
}
export const fetchSignUp = async ({name, email, password, avatar}) => {
  const {data} = await axios.post(`${baseUrl}/api/users`, {
    name: name,
    email: email,
    password: password,
    avatar: avatar,
    phone: 'не заполнен',
    description: 'Не заполнено',
    role: 'партнер'
  })
  return data;
}
export const fetchSignIn = async ({email, password}) => {
  const {data} = await axios.post(`${baseUrl}/api/users/auth`, {
    email: email,
    password: password,
  })
  return data;
}




