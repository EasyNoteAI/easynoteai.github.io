$(function(){
    // 调整轮播图尺寸
    let formatHeaderSize = ()=>{
        let tag = document.querySelector(".carousel-inner .item.active")
        if (!tag) return
        let docs = document.querySelectorAll('.sprite')
        for (let i=0; i < docs.length; i++) {
            docs[i].style.zoom = Math.ceil( tag.clientWidth * 1000 / 1900) / 1000
        }
    }
    window.onresize = formatHeaderSize
    formatHeaderSize()
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