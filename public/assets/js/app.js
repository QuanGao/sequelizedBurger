$(function () {

    $("#burgerInput").keyup((e) => {
        if (e.keyCode === 13) {
            $("#burgerBtn").click();
        }
    });

    $("#burgerBtn").on("click", function () {
        event.preventDefault();
        let name = $("#burgerInput").val().trim();

        if (name) {
            $.post("/api/burgers", {
                burger_name: name
            }, () => {
                location.reload();
            })
        }
    })

    $(".devourBtn").on("click", function () {
        let burgerId = $(this).data("id");
        let customerName = $(`input[type=text][name=${burgerId}]`).val().trim();

        if (customerName) {
            $.post("/api/customers", {
                name: customerName
            }, (response) => {
                let customerID = response.id;
                $.ajax({
                    url: `/api/burgers/${burgerId}`,
                    method: "PUT",
                    data: {
                        customerID: customerID
                    }
                }).done(() => {
                    location.reload();
                })
            })
        }
    })


    $(".clearBtn").on("click", function () {
        let id = $(this).data("id");
        $.ajax({
            url: `/api/burgers/${id}`,
            method: "DELETE"
        }).then(() => {
            location.reload();
        });
    });

})