$(document).ready(()=>{
    $("#btn").click(()=>{
        $(".section").css("display","block");
        $.ajax({
            url:'https://fakestoreapi.com/products',
            method: 'GET',
            success: function(data){
                console.log(data)

            var content='';
            var i = 0;

            $.each(data,function(key,val){
                // if(i == 3){
                // content += '<br>';
                // i= 0;
                // }
                // ++i;
                content += '<div class="cards"><img src="'+val.image+'"alt=""><p>'+val.category+'</p></div>'
            });
            $('.section').append(content);
            }
        })
    });
});