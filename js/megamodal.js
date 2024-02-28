class Megamodal {
    #map = new Map();
    //step1
    #сhoose_your_service ="";
    Step1Init() {
        this.DistructAllStep();
        $(".component__megamodal .q1").addClass("active");
        this.#сhoose_your_service = "";
        let self = this;
        
        $(".component__megamodal .q1 .item").on("click", function (){
            $(".component__megamodal .q1 .item").removeClass("active");
            self.#сhoose_your_service = $(this).attr("data-choose");
            $(this).addClass("active");
            $(".component__megamodal .q1 .theme-btn").removeAttr("disabled");
            $(".component__megamodal .q1 .theme-btn").on("click",function(){
               
                self.#map.set("Choose your service", self.#сhoose_your_service);
                var value = self.#map.get("Choose your service");
                self.DistructAllStep();
                if(value == "Remodeling")
                {
                    self.Step4Init();
                }
                if(value == "Roofing") 
                {
                    self.Step3Init();
                }
                if(value == "Custom home build") 
                {
                    self.Step2Init();
                }

            });
        });
    }



    Step1Distruct() {
        $(".component__megamodal .q1").removeClass("active");
        $(".component__megamodal .q1 .item").removeClass("active");
        this.#сhoose_your_service ="";
        $(".component__megamodal .q1 .theme-btn").attr("disabled", "disabled");
        $(".component__megamodal .q1 .item").off();
        $(".component__megamodal .q1 .theme-btn").off();
    }

   














    //step2
    Step2Init() {
        $(".component__megamodal .q2").addClass("active");
    }

    Step2Distruct() {
        $(".component__megamodal .q2").removeClass("active");
    }
     //step3
     Step3Init() {
        $(".component__megamodal .q3").addClass("active");
    }

    Step3Distruct() {
        $(".component__megamodal .q3").removeClass("active");
    }

     //step4
     Step4Init() {
        $(".component__megamodal .q4").addClass("active");
    }

    Step4Distruct() {
        $(".component__megamodal .q4").removeClass("active");
    }

     //step5
     Step5Init() {
        $(".component__megamodal .q5").addClass("active");
    }

    Step5Distruct() {
        $(".component__megamodal .q5").removeClass("active");
    }

     //step6
     Step6Init() {
        $(".component__megamodal .q6").addClass("active");
    }

    Step6Distruct() {
        $(".component__megamodal .q6").removeClass("active");
    }

      //step7
      Step7Init() {
        $(".component__megamodal .q7").addClass("active");
    }

    Step7Distruct() {
        $(".component__megamodal .q7").removeClass("active");
    }

    DistructAllStep()
    {
        this.Step1Distruct();
        this.Step2Distruct();
        this.Step3Distruct();
        this.Step4Distruct();
        this.Step5Distruct();
        this.Step6Distruct();
        this.Step7Distruct();
    }




    Initialize() {
        $(".component__megamodal").addClass("active");
        this.#map = new Map(); // Используем this.#map для обращения к приватному полю
        this.Step1Init();
    }

    Distruct() {
        $(".component__megamodal").removeClass("active");
        this.#map = new Map();
    }
}

const megamodal = new Megamodal();
$(".js_openmodal").click(() => megamodal.Initialize()); // Оборачиваем вызов метода в функцию
$(".js_closemodal").click(() => megamodal.Distruct()); // Оборачиваем вызов метода в функцию