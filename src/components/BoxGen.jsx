import React, { useState } from "react"

const BoxGen = props => {
const [color, setColor]=useState("")
const [box,setBox]=useState([])
// const [newBox, setNewBox]=useState({color:""})
const handleSubmit = e => {
    e.preventDefault();
    const newBox = {color:e.target[0].value}
    setBox([...box,newBox])
}



    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="fname">Color</label>
                    <input type="color" name="color" id="color" />
                    <input type="submit" value="Add" />
                </div>
            </form>
            {
                box.map((box,i)=>(
                    <div key={i} style={{backgroundColor: box.color, height: "100px",width:"100px"}}></div>
                ))
            }
        </>
    )
}
    











export default BoxGen