function getQueryParams(qs) {
    qs = qs.split('+').join(' ');

    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }

    return params
}

function submit() {
    var pasteText = document.getElementsByTagName('textarea')[0].value
    var query = getQueryParams(document.location.search);
    if(query.p == undefined && pasteText.length > 0) {
        window.location.href = window.location.href + '?p=' + btoa(pasteText)
    } else {
        alert('Please paste something');
    }
}

function showPaste() {
    var query = getQueryParams(document.location.search);
    if(query.p != undefined && query.p.length > 0) {
        pasteText = atob(query.p);
        document.getElementsByTagName('p')[0].innerHTML = pasteText
    }
}