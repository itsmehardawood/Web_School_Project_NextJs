'use client';


import { useState, useEffect } from 'react';
import AddButoon from '../components/addButton';

export default function AdminDashboard() {
  const [pendingApplications, setPendingApplications] = useState([]); // State for pending applications
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [students, setStudents] = useState([]); // State for students
  const [studentsLoading, setStudentsLoading] = useState(false);
  const [studentsError, setStudentsError] = useState('');
  const [view, setView] = useState('pending'); // 'pending' or 'students'
  const [contacts, setContacts] = useState([]); // To store contacts from the backend
  const [showContacts, setShowContacts] = useState(false); // Manage contacts view visibility

  const fetchContacts = async () => {
    try {
      const response = await fetch('http://localhost:3001/contact');
      const data = await response.json();
      console.log('Fetched contacts:', data); // Log the fetched data
      setContacts(Array.isArray(data) ? data : []); // Ensure it's always an array
      setShowContacts(true); // Show contacts on fetch success
    } catch (error) {
      console.error('Failed to fetch contacts:', error);
      alert('Failed to load contacts.');
    }
  };
  
  

  // Fetch pending applications from the backend
  const fetchPendingApplications = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('http://localhost:3001/admission/applications');
      if (response.ok) {
        const data = await response.json();
        setPendingApplications(data);
      } else {
        throw new Error('Failed to fetch pending applications');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch all students from the backend
  const fetchAllStudents = async () => {
    setStudentsLoading(true);
    setStudentsError('');
    try {
      const response = await fetch('http://localhost:3001/students');
      if (response.ok) {
        const data = await response.json();
        setStudents(data);
      } else {
        throw new Error('Failed to fetch students');
      }
    } catch (error) {
      setStudentsError(error.message);
    } finally {
      setStudentsLoading(false);
    }
  };

  // Handle clicking the Go button in the "Manage Students" section
  const handleManageStudentsClick = async () => {
    setView('students');
    await fetchAllStudents();
  };

  // Handle clicking the Go button in the "Pending Applications" section
  const handlePendingApplicationsClick = async () => {
    setView('pending');
    await fetchPendingApplications();
  };


    // Handle clicking the Go button in the "contacts " section
    const handlecontactsonClick = async () => {
      setView('showContacts');
      await fetchContacts();
    };

  

  // Handle Mark Done functionality
  const handleMarkDone = async (applicationId) => {
    try {
      const response = await fetch(`http://localhost:3001/admission/mark-done/${applicationId}`, {
        method: 'POST',
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        fetchPendingApplications();
      } else {
        alert('Failed to mark as done');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while processing your request.');
    }
  };


  // drop Student

  async function handleDropStudent(studentId) {
    try {
      const response = await fetch(`http://localhost:3001/students/${studentId}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        alert('Student deleted successfully');
        // Optionally refresh the list of students here
      } else {
        alert('Failed to delete student');
      }
    } catch (error) {
      console.error('Error deleting student:', error);
      alert('An error occurred');
    }
  }







  // Initial fetch on component load
  useEffect(() => {
    fetchPendingApplications();
    fetchAllStudents();
    fetchContacts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="px-4 py-8 mx-auto max-w-7xl">
        <h2 className="mb-6 text-3xl font-bold text-gray-800">Admin Dashboard</h2>

        {/* Dashboard Metrics */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700">Total Students</h3>
            <p className="mt-2 text-2xl font-bold text-gray-900">{students.length}</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700">Pending Applications</h3>
            <p className="mt-2 text-2xl font-bold text-gray-900">{pendingApplications.length}</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700">Contact Requests</h3>
            <p className="mt-2 text-2xl font-bold text-gray-900">{contacts.length}</p>
          </div>


        </div>

        

        {/* Admin Actions */}
        <div className="mt-8">
          <h3 className="mb-4 text-2xl font-semibold text-gray-800">Admin Actions</h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div
              className="p-6 text-white bg-blue-500 rounded-lg shadow-lg cursor-pointer"
            >
              <h4 className="text-xl font-semibold">Manage Students</h4>

              <div className='mt-3 space-x-2 '>
              <button
                onClick={handleManageStudentsClick}
                className="px-4 py-2 mt-2 text-white bg-purple-800 rounded-lg hover:bg-purple-700"
              >
                Go
              </button>

             <AddButoon />
              </div>
          
            </div>

            <div className="p-6 text-white bg-yellow-500 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold">Pending Applications</h4>
              <button
                onClick={handlePendingApplicationsClick}
                className="px-4 py-2 mt-4 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
              >
                Go
              </button>
            </div>

            <div className="p-6 text-white bg-green-700 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold">Contacts Info</h4>
              <button
                onClick={handlecontactsonClick}
                className="px-4 py-2 mt-4 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
              >
                Go
              </button>
            </div>





          </div>
        </div>

        {/* Pending Applications Table */}
        {view === 'pending' && (
          <div className="p-6 mt-10 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-gray-700">Pending Applications</h2>
            {loading && <p className="mt-4 text-center text-blue-500">Loading...</p>}
            {error && <p className="mt-4 text-center text-red-500">{error}</p>}
            <table className="min-w-full border-collapse table-auto">
              <thead>
                <tr>
                <th className="px-4 py-2 text-left border-b">Student Name</th>

                  <th className="px-4 py-2 text-left border-b">Parent Name</th>
                  <th className="px-4 py-2 text-left border-b">Email</th>
                  <th className="px-4 py-2 text-left border-b">Phone </th>
                  <th className="px-4 py-2 text-left border-b">Grade </th>
                  <th className="px-4 py-2 text-left border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {pendingApplications.map((app) => (
                  <tr key={app.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{app.childName}</td>
                    <td className="px-4 py-2 border-b">{app.name}</td>
                    <td className="px-4 py-2 border-b">{app.email}</td>
                    <td className="px-4 py-2 border-b">{app.phone}</td>
                    <td className="px-4 py-2 border-b">{app.grade}</td>


                    <td className="px-4 py-2 border-b">
                      <button
                        onClick={() => handleMarkDone(app.id)}
                        className="px-4 py-2 text-white bg-green-700 rounded-lg hover:bg-green-600"
                      >
                        Mark Done
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}


            {/* Pending Conttact Table */}
            {view === 'showContacts' &&(
          <div className="p-6 mt-10 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-gray-700">Contacts</h2>
            {loading && <p className="mt-4 text-center text-blue-500">Loading...</p>}
            {error && <p className="mt-4 text-center text-red-500">{error}</p>}
            <table className="min-w-full border-collapse table-auto">
              <thead>
                <tr>

                  <th className="px-4 py-2 text-left border-b">Name</th>
                  <th className="px-4 py-2 text-left border-b">Message</th>
                  <th className="px-4 py-2 text-left border-b">Email </th>
 
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <tr key={contact.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{contact.username}</td>
                    <td className="px-4 py-2 border-b">{contact.message}</td>
                    <td className="px-4 py-2 border-b">{contact.email}</td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Student Records Table */}
        {view === 'students' && (
          <div className="p-6 mt-10 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-gray-700">Student Records</h2>
            <table className="min-w-full border-collapse table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left border-b">Student</th>
                  <th className="px-4 py-2 text-left border-b">Father Name</th>
                  <th className="px-4 py-2 text-left border-b">Grade</th>
                  <th className="px-4 py-2 text-left border-b">Phone</th>
                  <th className="px-4 py-2 text-left border-b">Email</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border-b">{student.childName}</td>
                    <td className="px-4 py-2 border-b">{student.name}</td>
                    <td className="px-4 py-2 border-b">{student.grade}</td>
                    <td className="px-4 py-2 border-b">{student.phone}</td>
                    <td className="px-4 py-2 border-b">{student.email}</td>
                    <td className="px-4 py-2 border-b">  <button
                    onClick={() => handleDropStudent(student.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Drop
                  </button></td>

                  

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

