class Megamodal {
    #map = new Map();
    //step1
    #сhoose_your_service = "";
    Step1Init() {
        this.DistructAllStep();
        $(".component__megamodal .q1").addClass("active");
        this.#сhoose_your_service = "";
        let self = this;

        $(".component__megamodal .q1 .item").on("click", function () {
            $(".component__megamodal .q1 .item").removeClass("active");
            self.#сhoose_your_service = $(this).attr("data-choose");
            $(this).addClass("active");
            $(".component__megamodal .q1 .theme-btn").removeAttr("disabled");
            $(".component__megamodal .q1 .theme-btn").on("click", function () {

                self.#map.set("Choose your service", self.#сhoose_your_service);
                if (self.#сhoose_your_service == "Remodeling") {
                    self.Step4Init();
                }
                if (self.#сhoose_your_service == "Roofing") {
                    self.Step3Init();
                }
                if (self.#сhoose_your_service == "Custom home build") {
                    self.Step2Init();
                }

            });
        });
    }



    Step1Distruct() {
        $(".component__megamodal .q1").removeClass("active");
        $(".component__megamodal .q1 .item").removeClass("active");
        this.#сhoose_your_service = "";
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

        $(".component__megamodal .q2 .item").on("click", function () {
            $(".component__megamodal .q2 .item").removeClass("active");
            self.#what_type_of_home_you_prefer = $(this).attr("data-choose");
            $(this).addClass("active");
            $(".component__megamodal .q2 .theme-btn").removeAttr("disabled");
            $(".component__megamodal .q2 .theme-btn").on("click", function () {

                self.#map.set("What type of home you prefer?", self.#what_type_of_home_you_prefer);
                var value = self.#map.get("What type of home you prefer?");
                self.DistructAllStep();
                self.Step10Init();

            });
        });
    }

    Step2Distruct() {
        $(".component__megamodal .q2").removeClass("active");
        $(".component__megamodal .q2 .item").removeClass("active");
        this.#what_type_of_home_you_prefer = "";
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

        $(".component__megamodal .q3 .new .item").on("click", function () {
            $(".component__megamodal .q3 .new .item").removeClass("active");
            self.#what_type_of_roof_needs_to_be_replaced = $(this).attr("data-choose");
            $(this).addClass("active");
            self.#map.set("What type of roof needs to be replaced?", self.#what_type_of_roof_needs_to_be_replaced);
            if (self.#what_type_of_roof_needs_to_be_replaced != "" && self.#what_type_of_roof_do_you_have_now != "") {
                $(".component__megamodal .q3 .theme-btn").removeAttr("disabled");
                $(".component__megamodal .q3 .theme-btn").on("click", function () {
                    self.DistructAllStep();
                    self.Step5Init();
                });
            }

        });

        $(".component__megamodal .q3 .old .item").on("click", function () {
            $(".component__megamodal .q3 .old .item").removeClass("active");
            self.#what_type_of_roof_do_you_have_now = $(this).attr("data-choose");
            $(this).addClass("active");
            self.#map.set("What type of roof do you have now?", self.#what_type_of_roof_do_you_have_now);
            if (self.#what_type_of_roof_needs_to_be_replaced != "" && self.#what_type_of_roof_do_you_have_now != "") {
                $(".component__megamodal .q3 .theme-btn").removeAttr("disabled");
                $(".component__megamodal .q3 .theme-btn").on("click", function () {
                    self.DistructAllStep();
                    self.Step5Init();
                });
            }
        });
    }

    Step3Distruct() {
        $(".component__megamodal .q3").removeClass("active");
        $(".component__megamodal .q3 .item").removeClass("active");
        this.#сhoose_your_service = "";
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

        $(".component__megamodal .q4 .item").on("click", function () {
            $(".component__megamodal .q4 .item").removeClass("active");
            self.#what_type_of_work_you_prefer = $(this).attr("data-choose");
            $(this).addClass("active");
            $(".component__megamodal .q4 .theme-btn").removeAttr("disabled");
            $(".component__megamodal .q4 .theme-btn").on("click", function () {

                self.#map.set("What type of work you prefer?", self.#what_type_of_work_you_prefer);
                var value = self.#map.get("What type of work you prefer?");
                self.DistructAllStep();
                self.Step9Init();

            });
        });
    }

