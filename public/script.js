let fileExists = true; // Flag to control the while loop
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('show');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navbar.classList.remove('show');
    }
});

window.addEventListener('load', () => {
    menuToggle.style.display = 'block';
});


const sidePane = document.getElementById('side-pane');


menuToggle.addEventListener('click', () => {
  sidePane.classList.toggle('show');
  menuToggle.classList.toggle('open');
  navbar.classList.toggle('show');
});








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





const searchInput = document.getElementById('searchInput');
const phrase = "Find events based on your interests...";
let index = 0;

searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const searchTerm = searchInput.value;
        // Perform search operation with searchTerm
        console.log('Searching for:', searchTerm);
        // Clear input after searching
        printinfo();
        searchInput.value = '';
    }
});



function typeWriter() {
    if (index < phrase.length) {
        searchInput.placeholder += phrase.charAt(index);
        index++;
        setTimeout(typeWriter, 50); // Adjust typing speed (in milliseconds)
    }
}

typeWriter();




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

    const srchInput = document.getElementById('searchInput');
    console.log(srchInput.value);
/*
    const emailInput = document.getElementById('recipient-email');
    console.log(emailInput.value);

    const textInput = document.getElementById('message-text');
    console.log(textInput.value)

    value = [nameInput.value, emailInput.value, textInput.value];
    console.log(value);*/
    console.log(srchInput);

    sendMessage();

    writeFile();

    //var pythonScriptPath = "./bitcamp_2024.ipynb";
    // Run the Python script.
    //subprocess.run(["python", pythonScriptPath]);




    /*saveTextToFile(textInput.value, 'interest.txt');*/
}

