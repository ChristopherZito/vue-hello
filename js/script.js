//Descrizione:
// Stampare a schermo un messaggio all’interno di un h1,
// utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.



var app = new Vue (
    {
        el: "#box",
        data:{
            main:"Vuoi un immagine?",
            text:"big",
            immage:"",
            visual:"none",
            btntext: "schiaccia qui",
        },
        methods:{
            immageOn: function () {
                //immagine
                this.immage = "https://unsplash.it/300/300?image=";
                this.visual = "img on"
                this.btntext = "-_-"                   
            }
        }
    }
);