import ConceptItem from "./ConceptItem";

function Concepts(props) {
  return (
    <ul id="concepts">
      <ConceptItem
        imgSrc={props.concepts[0].image}
        title={props.concepts[0].title}
        desc={props.concepts[0].description}
      />
      <ConceptItem
        imgSrc={props.concepts[1].image}
        title={props.concepts[1].title}
        desc={props.concepts[1].description}
      />
      <ConceptItem
        imgSrc={props.concepts[1].image}
        title={props.concepts[1].title}
        desc={props.concepts[1].description}
      />
    </ul>
  );
}

export default Concepts;
