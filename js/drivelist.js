const drivelist = function(){
    const drivelist = require('drivelist');

    // Get a list of all drives connected to the PC
    drivelist.list((error, drives) => { 
        if(error) throw error;

        for(let i in drives){
            // Define drive attributes that will need to be output.
            const drive = drives[i];
            drive_letter = drive.mountpoints[0].path;
            drive_description = drive.description;
            // drive.size is in bytes, so to output the value in a meaningful number for the user, the value needs to be converted into either GB or TB. Currently
            // only showing in GB.
            drive_size_in_gb = Math.floor(((drive.size/1000)/1000)/1000);
            
            // Create a span for each drive, and give it the class drive, the id of i and the draggable attribute.
            const drive_span = document.createElement('span');
            drive_span.className = "drive";
            drive_span.id = i;
            drive_span.setAttribute('draggable', 'true');

            // define the drive text and append it to the drive span.
            const drive_text = document.createTextNode(drive_letter + " " + drive_description + " : "  + drive_size_in_gb + "GB");
            drive_span.appendChild(drive_text);
            
            // Insert the drive span into the drive list div.
            const drive_list = document.getElementById('drive-list').appendChild(drive_span);
        }
    })
}

module.exports = drivelist;