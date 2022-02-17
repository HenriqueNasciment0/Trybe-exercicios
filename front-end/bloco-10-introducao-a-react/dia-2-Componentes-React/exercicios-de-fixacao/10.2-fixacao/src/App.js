import gatofoto from './gato-fofo.jpg';
import Image from './Image';

function App() {
  return (
    <main>
      <Image source={gatofoto} alternativeText="Cute cat staring" />
    </main>
  );
}

export default App;