import axios from 'axios';

const axiosInstance=axios.create({
    // baseURL:'https://randomuser.me/'
})
let startTime=0
axiosInstance.interceptors.request.use((config)=>{
    console.log('request call')
    startTime=Date.now()
    return config
})
axiosInstance.interceptors.response.use((response)=>{
    let receiveTime=Date.now()
    console.log(receiveTime-startTime)
    return response
})

export default axiosInstance