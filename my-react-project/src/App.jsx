import Greeting from './Greeting';
import  ClassGreeting from './ClassGreeting'
import Counter from './Button';

function App() {

  const customMessage = 'Welcome to my React App!';



  return (
  <div>
    <h1>Hello, World!</h1>
    <Greeting customMessage={customMessage} />
    <ClassGreeting customMessage={customMessage} />
    <Counter />
  </div>
  );
}

export default App;


