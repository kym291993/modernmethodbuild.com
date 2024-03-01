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
                if(self.#сhoose_your_service == "Remodeling")
                {
                    self.Step4Init();
                }
                if(self.#сhoose_your_service == "Roofing") 
                {
                    self.Step3Init();
                }
                if(self.#сhoose_your_service == "Custom home build") 
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
    #what_type_of_home_you_prefer
    Step2Init() {
        this.DistructAllStep();
        $(".component__megamodal .q2").addClass("active");
        this.#what_type_of_home_you_prefer = "";
        let self = this;
        
        $(".component__megamodal .q2 .item").on("click", function (){
            $(".component__megamodal .q2 .item").removeClass("active");
            self.#what_type_of_home_you_prefer = $(this).attr("data-choose");
            $(this).addClass("active");
            $(".component__megamodal .q2 .theme-btn").removeAttr("disabled");
            $(".component__megamodal .q2 .theme-btn").on("click",function(){
               
                self.#map.set("What type of home you prefer?", self.#what_type_of_home_you_prefer);
                var value = self.#map.get("What type of home you prefer?");
                self.DistructAllStep();
                self.Step7Init();
                
            });
        });
    }

    Step2Distruct() {
        $(".component__megamodal .q2").removeClass("active");
        $(".component__megamodal .q2 .item").removeClass("active");
        this.#what_type_of_home_you_prefer ="";
        $(".component__megamodal .q2 .theme-btn").attr("disabled", "disabled");
        $(".component__megamodal .q2 .item").off();
        $(".component__megamodal .q2 .theme-btn").off();
    }


     //step3
     #what_type_of_roof_needs_to_be_replaced
     #what_type_of_roof_do_you_have_now
     Step3Init() {
        this.DistructAllStep();
        $(".component__megamodal .q3").addClass("active");
        this.#what_type_of_roof_needs_to_be_replaced = "";
        this.#what_type_of_roof_do_you_have_now = "";
        let self = this;
        
        $(".component__megamodal .q3 .new .item").on("click", function (){
            $(".component__megamodal .q3 .new .item").removeClass("active");
            self.#what_type_of_roof_needs_to_be_replaced = $(this).attr("data-choose");
            $(this).addClass("active");
            self.#map.set("What type of roof needs to be replaced?", self.#what_type_of_roof_needs_to_be_replaced);
            if(self.#what_type_of_roof_needs_to_be_replaced!=""&&self.#what_type_of_roof_do_you_have_now!="")
            {
                $(".component__megamodal .q3 .theme-btn").removeAttr("disabled");
                $(".component__megamodal .q3 .theme-btn").on("click",function(){
                    self.DistructAllStep();
                    self.Step6Init();
                });
            }
            
        });

        $(".component__megamodal .q3 .old .item").on("click", function (){
            $(".component__megamodal .q3 .old .item").removeClass("active");
            self.#what_type_of_roof_do_you_have_now = $(this).attr("data-choose");
            $(this).addClass("active");
            self.#map.set("What type of roof do you have now?", self.#what_type_of_roof_do_you_have_now);
            if(self.#what_type_of_roof_needs_to_be_replaced!=""&&self.#what_type_of_roof_do_you_have_now!="")
            {
                $(".component__megamodal .q3 .theme-btn").removeAttr("disabled");
                $(".component__megamodal .q3 .theme-btn").on("click",function(){
                    self.DistructAllStep();
                    self.Step6Init();
                });
            }
        });
    }

    Step3Distruct() {
        $(".component__megamodal .q3").removeClass("active");
        $(".component__megamodal .q3 .item").removeClass("active");
        this.#сhoose_your_service ="";
        $(".component__megamodal .q3 .theme-btn").attr("disabled", "disabled");
        $(".component__megamodal .q3 .item").off();
        $(".component__megamodal .q3 .theme-btn").off();
    }
    
     //step4
     #what_type_of_work_you_prefer
     Step4Init() {
        this.DistructAllStep();
        $(".component__megamodal .q4").addClass("active");
        this.#what_type_of_work_you_prefer = "";
        let self = this;
        
        $(".component__megamodal .q4 .item").on("click", function (){
            $(".component__megamodal .q4 .item").removeClass("active");
            self.#what_type_of_work_you_prefer = $(this).attr("data-choose");
            $(this).addClass("active");
            $(".component__megamodal .q4 .theme-btn").removeAttr("disabled");
            $(".component__megamodal .q4 .theme-btn").on("click",function(){
               
                self.#map.set("What type of work you prefer?", self.#what_type_of_work_you_prefer);
                var value = self.#map.get("What type of work you prefer?");
                self.DistructAllStep();
                self.Step6Init();
                
            });
        });
    }

    Step4Distruct() {
        $(".component__megamodal .q4").removeClass("active");
        $(".component__megamodal .q4 .item").removeClass("active");
        this.#what_type_of_work_you_prefer ="";
        $(".component__megamodal .q4 .theme-btn").attr("disabled", "disabled");
        $(".component__megamodal .q4 .item").off();
        $(".component__megamodal .q4 .theme-btn").off();
    }

     //step5
     Step5Init() {
        $(".component__megamodal .q5").addClass("active");
    }

    Step5Distruct() {
        $(".component__megamodal .q5").removeClass("active");
    }

     //step6
     #location_in_south_west_florida
     #your_address
     Step6Init() {
        this.DistructAllStep();
        $(".component__megamodal .q6").addClass("active");
        this.#location_in_south_west_florida = "";
        this.#your_address = "";
        let self = this;
        $(".component__megamodal .q6 .select_location").on("change", function() {
           
            self.#location_in_south_west_florida = $(this).val();
            self.#map.set("Location in south west Florida", self.#what_type_of_roof_do_you_have_now);
            if(self.#location_in_south_west_florida!=""&&self.#your_address!="")
            {
                
                $(".component__megamodal .q6 .theme-btn").removeAttr("disabled");
                $(".component__megamodal .q6 .theme-btn").on("click",function(){
                    self.DistructAllStep();
                    self.Step5Init();
                });
            }
          });

          $(".component__megamodal .q6 .address").on("input", function() {
            self.#your_address = $(this).val();
            self.#map.set("Your Address", self.#your_address);
            if(self.#location_in_south_west_florida!=""&&self.#your_address!="")
            {
                $(".component__megamodal .q6 .theme-btn").removeAttr("disabled");
                $(".component__megamodal .q6 .theme-btn").on("click",function(){
                    self.DistructAllStep();
                    self.Step5Init();
                });
            }
          });
    }

    Step6Distruct() {
        $(".component__megamodal .q6").removeClass("active");
        $(".component__megamodal .q6 .item").removeClass("active");
        this.#location_in_south_west_florida = "";
        this.#your_address = "";
        $(".component__megamodal .q6 .theme-btn").attr("disabled", "disabled");
        $(".component__megamodal .q6 .item").off();
        $(".component__megamodal .q6 .theme-btn").off();
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
        this.DistructAllStep();
        this.#map = new Map();
    }
}

const megamodal = new Megamodal();
$(".js_openmodal").click(() => megamodal.Initialize()); // Оборачиваем вызов метода в функцию
$(".js_closemodal").click(() => megamodal.Distruct()); // Оборачиваем вызов метода в функцию