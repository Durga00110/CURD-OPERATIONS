import React from 'react'

const Detailsall = (props) => {

    const {name,job,language} = props.element
  return (
    <div style={{height:"130px",width:"100px", backgroundColor:"red", color:"black", marginLeft:"50%", marginRight:"50%"}}>
        <p>{name}</p>
        <p>{job}</p>
        <p>{language}</p>
    </div>
  )
}

export default Detailsall