class Radio{
    constructor(){
        var mainHeight = document.getElementById("radio");
        mainHeight.style.height = screen.height + "px";
        if(screen.width < 840){
            mainHeight.style.width = screen.width + "px";
        }

        var contentHeight = document.getElementById("radioContent")
        contentHeight.style.height = screen.height - 225 + "px";
    }
}
onload = new Radio();

class RadioPlayer{
    constructor(){
        this.radio_file = document.getElementById("radioFile");
        this.descrip = document.getElementById("description");
        this.play_pause_button = document.getElementById("play-pause-button");
        this.isplaying;
        this.play_pause_button.onclick = () =>{
            this.play_pause();
        }

        this.songNames = [];
        this.songNames[0] = "أدرار";
        this.songNames[1] = "راديو نجوم أف أم";
        this.songNames[2] = "Medi 1";
        this.songNames[3] = "راديو مصر";
        this.songSrc = [];
        this.songSrc[0]= "https://webradio.tda.dz/Adrar_64K.mp3";
        this.songSrc[1]= "https://audio.nrpstream.com/public/nogoumfm/embed#";
        this.songSrc[2]= "https://radio.co.ma/#";
        this.songSrc[3]= "https://www.maspero.eg/stream/8";
        this.songNumber = 0;
        this.setValue();

        document.getElementById("next").onclick = ()=>{
            if(this.songNumber < this.songSrc.length-1){
                this.songNumber++;
                this.isplaying = false;
            }
            else{
                this.songNumber = 0;
            }
            localStorage.setItem("position",this.songNumber);
            this.setValue();
        }
        document.getElementById("back").onclick = ()=>{
            if(this.songNumber > 0){
                this.songNumber--;
                this.isplaying = false;
            }
            else{
                this.songNumber = this.songSrc.length - 1;
            }
            localStorage.setItem("position",this.songNumber);
            this.setValue();
        }
    }
    setValue(){
        if (localStorage.getItem("position") != null) {
            this.songNumber = localStorage.getItem("position");
        }
        this.descrip.innerHTML = this.songNames[this.songNumber];
        this.radio_file.src = this.songSrc[this.songNumber];
        this.play_pause();
    }
    play_pause(){
        if(this.isplaying == false){
            this.radio_file.play();
            this.isplaying = true;
            this.play_pause_button.innerHTML = "pause";
        }
        else{
            this.radio_file.pause();
            this.isplaying = false;
            this.play_pause_button.innerHTML = "play";
        }
    }
}
onload = new RadioPlayer();