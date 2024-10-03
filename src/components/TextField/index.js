import './TextField.css'

const TextField = (props) => {
  
  const placeholderChanged = `${props.placeholder}...`

  // let value = 'Vinicius Farias'

  const handleTextFieldChange = (event) => {
    props.handleChange(event.target.value)
  }

  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input 
        onChange={handleTextFieldChange} 
        placeholder={placeholderChanged} 
        required={props.required} 
        value={props.value} />
    </div>
  )
}

export default TextField