const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const { exec } = require('child_process');

const app = express();
const PORT = process.env.PORT || 3000;


// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// Middleware to parse JSON and urlencoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static('public'));


/*
// Handle form submission
app.post('/submit-form', async (req, res) => {
  const { fullName, email, interests } = req.body;

  // Prepare params for DynamoDB put operation
  const params = {
    TableName: tableName,
    Item: {
      'fullName': fullName,
      'email': email,
      'interests': interests,
    },
  };

  try {
    // Put item into DynamoDB
    await dynamoDB.put(params).promise();

    res.status(200).send('Form submitted successfully');
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

*/
