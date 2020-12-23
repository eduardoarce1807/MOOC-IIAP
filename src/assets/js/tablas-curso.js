


$("#url-vid-rec-ap").hide();
$("#url-doc-rec-ap").hide();

const selectElement = document.querySelector('#sel-tip-rec-ap');

selectElement.addEventListener('change', (event) => {
    if (event.target.value == '1') {
        $("#url-vid-rec-ap").show();
        $("#url-doc-rec-ap").hide();
    }
    if (event.target.value == '2') {
        $("#url-doc-rec-ap").show();
        $("#url-vid-rec-ap").hide();
    }
});

