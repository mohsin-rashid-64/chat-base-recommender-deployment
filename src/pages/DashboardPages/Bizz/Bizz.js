import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, TextField, Grid } from "@mui/material";
import axios from "axios"; // Import axios for making HTTP requests
import "./Bizz.scss";

const Bizz = () => {
  const [BusinessName, setFullBusinessName] = useState("DigiMark Developers");
  const [BusinessPhoneNumber, setBusinessPhoneNumber] = useState("111-333-2222");
  const [BusinessAddress, setBusinessAddress] = useState("Lahore");
  const [industry, setindustry] = useState("IT");
  const [WebsiteURL, setWebsiteURL] = useState("https://digimarkdevelopers.com");
  const [submittedData, setSubmittedData] = useState(null);
  const [user, setUser] = useState(null);

  
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, []);


  const handleSubmit = async (e) => { // Modify to be asynchronous
    e.preventDefault();
    const formData = {
      name: BusinessName,
      address: BusinessAddress,
      website: WebsiteURL,
      industry: industry,
      contact_number: BusinessPhoneNumber,
      email: user?.email, // Hardcoded email for now, replace with actual user email
    };

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/add_business`, formData); // Send POST request with formData
      if (response.status === 201) {
        setSubmittedData(formData);
        localStorage.setItem('businessInfo', JSON.stringify(formData)); // Store in local storage
      } else {
        console.error("Failed to add business");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleResetAll = () => {
    setFullBusinessName("");
    setBusinessPhoneNumber("");
    setBusinessAddress("");
    setindustry("");
    setWebsiteURL("");
    setSubmittedData(null);
    localStorage.removeItem('businessInfo'); // Remove from local storage
  };

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-12 col-lg-11">
          <Box border="1px solid #ACACAC" borderRadius="5px" paddingBottom="80px" marginTop="20px" maxWidth="100%" position="relative">
            <Container maxWidth="lg" style={{ marginTop: "30px" }}>
              <form onSubmit={handleSubmit}>
                <Typography variant="h5" component="h1" gutterBottom sx={styles.headingTypo}>
                  Basic Details
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={14}>
                    <TextField
                      label="Business Name"
                      value={BusinessName}
                      onChange={(e) => setFullBusinessName(e.target.value)}
                      fullWidth
                      margin="normal"
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12} sm={14}>
                    <TextField
                      label="Business Address"
                      value={BusinessAddress}
                      onChange={(e) => setBusinessAddress(e.target.value)}
                      fullWidth
                      margin="normal"
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Business Phone Number"
                      value={BusinessPhoneNumber}
                      onChange={(e) => setBusinessPhoneNumber(e.target.value)}
                      fullWidth
                      margin="normal"
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="industry"
                      value={industry}
                      onChange={(e) => setindustry(e.target.value)}
                      fullWidth
                      margin="normal"
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Website URL"
                      value={WebsiteURL}
                      onChange={(e) => setWebsiteURL(e.target.value)}
                      fullWidth
                      margin="normal"
                      variant="standard"
                    />
                  </Grid>
                </Grid>
                <Box sx={{ display: "flex", justifyContent: "space-between", position: "absolute", alignItems: "center", bottom: "25px", left: "20px", right: "20px" }}>
                  <Typography variant="body2" sx={styles.resetAllText} onClick={handleResetAll}>
                    Reset All
                  </Typography>
                  <button type="submit" className="continue">
                    Save
                  </button>
                </Box>
              </form>
              {submittedData && (
                <Box marginTop="20px">
                  <Typography variant="h6" component="h2">
                    Submitted Information
                  </Typography>
                  <Typography>Business Name: {submittedData.name}</Typography>
                  <Typography>Business Phone Number: {submittedData.contact_number}</Typography>
                  <Typography>Business Address: {submittedData.address}</Typography>
                  <Typography>industry: {submittedData.industry}</Typography>
                  <Typography>Website URL: {submittedData.website}</Typography>
                </Box>
              )}
            </Container>
          </Box>
        </div>
      </div>
    </React.Fragment>
  );
};

const styles = {
  headingTypo: {
    color: "#4169E1",
    borderBottom: "1px solid #ACACAC",
    fontFamily: "'Inter', sans-serif",
    paddingBottom: "10px",
    fontWeight: "500",
  },
  resetAllText: {
    cursor: "pointer",
    color: "#8A8A8A",
    fontFamily: "'Inter', sans-serif",
  },
};

export default Bizz;
