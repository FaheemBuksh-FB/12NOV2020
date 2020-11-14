$(document).ready(()=>{
alert();

$("#btn").click(function(){
    
$.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'GET',
    success: function(data){
        console.log(data);
    }
});

});


});