async function sendMessage() {

  /*const fullName = document.getElementById('recipient-name').value;
  const email = document.getElementById('recipient-email').value;*/
  const interests = document.getElementById('searchInput').value;

  const params = {
      TableName: 'User_Preference_Input', // Replace with your DynamoDB table name
      Item: {
          'Email': 'testemail@email.com',
          'Interest': interests,
          'Name': 'Full Name'
      },
  };

  try {
      // Initialize AWS SDK
      AWS.config.update({
          region: 'us-east-1', // Replace with your AWS region
          // accessKeyId and secretAccessKey can be set here or use AWS CLI configuration
          accessKeyId: "ASIA2UC3FEFGWN7QW6EP",
          secretAccessKey: "ULTCGBXNPkHspi9f+v1ll62MwE6UQL25f+B1KlT7",
          sessionToken: "IQoJb3JpZ2luX2VjEPn//////////wEaCXVzLWVhc3QtMSJGMEQCIAPRhEitp2Rkzc7HlXVoVAHPQ7azxSY9u4qV0cEsIKtlAiBm7PazvOpGuWkuaBMTHjAd69C9FeERNqzqAOs/8X+S/CrsAghBEAAaDDczMDMzNTYxNzM1NyIM7sTwfeT1ugIjLtpVKskCrNBXy1A551RCK+5ossjYa7dC3NzWz9BS5HkuILEfrbZKE6Z8OLJY6LsB2ZuIwzBQGZ5qmsTPh7edNNcoatVjGNKtmF1cP2gh6HDLBwvhqx/Xs7tBvuZgWlSF9FL3oN7txUMeifvuy6CZ+DAFQYxaAtS2Aj82qY38+88i9gh8aO0lZKazn5cltl4h9kgDKI3Ve1UAkckbte4GfrQOoSwdPUco2ewAgoac6zxZlQ0xih8pTVj3KAHmnO/ai58VnXWhLIUppkeTe98zkiyh1h4rnJpvqt+NRe4UKyTSEEW52QlRfaPF3lTEcZaW21psLTLirozOFLsuCZ+LC34d1/AzRJbfGAMOvWycDIpuR1E/cxhNY3PGCv0fEALPNPRkiFwqbxDg3QQkXXekl/cZx5D6jpMFiRJuVUj11sZahyzRnMQ1ltTdADOV+VMwypeTsQY6qAFt2SqvxGVFbvspcV6PwYVhC9sLkCL3c2J0laMA9N94wRqIZQRd+e3DFfsOCN6YpxistC+OqwbvdnbV66/UhxDbOlzTQTLdSUaFCVEjLgXgMBiNxSz8PIdqGsPcR9FLUUsNcUS6RPsgOzNRJS6UW8v8hhyjFY/1msAOYfRVo1k0R98BrormquA2lMQLdo8YDlriiZ/0Y6LYYKbnBTAUIQBnmvWPEe1NOa4="
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




/*
async function runAllNotebookCells(notebookPath) {
  const baseUrl = 'http://localhost:8889'; // Replace with your Jupyter Notebook server URL
  const token = 'c2a177c8ce6f35ecbad4148795d7748d6f4f2b5e73dfefd0'; // Replace with your Jupyter token
  
  const notebookDataResponse = await fetch(`${baseUrl}/api/contents/${notebookPath}`, {
    headers: {
      'Authorization': `token ${token}`,
    },
  });

  if (!notebookDataResponse.ok) {
    const errorData = await notebookDataResponse.json();
    throw new Error(errorData.message);
  }

  const notebookData = await notebookDataResponse.json();
  const cellIds = notebookData.content.cells.map(cell => cell.id);

  for (const cellId of cellIds) {
    const response = await fetch(`${baseUrl}/api/nbserverproxy/run/${notebookPath}/${cellId}`, {
      method: 'POST',
      headers: {
        'Authorization': `token ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error executing cell ${cellId}: ${errorData.message}`);
    }

    const responseData = await response.json();
    console.log(`Cell ${cellId} executed successfully:`, responseData);
  }
}
*/

async function writeFile() {
  try {
    // Request access to the file system
    const handle = await window.showDirectoryPicker();
    
    // Create a new file
    const fileHandle = await handle.getFileHandle('ticket.txt', { create: true });
    
    // Write text to the file
    const writable = await fileHandle.createWritable();
    await writable.write("Hello, World!");
    await writable.close();
    
    console.log('File written successfully.');

    
    while (fileExists) {
      checkFileExistence();
      console.log("one");
      await sleep(1000);
    }

    getOuput();
    
  } catch (error) {
    console.error('Error writing file:', error);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function checkFileExistence() {
  fetch('ticket.txt')
    .then(response => {
      if (!response.ok) {
        throw new Error('File does not exist');
      }
      console.log('File exists.');
      fileExists = true;
    })
    .catch(error => {
      console.error('Error:', error.message);
      fileExists = false;
    });
}


/*
function saveTextToFile(text, filename) {
  // Create a Blob object from text
  const blob = new Blob([text], { type: 'text/plain' });

  // Create a temporary URL for the Blob
  const url = URL.createObjectURL(blob);

  // Create a link element
  const link = document.createElement('a');
  link.href = url;
  link.download = `Documents/club-terp-node/public/${filename}`;

  // Append the link to the body and trigger the click event
  document.body.appendChild(link);
  link.click();

  // Remove the link from the body
  document.body.removeChild(link);
}
*/

function getOuput() {

  AWS.config.update({
    accessKeyId: 'ASIA2UC3FEFGWN7QW6EP',
    secretAccessKey: 'ULTCGBXNPkHspi9f+v1ll62MwE6UQL25f+B1KlT7',
    sessionToken: 'IQoJb3JpZ2luX2VjEPn//////////wEaCXVzLWVhc3QtMSJGMEQCIAPRhEitp2Rkzc7HlXVoVAHPQ7azxSY9u4qV0cEsIKtlAiBm7PazvOpGuWkuaBMTHjAd69C9FeERNqzqAOs/8X+S/CrsAghBEAAaDDczMDMzNTYxNzM1NyIM7sTwfeT1ugIjLtpVKskCrNBXy1A551RCK+5ossjYa7dC3NzWz9BS5HkuILEfrbZKE6Z8OLJY6LsB2ZuIwzBQGZ5qmsTPh7edNNcoatVjGNKtmF1cP2gh6HDLBwvhqx/Xs7tBvuZgWlSF9FL3oN7txUMeifvuy6CZ+DAFQYxaAtS2Aj82qY38+88i9gh8aO0lZKazn5cltl4h9kgDKI3Ve1UAkckbte4GfrQOoSwdPUco2ewAgoac6zxZlQ0xih8pTVj3KAHmnO/ai58VnXWhLIUppkeTe98zkiyh1h4rnJpvqt+NRe4UKyTSEEW52QlRfaPF3lTEcZaW21psLTLirozOFLsuCZ+LC34d1/AzRJbfGAMOvWycDIpuR1E/cxhNY3PGCv0fEALPNPRkiFwqbxDg3QQkXXekl/cZx5D6jpMFiRJuVUj11sZahyzRnMQ1ltTdADOV+VMwypeTsQY6qAFt2SqvxGVFbvspcV6PwYVhC9sLkCL3c2J0laMA9N94wRqIZQRd+e3DFfsOCN6YpxistC+OqwbvdnbV66/UhxDbOlzTQTLdSUaFCVEjLgXgMBiNxSz8PIdqGsPcR9FLUUsNcUS6RPsgOzNRJS6UW8v8hhyjFY/1msAOYfRVo1k0R98BrormquA2lMQLdo8YDlriiZ/0Y6LYYKbnBTAUIQBnmvWPEe1NOa4=',
    region: 'us-east-1'
  });
  
  // Create S3 instance
  const s3 = new AWS.S3();
  
  // S3 bucket and file details
  const bucketName = 'webscraperdata';
  const fileName = 'output.txt';
  
  // S3 getObject params
  const params = {
    Bucket: bucketName,
    Key: fileName
  };
  

  // Function to read file from S3
  function readFileFromS3() {
    s3.getObject(params, function(err, data) {
        if (err) {
            console.log(err, err.stack);
        } else {
            // Convert data to string
            var fileContent = data.Body.toString('utf-8');
            
            // Display the file content in the HTML
            document.getElementById('fileContent').innerText = fileContent;
        }
    });
  }

  // Call the function to read the file from S3
  readFileFromS3();
  /*
  // Get file from S3
  s3.getSignedUrl('getObject', params, function (err, url) {
    if (err) {
        console.error('Error getting signed URL: ', err);
        return;
    }

    // Fetch the file using the signed URL
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text(); // Convert response to text
        })
        .then(text => {
            // Display the file content in a div element
            const fileContentDiv = document.getElementById('fileContent');
            fileContentDiv.innerHTML = text.toString('base64');
        })
        .catch(error => {
            console.error('Fetch error: ', error);
        });
  });
  */

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