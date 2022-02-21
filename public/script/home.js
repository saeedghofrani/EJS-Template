$(document).ready(function () {
    $('.searchBtn').click(function (e) {
        let data = $('#search').val().trim();
        data == '' ? window.alert('لطفا نام محصول مورد نظر خود را وارد کنید') :
            $.ajax({
                type: "GET",
                url: `http://localhost:4000/product/num=${$('#search').val().trim()}`,
                data: { data },
                success: function (response) {
                    console.log(response);
                    let item = response.split("");
                    $('.cardClass').css('display', 'block');
                    if (response.length >= 8) $(`#noMatch`).removeClass('d-none').fadeOut(5000);
                    else {
                        for (let i = 0; i < response.length; i++) {
                            $(`#card${item[i]}`).fadeOut('slow');
                        }
                    }

                },
                error: (err) => console.log(err)
            });
    });
});
