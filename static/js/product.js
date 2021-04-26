$(function(){
    // 调整轮播图尺寸
    let formatHeaderSize = ()=>{
        let tag = document.querySelector(".carousel-inner .item.active")
        if (!tag) return
        let docs = document.querySelectorAll('.sprite')
        let z;
        for (let i=0; i < docs.length; i++) {
            z = Math.ceil( tag.clientWidth * 1000 / 1900) / 1000 
            // docs[i].style.zoom = z
            // firfox不支持zoom
            // transform不会改变原有占位空间，所以需要将父元素的高度改变
            docs[i].style['transform'] = `scale(${z})`
            docs[i].style['transform-origin'] = '0 0'

            docs[i].parentElement.style.height = `${500 * z}px`
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