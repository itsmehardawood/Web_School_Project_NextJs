'use client';
import { useState, useEffect } from 'react';

export default function AdminReply() {
  const [contacts, setContacts] = useState([]); // To store contacts from the backend
  const [selectedContact, setSelectedContact] = useState(null); // The selected contact for reply
  const [reply, setReply] = useState({ subject: '', message: '' }); // Reply data

  // Fetch the contacts from the backend
  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch('http://localhost:3001/contact');
        const data = await response.json();
        console.log('Fetched contacts:', data); // Log the fetched data
        setContacts(Array.isArray(data) ? data : []); // Ensure it's always an array
      } catch (error) {
        console.error('Failed to fetch contacts:', error);
      }
    }
  
    fetchContacts();
  }, []);
  

  // Handle form submission to send a reply
  const handleReply = async (e) => {
    e.preventDefault();
  
    if (!selectedContact) {
      alert('Please select a contact to reply to.');
      return;
    }
  
    try {
      const response = await fetch(
        `http://localhost:3001/contact/reply/${selectedContact.id}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(reply),
        }
      );
  
      const result = await response.json();
      
      console.log('Response status:', response.status); // Log HTTP response status
      console.log('Response body:', result); // Log response data
  
      if (response.ok) {
        alert(`Reply sent to ${selectedContact.email}: ${result.message}`);
        setReply({ subject: '', message: '' }); // Reset the form
      } else {
        console.error('Failed to send reply:', result);
        alert(`Failed to send reply. Server error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending reply.');
    }
  };
  

  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">Admin Reply</h1>

      {/* List of contacts */}
      <div className="mb-8">
        <h2 className="mb-2 text-xl font-semibold">Contact List</h2>
        <ul className="border divide-y rounded-md">
          {contacts.map((contact) => (
            <li
              key={contact.id}
              className="p-4 cursor-pointer hover:bg-gray-100"
              onClick={() => setSelectedContact(contact)}
            >
            <div className='space-x-4'>
            <span className="font-bold">{contact.username}</span> 
             <span className="font-medium">{contact.message}</span> 
      
            </div>
      
        
            

            </li>
          ))}
        </ul>
      </div>

      {/* Reply form */}
      {selectedContact && (
        <div className="p-6 bg-white rounded-md shadow-md">
          <h2 className="mb-4 text-lg font-semibold">
            Reply to {selectedContact.username} ({selectedContact.email})
          </h2>
          <form onSubmit={handleReply}>
            <div className="mb-4">
              <label className="block mb-1 font-medium text-gray-700">Subject:</label>
              <input
                type="text"
                value={reply.subject}
                onChange={(e) =>
                  setReply({ ...reply, subject: e.target.value })
                }
                required
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium text-gray-700">Message:</label>
              <textarea
                value={reply.message}
                onChange={(e) =>
                  setReply({ ...reply, message: e.target.value })
                }
                required
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Send Reply
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
