// import React from 'react';
// import Modal from 'react-bootstrap/Modal';
// import Tabs from 'react-bootstrap/Tabs';
// import Tab from 'react-bootstrap/Tab'; // Import Tab here
// import { Link } from 'react-router-dom'; 
// import './ChatbotModal.scss'


// function TrainChatbotModal({ show, handleClose,setModalShow }) {

//   return (
//     <div >
//     <Modal className="chatModal" show={show} onHide={handleClose} centered size='lg'>
//       <Modal.Header>
//         <Modal.Title>Start your campaign</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Tabs defaultActiveKey="first">
//           <Tab eventKey="first" title="Training">
//             <div className="row">
//               <div className="col-md-9 mx-auto">
//                 <form className='upload'>
//                   <input type="file" multiple />
//                   <img src="/images/upload.svg" alt="upload" />
//                   <p>Drag your files here or click in this area.</p>
//                   <span>Supported Files Type: pdf, docx, png, text</span>
//                 </form>
//                 <div className="source">
//                   <p>Sources which included:</p>
//                   <p>0/400000 Character</p>
//                 </div>
//                 <Link  className='continue' to="../Cards" onClick={()=>setModalShow(false)}>
//                   Next
//                 </Link>
//               </div>
//             </div>
//           </Tab>
//           <Tab eventKey="second" title="Setting">
//             <div className="row">
//               <div className="col-md-9 mx-auto">
              
//                 <div style={{marginTop:'30px'}}>
//                 <textarea
//                   id="text"
//                   placeholder="Enter Text"
//                   style={{ width: '100%', minHeight: '181px', padding: '5px' }}
//                 ></textarea>
//                 </div>
            
                
//                 <div className="source">
//                 <p>Sources which included:</p>
//                   <p>0/400000 Character</p>
//                 </div>
//                 <Link  className='continue' to="../Cards" onClick={()=>setModalShow(false)}>
//                   Next
//                 </Link>
//               </div>
//             </div>
//           </Tab>
//         </Tabs>
//       </Modal.Body>
//     </Modal>
//     </div>
//   );
// }

// export default TrainChatbotModal;













// import React, { useState } from 'react';
// import Modal from 'react-bootstrap/Modal';
// import Tabs from 'react-bootstrap/Tabs';
// import Tab from 'react-bootstrap/Tab';
// import { Link } from 'react-router-dom'; 
// import axios from 'axios';
// import './ChatbotModal.scss';

// function TrainChatbotModal({ show, handleClose, setModalShow }) {
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [uploadStatus, setUploadStatus] = useState('');
//   const [email, setEmail] = useState(''); // Assuming you want to handle email input as well

//   const handleFileChange = (event) => {
//     setSelectedFiles(event.target.files);
//   };

//   const handleFileUpload = async (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     Array.from(selectedFiles).forEach(file => {
//       formData.append('file', file);
//     });
//     formData.append('email', email);

//     try {
//       const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/upload`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       setUploadStatus('File uploaded successfully');
//       console.log(response.data);
//     } catch (error) {
//       setUploadStatus('File upload failed');
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <Modal className="chatModal" show={show} onHide={handleClose} centered size='lg'>
//         <Modal.Header>
//           <Modal.Title>Start your campaign</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Tabs defaultActiveKey="first">
//             <Tab eventKey="first" title="Training">
//               <div className="row">
//                 <div className="col-md-9 mx-auto">
//                   <form className='upload' onSubmit={handleFileUpload}>
//                     <input type="file" multiple onChange={handleFileChange} />
//                     <img src="/images/upload.svg" alt="upload" />
//                     <p>Drag your files here or click in this area.</p>
//                     <span>Supported Files Type: pdf, docx, png, text</span>
//                     <div>
//                       <label>Email:</label>
//                       <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                       />
//                     </div>
//                     <button type="submit" className="continue">
//                       Upload
//                     </button>
//                   </form>
//                   <div className="upload-status">{uploadStatus}</div>
//                   <div className="source">
//                     <p>Sources which included:</p>
//                     <p>0/400000 Character</p>
//                   </div>
//                   <Link className='continue' to="../Cards" onClick={() => setModalShow(false)}>
//                     Next
//                   </Link>
//                 </div>
//               </div>
//             </Tab>
//             <Tab eventKey="second" title="Setting">
//               <div className="row">
//                 <div className="col-md-9 mx-auto">
//                   <div style={{ marginTop: '30px' }}>
//                     <textarea
//                       id="text"
//                       placeholder="Enter Text"
//                       style={{ width: '100%', minHeight: '181px', padding: '5px' }}
//                     ></textarea>
//                   </div>
//                   <div className="source">
//                     <p>Sources which included:</p>
//                     <p>0/400000 Character</p>
//                   </div>
//                   <Link className='continue' to="../Cards" onClick={() => setModalShow(false)}>
//                     Next
//                   </Link>
//                 </div>
//               </div>
//             </Tab>
//           </Tabs>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// }

// export default TrainChatbotModal;


