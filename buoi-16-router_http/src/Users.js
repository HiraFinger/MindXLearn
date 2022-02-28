import {useEffect} from 'react'
import axiosInstance from './axios'
const Users = () =>{
    useEffect(() => {
        axiosInstance('/api/',{
            params: {
                results:10,
            },
            headers:{},
            method: 'GET',
        })
        
        .then((res)=>{
            console.log(res)
        })
    },[])
    return <div>Users</div>
}

export default Users