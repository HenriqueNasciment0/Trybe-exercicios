import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ['Trabalhar', 'Ler a Bíblia', 'Fazer exercícios', 'Aula Trybe', 'Reunião'];

function App() {
  return (
  tarefas.map((e) => Task(e))
  ); 
}

export default App;
