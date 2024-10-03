import { useState } from 'react';
import Banner from './components/Banner'
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {

  const teams = [
    {
      teamName: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      teamName: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      teamName: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      teamName: 'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      teamName: 'UX e Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5'
    },
    {
      teamName: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      teamName: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    },
  ]
  
  const [collaborators, setCollaborators] = useState([])
  
  const handleNewCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator])
  }

  return (
    <div className="App">
      <Banner />
      <Form
        handleCollaboratorRegistered={collaborator => handleNewCollaborator(collaborator)}
        teams={teams.map(team => team.teamName)} />

      <div className='teams-container'>
        <h2 className='teams-container__title'>Minha organização</h2>
      </div>
      
      {teams.map(team => {
        return <Team 
          key={team.teamName} 
          team={team} 
          primaryColor={team.primaryColor} 
          secondaryColor={team.secondaryColor}
          collaborators={collaborators.filter(collaborator => collaborator.valueTime === team.teamName)} />
      })}

      <Footer />
    </div>
  );
}

export default App;
