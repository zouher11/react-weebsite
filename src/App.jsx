import Coreconsept from "./component/CoreConepts";
import Header from "./component/header";
import Exemples from "./component/exemples";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Coreconsept />
        <Exemples />
        <p>zouhir</p>
        <button>clikme</button>
      </main>
    </div>
  );
}

export default App;
