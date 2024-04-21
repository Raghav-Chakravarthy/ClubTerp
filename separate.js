const counters = document.querySelectorAll('.num');
const speed = 200;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('akhi');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate();
});




/*
const AWS = require('aws-sdk');
const config = require('config.js');
// Setting the configurations
AWS.config.update(config.aws_remote_config);

const addMovie = function (req, res) {

    // Create the DynamoDB service object
    var dynamodb = new AWS.DynamoDB();
    var params = {
      TableName: "Movies",
      Item: {
        'movieName' : {S: 'Lion King'},
        'movieType' : {S: 'Animation'}
      }
    };
    
    // Call DynamoDB to add the item to the table
    await dynamodb.putItem(params, function(err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data);
      }
    });
    
};

*/

const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalBodyInput = exampleModal.querySelector('.modal-body input')
    
  })
}



function printinfo() {

    const nameInput = document.getElementById('recipient-name');
    console.log(nameInput.value);

    const emailInput = document.getElementById('recipient-email');
    console.log(emailInput.value);

    const textInput = document.getElementById('message-text');
    console.log(textInput.value)

    value = [nameInput.value, emailInput.value, textInput.value];
    console.log(value);

    sendMessage();

    saveTextToFile(textInput.value, 'interest.txt');
}

async function sendMessage() {

  const fullName = document.getElementById('recipient-name').value;
  const email = document.getElementById('recipient-email').value;
  const interests = document.getElementById('message-text').value;

  const params = {
      TableName: 'User_Preference_Input', // Replace with your DynamoDB table name
      Item: {
          'Email': email,
          'Interest': interests,
          'Name': fullName
      },
  };

  try {
      // Initialize AWS SDK
      AWS.config.update({
          region: 'us-east-1', // Replace with your AWS region
          // accessKeyId and secretAccessKey can be set here or use AWS CLI configuration
          accessKeyId: "ASIA2UC3FEFGWJRFV6VR",
          secretAccessKey: "naKVRVxGgHDYkzmMBGtqFr0sss2hCPqwXUN1rGwY",
          sessionToken: "IQoJb3JpZ2luX2VjEOf//////////wEaCXVzLWVhc3QtMSJIMEYCIQDM5NYseZfrgzo3GwTKEjHgHkFvhwQwPgs79yc9UnKofgIhAJZHVN2c4tIlZKRThcU0cHrcKDptI/+6CJpYeDulV9vUKuwCCDAQABoMNzMwMzM1NjE3MzU3Igy3kt4TFyggyiSHKCoqyQIcDoqnoDejXZVw4eykpz/cE1csee3Wik9M/isFCYn65IyNOFUkxCFCMBkNj9VszJegJ8gnNtmdRbaX8Tr4417GJvf8f5Kc3+MCnVvsgAasmgmJAvXaxoN6z8ysPAYSmu44wqKvEbWi1PSf3oNZQhE6Ytg+ecmP2gkF7wZ1Qr4oajk6bV83qtvJ6q9UUQqxZ70L1qpenaMWLy/A1Hc/rY7gTK4It8r0Vu8WmLLNCnNEnHi8gtAmGab5WmcPMMCFwwDXWd1FqNG/tHRtsAU4/TmIcSlOnvkj/c0M9uMmcVcgXx4ypzYPl2rVQi1rH83FVSBL7xhNnVKm+62XdbQqW2zGqJSPOEjn3xmbvq237hF4toLv+gDWbRaVD3vwDfog67HG6QhKT6iqAZLOA0BH3ptIhfJ8OGDSHJwAbzn3L+vVRAsfoMZACLKK2TDesY+xBjqmAeaIAPoI/xHVyCqTk2XsxYIbigQo6VCyHOuUvYHQzLDi6Bio0+JOk8dhw9RpKEIIcLD9itlc5Ym+QOsdQNNDbaNWNHEOHhHPjIVfP6K0/SDDD8X2XzVQq/1JBu0ZT5wUe71E+PH/0gMyJQBSoodWE+ZfQScM11kRXKD1ct/9zB61OhJXv/DwvdnjzKDKoql8PDR8SpOhJyR6soskdN/fnl+2TTV/Rk4="
      });

      const dynamoDB = new AWS.DynamoDB.DocumentClient();

      // Put item into DynamoDB
      await dynamoDB.put(params).promise();

      // Close modal or show success message
      // You can add code here to close the modal or show a success message
      console.log('Form submitted successfully');
  } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error - you can show an error message to the user
  }
}

function saveTextToFile(text, filename) {
  // Create a Blob object from text
  const blob = new Blob([text], { type: 'text/plain' });

  // Create a temporary URL for the Blob
  const url = URL.createObjectURL(blob);

  // Create a link element
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;

  // Append the link to the body and trigger the click event
  document.body.appendChild(link);
  link.click();

  // Remove the link from the body
  document.body.removeChild(link);
}



    /*
    const fs = require('fs')
 
    // Data which will write in a file.
    let data = nameInput.value + ", " + emailInput.value + ", " + ", " + textInput.value;
     
    // Write data in 'Hello.txt' .
    fs.writeFile('values.txt', data, (err) => {
     
        // In case of a error throw err.
        if (err) throw err;
    })
    */

    /*
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://sheets.googleapis.com/v4/spreadsheets/1sy0brHuNEcgw-Os0KD3-hh_wkRfj86xPQsq2LuHpNZCBkAhIqpBfW6IV/values/Sheet1!A1:E1:append?valueInputOption=RAW");
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    const body = JSON.stringify({
        range: "Sheet1!A1:D1",
        majorDimension: "ROWS",
        values: value
    });
    xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 201) {
        console.log(JSON.parse(xhr.responseText));
    } else {
        console.log(`Error: ${xhr.status}`);
    }
    };
    xhr.send(body);
    */

/*
    let url = 'https://api.sheety.co/e5383d3a98703a3d1525a7e703f15543/clubTerpInputs/sheet1';
    let body = {
        "sheet1": {
            "range": "Sheet1!A1:D1",
            "majorDimension": "ROWS",
            "values": value
        }
    }
    fetch(url, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then((response) => response.json())
    .then(json => {
        // Do something with object
        console.log(json.sheet1);
    });

    */


