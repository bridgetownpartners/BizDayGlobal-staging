var redirectUrl = "https://www.youtube.com/c/BizDayGlobal/videos";
var imgDir = "./assets/automated-images/";
var url = "https://api.github.com/repos/bridgetownpartners/BizDayGlobal-staging/git/trees/a138149aeebb4499d7ad150f3801647d453ec262"; // feat/dynamic-images/assets/automated-images
// 32507e3866da46e3a63fe41b61ed287afbad4fe6 // assets
var fileextension = ".png";
var fileextensionJpg = ".jpg";
var fileextensionJpeg = ".jpeg";

$.ajax({
    url: url,
    cors: true,
    type: 'GET',
    secure: true,
    beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", "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")
    },
    success: function (data) {
        data.tree.map((imageObj) => {
            if (imageObj.path.includes(fileextension) || imageObj.path.includes(fileextensionJpg) || imageObj.path.includes(fileextensionJpeg)) {
                $('#biz-day-card__wrapper').append(
                    "<a href='" + redirectUrl + "' target='_blank' class='bizday_card_topic bizday_card_topic--has-image' style='background-image: url(" + imgDir + encodeURIComponent(imageObj.path) + "); background-size: cover; background-repeat: no-repeat; background-position: center center;'></a>"
                );
            }
        });
    },
    error: function (error, a) {
        console.log(error);
        console.log(error.responseText);
    }
});