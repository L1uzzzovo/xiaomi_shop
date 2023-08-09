var curIndex = 0;
//时间间隔(单位毫秒)
var timeInterval = 500;

var arr = new Array();
arr[0] = "../img/lb_1.jpeg";
arr[1] = "../img/lb_2.jpg";
arr[2] = "../img/lb_3.jpeg";
arr[3] = "../img/lb_4.jpg";
setInterval(changeImg, timeInterval);
function changeImg() {
    if (curIndex == arr.length - 1) {
        curIndex = 0;
    } else {
        curIndex += 1;
    }

    document.body.style.backgroundImage = "URL(" + arr[curIndex] + ")";
}

var index = 1;
function lunbo() {
    index++;
    //判断index是否大于3
    if (index > 3) {
        index = 1;
    }
    //获取img对象
    var img = document.getElementById("lunbo_img");
    img.src = "./pic/img" + index + ".jpeg";
}
//2.定义定时器
setInterval(lunbo, 2000);



const DIRECTION_ENUM = {
    DOWN: "down",
    UP: "up",
};

// 距离顶部或底部的阈值
const threshold = 20;

// 记录前一个滚动位置
let beforeScrollTop = 0;

function handleScroll() {
    // 距顶部
    var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
    // 可视区高度
    var clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
    // 滚动条总高度
    var scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;

    // 打印数值
    console.table([
        {
            label: "距顶部",
            value: scrollTop,
        },
        {
            label: "可视区高度",
            value: clientHeight,
        },
        {
            label: "滚动条总高度",
            value: scrollHeight,
        },
        {
            label: "距顶部 + 可视区高度",
            value: scrollTop + clientHeight,
        },
    ]);

    // 确定滚动方向
    let direction = DIRECTION_ENUM.DOWN;
    if (beforeScrollTop > scrollTop) {
        direction = DIRECTION_ENUM.UP;
    }

    // 通过滚动方向判断是触底还是触顶
    if (direction == DIRECTION_ENUM.DOWN) {
        // 滚动触底
        if (scrollTop + clientHeight + threshold >= scrollHeight) {
            console.log("滚动触底");
        }
    } else {
        // 滚动到顶部
        if (scrollTop <= threshold) {
            console.log("滚动到顶部");
        }
    }

    beforeScrollTop = scrollTop;
}

// 滚动节流
const throttleHandleScroll = throttleDebounce.throttle(1000, handleScroll);

// 监听滚动
window.addEventListener('scroll', throttleHandleScroll);
