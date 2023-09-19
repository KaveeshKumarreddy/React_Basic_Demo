import keyConceptsImage from "../images/key-concepts.png";

function Header(props) {
  return (
    <header>
      <img src={props.src} alt={props.alt} />
      <h1>Key React Concepts</h1>
      <p>Selected key React concepts you should know about</p>
    </header>
  );
}

export default Header;
