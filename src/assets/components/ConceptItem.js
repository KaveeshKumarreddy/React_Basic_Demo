function ConceptItem(props) {
  return (
    <li className="concept">
      <img src={props.imgSrc} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </li>
  );
}

export default ConceptItem;
