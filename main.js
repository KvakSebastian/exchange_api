getvalues.onclick = function () {
    let getJSON = function (url, callback) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onload = function () {
            let status = xhr.status;
            if (status == 200) {
                callback(null, xhr.response)
            }
            else {
                callback(status, xhr.response);
            }
        };
        xhr.send();
    }

    getJSON('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json', function (err, data) {
        console.log(data);
        if (err != null) {
            console.log('Error:');
        }
        else {
            clean();
            document.getElementById('row').innerHTML += ShowRate(data);
        }
    });
}


getvalue.onclick = function () {
    let getJSON = function (url, callback) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onload = function () {
            let status = xhr.status;
            if (status == 200) {
                callback(null, xhr.response)
            }
            else {
                callback(status, xhr.response);
            }
        };
        xhr.send();
    }

    getJSON('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json', function (err, data) {
        console.log(data);
        if (err != null) {
            console.log('Error:');
        }
        else {
            console.log(document.getElementById('formGroupExampleInput').value);
            clean();
            document.getElementById('row').innerHTML += ShowOneRate(data);
        }
    });
}


function ShowRate(data) {
    var out = '';
    for (var key in data) {
        out += `<div class="col-sm-6">`;
        out += ` <div class="card m-2">`
        out += `<ul class="list-group list-group-flush">`
        out += `<li class="list-group-item d-flex justify-content-center">${data[key]['txt']}</li>`
        out += `<li class="list-group-item d-flex justify-content-center">${data[key]['cc']}</li>`
        out += `<li class="list-group-item d-flex justify-content-center">${data[key]['rate']}</li>`
        out += `</ul>`
        out += `</div>`
        out += `</div>`
    }
    return out;
}
function ShowOneRate(data) {
    var out = '';
    for (var key in data) {
        if (document.getElementById('formGroupExampleInput').value == data[key]['cc']) {
            out += `<div class="col-sm-6">`;
            out += ` <div class="card m-2">`
            out += `<ul class="list-group list-group-flush">`
            out += `<li class="list-group-item d-flex justify-content-center">${data[key]['txt']}</li>`
            out += `<li class="list-group-item d-flex justify-content-center">${data[key]['cc']}</li>`
            out += `<li class="list-group-item d-flex justify-content-center">${data[key]['rate']}</li>`
            out += `</ul>`
            out += `</div>`
            out += `</div>`
        }
    }
    return out;
}

function clean() {
    document.getElementById('row').innerHTML = '';
}