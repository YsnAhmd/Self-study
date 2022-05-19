// Creating a new Vue instance with new Vue() constructor.

var app = new Vue ({
    el:'.main',
    data:{
        msg: 'My first Vue code. xD',
        date:  `It is ${new Date().toLocaleString()}`
    }
})