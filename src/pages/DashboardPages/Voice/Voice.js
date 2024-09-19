// // src/Voice.js
// import React, { useState, useEffect } from "react";
// import './Voice.scss';
// import VoiceModal from '../../../components/Modal/VoiceModal';

// export default function Voice() {
//   const [modalShow, setModalShow] = useState(false);
//   const [tabs, setTabs] = useState(0);
//   const [voices, setVoices] = useState(() => {
//     // Initialize voices from localStorage
//     const storedVoices = localStorage.getItem('voices');
//     return storedVoices ? JSON.parse(storedVoices) : [];
//   });

//   useEffect(() => {
//     // Store voices in localStorage whenever it changes
//     localStorage.setItem('voices', JSON.stringify(voices));
//   }, [voices]);

//   const handleAddVoice = (newVoice) => {
//     setVoices([...voices, newVoice]);
//   };

//   const handleDeleteVoice = (index) => {
//     const updatedVoices = voices.filter((_, i) => i !== index);
//     setVoices(updatedVoices);
//   };

  
//   const tabButtons = [
//     "Voices", 
//     "Knowledge Pool"
//   ];

//   const tabContent = [
//     (
//       <div className="voicesTab">
//         <div className="card">
//           <h4><img src="/images/flag.svg" alt="flag" /> Get started with voices</h4>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
//         </div>
//         <div className="addVoice">
//           <div className="content">
//             <h4>Your voices</h4>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
//           </div>
//           <button className="add" onClick={() => setModalShow(true)}>Add voice</button>
//         </div>
//         {voices.length > 0 ? (
//           <ul>
//             {voices.map((voice, index) => (
//               <li key={index} style={{border:'1px solid #ccc'}}>
//                 {voice}
//                 <button className="delete" onClick={() => handleDeleteVoice(index)}>Delete</button>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="info">You haven’t created any voices yet</p>
//         )}
//       </div>
//     ),
//     (
//       <div className="voicesTab">
//         <div className="card">
//           <h4><img src="/images/flag.svg" alt="flag" /> Get started with Knowledge Pool</h4>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
//         </div>
//         <div className="addVoice">
//           <div className="content">
//             <h4>Your Knowledge Pool</h4>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
//           </div>
//           <button className="add" onClick={() => setModalShow(true)}>Add Knowledge Pool</button>
//         </div>
//         <p className="info">You haven’t created any Knowledge Pools yet</p>
//       </div>
//     )
//   ];

//   return (
//     <React.Fragment>
//       <div className="voice">
//         <div className="title">
//           <h4>Brand voice</h4>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing el  it, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//         </div>
//         <div className="tabs">
//           <div className="top_tab_bar">
//             <ul>
//               <li className="li_style">
//                 <button
//                   onClick={() => setTabs(0)}
//                   className={tabs === 0 ? "active" : ""}
//                 >
//                   {tabButtons[0]}
//                 </button>
//               </li>
//               <li>
//                 <button
//                   onClick={() => setTabs(1)}
//                   className={tabs === 1 ? "active" : ""}
//                 >
//                   {tabButtons[1]}
//                 </button>
//               </li>
//             </ul>
//           </div>
//           <div className="tab-content">
//             {tabContent[tabs]}
//           </div>
//         </div>
//       </div>
//       <VoiceModal show={modalShow} handleClose={() => setModalShow(false)} onAddVoice={handleAddVoice} />
//     </React.Fragment>
//   );
// }












































// src/Voice.js
// import React, { useState } from "react";
// import './Voice.scss';
// import VoiceModal from '../../../components/Modal/VoiceModal';

// export default function Voice() {
//   const [modalShow, setModalShow] = useState(false);
//   const [tabs, setTabs] = useState(0);
//   const [voices, setVoices] = useState([]);

//   const handleAddVoice = (newVoice) => {
//     setVoices([...voices, newVoice]);
//   };

//   const handleDeleteVoice = (index) => {
//     const updatedVoices = voices.filter((_, i) => i !== index);
//     setVoices(updatedVoices);
//   };

//   const tabButtons = [
//     "Voices", 
//     "Knowledge Pool"
//   ];

