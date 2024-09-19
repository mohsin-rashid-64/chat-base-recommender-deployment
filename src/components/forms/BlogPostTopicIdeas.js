// import React, { useState, useEffect } from 'react';
// import './Forms.css';
// import Autocomplete from '../../components/AutoComplete/AutoComplete'; // Import CSS file for additional styling

// function BlogPostTopicIdeas() {
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
//             <h2>Blog Post Topic Ideas</h2>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="brand-name">Brand Name:</label>
//             <input
//               id="brand-name"
//               type="text"
//               placeholder="Eco Warrior"
//               style={{ width: '100%', padding: '9px' }}
//             />
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="product-description">Product Description:</label>
//             <textarea
//               id="product-description"
//               placeholder="Eco-friendly products for a sustainable lifestyle, including reusable bags, water bottles, and home cleaning solutions."
//               style={{ width: '100%', minHeight: '100px', padding: '5px' }}
//             ></textarea>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="audience">Audience:</label>
//             <textarea
//               id="audience"
//               placeholder="Eco-conscious consumers, Sustainability advocates, Homeowners"
//               style={{ width: '100%', minHeight: '100px', padding: '5px' }}
//             ></textarea>
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

// export default BlogPostTopicIdeas;





















// import React, { useState } from 'react';
// import axios from 'axios';
// import ReactMarkdown from 'react-markdown';

// function BlogPostTopicIdeas() {
//   const [formData, setFormData] = useState({
//     name: '',
//     detail: '',
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

//     // Form validation
//     if (!formData.name || !formData.detail || !formData.audience || !formData.tone) {
//       setError('All fields are required.');
//       return;
//     }

//     setLoading(true);
//     setApiResponse(null); // Clear previous response
//     setError(null); // Clear previous error

//     try {
//       const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/charli/Blog_topic`, {
//         params: {
//           name: formData.name,
//           detail: formData.detail,
//           audience: formData.audience,
//           tone: formData.tone,
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
//         name: formData.name,
//         detail: formData.detail,
//         audience: formData.audience,
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
//             <h2>Brand Details</h2>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="name">Brand Name:</label>
//             <input
//               id="name"
//               type="text"
//               placeholder="Eco Warrior"
//               style={{ width: '100%', padding: '9px' }}
//               onChange={handleChange}
//               value={formData.name}
//             />
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="detail">Product Description:</label>
//             <textarea
//               id="detail"
//               placeholder="Eco-friendly products for a sustainable lifestyle, including reusable bags, water bottles, and home cleaning solutions."
//               style={{ width: '100%', minHeight: '100px', padding: '5px' }}
//               onChange={handleChange}
//               value={formData.detail}
//             ></textarea>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="audience">Audience:</label>
//             <textarea
//               id="audience"
//               placeholder="Eco-conscious consumers, Sustainability advocates, Homeowners"
//               style={{ width: '100%', minHeight: '100px', padding: '5px' }}
//               onChange={handleChange}
//               value={formData.audience}
//             ></textarea>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="tone">Tone of Voice:</label>
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

// export default BlogPostTopicIdeas;



































import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

function BlogPostTopicIdeas() {
  const [formData, setFormData] = useState({
    name: '',
    detail: '',
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

    // Form validation
    if (!formData.name || !formData.detail || !formData.audience || !formData.tone) {
      setError('All fields are required.');
      return;
    }

    setLoading(true);
    setApiResponse(null); // Clear previous response
    setError(null); // Clear previous error

    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/charli/Blog_topic`, {
        params: {
          name: formData.name,
          detail: formData.detail,
          audience: formData.audience,
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
        name: formData.name,
        detail: formData.detail,
        audience: formData.audience,
        tone: formData.tone,
        generatedResponse: apiResponse.response,
        email: user?.email,
        cardType: 'Blog Post Topic Ideas' // Adding email parameter from user state
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
            <h2>Brand Details</h2>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="name">Brand Name:</label>
            <input
              id="name"
              type="text"
              placeholder="Eco Warrior"
              style={{ width: '100%', padding: '9px' }}
              onChange={handleChange}
              value={formData.name}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="detail">Product Description:</label>
            <textarea
              id="detail"
              placeholder="Eco-friendly products for a sustainable lifestyle, including reusable bags, water bottles, and home cleaning solutions."
              style={{ width: '100%', minHeight: '100px', padding: '5px' }}
              onChange={handleChange}
              value={formData.detail}
            ></textarea>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="audience">Audience:</label>
            <textarea
              id="audience"
              placeholder="Eco-conscious consumers, Sustainability advocates, Homeowners"
              style={{ width: '100%', minHeight: '100px', padding: '5px' }}
              onChange={handleChange}
              value={formData.audience}
            ></textarea>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="tone">Tone of Voice:</label>
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

export default BlogPostTopicIdeas;
