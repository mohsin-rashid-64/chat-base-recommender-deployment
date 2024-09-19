// import React, { useState, useEffect } from 'react';
// import './Forms.css';
// import Autocomplete from '../../components/AutoComplete/AutoComplete';
//  // Import CSS file for additional styling

// function BlogPostOutline() {

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
//             <h2>Blog Post Outline</h2>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="blog-title" >Blog Post Title/Topic:</label>
//             <input
//               id="blog-title"
//               type="text"
//               placeholder="Top 10 Remote Work Tools for Increased Productivity"
//               style={{ width: '100%', padding: '9px' }}
//             />
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="tone-of-voice">Tone of Voice:</label>
//             <Autocomplete
//               suggestions={voices}
//               onInputChange={(input) => {}} // Empty function since we are not using toneOfVoice
//               placeholder="Informative, Relaxed, Helpful"
//             />
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

// export default BlogPostOutline;





































// import React, { useState } from 'react';
// import axios from 'axios';
// import ReactMarkdown from 'react-markdown';

// function BlogPostOutline() {
//   const [formData, setFormData] = useState({
//     title: '',
//     tone: ''
//   });
//   const [apiResponse, setApiResponse] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false); // State to track loading state
//   const [saving, setSaving] = useState(false); // State to track saving state

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Simple validation
//     if (!formData.title || !formData.tone) {
//       setError('Both fields are required.');
//       return;
//     }

//     setLoading(true);
//     setApiResponse(null); // Clear previous response
//     setError(null); // Clear previous error

//     try {
//       const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/charli/Blog_outline`, {
//         params: {
//           title: formData.title,
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
//         Title: formData.title,
//         tone: formData.tone,
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
//             <h2>Blog Post Outline</h2>
//             <p>Create compelling product descriptions for Amazon listings.</p>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="title">Blog Post Title / Topic:</label>
//             <input
//               id="title"
//               type="text"
//               placeholder="Enter product name"
//               style={{ width: '100%', padding: '9px' }}
//               onChange={handleChange}
//               value={formData.title}
//             />
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
          
//           <button type="submit"id='submit-btn' disabled={loading}>
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

// function ComponentWithApiResponse({ data }) {
//   return (
//     <div>
//       <ReactMarkdown>{data}</ReactMarkdown>
//     </div>
//   );
// }

// export default BlogPostOutline;






























import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

function BlogPostOutline() {
  const [formData, setFormData] = useState({
    title: '',
    tone: ''
  });
  const [apiResponse, setApiResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // State to track loading state
  const [saving, setSaving] = useState(false); // State to track saving state
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
    
    // Simple validation
    if (!formData.title || !formData.tone) {
      setError('Both fields are required.');
      return;
    }

    setLoading(true);
    setApiResponse(null); // Clear previous response
    setError(null); // Clear previous error

    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/charli/Blog_outline`, {
        params: {
          title: formData.title,
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
        title: formData.title,
        tone: formData.tone,
        generatedResponse: apiResponse.response,
        email: user?.email, // Adding email parameter from user state
        cardType: 'Blog Post Outline'
      });

      if (response.status === 200) {
        alert('Response saved successfully!');
      } else {
        console.error('Save Response:', response);
        alert('Failed to save the response.');
      }
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
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
            <h2>Blog Post Outline</h2>
            <p>Create compelling product descriptions for Amazon listings.</p>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="title">Blog Post Title / Topic:</label>
            <input
              id="title"
              type="text"
              placeholder="Enter product name"
              style={{ width: '100%', padding: '9px' }}
              onChange={handleChange}
              value={formData.title}
            />
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

export default BlogPostOutline;
