    $(".categori_btn").click(function(e) {
        e.preventDefault();
        var code = $(this).data("code");
        var name = $("#name").val();
        if(name == "") {
            alert("id를 입력해주세요");
            $("#name").focus();
            return;
        }
        location.href = "/coupang/view/"+name+"/"+code;
    });
