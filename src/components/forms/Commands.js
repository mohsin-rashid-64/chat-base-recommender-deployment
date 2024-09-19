// import React from 'react';
// import './Forms.css'; // Import CSS file for additional styling

// function Commands() {
//   return (
//     <div className="container">
//       <div className="left-panel">
//         <form style={{ maxWidth: '400px', margin: 'auto' }}>
//           <div style={{ marginBottom: '15px' }}>
//             <h2>Commands</h2>
//             <p>Write a creative story about Tobby flying to the moon in Matthew McConaughey's tone of voice.</p>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="story">Your Command:</label>
//             <textarea
//               id="story"
//               placeholder="Write a creative story about Tobby flying to the moon in Matthew McConaughey's tone of voice."
//               style={{ width: '100%', minHeight: '200px', padding: '5px' }}
//             ></textarea>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="background-info">Background Information:</label>
//             <textarea
//               id="background-info"
//               placeholder="Tobby was a happy dog that loved to sneak around eating people's food."
//               style={{ width: '100%', minHeight: '100px', padding: '5px' }}
//             ></textarea>
//           </div>

//           <button
//             type="submit" id='submit-btn'
//           >
//             Generate
//           </button>
//         </form>
//       </div>

//       <div className="right-panel">
//         {/* Response Window */}
//         <div className="response-window">
//           {/* Placeholder for response content */}
//           {/* "No output generated yet." */}
//           No output generated yet.
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Commands;





































// import React, { useState } from 'react';
// import axios from 'axios';
// import ReactMarkdown from 'react-markdown';

// function Commands() {
//   const [formData, setFormData] = useState({
//     command: '',
//     info: '',
//     tone: ''
//   });
//   const [apiResponse, setApiResponse] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [saving, setSaving] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Form validation
//     if (!formData.command || !formData.info || !formData.tone) {
//       setError('All fields are required.');
//       return;
//     }

//     setLoading(true);
//     setApiResponse(null); // Clear previous response
//     setError(null); // Clear previous error

//     try {
//       const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/charli/Command`, {
//         params: {
//           command: formData.command,
//           info: formData.info,
//           tone: formData.tone
//         }
//       });
      
//       setApiResponse(response.data);
//     } catch (error) {
//       console.error('Error:', error);
//       setError('An error occurred while fetching data.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSave = async () => {
//     if (!apiResponse) return;

//     setSaving(true);

//     try {
//       const response = await axios.post(`${process.env.REACT_APP_API_URL}/save`, {
//         generatedResponse: apiResponse.response
//       });

//       if (response.status === 200) {
//         alert('Response saved successfully!');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred while saving the response.');
//     } finally {
//       setSaving(false);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="left-panel">
//         <form style={{ maxWidth: '400px', margin: 'auto' }} onSubmit={handleSubmit}>
//           <div style={{ marginBottom: '15px' }}>
//             <h2>Story Prompt</h2>
//             <p>Write a creative story about Tobby flying to the moon in Matthew McConaughey's tone of voice.</p>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="command">Your Command:</label>
//             <textarea
//               id="command"
//               placeholder="Write a creative story about Tobby flying to the moon in Matthew McConaughey's tone of voice."
//               style={{ width: '100%', minHeight: '200px', padding: '5px' }}
//               onChange={handleChange}
//               value={formData.command}
//             ></textarea>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="info">Background Information:</label>
//             <textarea
//               id="info"
//               placeholder="Tobby was a happy dog that loved to sneak around eating people's food."
//               style={{ width: '100%', minHeight: '100px', padding: '5px' }}
//               onChange={handleChange}
//               value={formData.info}
//             ></textarea>
//           </div>
          
//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="tone">Tone of Voice:</label>
//             <input
//               id="tone"
//               type="text"
//               placeholder="Select a tone..."
//               style={{ width: '100%', padding: '9px' }}
//               onChange={handleChange}
//               value={formData.tone}
//             />
//           </div>

//           <button type="submit" id='submit-btn' disabled={loading}>
//             {loading ? 'Generating...' : 'Generate'}
//           </button>
//         </form>
//       </div>

//       <div className="right-panel">
//         <div className="response-window">
//           {loading && <p>Loading...</p>}
//           {error && <p>Error: {error}</p>}
//           {apiResponse && (
//             <div>
//               <ComponentWithApiResponse data={apiResponse.response} />
//               <button onClick={handleSave} id='submit-btn' disabled={saving}>
//                 {saving ? 'Saving...' : 'Save Response'}
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// // Component that receives API response as prop
// function ComponentWithApiResponse({ data }) {
//   // Use the data in the component
//   return (
//     <div>
//       {/* Display the data */}
//       <ReactMarkdown>{data}</ReactMarkdown>
//     </div>
//   );
// }

// export default Commands;















































import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

function Commands() {
  const [formData, setFormData] = useState({
    command: '',
    info: '',
    tone: ''
  });
  const [apiResponse, setApiResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    if (!formData.command || !formData.info || !formData.tone) {
      setError('All fields are required.');
      return;
    }

    setLoading(true);
    setApiResponse(null); // Clear previous response
    setError(null); // Clear previous error

    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/charli/Command`, {
        params: {
          command: formData.command,
          info: formData.info,
          tone: formData.tone,
          email: user?.email // Adding email parameter from user state
        }
      });
      
      setApiResponse(response.data);
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while fetching data.');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!apiResponse) return;

    setSaving(true);

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/save`, {
        command: formData.command,
        info: formData.info,
        tone: formData.tone,
        generatedResponse: apiResponse.response,
        email: user?.email,
        cardType: 'Commands'
      });

      if (response.status === 200) {
        alert('Response saved successfully!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while saving the response.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="container">
      <div className="left-panel">
        <form style={{ maxWidth: '400px', margin: 'auto' }} onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <h2>Story Prompt</h2>
            <p>Write a creative story about Tobby flying to the moon in Matthew McConaughey's tone of voice.</p>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="command">Your Command:</label>
            <textarea
              id="command"
              placeholder="Write a creative story about Tobby flying to the moon in Matthew McConaughey's tone of voice."
              style={{ width: '100%', minHeight: '200px', padding: '5px' }}
              onChange={handleChange}
              value={formData.command}
            ></textarea>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="info">Background Information:</label>
            <textarea
              id="info"
              placeholder="Tobby was a happy dog that loved to sneak around eating people's food."
              style={{ width: '100%', minHeight: '100px', padding: '5px' }}
              onChange={handleChange}
              value={formData.info}
            ></textarea>
          </div>
          
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="tone">Tone of Voice:</label>
            <input
              id="tone"
              type="text"
              placeholder="Select a tone..."
              style={{ width: '100%', padding: '9px' }}
              onChange={handleChange}
              value={formData.tone}
            />
          </div>

          <button type="submit" id='submit-btn' disabled={loading}>
            {loading ? 'Generating...' : 'Generate'}
          </button>
        </form>
      </div>

      <div className="right-panel">
        <div className="response-window">
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {apiResponse && (
            <div>
              <ComponentWithApiResponse data={apiResponse.response} />
              <button onClick={handleSave} id='submit-btn' disabled={saving}>
                {saving ? 'Saving...' : 'Save Response'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ComponentWithApiResponse({ data }) {
  return (
    <div>
      <ReactMarkdown>{data}</ReactMarkdown>
    </div>
  );
}

export default Commands;
