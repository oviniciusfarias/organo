import { useState } from 'react'
import Button from '../Button'
import Dropdown from '../Dropdown'
import TextField from '../TextField'
import './Form.css'

const Form = (props) => {
  
  const [valueNome, setNome] = useState('')
  const [valueCargo, setCargo] = useState('');
  const [valueImagem, setImagem] = useState('');
  const [valueTime, setTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault()
    
    props.handleCollaboratorRegistered({
      valueNome, 
      valueCargo, 
      valueImagem, 
      valueTime
    })

    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }
  
  return (
    <section className='form'>
      <form onSubmit={handleSubmit}>
        <h2>Preencha os dados para criar o card do colaborador</h2>

        <TextField 
        label="Nome" 
        placeholder="Digite seu nome" 
        value={valueNome}
        handleChange={value => setNome(value)}
        required={true} />

        <TextField 
        label="Cargo" 
        placeholder="Digite seu cargo" 
        value={valueCargo}
        handleChange={value => setCargo(value)}
        required={true} />

        <TextField 
        label="Imagem" 
        value={valueImagem}
        handleChange={value => setImagem(value)}
        placeholder="Informe o endereço da imagem" />

        <Dropdown 
        label="Time" 
        itens={props.teams} 
        required={true}
        value={valueTime}
        handleChange={value => setTime(value)} />

        <Button>
          Criar card
        </Button>
      </form>
    </section>
  )
}

export default Form