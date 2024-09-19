// // src/VoiceModal.js
// import React, { useState } from 'react';
// import './VoiceModal.scss';
// import Modal from 'react-bootstrap/Modal';
// import { Link } from 'react-router-dom';

// function VoiceModal(props) {
//   const { show, handleClose, onAddVoice } = props;
//   const [inputValue, setInputValue] = useState('');

//   const handleChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleAdd = () => {
//     onAddVoice(inputValue);
//     setInputValue('');
//     handleClose();
//   };

//   return (
//     <div className='voiceModal'>
//       <Modal show={show} onHide={handleClose} centered aria-labelledby="contained-modal-title-vcenter">
//         <Modal.Header>
//           <Modal.Title>
//             <h4>Add voice</h4>
//             <p>Import your content so Jasper can write like you</p>
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <form>
//             <label>Brand text</label>
//             <textarea 
//               name="voice_text" 
//               className='form-control' 
//               placeholder='Write or paste any content written in your brand voice' 
//               value={inputValue} 
//               onChange={handleChange} 
//               cols="30" 
//               rows="10"
//             />
//             <div className="text-end">
//               <p className='limit'>{inputValue.length}/2000</p>
//               <Modal.Footer>
//                 <Link to='/voice' className='continue' onClick={handleClose}>Back</Link>
//                 <button type="button" className="continue" onClick={handleAdd}>Continue</button>
//               </Modal.Footer>
//             </div>
//           </form>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// }

// export default VoiceModal;






















// src/VoiceModal.js
// import React, { useState } from 'react';
// import './VoiceModal.scss';
// import Modal from 'react-bootstrap/Modal';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// function VoiceModal(props) {
//   const { show, handleClose, onAddVoice } = props;
//   const [inputValue, setInputValue] = useState('');
  

//   const handleChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleAdd = async () => {
//     const tone = inputValue;
//     const businessName = 'Car24'; // Replace with actual business name
//     const email = 'UMLODHI@gmail.com'; // Replace with actual email

//     try {
//       const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/add_tone`, {
//         tone, 
//         business_name: businessName,
//         email
//       });

//       if (response.status === 201) {
//         onAddVoice(inputValue);
//         setInputValue('');
//         handleClose();
//       } else {
//         console.error('Failed to add tone:', response.data.error);
//       }
//     } catch (error) {
//       console.error('Error adding tone:', error);
//     }
//   };

//   return (
//     <div className='voiceModal'>
//       <Modal show={show} onHide={handleClose} centered aria-labelledby="contained-modal-title-vcenter">
//         <Modal.Header>
//           <Modal.Title>
//             <h4>Add voice</h4>
//             <p>Import your content so Jasper can write like you</p>
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <form>
//             <label>Brand text</label>
//             <textarea 
//               name="voice_text" 
//               className='form-control' 
//               placeholder='Write or paste any content written in your brand voice' 
//               value={inputValue} 
//               onChange={handleChange} 
//               cols="30" 
//               rows="10"
//             />
//             <div className="text-end">
//               <p className='limit'>{inputValue.length}/2000</p>
//               <Modal.Footer>
//                 <Link to='/voice' className='continue' onClick={handleClose}>Back</Link>
//                 <button type="button" className="continue" onClick={handleAdd}>Continue</button>
//               </Modal.Footer>
//             </div>
//           </form>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// }

// export default VoiceModal;




























// import React, { useState, useEffect } from 'react';
// import './VoiceModal.scss';
// import Modal from 'react-bootstrap/Modal';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// function VoiceModal(props) {
//   const { show, handleClose, onAddVoice } = props;
//   const [inputValue, setInputValue] = useState('');
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       const parsedUser = JSON.parse(storedUser);
//       setUser(parsedUser);
//     }
//   }, []);

//   const handleChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleAdd = async () => {
//     const tone = inputValue;
//     const email = user?.email; // Fetch the email from the user state

//     try {
//       const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/add_tone`, {
//         tone, 
//         email
//       });

//       if (response.status === 201) {
//         onAddVoice(inputValue);
//         setInputValue('');
//         handleClose();
//       } else {
//         console.error('Failed to add tone:', response.data.error);
//       }
//     } catch (error) {
//       console.error('Error adding tone:', error);
//     }
//   };

//   return (
//     <div className='voiceModal'>
//       <Modal show={show} onHide={handleClose} centered aria-labelledby="contained-modal-title-vcenter">
//         <Modal.Header>
//           <Modal.Title>
//             <h4>Add voice</h4>
//             <p>Import your content so Jasper can write like you</p>
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <form>
//             <label>Brand text</label>
//             <textarea 
//               name="voice_text" 
//               className='form-control' 
//               placeholder='Write or paste any content written in your brand voice' 
//               value={inputValue} 
//               onChange={handleChange} 
//               cols="30" 
//               rows="10"
//             />
//             <div className="text-end">
//               <p className='limit'>{inputValue.length}/2000</p>
//               <Modal.Footer>
//                 <Link to='/voice' className='continue' onClick={handleClose}>Back</Link>
//                 <button type="button" className="continue" onClick={handleAdd}>Continue</button>
//               </Modal.Footer>
//             </div>
//           </form>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// }

// export default VoiceModal;




































import React, { useState, useEffect } from 'react';
import './VoiceModal.scss';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import axios from 'axios';

function VoiceModal(props) {
  const { show, handleClose, onAddVoice } = props;
  const [inputValue, setInputValue] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, []);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAdd = async () => {
    const tone = inputValue;
    const email = user?.email; // Fetch the email from the user state

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/add_tone_no_business`, {
        tone,
        email
      });

      if (response.status === 201) {
        onAddVoice(inputValue);
        setInputValue('');
        handleClose();
      } else {
        console.error('Failed to add tone:', response.data.error);
      }
    } catch (error) {
      console.error('Error adding tone:', error);
    }
  };

  return (
    <div className='voiceModal'>
      <Modal show={show} onHide={handleClose} centered aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header>
          <Modal.Title>
            <h4>Add voice</h4>
            <p>Import your content so Jasper can write like you</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label>Brand text</label>
            <textarea 
              name="voice_text" 
              className='form-control' 
              placeholder='Write or paste any content written in your brand voice' 
              value={inputValue} 
              onChange={handleChange} 
              cols="30" 
              rows="10"
            />
            <div className="text-end">
              <p className='limit'>{inputValue.length}/2000</p>
              <Modal.Footer>
                <Link to='/voice' className='continue' onClick={handleClose}>Back</Link>
                <button type="button" className="continue" onClick={handleAdd}>Continue</button>
              </Modal.Footer>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default VoiceModal;
  