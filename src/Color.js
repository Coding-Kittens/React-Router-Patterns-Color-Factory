import { useParams, useNavigate, Navigate } from 'react-router-dom'
import './Color.css'
const Color = () => {
  const navigate = useNavigate()
  const colorName = useParams().color
  const colors = JSON.parse(localStorage.colors)
  const [color] = colors.filter((c) => c.name === colorName)

  const removeColor = () => {
    localStorage.setItem(
      'colors',
      JSON.stringify(colors.filter((c) => c.name != colorName))
    )
    navigate('/colors')
  }

  return (
    <>
      {color
        ? (
        <div style={{ backgroundColor: color.color }} className="Color">
          <h1>{`Here is ${colorName}!`}</h1>
          <p>{color.color}</p>
          <button
            type="button"
            onClick={removeColor}
          >{`Remove ${colorName}`}</button>
        </div>
          )
        : (
        <Navigate to="/colors" />
          )}
    </>
  )
}
export default Color
