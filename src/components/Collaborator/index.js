import './Collaborator.css'

const Collaborator = ({ 
    collaboratorImage, 
    collaboratorName, 
    collaboratorPosition, 
    primaryColor 
  }) => {

  return (
    <div className='collaborator'>
      <div className='collaborator__header' style={{ backgroundColor: primaryColor }}>
        <img 
          className='collaborator__image' 
          src={collaboratorImage}
          alt={collaboratorName} />
      </div>
      <div className='collaborator__footer'>
        <h4 className='collaborator__name'>
          {collaboratorName}
        </h4>
        <h5 className='collaborator__position'>
          {collaboratorPosition}
        </h5>
      </div>
    </div>
  )
}

export default Collaborator