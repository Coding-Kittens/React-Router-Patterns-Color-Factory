import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ColorList.css'
const ColorList = () => {
  useEffect(() => {
    if (localStorage.colors !== undefined) {
      setColors(JSON.parse(localStorage.colors))
    }
  }, [])

  const [colors, setColors] = useState()

  return (
    <>
      <Link className="ColorList-AddColor" exact to="/colors/new">
        Add Color!
      </Link>
      <div className="ColorList">
        {colors
          ? (
              colors.map((color) => (
            <Link exact to={`/colors/${color.name}`}>
              {color.name}
            </Link>
              ))
            )
          : (
          <p>No colors? add one.</p>
            )}
      </div>
    </>
  )
}
export default ColorList
