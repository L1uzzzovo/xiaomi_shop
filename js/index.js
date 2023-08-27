/*
------------------------封装区
*/ 
function $(selector) {
    return document.querySelector(selector);
}

/*
------------------------封装结束
*/


//回到顶部按钮的出现与消失
window.addEventListener('scroll', function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop >= 1000) {
        $('.back_to_top').style.display = 'block';
    } else if (scrollTop < 1000) {
        $('.back_to_top').style.display = 'none';
    }
})


//swiper的实现
var swiper = new Swiper('.swiper', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    effect: 'fade',
    autoplay: {
        delay: 4000, // 自动切换时间:3秒
    },
    // 分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        clickableClass: 'pagination-class',
    },

    // 前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})



/*
------------------------轮播图顶部折叠区部分
*/
// 选项卡展开
var foldingDomain = function () {
    for (i = 0; i < 7; i++) {
        document.querySelectorAll('.hoverSelector')[i].addEventListener('mouseover', function () {
            $('.hover_block').style.height = '200px';
        })
        document.querySelectorAll('.hoverSelector')[i].addEventListener('mouseout', function () {
            $('.hover_block').style.height = '0px';
        })
    }
}
foldingDomain()

// 选项卡悬停
$('.hover_block').addEventListener('mouseover', function () {
    this.style.height = '200px';
})
$('.hover_block').addEventListener('mouseout', function () {
    this.style.height = '0px';
})

// 清除选项卡折叠区
var clearProducts = function () {
    for (i = 0; i < 7; i++) {
        document.querySelectorAll('.productInfo')[i].style.display = 'none'
    }
}
//单个选项的display显示
$('.detail_1').addEventListener('mouseover', function () {
    clearProducts();  //先清除折叠区
    $('#d_miphones').style.display = 'block';   //再加载当前页
})
$('.detail_2').addEventListener('mouseover', function () {
    clearProducts();
    $('#d_rmphones').style.display = 'block';
})
$('.detail_3').addEventListener('mouseover', function () {
    clearProducts();
    $('#d_TVs').style.display = 'block';
})
$('.detail_4').addEventListener('mouseover', function () {
    clearProducts();
    $('#d_laptops').style.display = 'block';
})
$('.detail_5').addEventListener('mouseover', function () {
    clearProducts();
    $('#d_pads').style.display = 'block';
})
$('.detail_6').addEventListener('mouseover', function () {
    clearProducts();
    $('#d_householder').style.display = 'block';
})
$('.detail_7').addEventListener('mouseover', function () {
    clearProducts();
    $('#d_WIFIboxs').style.display = 'block';
})

/*
------------------------轮播图顶部折叠区部分结束
*/



/*
------------------------登录与注册按钮点击事件、遮罩层、登陆页面等部分
*/

//遮罩层和登录页函数
var loginUncover = function () {
    $('.login_cover').style.display = 'none';
    $('.login_page').style.display = 'none';
}
var loginCover = function () {
    $('.login_cover').style.display = 'block';
    $('.login_page').style.display = 'block';
}

//登录a链接点击事件，打开遮罩层和登录页
$('#logAlink').addEventListener('click', function () {
    loginCover()
    //选中登录模式（给予样式）
    $('#mode_login').className = 'mode_chosed'
    $('#mode_regist').className = ''
    $('.login_page_body').style.display = 'block'
    $('.register_page_body').style.display = 'none'
})
//注册a链接点击事件，打开遮罩层和注册页
$('#regAlink').addEventListener('click', function () {
    loginCover()
    //选中注册模式（给予样式）
    $('#mode_regist').className = 'mode_chosed'
    $('#mode_login').className = ''
    $('.login_page_body').style.display = 'none'
    $('.register_page_body').style.display = 'block'
})
//登录页关闭按钮
$('#closePage').addEventListener('click', function () {
    loginUncover()

})

//登录页中的登录和注册选择样式
$('#mode_login').addEventListener('click', function () {
    this.className = 'mode_chosed'
    $('#mode_regist').className = ''
    $('.login_page_body').style.display = 'block'
    $('.register_page_body').style.display = 'none'
})
$('#mode_regist').addEventListener('click', function () {
    this.className = 'mode_chosed'
    $('#mode_login').className = ''
    $('.login_page_body').style.display = 'none'
    $('.register_page_body').style.display = 'block'
})

/*
------------------------登录与注册按钮点击事件、遮罩层、登陆页面等部分结束
*/