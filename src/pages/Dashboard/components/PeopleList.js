import PeopleListItem from "./PeopleListItem";

function PeopleList(props) {
  const { people, where } = props;

  console.log("people", people);
  console.log("where", where);

  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} />
      ))}
    </ul>
  );
}

export default PeopleList;
