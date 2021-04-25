$(function(){
    $("#btn-close").click(()=>{
        const demo = document.getElementById("demo-iframe").contentWindow
        if (demo) demo.hide()
        $("#product-container").hide()
        $('body').css({ 
        　　"overflow-x":"auto",
        　　"overflow-y":"auto"
        });
    })
    $("#btn-open-product").click(()=>{
        $("#product-container").show()
        $('body').css({ 
        　　"overflow-x":"hidden",
        　　"overflow-y":"hidden"
        });
        const demo = document.getElementById("demo-iframe").contentWindow
        if (demo) demo.show()
    })
})