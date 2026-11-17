
import { useParams, Link } from 'react-router-dom';

const students = [
  { id: 1, name: 'Sai', branch: 'CSE', year: '2nd Year' },
  { id: 2, name: 'Rahul', branch: 'ECE', year: '2nd Year' },
  { id: 3, name: 'Priya', branch: 'IT', year: '3rd Year' },
  { id: 4, name: 'Kiran', branch: 'EEE', year: '2nd Year' },
];

function StudentDetails() {
  const { id } = useParams();

  const student = students.find(
    (item) => item.id === Number(id)
  );

  if (!student) {
    return (
      <div className="page">
        <h1>Student Not Found</h1>
        <Link to="/students">Back to Students</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>Student Details</h1>

      <div className="student-card">
        <p><strong>ID:</strong> {student.id}</p>
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Branch:</strong> {student.branch}</p>
        <p><strong>Year:</strong> {student.year}</p>
      </div>

      <Link to="/students">Back to Students</Link>
    </div>
  );
}

export default StudentDetails;
