
import { Link } from 'react-router-dom';

const students = [
  { id: 1, name: 'Sai', branch: 'CSE' },
  { id: 2, name: 'Rahul', branch: 'ECE' },
  { id: 3, name: 'Priya', branch: 'IT' },
  { id: 4, name: 'Kiran', branch: 'EEE' },
];

function Students() {
  return (
    <div className="page">
      <h1>Students Page</h1>

      <p>List of registered students.</p>

      <div className="student-list">
        {students.map((student) => (
          <div className="student-card" key={student.id}>
            <h3>{student.name}</h3>

            <p>Branch: {student.branch}</p>

            <Link to={`/details/${student.id}`}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Students;
