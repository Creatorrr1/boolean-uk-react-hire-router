import { Link } from "react-router-dom";

function PeopleListItem(props) {
  const { person } = props;

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      <Link to={`/view/${person.id.value}`} state={{ person }}>
        View Profile
      </Link>
      {person.wage && <p>Wage: £{person.wage}</p>}
    </li>
  );
}

export default PeopleListItem;

// { ${person.id.value} === null ? `/${person.id.value}` : `/${person.email}`}
