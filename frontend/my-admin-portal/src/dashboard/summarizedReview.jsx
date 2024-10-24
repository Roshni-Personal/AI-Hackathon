import React, { useState } from "react";
import { Tabs, Tab, Box, Typography, List, ListItem } from "@mui/material";

const TabPanel = ({ children, value, index }) => {
  return (
    <div hidden={value !== index}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const SummarizedReview = ({ summarizedReviews }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs value={tabIndex} onChange={handleTabChange} centered>
        <Tab label="Positive Feedback" />
        <Tab label="Concerns" />
        <Tab label="Suggestions" />
      </Tabs>

      <TabPanel value={tabIndex} index={0}>
        <List>
          {summarizedReviews?.positiveFeedback?.map((feedback, index) => (
            <ListItem key={index}>{feedback}</ListItem>
          ))}
        </List>
      </TabPanel>

      <TabPanel value={tabIndex} index={1}>
        <List>
          {summarizedReviews?.concerns.map((concern, index) => (
            <ListItem key={index}>{concern}</ListItem>
          ))}
        </List>
      </TabPanel>

      <TabPanel value={tabIndex} index={2}>
        <List>
          {summarizedReviews?.suggestions.map((suggestion, index) => (
            <ListItem key={index}>{suggestion}</ListItem>
          ))}
        </List>
      </TabPanel>
    </Box>
  );
};

export default SummarizedReview;
