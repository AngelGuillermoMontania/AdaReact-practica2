export default function SearchBar({ onSearch }) {
  return (
    <form onSubmit={onSearch}>
      <input type="text" placeholder="Ciudad..." />
      <button type="submit">Agregar</button>
    </form>
  );
}
