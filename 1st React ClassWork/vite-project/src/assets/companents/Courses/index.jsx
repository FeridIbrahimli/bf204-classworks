function Courses({ data }) {
  return (
    <ul>
      {data &&
        data.map((q) => {
          return <li key={q.id}>{q.name}</li>;
        })}
    </ul>
  );
}

export default Courses;
