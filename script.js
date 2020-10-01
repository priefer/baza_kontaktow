$(document).ready(function () {
    displayDane();
    $("#addForm").click(function (e) { 
        e.preventDefault();
        buttonClick(e.target.id);
    });
    $(".addFormClose").click(function (e) { 
        e.preventDefault();
        addFormToggle();
        addFormReset();
    });
    $(".addForm").submit(function (e) { 
        e.preventDefault();
        addNewContact(addVerification());
       
    });
});

function displayDane() {
    $.get("script.php", { action: "display" },
        function (data, textStatus, jqXHR) {
            $("main table tbody").html(data);
        }

    );
}

function buttonClick(id) {
    switch (id) {
        case "addForm":
            addFormToggle();
            break;
    
        default:
            break;
    }
    
}
function addFormReset() {
    $("form").trigger("reset");
}
function addFormToggle(t) {
    if (t!=null) {
        $(".addForm").toggle(t);
    }else{
        $(".addForm").toggle(250);
    }
    
}

function addVerification() {
    
    var date = $(".addForm input[name]");
    var contact = [];
    var ret;
    for (let index = 0; index < date.length; index++) {
        if (date[index].name === "imie") {
            if (date[index].value.length > 0 && date[index].value.length <= 50) {
                ret = true;
                contact[index] = date[index].value;
            } else {
                ret = false;
                
            }
        } if (date[index].name === "nazwisko") {
            if (date[index].value.length > 0 && date[index].value.length <= 50) {
                ret = true;
                contact[index] = date[index].value;
            } else {
                ret = false;
                
            }
        } if (date[index].name === "kierunkowy") {
            if (date[index].value.length > 0 && date[index].value.length <= 5) {
                ret = true;
                contact[index] = date[index].value;
            } else {
                ret = false;
                
            }
        } if (date[index].name === "stacjonarny") {
            if (date[index].value.length > 0 && date[index].value.length <= 15) {
                ret = true;
                contact[index] = date[index].value;
            } else {
                ret = false;
                
            }
        } if (date[index].name === "komurkowy") {
            if (date[index].value.length > 0 && date[index].value.length <= 15) {
                ret = true;
                contact[index] = date[index].value;
            } else {
                ret = false;
                
            }
        } if (date[index].name === "adres") {
            if (date[index].value.length > 0 && date[index].value.length <= 100) {
                ret = true;
                contact[index] = date[index].value;
            } else {
                ret = false;
                
            }
        } if (date[index].name === "zawod") {
            if (date[index].value.length > 0 && date[index].value.length <= 50) {
                ret = true;
                contact[index] = date[index].value;
            } else {
                ret = false;
                
            }
        } if (date[index].name === "uwagi") {
            if (date[index].value.length <= 255) {
                ret = true;
                contact[index] = date[index].value;
            } else {
                ret = false;
                
            }
        }     
        if (ret === false) {
            return false;
        }}
    if (ret === true) {
        return contact;
    }
}

function addNewContact(contact){
    if (!(contact)) {
        alert("Popraw dane");
    }else{
        $.post("script.php", {
            action: "addNewContact",
            data: JSON.stringify(contact)
        },
            function (dane, textStatus, jqXHR) {
                    addFormToggle();
                    addFormReset();
                    displayDane();
                    console.log(dane);
                
            }
            
        );
    }
  }
