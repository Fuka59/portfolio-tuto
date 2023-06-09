import React, {useEffect, useState} from 'react'; 
import axios from 'axios'; 
import {BiCheck} from 'react-icons/bi' 
 
const listServices = () => { 
    const [data, setData] = useState([]) 
 
    useEffect(() =>{ 
        getServices() 
    }, []) 
 
    const getServices = async () => { 
        const response = await axios.get('http://localhost:3000/api/service/services') 
        setData(response.data.services) 
    } 
    console.log(data) 
    return data.map((d)=>{ 
        return( 
 
        <article className='service' key={d._id}> 
          <div className="service__head"> 
            <h3>{d.title}</h3> 
          </div> 
          <ul className='service__list'> 
            <li> 
              <BiCheck className='service__list__icon'/>  
              <p> {d.description} </p> 
            </li> 
          </ul> 
        </article> 
 
       ) 
    }) 
 
    ; 
} 
 
export default listServices;