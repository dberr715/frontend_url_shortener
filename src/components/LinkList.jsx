import { Link } from "react-router-dom";

export default function LinkList({List}) {
  ({ List }) => {
    return (
      <ul>
        {List.map((link) => {
          return (
            <li key={link.id}>
              <Link to={`/urldata/${link.id}`}>{link.title}</Link>
            </li>
          );
        })}
      </ul>
    );
  };
}