//   const tabContent = [
//     (
//       <div className="voicesTab">
//         <div className="card">
//           <h4><img src="/images/flag.svg" alt="flag" /> Get started with voices</h4>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
//         </div>
//         <div className="addVoice">
//           <div className="content">
//             <h4>Your voices</h4>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
//           </div>
//           <button className="add" onClick={() => setModalShow(true)}>Add voice</button>
//         </div>
//         {voices.length > 0 ? (
//           <ul>
//             {voices.map((voice, index) => (
//               <li key={index} style={{border:'1px solid #ccc'}}>
//                 {voice}
//                 <button className="delete" onClick={() => handleDeleteVoice(index)}>Delete</button>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="info">You haven’t created any voices yet</p>
//         )}
//       </div>
//     ),
//     (
//       <div className="voicesTab">
//         <div className="card">
//           <h4><img src="/images/flag.svg" alt="flag" /> Get started with Knowledge Pool</h4>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
//         </div>
//         <div className="addVoice">
//           <div className="content">
//             <h4>Your Knowledge Pool</h4>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
//           </div>
//           <button className="add" onClick={() => setModalShow(true)}>Add Knowledge Pool</button>
//         </div>
//         <p className="info">You haven’t created any Knowledge Pools yet</p>
//       </div>
//     )
//   ];

//   return (
//     <React.Fragment>
//       <div className="voice">
//         <div className="title">
//           <h4>Brand voice</h4>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing el  it, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//         </div>
//         <div className="tabs">
//           <div className="top_tab_bar">
//             <ul>
//               <li className="li_style">
//                 <button
//                   onClick={() => setTabs(0)}
//                   className={tabs === 0 ? "active" : ""}
//                 >
//                   {tabButtons[0]}
//                 </button>
//               </li>
//               <li>
//                 <button
//                   onClick={() => setTabs(1)}
//                   className={tabs === 1 ? "active" : ""}
//                 >
//                   {tabButtons[1]}
//                 </button>
//               </li>
//             </ul>
//           </div>
//           <div className="tab-content">
//             {tabContent[tabs]}
//           </div>
//         </div>
//       </div>
//       <VoiceModal show={modalShow} handleClose={() => setModalShow(false)} onAddVoice={handleAddVoice} />
//     </React.Fragment>
//   );
// }





















// import React, { useState } from "react";
// import './Voice.scss';
// import VoiceModal from '../../../components/Modal/VoiceModal';

// export default function Voice() {
//   const [modalShow, setModalShow] = useState(false);
//   const [tabs, setTabs] = useState(0);
//   const [voices, setVoices] = useState([]);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [email, setEmail] = useState('YOUR_EMAIL_HERE'); // Update with actual email

//   const handleAddVoice = (newVoice) => {
//     setVoices([...voices, newVoice]);
//   };

