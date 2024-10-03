import Collaborator from '../Collaborator'
import './Team.css'

const Team = (props) => {
  
  return (
    (props.collaborators.length > 0) ? 
      <section className='team' style={{ backgroundColor: props.secondaryColor }}>
        <h3 style={{ borderColor: props.primaryColor }}>
          {props.team.teamName}
        </h3>

        <div className='team__collaborators'>

          {props.collaborators.map(collaborator => {
            const key = props.team.teamName + collaborator.valueNome
            return (
              <Collaborator 
                key={key}
                collaboratorImage={collaborator.valueImagem}
                collaboratorName={collaborator.valueNome}
                collaboratorPosition={collaborator.valueCargo}
                primaryColor={props.primaryColor} />
            )
          })}

        </div>
      </section>
    : ''
  )
}

export default Team