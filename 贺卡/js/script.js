/**
 * Created by Portal on 17-10-9.
 */
window.onload = function(){
    var music = document.getElementById('music');
    var audio = document.getElementsByTagName('audio')[0];

    //当音乐播放完停止时，自动停止旋转
    audio.addEventListener('ended',function(event){
        music.setAttribute('class','');
        //music.style.animationPlayState = 'paused';
        //music.style.webkitAnimationPlayState = 'paused';
    },false);

    //点击音乐图标，控制旋转与播放效果
    //music.onclick = function(){
    //    if(audio.paused){
    //        audio.play();
    //        this.setAttribute('class','play');
    //        //this.style.animationPlayState = 'running';
    //        //this.style.webkitAnimationPlayState = 'running';
    //    }else{
    //        audio.pause();
    //        this.setAttribute('class','');
    //        //this.style.animationPlayState = 'paused';
    //        //this.style.webkitAnimationPlayState = 'paused';
    //    }
    //};

    music.addEventListener('touchstart',function(event){
        if(audio.paused){
            audio.play();
            this.setAttribute('class','play');
        }else{
            audio.pause();
            this.setAttribute('class','');
        }
    },false);

    //点击屏幕，开启好运2016
    page1.addEventListener('touchstart',function(event){
        page1.style.display = 'none';
        page2.style.display = 'block';
        page3.style.display = 'block';
        page3.style.top = '100%';
        setTimeout(function(){
            page2.setAttribute('class','page fadeOut');
            page3.setAttribute('class','page fadeIn');
        },5500);
    },false);

};

