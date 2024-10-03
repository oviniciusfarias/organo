import './Dropdown.css'

const Dropdown = (props) => {
  
  const handleSelectChange = (event) => {
    props.handleChange(event.target.value)
  }
  
  return (
    <div className='dropdown' >
      <label>{props.label}</label>
      <select 
        required={props.required}
        onChange={handleSelectChange}
        value={props.value}>
          <option value=""></option>
        {props.itens.map(item => {
          return <option key={item}>{item}</option>
        })}
      </select>
    </div>
  )
}

export default Dropdown