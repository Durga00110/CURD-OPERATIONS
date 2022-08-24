import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Detailsall from './Detailsall'

const Details = () => {
    const [item,setitem] =useState([])
    const [data,setdata] = useState({
        name : "",
        job :"",
        language:''
    })

    const submit = (e)=>{
      e.preventDefault()
      axios.post('http://localhost:9000/curd/post',{
        name:data.name,
        job:data.job,
        language:data.language
      })
      .then(res=>res.data)
      .catch(error=>error)
    }

    const signin = (e)=>{
        const actualdata = {...data}
        actualdata[e.target.name] = e.target.value
        setdata(actualdata)
       
    }

    useEffect(()=>{
        fetch('http://localhost:9000/curd/get')
        .then((res)=>res.json())
        .then(data=>setitem(data.data))
    },[])

    const Maindata = item.length && item.map((element)=>
        <Detailsall key={element.name} element={element}></Detailsall>
    )


  return (
    <>
    <div>
       <form action='post' onClick={(e)=>submit(e)}>
         <input type="text" placeholder='Name' value={data.name} name="name" onChange={signin} required autoComplete='off'/>
         <input type="text" placeholder='Job' value={data.job} name="job" onChange={signin} required autoComplete='off'/>
         <input type="text" placeholder='Language' value={data.language} name="language" onChange={signin} required autoComplete='off'/>
         <input type="submit" />
       </form>
    </div>
     <div>
       {Maindata}
    </div>
    </>
  )
}

export default Details