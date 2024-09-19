import React, { useState, useEffect } from 'react';
import { CardContent, Typography, Dialog, DialogContent, IconButton } from '@mui/material';
import axios from 'axios'; // Import Axios for making HTTP requests
import './Bank.scss';
import ReactMarkdown from 'react-markdown'; // Import ReactMarkdown for rendering Markdown
import FileCopyIcon from '@mui/icons-material/FileCopy'; // Import icon for copy button

const CardListComponent = () => {
  const [open, setOpen] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [responses, setResponses] = useState([]);
  const [userEmail, setUserEmail] = useState(null); // State to store current user's email

  useEffect(() => {
    // Fetch current user's email from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserEmail(parsedUser.email);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (!userEmail) return;
      setLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/responsegpt`, {
          params: {
            email: userEmail,
            card_types: [
              'Amazon Product Description',
              'Amazon Product feature',
              'Blog Post Conclusion',
              'Blog Post Intro',
              'Blog Post Outline',
              'Blog Post Topic Ideas',
              'Business/Product Details',
              'Commands',
              'Company Bio',
              'Content Improver',
              'Creative Story',
              'Email Subject Line',
              'Facebook Add',
              'Job Description',
              'LinkedIn Topic Ideas',
              // Add more card types here if needed
            ].join(',')
          }
        });
        setResponses(response.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
  
    fetchData();
  
    return () => {
      setResponses([]);
    };
  }, [userEmail]);
  
  const handleClickOpen = (generated_response) => {
    setSelectedDescription(generated_response);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log('Text copied to clipboard');
      })
      .catch((error) => {
        console.error('Error copying text to clipboard:', error);
      });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="bank-card-list">
      {responses.map((response, index) => (
        <div key={index} className="bank-card" onClick={() => handleClickOpen(response.generated_response)}>
          <CardContent className="bank-card-content">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <Typography variant="h5" component="div" className="bank-title">
                {response.card_type}
              </Typography>
              <IconButton onClick={(e) => { e.stopPropagation(); handleCopyToClipboard(response.generated_response); }}>
                <FileCopyIcon />
              </IconButton>
            </div>
            <Typography variant="body2" className="bank-description">
              <ReactMarkdown>{response.generated_response}</ReactMarkdown>
            </Typography>
          </CardContent>
        </div>
      ))}
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Typography variant="body2">
            <ReactMarkdown>{selectedDescription}</ReactMarkdown>
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CardListComponent;
