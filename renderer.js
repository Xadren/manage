// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const drivelist = require('./js/drivelist');
// require('./js/drag');
drivelist();

// var drives = document.getElementsByClassName('drive')

// drives.addEventListener('dragstart', function(){
//     console.log('dragging started');
// }, false)


document.addEventListener('dragstart', function(e){
    const drive = e.srcElement;
    // console.log(drive);
})

document.addEventListener('drag', function(e){
    const drive = e.srcElement;
    const drive_id = drive.getAttribute('id');
    // console.log("Dragging drive " + drive_id);
})

document.getElementById('src-drives').addEventListener('dragover', function(e){
    const drive = e.srcElement;
    this.style.backgroundColor = '#000090';
    // console.log(e);
})

document.getElementById('src-drives').addEventListener('dragleave', function(e){
    const drive = e.srcElement;
    this.style.backgroundColor = '#0000FF';
    // console.log(e);
})

document.getElementById('src-drives').addEventListener('drop', function(e){
    const drive = e.srcElement;
    this.style.backgroundColor = '#0000FF';
    document.getElementById('src-drives').appendChild(drive);
    console.log(e);
})






// const dropzones = document.getElementsByClassName('dropzone');

// for(const dropzone of dropzones){
//     dropzone.addEventListener('dragover', dragover);
//     dropzone.addEventListener('dragenter', dragenter);
//     dropzone.addEventListener('drop', drop);
// }

// function dragover(e){
//     console.log('dragover');
//     e.preventDefault();
// }

// function dragenter(e){
//     e.preventDefault();
// }
// function drop(e){
//     console.log(drive, e)
//     this.append(drive);
// }