function productItemScale() {
    'use strict';
    var listItem = document.querySelectorAll('.product-item_scale__min-images');
    function changeImage(elem) {
        var srcImage = elem.src;
        var generalImage = elem.parentNode.parentNode.querySelector('.product-item__img').firstChild;
        generalImage.src = srcImage;
    }
    for (var i = 0; i < listItem.length; i++) {
            for (var j = 0; j < listItem[i].childNodes.length; j++) {
                listItem[i].childNodes[j].addEventListener('mouseover', function () {
                    changeImage(this);
                });
            }
        }
}
productItemScale();
