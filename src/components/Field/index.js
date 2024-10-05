import './Field.css'

const Field = ({fieldType = 'text', label, placeholder, required = false, value, handleChange}) => {
  
  const placeholderChanged = `${placeholder}...`

  // let value = 'Vinicius Farias'

  const handleFieldChange = (event) => {
    handleChange(event.target.value)
  }

  return (
    <div className={`field field-${fieldType}`}>
      <label>{label}</label>
      <input 
        onChange={handleFieldChange} 
        placeholder={placeholderChanged} 
        required={required} 
        type={fieldType}
        value={value} />
    </div>
  )
}

export default Field