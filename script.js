$(document).ready(function () {
    dane();
    $("#addForm").click(function (e) { 
        e.preventDefault();
        buttonClick(e.target.id);
    });
    $(".addFormClose").click(function (e) { 
        e.preventDefault();
        addFormToggle();
    });
    $(".addForm").submit(function (e) { 
        e.preventDefault();
        if (addVerification()) {
            console.log("jest okej");
        } else {
            console.log("Popraw dane");
        }
    });
});

function dane() {
    $.get("script.php", {action: "display"},
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

function addFormToggle(t) {
    if (t!=null) {
        $(".addForm").toggle(t);
    }else{
        $(".addForm").toggle(250);
    }
    
}

function addVerification() {
    
    var date = $(".addForm input[name]");
    var ret;
    for (let index = 0; index < date.length; index++) {
        console.log(date[index].name);
        console.log(date[index].value);
        switch (date[index].name) {
            case "imie":
                if (date[index].value.length > 0 && date[index].value.length <= 50) {
                    ret = true;
                } else {
                    ret = false;
                }
                break;
        
            default:
                break;
        }
        if (ret === false) {
            return false;
        }
    }
    if (ret === true) {
        return true;
    }

 
}