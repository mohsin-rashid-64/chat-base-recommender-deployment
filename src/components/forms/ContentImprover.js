// import React, { useState, useEffect } from 'react';
// import './Forms.css';
// import Autocomplete from '../../components/AutoComplete/AutoComplete'; // Import CSS file for additional styling

// function ContentImprover() {
//   const [voices, setVoices] = useState([]);

//   useEffect(() => {
//     // Load voices from localStorage on component mount
//     const savedVoices = JSON.parse(localStorage.getItem('voices')) || [];
//     setVoices(savedVoices);
//   }, []);
//   return (
//     <div className="container">
//       <div className="left-panel">
//         <form style={{ maxWidth: '400px', margin: 'auto' }}>
//           <div style={{ marginBottom: '15px' }}>
//             <h2>Content Improver</h2>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="content">Content:</label>
//             <textarea
//               id="content"
//               placeholder="We help agencies automate their daily tasks so they can scale better and faster with less effort."
//               style={{ width: '100%', minHeight: '200px', padding: '5px' }}
//             ></textarea>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="tone-of-voice">Tone of Voice:</label>
//             <Autocomplete
//               suggestions={voices}
//               onInputChange={(input) => {}} // Empty function since we are not using toneOfVoice
//               placeholder="Funny"
//             />
//    			</div>

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

// export default ContentImprover;









































// import React, { useState } from 'react';
// import axios from 'axios';
// import ReactMarkdown from 'react-markdown';

// function ContentImprover() {
//   const [formData, setFormData] = useState({
//     content: '',
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
//     setLoading(true);
//     setApiResponse(null); // Clear previous response
//     setError(null); // Clear previous error

//     try {
//       const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/charli/Content_improver`, {
//         params: {
//           content: formData.content,
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
//       const response = await axios.post(`${process.env.REACT_APP_API_URL}/save`,{
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
//             <h2>Content Details</h2>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="content">Content:</label>
//             <textarea
//               id="content"
//               placeholder="We help agencies automate their daily tasks so they can scale better and faster with less effort."
//               style={{ width: '100%', minHeight: '200px', padding: '5px' }}
//               onChange={handleChange}
//             ></textarea>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="tone">Tone of Voice:</label>
//             <input
//               id="tone"
//               type="text"
//               placeholder="Funny"
//               style={{ width: '100%', padding: '9px' }}
//               onChange={handleChange}
//             />
//           </div>
          
//           <button type="submit" id='submit-btn' disabled={loading}>
//             {loading ? 'Generating...' : 'Generate'}
//           </button>
//         </form>
//       </div>

//       <div className="right-panel">
//         {/* Response Window */}
//         <div className="response-window">
//           {/* Display API response or error message */}
//           {loading && <p>Loading...</p>}
//           {error && <p>Error: {error}</p>}
//           {apiResponse && (
//             <div>
//               <ComponentWithApiResponse data={apiResponse['response']} />
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

// export default ContentImprover;


















import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

function ContentImprover() {
  const [formData, setFormData] = useState({
    content: '',
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
    if (!formData.content || !formData.tone) {
      setError('All fields are required.');
      return;
    }

    setLoading(true);
    setApiResponse(null); // Clear previous response
    setError(null); // Clear previous error

    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/charli/Content_improver`, {
        params: {
          content: formData.content,
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
        content: formData.content,
        tone: formData.tone,
        generatedResponse: apiResponse.response,
        email: user?.email,
        cardType: 'Content Improver'
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
            <h2>Content Details</h2>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="content">Content:</label>
            <textarea
              id="content"
              placeholder="We help agencies automate their daily tasks so they can scale better and faster with less effort."
              style={{ width: '100%', minHeight: '200px', padding: '5px' }}
              onChange={handleChange}
              value={formData.content}
            ></textarea>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="tone">Tone of Voice:</label>
            <input
              id="tone"
              type="text"
              placeholder="Funny"
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
        {/* Response Window */}
        <div className="response-window">
          {/* Display API response or error message */}
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {apiResponse && (
            <div>
              <ComponentWithApiResponse data={apiResponse['response']} />
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

// Component that receives API response as prop
function ComponentWithApiResponse({ data }) {
  // Use the data in the component
  return (
    <div>
      {/* Display the data */}
      <ReactMarkdown>{data}</ReactMarkdown>
    </div>
  );
}

export default ContentImprover;