    Step4Distruct() {
        $(".component__megamodal .q4").removeClass("active");
        $(".component__megamodal .q4 .item").removeClass("active");
        this.#what_type_of_work_you_prefer = "";
        $(".component__megamodal .q4 .theme-btn").attr("disabled", "disabled");
        $(".component__megamodal .q4 .item").off();
        $(".component__megamodal .q4 .theme-btn").off();
    }

    //step5
    #your_name
    #your_email
    #your_phone
    #your_address
    #call_date
    Step5Init() {
        $(".component__megamodal .q5").addClass("active");
        this.#your_name = "";
        this.#your_email = "";
        this.#your_phone = "";
        this.#your_address= "";
        this.#call_date = "";
        let self = this;

        $(".component__megamodal .q5 .name").on("input", function () {
            self.#your_name = $(this).val();
            self.#map.set("Your Name", self.#your_name);
            if (self.#your_name != "" && self.#your_phone != "") {
                $(".component__megamodal .q5 .theme-btn").removeAttr("disabled");
                $(".component__megamodal .q5 .theme-btn").on("click", function () {

                    self.DistructAllStep();
                    if (typeof td !== 'undefined') {
                        // Преобразование Map в объект
                        let formData = {};
                        self.#map.forEach((value, key) => {
                            formData[key] = value;
                        });

                        // Отправка данных через AJAX
                        $.ajax({
                            type: "POST",
                            url: td + "mail.php",
                            data: formData
                        }).done(function () {
                            self.Step8Init();
                        });
                    } else {
                        self.Step8Init();
                    }



                });
            }
            else 
            {
                $(".component__megamodal .q5 .theme-btn").attr("disabled", "disabled");
                $(".component__megamodal .q5 .theme-btn").off();
            }
        });

        $(".component__megamodal .q5 .phone").on("input", function () {
            self.#your_phone = $(this).val();
            self.#map.set("Your Phone", self.#your_phone);
            if (self.#your_name != "" && self.#your_phone != "") {
                $(".component__megamodal .q5 .theme-btn").removeAttr("disabled");
                $(".component__megamodal .q5 .theme-btn").on("click", function () {
                    self.DistructAllStep();
                    if (typeof td !== 'undefined') {
                        // Преобразование Map в объект
                        let formData = {};
                        self.#map.forEach((value, key) => {
                            formData[key] = value;
                        });

                        // Отправка данных через AJAX
                        $.ajax({
                            type: "POST",
                            url: td + "mail.php",
                            data: formData
                        }).done(function () {
                            self.Step8Init();
                        });
                    } else {
                        self.Step8Init();
                    }
                });
            }
            else 
            {
                $(".component__megamodal .q5 .theme-btn").attr("disabled", "disabled");
                $(".component__megamodal .q5 .theme-btn").off();
            }
        });

        $(".component__megamodal .q5 .email").on("input", function () {
            self.#your_email = $(this).val();
            self.#map.set("Your Email", self.#your_email);
        });

        $(".component__megamodal .q5 .address").on("input", function () {
            self.#your_address = $(this).val();
            self.#map.set("Your Address", self.#your_address);
        });

        $(".component__megamodal .q5 .date").on("input", function () {
            self.#call_date = $(this).val();
            self.#map.set("Call date", self.#call_date);
        });
    }

    Step5Distruct() {
        $(".component__megamodal .q5").removeClass("active");
        $(".component__megamodal .q5 input").val('');
        this.#your_name = "";
        this.#your_email = "";
        this.#your_phone = "";
        this.#your_address= "";
        this.#call_date= "";
        $(".component__megamodal .q5 .theme-btn").attr("disabled", "disabled");
        $(".component__megamodal .q5 .item").off();
        $(".component__megamodal .q5 .theme-btn").off();
    }

    #what_is_the_prefered_square_ft
    //step7
    Step7Init() {
        this.DistructAllStep();
        $(".component__megamodal .q7").addClass("active");
        this.#what_is_the_prefered_square_ft = "";
        let self = this;

        $(".component__megamodal .q7 .option").on("click", function () {
            $(".component__megamodal .q7 .option").removeClass("active");
            self.#what_is_the_prefered_square_ft = $(this).attr("data-choose");
            $(this).addClass("active");
            $(".component__megamodal .q7 .theme-btn").removeAttr("disabled");
            $(".component__megamodal .q7 .theme-btn").on("click", function () {
                self.#map.set("What is the prefered square ft?", self.#what_is_the_prefered_square_ft);
                self.Step1Init();
            });
        });
    }

    Step7Distruct() {
        $(".component__megamodal .q7").removeClass("active");
        $(".component__megamodal .q7 .option").removeClass("active");
        this.#сhoose_your_service = "";
        $(".component__megamodal .q7 .theme-btn").attr("disabled", "disabled");
        $(".component__megamodal .q7 .option").off();
        $(".component__megamodal .q7 .theme-btn").off();
    }
    //step8
    Step8Init() {
        this.DistructAllStep();
        $(".component__megamodal .q8").addClass("active");
    }
    Step8Distruct() {
        $(".component__megamodal .q8").removeClass("active");
    }

    #Choose_the_budgeting_options
   //step9 
    Step9Init() {
        this.DistructAllStep();
        $(".component__megamodal .q9").addClass("active");
        this.#Choose_the_budgeting_options = "";
        let self = this;

        $(".component__megamodal .q9 .option").on("click", function () {
            $(".component__megamodal .q9 .option").removeClass("active");
            self.#Choose_the_budgeting_options = $(this).attr("data-choose");
            $(this).addClass("active");
            $(".component__megamodal .q9 .theme-btn").removeAttr("disabled");
            $(".component__megamodal .q9 .theme-btn").on("click", function () {
                self.#map.set("Choose the budgeting options", self.#Choose_the_budgeting_options);
                self.Step5Init();
            });
        });
    }

    Step9Distruct() {
        $(".component__megamodal .q9").removeClass("active");
        $(".component__megamodal .q9 .option").removeClass("active");
        this.#Choose_the_budgeting_options = "";
        $(".component__megamodal .q9 .theme-btn").attr("disabled", "disabled");
        $(".component__megamodal .q9 .option").off();
        $(".component__megamodal .q9 .theme-btn").off();
    }

    //step10 
     Step10Init() {
        this.DistructAllStep();
        $(".component__megamodal .q10").addClass("active");
        this.#Choose_the_budgeting_options = "";
        let self = this;

        $(".component__megamodal .q10 .option").on("click", function () {
            $(".component__megamodal .q10 .option").removeClass("active");
            self.#Choose_the_budgeting_options = $(this).attr("data-choose");
            $(this).addClass("active");
            $(".component__megamodal .q10 .theme-btn").removeAttr("disabled");
            $(".component__megamodal .q10 .theme-btn").on("click", function () {
                self.#map.set("Choose the budgeting options", self.#Choose_the_budgeting_options);
                self.Step5Init();
            });
        });
    }

    Step10Distruct() {
        $(".component__megamodal .q10").removeClass("active");
        $(".component__megamodal .q10 .option").removeClass("active");
        this.#Choose_the_budgeting_options = "";
        $(".component__megamodal .q10 .theme-btn").attr("disabled", "disabled");
        $(".component__megamodal .q10 .option").off();
        $(".component__megamodal .q10 .theme-btn").off();
    }


    DistructAllStep() {
        this.Step1Distruct();
        this.Step2Distruct();
        this.Step3Distruct();
        this.Step4Distruct();
        this.Step5Distruct();
        this.Step7Distruct();
        this.Step8Distruct();
        this.Step9Distruct();
        this.Step10Distruct();
    }




    Initialize() {
        $(".component__megamodal").addClass("active");
        this.#map = new Map(); // Используем this.#map для обращения к приватному полю
        this.Step7Init();
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