// import React from 'react';
// import './Forms.css'; // Import CSS file for additional styling

// function BusinessOrProductName() {
//   return (
//     <div className="container">
//       <div className="left-panel">
//         <form style={{ maxWidth: '400px', margin: 'auto' }}>
//           <div style={{ marginBottom: '15px' }}>
//             <h2>Business or Product Name</h2>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="business-info">Tell us about your business or product:</label>
//             <textarea
//               id="business-info"
//               placeholder="Innovative online marketplace connecting local service providers and customers."
//               style={{ width: '100%', minHeight: '100px', padding: '5px' }}
//             ></textarea>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="keywords">Keywords to Include:</label>
//             <input
//               id="keywords"
//               type="text"
//               placeholder="ninja"
//               style={{ width: '100%', padding: '9px' }}
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

// export default BusinessOrProductName;















































// import React, { useState } from 'react';
// import axios from 'axios';
// import ReactMarkdown from 'react-markdown';

// function BusinessOrProductName() {
//   const [formData, setFormData] = useState({
//     product: '',
//     key: '',
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
//     if (!formData.product || !formData.key || !formData.tone) {
//       setError('All fields are required.');
//       return;
//     }

//     setLoading(true);
//     setApiResponse(null); // Clear previous response
//     setError(null); // Clear previous error

//     try {
//       const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/charli/Bussiness_name`, {
//         params: {
//           product: formData.product,
//           key: formData.key,
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
//             <h2>Business/Product Details</h2>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="product">Tell us about your business or product:</label>
//             <textarea
//               id="product"
//               placeholder="Innovative online marketplace connecting local service providers and customers."
//               style={{ width: '100%', minHeight: '100px', padding: '5px' }}
//               onChange={handleChange}
//               value={formData.product}
//             ></textarea>
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="key">Keywords to Include:</label>
//             <input
//               id="key"
//               type="text"
//               placeholder="ninja"
//               style={{ width: '100%', padding: '9px' }}
//               onChange={handleChange}
//               value={formData.key}
//             />
//           </div>

//           <div style={{ marginBottom: '15px' }}>
//             <label htmlFor="tone">Tone of Voice:</label>
//             <input
//               id="tone"
//               type="text"
//               placeholder="Friendly, Professional, Casual"
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
//               <button onClick={handleSave} disabled={saving} id='submit-btn'>
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

// export default BusinessOrProductName;




















import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

function BusinessOrProductName() {
  const [formData, setFormData] = useState({
    product: '',
    key: '',
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
    if (!formData.product || !formData.key || !formData.tone) {
      setError('All fields are required.');
      return;
    }

    setLoading(true);
    setApiResponse(null); // Clear previous response
    setError(null); // Clear previous error

    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/charli/Bussiness_name`, {
        params: {
          product: formData.product,
          key: formData.key,
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
        product: formData.product,
        key: formData.key,
        tone: formData.tone,
        generatedResponse: apiResponse.response,
        email: user?.email,
        cardType: 'Business/Product Details'
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
            <h2>Business/Product Details</h2>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="product">Tell us about your business or product:</label>
            <textarea
              id="product"
              placeholder="Innovative online marketplace connecting local service providers and customers."
              style={{ width: '100%', minHeight: '100px', padding: '5px' }}
              onChange={handleChange}
              value={formData.product}
            ></textarea>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="key">Keywords to Include:</label>
            <input
              id="key"
              type="text"
              placeholder="ninja"
              style={{ width: '100%', padding: '9px' }}
              onChange={handleChange}
              value={formData.key}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="tone">Tone of Voice:</label>
            <input
              id="tone"
              type="text"
              placeholder="Friendly, Professional, Casual"
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
              <button onClick={handleSave} disabled={saving} id='submit-btn'>
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

export default BusinessOrProductName;
