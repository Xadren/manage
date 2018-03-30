// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const drivelist = require('drivelist');

// Get a list of all drives connected to the PC
drivelist.list((error, drives) => { 
    if(error) throw error;

    for(let i in drives){
        const drive = drives[i];
        drive_letter = drive.mountpoints[0].path;
        drive_description = drive.description;
        drive_size_in_gb = Math.floor(((drive.size/1000)/1000)/1000);
        
        const drive_span = document.createElement('span');
        drive_span.className = "drive";
        drive_span.id = i;

        const drive_text = document.createTextNode(drive_letter + " " + drive_description + " : "  + drive_size_in_gb + "GB");
        drive_span.appendChild(drive_text);
        
        const drive_list = document.getElementById('drive-list').appendChild(drive_span);
    }
})