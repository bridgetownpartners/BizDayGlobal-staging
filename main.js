var redirectUrl = "https://www.youtube.com/c/BizDayGlobal/videos";
var imgDir = "./automated-images/";
var url = "https://api.github.com/repos/bridgetownpartners/BizDayGlobal-staging/git/trees/master"; // master/assets/automated-images
// d1e18aea2d3b7fd2002c163ab74929b9b34e19fe // master/assets/automated-images
// 32507e3866da46e3a63fe41b61ed287afbad4fe6 // assets 
// 0658f55f05ba360febc1dec8fc56d74bab24f5e0
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
    success: function (automatedImages) {
        automatedImages.tree.map((automatedImage) => {
            if (automatedImage.path === 'automated-images') {
                $.ajax({
                    url: automatedImage.url,
                    cors: true,
                    type: 'GET',
                    secure: true,
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader("Authorization", "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")
                    },
                    success: function (autoImages) {
                        console.log(autoImages)
                        autoImages.tree.map((imageObj) => {

                            if (imageObj.path.includes(fileextension) || imageObj.path.includes(fileextensionJpg) || imageObj.path.includes(fileextensionJpeg)) {
                                $('#biz-day-card__wrapper').append(
                                    "<a href='" + redirectUrl + "' target='_blank' class='bizday_card_topic bizday_card_topic--has-image' style='background-image: url(" + imgDir + encodeURIComponent(imageObj.path) + "); background-size: cover; background-repeat: no-repeat; background-position: center center;'></a>"
                                );
                            }
                        });
                    }
                })
            }
        })
    }
});




// $.ajax({
//     url: url,
//     cors: true,
//     type: 'GET',
//     secure: true,
//     beforeSend: function (xhr) {
//         xhr.setRequestHeader("Authorization", "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")
//     },
//     success: function (data) {
//         data.tree.map((imageObj) => {
//             if (imageObj.path.includes(fileextension) || imageObj.path.includes(fileextensionJpg) || imageObj.path.includes(fileextensionJpeg)) {
//                 $('#biz-day-card__wrapper').append(
//                     "<a href='" + redirectUrl + "' target='_blank' class='bizday_card_topic bizday_card_topic--has-image' style='background-image: url(" + imgDir + encodeURIComponent(imageObj.path) + "); background-size: cover; background-repeat: no-repeat; background-position: center center;'></a>"
//                 );
//             }
//         });
//     },
//     error: function (error, a) {
//         console.log(error);
//         console.log(error.responseText);
//     }
// });