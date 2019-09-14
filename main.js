let duration = 30
function writeCode(code){
    let n = 0 
    let domCode = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let timeID = setTimeout(function fn(){
        n += 1
        styleTag.innerHTML = code.substring(0, n)
        domCode.innerHTML = styleTag.innerHTML
        domCode.scrollTop = domCode.scrollHeight
        if (n < code.length){
            setTimeout(fn, duration)
        }
    }, duration)
}
    let data_speed = ['slow', 'medium', 'fast']
    data_speed.forEach((value, key)=>{
        $(`button[data-speed=${value}]`).on('click', function(e){
            $(e.currentTarget).addClass('active').siblings().removeClass('active')
            switch($(e.currentTarget).attr('data-speed')){
                case 'slow':
                    duration = 60
                    break
                case 'medium':
                    duration = 30
                    break
                case 'fast':
                    duration = 0
                    break
            }

        })
    })
var css = `
/*
 *看我给你画一只哆啦A梦
 *首先需要一张画布
 */
.canvas{
    background-color: #ddd;
}
/*呃，觉得速度太慢的话可以调一下速*/
.actions-wrapper{
    display: flex;
}
/*先画哆啦A梦的头*/
.head{
    width: 325px;
    height: 300px;
    border-radius: 48%;
    background-color: #07BAED;
    border: 2px solid #555555;
    position: absolute;
    left: 50%;
    margin-left: -162.5px;
}
/*接下来，画哆啦A梦的脸*/
.face{
    width: 265px;
    height: 205px;
    background-color: #fff;
    border-radius: 48%;
    position: absolute;
    left: 50%;
    margin-left: -132.5px;
    top: 75px;
}
/*接下来，画哆啦A梦的眼*/
.eye{
    width: 74px;
    height: 84px;
    border: 2px solid black;
    border-radius: 43%;
    position: absolute;
    background-color: #fff;
    top: 43px;
}
/*左眼在左边*/
.eye.left{
    right: 50%;
}
/*右眼在右边*/
.eye.right{
    left: 50%;
}
/*眼里面有眼珠子*/
.eye::after{
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #000;
    position: absolute;
    top: 41px;
}
.eye.left::after{
    right: 9px;
}
.eye.right::after{
    left: 9px;
}
/*接下来，画哆啦A梦的鼻子*/
.nose{
    width: 34px;
    height: 34px;
    border: 2px solid black;
    background-color: #C93300;
    border-radius: 45%;
    left: 50%;
    margin-left: -17px;
    position: absolute;
    top: 110px;
}
/*鼻子下面有一根线*/
.nose-line{
    height: 100px;
    border: solid 2px #333333;
    position: absolute;
    top: 143px;
    left: 50%;
    margin-left: -2px;
}
/*接下来，画哆啦A梦的嘴巴*/
.mouth{
    width: 220px;
    height: 400px;
    border-bottom: solid 3px black;
    /* border-radius: 50% 50% / 20% 20%; */
    border-radius: 120px;
    position: absolute;
    left: 50%;
    margin-left: -110px;
    top: -155px;
}
/*接下来，画哆啦A梦的胡子*/
.moustache-wrapper-left,
.moustache-wrapper-right{
    display: block;
}
.moustache{
    width: 60px;
    border: 1px solid black;
    margin: 15px 0;
}
.moustache-wrapper-left > .moustache:first-child,
.moustache-wrapper-right> .moustache:last-child
{
    transform: rotate(15deg);
}
.moustache-wrapper-left > .moustache:last-child,
.moustache-wrapper-right> .moustache:first-child
{
    transform: rotate(-15deg);
}
/*接下来，画哆啦A梦的身体*/
.body{
    height: 194px;
    width: 226px;
    background-color: #07BAED;
    border: 2px solid #333333;
    position: absolute;
    left: 50%;
    margin-left: -113px;
    top: 266px;
}
/*接下来，画哆啦A梦的手臂*/
.arm-left, .arm-right{
    width: 68px;
    height: 53px;
    border: 1px solid #00090C;
    background-color: #07BAED;
    position: absolute;
    top: 281px;
}
.arm-left{
    transform: rotate(-35deg);
    left: 35px;
}
.arm-right{
    transform: rotate(35deg);
    right: 35px;
}
.arm-mask{
    display: block;
}
/*接下来，画哆啦A梦的小手手*/
.hand-left, .hand-right{
    width: 64px;
    height: 64px;
    border: 2px solid #000;
    position: absolute;
    border-radius: 46%;
    background-color: #fff;
    top: 300px;
}
.hand-right{
    right: 0;
}
/*接下来，画哆啦A梦的肚子*/
.belly{
    width: 175px;
    height: 175px;
    border-radius: 50%;
    background-color: #fff;
    border: 2px solid black;
    position: absolute;
    left: 50%;
    margin-left: -87.5px;
    top: 248px;
}
.belly-mask{
    display: block;
}
/*接下来，画哆啦A梦的口袋*/
.pocket{
    width: 134px;
    height: 134px;
    border-radius: 50%;
    background-color: #fff;
    border: solid 2px #000;
    position: absolute;
    left: 50%;
    margin-left: -67px;
    top: 270px;
}
.pocket-mask{
    display: block;
}
/*接下来，画哆啦A梦的项圈*/
.collar{
    width: 236px;
    height: 26px;
    background-color: #AF2C00;
    border-radius: 10px;
    border: 2px solid #000;
    position: absolute;
    left: 50%;
    margin-left: -118px;
    top: 263px;
}
/*接下来，画哆啦A梦的铃铛*/
.bell{
    width: 44px;
    height: 44px;
    border: solid 2px #000;
    background-color: #E1D917;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    margin-left: -22px;
    top: 273px;
}
.bell-rectangle{
    width: 41px;
    height: 7px;
    border: 2px solid #333333;
    border-top-left-radius: 30%;
    border-top-right-radius: 30%;
    position: absolute;
    top: 9px;
}
.bell-circle{
    width: 12px;
    height: 12px;
    background-color: #000;
    border-radius: 50%;
    position: absolute;
    top: 20px;
    left: 50%;
    margin-left: -6px;
}
.bell-line{
    height: 12px;
    width: 3px;
    background-color: #000;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -1.5px;
}
/*接下来，画哆啦A梦的脚*/
.leg-seam{
    display: block;
}
.foot-left, .foot-right{
    width: 127px;
    height: 34px;
    border: 2px solid #333333;
    border-radius: 27px 17px 17px 17px /17px 17px 17px 8px;
    background-color: #fff;
    position: absolute;
    top: 450px;
}
.foot-left{
    left: 61px;
}
.foot-right{
    right: 65px;
}
/*好了，我的哆啦A梦画完了，你喜欢吗？*/
`
writeCode(css)