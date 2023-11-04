import ContainCard from "./components/ContainCard.jsx";
import data from "./data.js";

function App() {
  // const search = () => {
  //   alert(`Hice click en el boton buscar`);
  // };

  // const quitar = () => {
  //   alert(`Hice click en el boton quitar`);
  // };

  return (
    <div>
      <ContainCard cities={data} />
    </div>
  );
}

export default App;