//   const handleDeleteVoice = (index) => {
//     const updatedVoices = voices.filter((_, i) => i !== index);
//     setVoices(updatedVoices);
//   };

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleAddKnowledgePool = () => {
//     // Trigger file input click
//     const fileInput = document.getElementById('fileInput');
//     fileInput.click();
//   };

//   const handleSavePDF = async () => {
//     try {
//       const formData = new FormData();
//       formData.append('file', selectedFile);
//       formData.append('email', email);

//       const response = await fetch('/api/upload', {
//         method: 'POST',
//         body: formData,
//       });

//       if (response.ok) {
//         // File uploaded successfully
//         console.log('File uploaded successfully');
//         setModalShow(false); // Close modal after successful upload
//       } else {
//         // Handle error
//         console.error('Error uploading file:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error uploading file:', error.message);
//     }
//   };

//   const tabButtons = [
//     "Voices", 
//     "Knowledge Pool"
//   ];

//   const tabContent = [
//     (
//       <div className="voicesTab">
//         <div className="card">
//           <h4><img src="/images/flag.svg" alt="flag" /> Get started with voices</h4>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
//         </div>
//         <div className="addVoice">
//           <div className="content">
//             <h4>Your voices</h4>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
//           </div>
//           <button className="add" onClick={() => setModalShow(true)}>Add voice</button>
//         </div>
//         {voices.length > 0 ? (
//           <ul>
//             {voices.map((voice, index) => (
//               <li key={index} style={{border:'1px solid #ccc'}}>
//                 {voice}
//                 <button className="delete" onClick={() => handleDeleteVoice(index)}>Delete</button>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="info">You haven’t created any voices yet</p>
//         )}
//       </div>
//     ),
//     (
//       <div className="voicesTab">
//         <div className="card">
//           <h4><img src="/images/flag.svg" alt="flag" /> Get started with Knowledge Pool</h4>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
//         </div>
//         <div className="addVoice">
//           <div className="content">
//             <h4>Your Knowledge Pool</h4>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
//           </div>
//           <input id="fileInput" type="file" onChange={handleFileChange} accept=".pdf" style={{ display: 'none' }} />
//           <button className="add" onClick={handleAddKnowledgePool}>Add Knowledge Pool</button>
//         </div>
//         <p className="info">You haven’t created any Knowledge Pools yet</p>
//       </div>
//     )
//   ];

//   return (
//     <React.Fragment>
//       <div className="voice">
//         <div className="title">
//           <h4>Brand voice</h4>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing el  it, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//         </div>
//         <div className="tabs">
//           <div className="top_tab_bar">
//             <ul>
//               <li className="li_style">
//                 <button
//                   onClick={() => setTabs(0)}
//                   className={tabs === 0 ? "active" : ""}
//                 >
//                   {tabButtons[0]}
//                 </button>
//               </li>
//               <li>
//                 <button
//                   onClick={() => setTabs(1)}
//                   className={tabs === 1 ? "active" : ""}
//                 >
//                   {tabButtons[1]}
//                 </button>
//               </li>
//             </ul>
//           </div>
//           <div className="tab-content">
//             {tabContent[tabs]}
//           </div>
//         </div>
//       </div>
//       <VoiceModal show={modalShow} handleClose={() => setModalShow(false)} onAddVoice={handleAddVoice} />
//     </React.Fragment>
//   );
// }







// Atif testing

// import React, { useState } from "react";
// import './Voice.scss';
// import VoiceModal from '../../../components/Modal/VoiceModal';

// export default function Voice() {
//   const [modalShow, setModalShow] = useState(false);
//   const [tabs, setTabs] = useState(0);
//   const [voices, setVoices] = useState([]);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [email, setEmail] = useState('YOUR_EMAIL_HERE'); // Update with actual email

//   const handleAddVoice = (newVoice) => {
//     setVoices([...voices, newVoice]);
//   };

//   const handleDeleteVoice = (index) => {
//     const updatedVoices = voices.filter((_, i) => i !== index);
//     setVoices(updatedVoices);
//   };

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleAddKnowledgePool = () => {
//     // Trigger file input click
//     const fileInput = document.getElementById('fileInput');
//     fileInput.click();
//   };
  
//   const handleSavePDF = async () => {
//     try {
//       if (!selectedFile) {
//         console.error('No file selected');
//         return;
//       }
  
//       const formData = new FormData();
//       formData.append('file', selectedFile);
//       formData.append('email', email);
  
//       const response = await fetch('/api/upload', {
//         method: 'POST',
//         body: formData,
//       });
  
//       if (response.ok) {
//         // File uploaded successfully
//         console.log('File uploaded successfully');
//         setModalShow(false); // Close modal after successful upload
//       } else {
//         // Handle error
//         console.error('Error uploading file:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error uploading file:', error.message);
//     }
//   };
  

//   const tabButtons = [
//     "Voices", 
//     "Knowledge Pool"
//   ];

//   const tabContent = [
//     (
//       <div className="voicesTab">
//         <div className="card">
//           <h4><img src="/images/flag.svg" alt="flag" /> Get started with voices</h4>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
//         </div>
//         <div className="addVoice">
//           <div className="content">
//             <h4>Your voices</h4>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
//           </div>
//           <button className="add" onClick={() => setModalShow(true)}>Add voice</button>
//         </div>
//         {voices.length > 0 ? (
//           <ul>
//             {voices.map((voice, index) => (
//               <li key={index} style={{border:'1px solid #ccc'}}>
//                 {voice}
//                 <button className="delete" onClick={() => handleDeleteVoice(index)}>Delete</button>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="info">You haven’t created any voices yet</p>
//         )}
//       </div>
//     ),
//     (
//       <div className="voicesTab">
//         <div className="card">
//           <h4><img src="/images/flag.svg" alt="flag" /> Get started with Knowledge Pool</h4>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
//         </div>
//         <div className="addVoice">
//           <div className="content">
//             <h4>Your Knowledge Pool</h4>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
//           </div>
//           <input id="fileInput" type="file" onChange={handleFileChange} accept=".pdf" style={{ display: 'none' }} />
//           <button className="add" onClick={handleAddKnowledgePool}>Add Knowledge Pool</button>
//         </div>
//         <p className="info">You haven’t created any Knowledge Pools yet</p>
//       </div>
//     )
//   ];

//   return (
//     <React.Fragment>
//       <div className="voice">
//         <div className="title">
//           <h4>Brand voice</h4>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing el  it, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//         </div>
//         <div className="tabs">
//           <div className="top_tab_bar">
//             <ul>
//               <li className="li_style">
//                 <button
//                   onClick={() => setTabs(0)}
//                   className={tabs === 0 ? "active" : ""}
//                 >
//                   {tabButtons[0]}
//                 </button>
//               </li>
//               <li>
//                 <button
//                   onClick={() => setTabs(1)}
//                   className={tabs === 1 ? "active" : ""}
//                 >
//                   {tabButtons[1]}
//                 </button>
//               </li>
//             </ul>
//           </div>
//           <div className="tab-content">
//             {tabContent[tabs]}
//           </div>
//         </div>
//       </div>
//       <VoiceModal show={modalShow} handleClose={() => setModalShow(false)} onAddVoice={handleAddVoice} />
//     </React.Fragment>
//   );
// }







































import React, { useState } from "react";
import './Voice.scss';
import VoiceModal from '../../../components/Modal/VoiceModal';

const apiUrl = process.env.REACT_APP_API_URL;

export default function Voice() {
  const [modalShow, setModalShow] = useState(false);
  const [tabs, setTabs] = useState(0);
  const [voices, setVoices] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [email, setEmail] = useState('YOUR_EMAIL_HERE'); // Update with actual email

  const handleAddVoice = (newVoice) => {
    setVoices([...voices, newVoice]);
  };

  const handleDeleteVoice = (index) => {
    const updatedVoices = voices.filter((_, i) => i !== index);
    setVoices(updatedVoices);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleAddKnowledgePool = () => {
    // Trigger file input click
    const fileInput = document.getElementById('fileInput');
    fileInput.click();
  };
  
  const handleSavePDF = async () => {
    try {
      if (!selectedFile) {
        console.error('No file selected');
        return;
      }
  
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('email', email);
  
      const response = await fetch(`${apiUrl}/api/upload`, {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        // File uploaded successfully
        console.log('File uploaded successfully');
        setModalShow(false); // Close modal after successful upload
      } else {
        // Handle error
        console.error('Error uploading file:', response.statusText);
      }
    } catch (error) {
      console.error('Error uploading file:', error.message);
    }
  };

  const tabButtons = [
    "Voices", 
  ];

  const tabContent = [
    (
      <div className="voicesTab">
        <div className="card">
          <h4><img src="/images/flag.svg" alt="flag" /> Get started with voices</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
        <div className="addVoice">
          <div className="content">
            <h4>Your voices</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          </div>
          <button className="add" onClick={() => setModalShow(true)}>Add voice</button>
        </div>
        {voices.length > 0 ? (
          <ul>
            {voices.map((voice, index) => (
              <li key={index} style={{border:'1px solid #ccc'}}>
                {voice}
                <button className="delete" onClick={() => handleDeleteVoice(index)}>Delete</button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="info">You haven’t created any voices yet</p>
        )}
      </div>
    ),
    
  ];

  return (
    <div className="voice">
      <div className="title">
        <h4>Brand voice</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing el  it, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div className="tabs">
        <div className="top_tab_bar">
          <ul>
            <li className="li_style">
              <button
                onClick={() => setTabs(0)}
                className={tabs === 0 ? "active" : ""}
              >
                {tabButtons[0]}
              </button>
            </li>
            <li>
              <button
                onClick={() => setTabs(1)}
                className={tabs === 1 ? "active" : ""}
              >
                {tabButtons[1]}
              </button>
            </li>
          </ul>
        </div>
        <div className="tab-content">
          {tabContent[tabs]}
        </div>
      </div>
      <VoiceModal show={modalShow} handleClose={() => setModalShow(false)} onAddVoice={handleAddVoice} />
    </div>
  );
}
