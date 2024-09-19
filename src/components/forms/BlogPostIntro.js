// // import React from 'react';
// import React, { useState, useEffect } from 'react';
// import './Forms.css'; // Import CSS file for additional styling
// import Autocomplete from '../../components/AutoComplete/AutoComplete';

// function BlogPostIntro() {
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
//             <h2>Blog Post Intro Paragraph</h2>
//             <p>Provide the title, audience, and tone for your blog post.</p>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="blog-title">Blog Post Title:</label>
//             <input
//               id="blog-title"
//               type="text"
//               placeholder="Creative Ways to Save Money on a Tight Budget"
//               style={{ width: '100%', padding: '9px' }}
//             />
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="audience">Audience:</label>
//             <textarea
//               id="audience"
//               placeholder="Young professionals, Students, Budget-conscious individuals"
//               style={{ width: '100%', minHeight: '100px', padding: '5px' }}
//             ></textarea>
//           </div>

        

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="tone-of-voice">Tone of Voice:</label>
//             <Autocomplete
//               suggestions={voices}
//               onInputChange={(input) => {}} // Empty function since we are not using toneOfVoice
//               placeholder="Informative, Friendly, Encouraging"
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

// export default BlogPostIntro;

























// import React, { useState } from 'react';
// import axios from 'axios';
// import ReactMarkdown from 'react-markdown';

// function BlogPostIntro() {
//   const [formData, setFormData] = useState({
//     title: '',
//     audience: '',
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
//     setError(null); // Clear any previous error

//     try {
//       const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/charli/Blog_outline`, {
//         params: {
//           title: formData.title,
//           tone: formData.tone,
//           audience: formData.audience // Assuming the audience parameter is also required
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
//             <h2>Blog Post Details</h2>
//             <p>Provide the title, audience, and tone for your blog post.</p>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="blog-title">Blog Post Title:</label>
//             <input
//               id="title"
//               type="text"
//               placeholder="Creative Ways to Save Money on a Tight Budget"
//               style={{ width: '100%', padding: '9px' }}
//               onChange={handleChange}
//               value={formData.title}
//             />
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="audience">Audience:</label>
//             <textarea
//               id="audience"
//               placeholder="Young professionals, Students, Budget-conscious individuals"
//               style={{ width: '100%', minHeight: '100px', padding: '5px' }}
//               onChange={handleChange}
//               value={formData.audience}
//             ></textarea>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="tone-of-voice">Tone of Voice:</label>
//             <input
//               id="tone"
//               type="text"
//               placeholder="Informative, Friendly, Encouraging"
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
//               <ComponentWithApiResponse data={apiResponse['response']} />
//               <button onClick={handleSave}id='submit-btn' disabled={saving}>
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

// export default BlogPostIntro;




























import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

function BlogPostIntro() {
  const [formData, setFormData] = useState({
    title: '',
    audience: '',
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
    setLoading(true);
    setApiResponse(null); // Clear previous response
    setError(null); // Clear any previous error

    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/charli/Blog_outline`, {
        params: {
          title: formData.title,
          tone: formData.tone,
          audience: formData.audience,
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
        audience: formData.audience,
        tone: formData.tone,
        generatedResponse: apiResponse.response,
        email: user?.email, // Adding email parameter from user state
        cardType: 'Blog Post Intro'
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
            <h2>Blog Post Details</h2>
            <p>Provide the title, audience, and tone for your blog post.</p>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="blog-title">Blog Post Title:</label>
            <input
              id="title"
              type="text"
              placeholder="Creative Ways to Save Money on a Tight Budget"
              style={{ width: '100%', padding: '9px' }}
              onChange={handleChange}
              value={formData.title}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="audience">Audience:</label>
            <textarea
              id="audience"
              placeholder="Young professionals, Students, Budget-conscious individuals"
              style={{ width: '100%', minHeight: '100px', padding: '5px' }}
              onChange={handleChange}
              value={formData.audience}
            ></textarea>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="tone-of-voice">Tone of Voice:</label>
            <input
              id="tone"
              type="text"
              placeholder="Informative, Friendly, Encouraging"
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

function ComponentWithApiResponse({ data }) {
  return (
    <div>
      <ReactMarkdown>{data}</ReactMarkdown>
    </div>
  );
}

export default BlogPostIntro;
