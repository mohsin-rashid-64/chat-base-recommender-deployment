// import React, { useState, useEffect } from 'react';
// import './Forms.css';
// import Autocomplete from '../../components/AutoComplete/AutoComplete'; // Import CSS file for additional styling

// function EmailSubjectLines() {
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
//             <h2>Email Subject Lines</h2>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="company-name">Company/Product Name:</label>
//             <input
//               id="company-name"
//               type="text"
//               placeholder="SmartMailer"
//               style={{ width: '100%', padding: '9px' }}
//             />
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="tone-of-voice">Tone of Voice:</label>
//             <Autocomplete
//               suggestions={voices}
//               onInputChange={(input) => {}} // Empty function since we are not using toneOfVoice
//               placeholder="Witty, Friendly"
//             />
//    			</div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="email-content">What is your email about?</label>
//             <textarea
//               id="email-content"
//               placeholder="Introducing our latest online course on email marketing strategies. Early bird sign-ups get a 25% discount."
//               style={{ width: '100%', minHeight: '200px', padding: '5px' }}
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

// export default EmailSubjectLines;































// import React, { useState } from 'react';
// import axios from 'axios';
// import ReactMarkdown from 'react-markdown';

// function EmailSubjectLines() {
//   const [formData, setFormData] = useState({
//     companyName: '',
//     toneOfVoice: '',
//     emailContent: ''
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

//     try {
//       const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/charli/Email_line`, {
//         params: {
//           product: formData.companyName,
//           tone: formData.toneOfVoice,
//           email: formData.emailContent
//         }
//       });
//       setApiResponse(response.data);
//       setError(null);
//     } catch (error) {
//       console.error('Error:', error);
//       setError('An error occurred while fetching data.');
//       setApiResponse(null);
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
//             <h2>Email Details</h2>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="company-name">Company/Product Name:</label>
//             <input
//               id="companyName"
//               type="text"
//               placeholder="SmartMailer"
//               style={{ width: '100%', padding: '9px' }}
//               onChange={handleChange}
//             />
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="tone-of-voice">Tone of Voice:</label>
//             <input
//               id="toneOfVoice"
//               type="text"
//               placeholder="Friendly"
//               style={{ width: '100%', padding: '9px' }}
//               onChange={handleChange}
//             />
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="email-content">What is your email about?</label>
//             <textarea
//               id="emailContent"
//               placeholder="Introducing our latest online course on email marketing strategies. Early bird sign-ups get a 25% discount."
//               style={{ width: '100%', minHeight: '200px', padding: '5px' }}
//               onChange={handleChange}
//             ></textarea>
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

// export default EmailSubjectLines;















// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import ReactMarkdown from 'react-markdown';

// function EmailSubjectLines() {
//   const [formData, setFormData] = useState({
//     companyName: '',
//     toneOfVoice: '',
//     emailContent: ''
//   });
//   const [apiResponse, setApiResponse] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [saving, setSaving] = useState(false);
//   const [user, setUser] = useState(null);

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

//     // Form validation
//     if (!formData.companyName || !formData.toneOfVoice || !formData.emailContent) {
//       setError('All fields are required.');
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/charli/Email_line`, {
//         params: {
//           product: formData.companyName,
//           tone: formData.toneOfVoice,
//           email: formData.emailContent,
//           email: user?.email // Adding email parameter from user state
//         }
//       });
//       setApiResponse(response.data);
//       setError(null);
//     } catch (error) {
//       console.error('Error:', error);
//       setError('An error occurred while fetching data.');
//       setApiResponse(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSave = async () => {
//     if (!apiResponse) return;

//     setSaving(true);

//     try {
//       const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/save`, {
//         content: formData.emailContent,
//         tone: formData.toneOfVoice,
//         generatedResponse: apiResponse.response,
//         email: user?.email // Adding email parameter from user state
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
//             <h2>Email Details</h2>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="company-name">Company/Product Name:</label>
//             <input
//               id="companyName"
//               type="text"
//               placeholder="SmartMailer"
//               style={{ width: '100%', padding: '9px' }}
//               onChange={handleChange}
//             />
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="tone-of-voice">Tone of Voice:</label>
//             <input
//               id="toneOfVoice"
//               type="text"
//               placeholder="Friendly"
//               style={{ width: '100%', padding: '9px' }}
//               onChange={handleChange}
//             />
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="email-content">What is your email about?</label>
//             <textarea
//               id="emailContent"
//               placeholder="Introducing our latest online course on email marketing strategies. Early bird sign-ups get a 25% discount."
//               style={{ width: '100%', minHeight: '200px', padding: '5px' }}
//               onChange={handleChange}
//             ></textarea>
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

// export default EmailSubjectLines;


























import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

function EmailSubjectLines() {
  const [formData, setFormData] = useState({
    companyName: '',
    toneOfVoice: '',
    emailContent: ''
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
    if (!formData.companyName || !formData.toneOfVoice || !formData.emailContent) {
      setError('All fields are required.');
      return;
    }

    setLoading(true);
    // Clear previous response
    setApiResponse(null);

    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/charli/Email_line`, {
        params: {
          product: formData.companyName,
          tone: formData.toneOfVoice,
          email: formData.emailContent,
          email: user?.email // Adding email parameter from user state
        }
      });
      setApiResponse(response.data);
      setError(null);
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while fetching data.');
      setApiResponse(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!apiResponse) return;

    setSaving(true);

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/save`, {
        content: formData.emailContent,
        tone: formData.toneOfVoice,
        generatedResponse: apiResponse.response,
        email: user?.email,
        cardType: 'Email Subject Line'
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
            <h2>Email Details</h2>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="company-name">Company/Product Name:</label>
            <input
              id="companyName"
              type="text"
              placeholder="SmartMailer"
              style={{ width: '100%', padding: '9px' }}
              onChange={handleChange}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="tone-of-voice">Tone of Voice:</label>
            <input
              id="toneOfVoice"
              type="text"
              placeholder="Friendly"
              style={{ width: '100%', padding: '9px' }}
              onChange={handleChange}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email-content">What is your email about?</label>
            <textarea
              id="emailContent"
              placeholder="Introducing our latest online course on email marketing strategies. Early bird sign-ups get a 25% discount."
              style={{ width: '100%', minHeight: '200px', padding: '5px' }}
              onChange={handleChange}
            ></textarea>
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

export default EmailSubjectLines;
