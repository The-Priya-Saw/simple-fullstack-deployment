import { Link } from "react-router-dom";

const List = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/List">List</Link>
      </nav>
      <h1>List</h1>
    </div>
  );
};

export default List;
