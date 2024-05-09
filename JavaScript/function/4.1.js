// (function (window) {
//     function hd() {
//         console.log("4.2.js-hd");
//     }
//     function show() {
//         console.log("4.2.js-show");
//     }
//     window.js1 = {hd, show};
// })(window);
{
    let hd = function () {
        console.log("4.2.js-hd");
    }
    let show = function () {
        console.log("4.2.js-show");
    };
    window.js1 = {hd, show};
}