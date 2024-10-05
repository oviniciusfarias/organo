import Collaborator from '../Collaborator'
import hexToRgba from 'hex-to-rgba'
import './Team.css'

const Team = ({
  collaborators, 
  teamColor, 
  team, 
  handleDeleteCollaborator,
  handleChangeTeamColor,
  handleFavoriteCollaborator }) => {
  
  return (
    (collaborators.length > 0) ? 
      <section className='team' style={{ backgroundColor: hexToRgba(teamColor, 0.35) }}>
        
        <h3 style={{ borderColor: teamColor }}>
          {team.teamName}
        </h3>
        
        <input 
          value={teamColor} 
          type='color' 
          className='team__input-color' 
          onChange={event => handleChangeTeamColor(team.id, event.target.value)} />

        <div className='team__collaborators'>

          {collaborators.map(collaborator => {

            return (
              <Collaborator 
                key={collaborator.id}
                collaborator={collaborator}
                collaboratorImage={collaborator.valueImagem}
                collaboratorName={collaborator.valueNome}
                collaboratorPosition={collaborator.valueCargo}
                teamColor={teamColor}
                handleDelete={handleDeleteCollaborator}
                handleFavoriteCollaborator={handleFavoriteCollaborator} />
            )
          })}

        </div>
      </section>
    : ''
  )
}

export default Team