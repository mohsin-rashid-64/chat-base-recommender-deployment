// import React, {useState,useEffect} from 'react';
// import './Forms.css'; // Import CSS file for additional styling
// import Autocomplete from '../../components/AutoComplete/AutoComplete';

// function BlogPost() {

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
//             <h2>Blog Post Conclusion Paragraph</h2>
//             <p>Provide the main points and tone for your blog post.</p>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <textarea
//               id="blog-outline"
//               placeholder="The importance of time management. Tips for better time management. Benefits of effective time management."
//               style={{ width: '100%', minHeight: '100px', padding: '5px' }}
//             ></textarea>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="call-to-action">Call to Action:</label>
//             <textarea
//               id="call-to-action"
//               placeholder="Share your time management tips with us in the comments below!"
//               style={{ width: '100%', minHeight: '100px', padding: '5px' }}
//             ></textarea>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="tone-of-voice">Tone of Voice:</label>
//             <Autocomplete
//               suggestions={voices}
//               onInputChange={(input) => {}} // Empty function since we are not using toneOfVoice
//               placeholder="Motivational"
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

// export default BlogPost;






























// import React, { useEffect, useState } from "react";
// import axios from 'axios';
// import ReactMarkdown from 'react-markdown';

// function BlogPost() {
//   const [formData, setFormData] = useState({
//     mainPoints: '',
//     callToAction: '',
//     toneOfVoice: ''
//   });
//   const [apiResponse, setApiResponse] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [saving, setSaving] = useState(false);
//   const [user, setUser] = useState(null)

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       const parsedUser = JSON.parse(storedUser);
//       setUser(parsedUser);
  
//     }
//   }, []);


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
//       const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/charli/Blog_post`, {
//         params: {
//           mainpoint: formData.mainPoints,
//           action: formData.callToAction,
//           tone: formData.toneOfVoice,
//           email:user.email

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
//         mainpoint: formData.mainPoints,
//         action: formData.callToAction,
//         tone: formData.toneOfVoice,
//         generatedResponse: apiResponse.response,
//         email: user.email // Replace with actual email or retrieve from user session
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
//             <p>Provide the main points and tone for your blog post.</p>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <textarea
//               id="mainPoints"
//               placeholder="The importance of time management. Tips for better time management. Benefits of effective time management."
//               style={{ width: '100%', minHeight: '100px', padding: '5px' }}
//               onChange={handleChange}
//               value={formData.mainPoints}
//             ></textarea>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="call-to-action">Call to Action:</label>
//             <textarea
//               id="callToAction"
//               placeholder="Share your time management tips with us in the comments below!"
//               style={{ width: '100%', minHeight: '100px', padding: '5px' }}
//               onChange={handleChange}
//               value={formData.callToAction}
//             ></textarea>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="toneOfVoice">Tone of Voice:</label>
//             <input
//               id="toneOfVoice"
//               type="text"
//               placeholder="Motivational"
//               style={{ width: '100%', padding: '9px' }}
//               onChange={handleChange}
//               value={formData.toneOfVoice}
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

// export default BlogPost;






















import React, { useEffect, useState } from "react";
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

function BlogPost() {
  const [formData, setFormData] = useState({
    mainPoints: '',
    callToAction: '',
    toneOfVoice: ''
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
    setApiResponse(null);
    setError(null);

    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/charli/Blog_post`, {
        params: {
          mainpoint: formData.mainPoints,
          action: formData.callToAction,
          tone: formData.toneOfVoice,
          email: user.email
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
        mainpoint: formData.mainPoints,
        action: formData.callToAction,
        tone: formData.toneOfVoice,
        generatedResponse: apiResponse.response,
        email: user.email,
        cardType: 'Blog Post Conclusion'
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
            <p>Provide the main points and tone for your blog post.</p>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <textarea
              id="mainPoints"
              placeholder="The importance of time management. Tips for better time management. Benefits of effective time management."
              style={{ width: '100%', minHeight: '100px', padding: '5px' }}
              onChange={handleChange}
              value={formData.mainPoints}
            ></textarea>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="call-to-action">Call to Action:</label>
            <textarea
              id="callToAction"
              placeholder="Share your time management tips with us in the comments below!"
              style={{ width: '100%', minHeight: '100px', padding: '5px' }}
              onChange={handleChange}
              value={formData.callToAction}
            ></textarea>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="toneOfVoice">Tone of Voice:</label>
            <input
              id="toneOfVoice"
              type="text"
              placeholder="Motivational"
              style={{ width: '100%', padding: '9px' }}
              onChange={handleChange}
              value={formData.toneOfVoice}
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

export default BlogPost;
