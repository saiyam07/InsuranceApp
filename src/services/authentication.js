import axios from 'axios';

export const service = axios.create({
    baseURL:'http://localhost:8000/auth/',
    headers:{
        Authorization: 'Token 018d1a636662cd7c19b9760f4918a317c8ef3791b83fb4f5e2e0c4cf190dbe3c'
    }
}
)

//authentication sevice for user validation
export const authenticateUser =async()=>{
    const authoirzed = await axios.post('user/login',{
        username,
        password,
    });
    console.log(authoirzed)


}

//export const logOutUser =async()=>{
    //axios.post('user/logout')

//}


//export const getCurrentUser=async()=>{
    //axios.get('user/get')

//}