// import React, { useState } from 'react';
// import Modal from 'react-bootstrap/Modal';
// import Tabs from 'react-bootstrap/Tabs';
// import Tab from 'react-bootstrap/Tab';
// import { Link, useNavigate } from 'react-router-dom'; 
// import axios from 'axios';
// import './ChatbotModal.scss';

// function TrainChatbotModal({ show, handleClose, setModalShow }) {
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [uploadStatus, setUploadStatus] = useState('');
//   const [email, setEmail] = useState('');
//   const navigate = useNavigate();

//   const handleFileChange = (event) => {
//     setSelectedFiles(event.target.files);
//   };

//   const handleFileUpload = async (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     Array.from(selectedFiles).forEach(file => {
//       formData.append('file', file);
//     });
//     formData.append('email', email);

//     try {
//       console.log('before api')
//       const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/upload`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       console.log('after api')

//       setUploadStatus('File uploaded successfully');
//       console.log(response.data);
//       setModalShow(false);
//       navigate('/Cards');  // Redirect to the next page
//     } catch (error) {
//       setUploadStatus('File upload failed');
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <Modal className="chatModal" show={show} onHide={handleClose} centered size='lg'>
//         <Modal.Header>
//           <Modal.Title>Start your campaign</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Tabs defaultActiveKey="first">
//             <Tab eventKey="first" title="Training">
//               <div className="row">
//                 <div className="col-md-9 mx-auto">
//                   <form className='upload'>
//                     <input type="file" multiple onChange={handleFileChange} />
//                     <img src="/images/upload.svg" alt="upload" />
//                     <p>Drag your files here or click in this area.</p>
//                     <span>Supported Files Type: pdf, docx, png, text</span>
//                     <div>
//                       <label>Email:</label>
//                       <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                       />
//                     </div>
//                   </form>
//                   <div className="upload-status">{uploadStatus}</div>
//                   <div className="source">
//                     <p>Sources which included:</p>
//                     <p>0/400000 Character</p>
//                   </div>
//                   <Link 
//                     className='continue' 
//                     to="#" 
//                     onClick={handleFileUpload}
//                   >
//                     Next
//                   </Link>
//                 </div>
//               </div>
//             </Tab>
//             <Tab eventKey="second" title="Setting">
//               <div className="row">
//                 <div className="col-md-9 mx-auto">
//                   <div style={{ marginTop: '30px' }}>
//                     <textarea
//                       id="text"
//                       placeholder="Enter Text"
//                       style={{ width: '100%', minHeight: '181px', padding: '5px' }}
//                     ></textarea>
//                   </div>
//                   <div className="source">
//                     <p>Sources which included:</p>
//                     <p>0/400000 Character</p>
//                   </div>
//                   <Link 
//                     className='continue' 
//                     to="../Cards" 
//                     onClick={() => setModalShow(false)}
//                   >
//                     Next
//                   </Link>
//                 </div>
//               </div>
//             </Tab>
//           </Tabs>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// }

// export default TrainChatbotModal;













































import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import axios from 'axios';
import './ChatbotModal.scss';
import { Link, useNavigate } from 'react-router-dom';
function TrainChatbotModal({ show, handleClose, setModalShow }) {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadStatus, setUploadStatus] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, []);

  const handleFileChange = (event) => {
    setSelectedFiles(event.target.files);
  };

  const handleFileUpload = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    Array.from(selectedFiles).forEach(file => {
      formData.append('file', file);
    });
    formData.append('email', user?.email); // Use user's email

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setUploadStatus('File uploaded successfully');
      setModalShow(false);
    } catch (error) {
      setUploadStatus('File upload failed');
      console.error(error);
    }
  };

  return (
    <div>
      <Modal className="chatModal" show={show} onHide={handleClose} centered size='lg'>
        <Modal.Header>
          <Modal.Title>Upload PDF</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs defaultActiveKey="first">
            <Tab eventKey="first" title="Upload ">
              <div className="row">
                <div className="col-md-9 mx-auto">
                  <form className='upload'>
                    <input type="file" multiple onChange={handleFileChange} />
                    <img src="/images/upload.svg" alt="upload" />
                    <p>Drag your files here or click in this area.</p>
                    <span>Supported Files Type: pdf, docx, png, text</span>
                  </form>
                  <div className="upload-status">{uploadStatus}</div>
                  <button className='continue' onClick={handleFileUpload}>Next</button>
                </div>
              </div>
            </Tab>
          
          <Tab eventKey="second" title="Setting">
              <div className="row">
                <div className="col-md-9 mx-auto">
                  <div style={{ marginTop: '30px' }}>
                    <textarea
                      id="text"
                      placeholder="Enter Text"
                      style={{ width: '100%', minHeight: '181px', padding: '5px' }}
                    ></textarea>
                  </div>
                  <div className="source">
                    <p>Sources which included:</p>
                    <p>0/400000 Character</p>
                  </div>
                  <Link 
                    className='continue' 
                    to="../Cards" 
                    onClick={() => setModalShow(false)}
                  >
                    Next
                  </Link>
                </div>
              </div>
            </Tab>
            </Tabs>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default TrainChatbotModal;
