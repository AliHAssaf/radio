class Sound{
    constructor(){
        this.radio_file = document.getElementById("radioFile");
        this.radio_file.volume = 0.5;
        this.soundVolume = document.getElementById("soundVolume");
        this.soundVolume.addEventListener("change",()=>{
            this.radio_file.volume = this.soundVolume.value/100;
        });

        this.soundSpeed = document.getElementById("soundSpeed");
        this.soundSpeed.playbackRate = 1;
        this.soundSpeed.addEventListener("change",()=>{
            this.radio_file.playbackRate = this.soundSpeed.value/100;
        });
    }
}
onload = new Sound();


class Theme{
    constructor(){
        this.theme1 = document.getElementById("theme1");
        this.theme1.addEventListener("click",()=>{
            this.setTheme("theme1");
        })
        this.theme2 = document.getElementById("theme2");
        this.theme2.addEventListener("click",()=>{
            this.setTheme("theme2");
        })
        this.theme3 = document.getElementById("theme3");
        this.theme3.addEventListener("click",()=>{
            this.setTheme("theme3");
        })
        this.theme4 = document.getElementById("theme4");
        this.theme4.addEventListener("click",()=>{
            this.setTheme("theme4");
        })
        this.theme5 = document.getElementById("theme5");
        this.theme5.addEventListener("click",()=>{
            this.setTheme("theme5");
        })
        this.theme6 = document.getElementById("theme6");
        this.theme6.addEventListener("click",()=>{
            this.setTheme("theme6");
        })
        if(localStorage.getItem("bg_color") == null){
            document.body.style.background = "linear-gradient(to right, #F7444E, #F7F8F3, #002C3E)";
        }
        this.setTheme(localStorage.getItem("bg_color"));
    }
    setTheme(theme){
        if (theme == "theme1") {
            document.body.style.background = "linear-gradient(to right, #885C48,#80221E)";
        }
        else if (theme == "theme2") {
            document.body.style.background = "linear-gradient(to right, #FCBC58, #E0DDCA)";
        }
        else if (theme == "theme3") {
            document.body.style.background = " linear-gradient(to right, #38B4D0, #FFF7EC, #A9E2F5)";
        }
        else if (theme == "theme4") {
            document.body.style.background = "linear-gradient(to right, #555A54, #BFBBAF)";
        }
        else if (theme == "theme5") {
            document.body.style.background = "linear-gradient(to right, #407C87, #A5DBDD)";
        }
        else if (theme == "theme6") {
            document.body.style.background = "linear-gradient(to right, #F7444E, #F7F8F3, #002C3E)";
        }
        localStorage.setItem("bg_color",theme);
    }
}
onload = new Theme();