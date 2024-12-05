import { useState } from "react"


export const OnClickSimple = () => {
    const [active, setActive] = useState(false);
  const  handleClick =()=>{
    setActive(!false)
  }
  return (
    <div  className={`p-3 rounded ${active ? 'bg-blue-500' : 'bg-gray-500'}`} onClick={handleClick}>OnClickSimple</div>
  )
}
