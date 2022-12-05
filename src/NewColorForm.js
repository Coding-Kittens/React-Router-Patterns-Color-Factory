import useFields from './hooks/useFields'
import { useNavigate } from 'react-router-dom'
import './NewColorForm.css'
const NewColorForm = () => {
  const navigate = useNavigate()
  const [formData, handleChange, resetformData] = useFields({
    color: '#000000',
    name: ''
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    localStorage.setItem(
      'colors',
      JSON.stringify(
        localStorage.colors
          ? [formData, ...JSON.parse(localStorage.colors)]
          : [formData]
      )
    )
    resetformData()
    navigate('/colors')
  }

  return (
    <form className="NewColorForm" onSubmit={handleSubmit}>
      <label>
        Color Name
        <input
          required
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <input
        type="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
      />
      <button type="submit" name="button">
        Add Color!
      </button>
    </form>
  )
}
export default NewColorForm
