const duo_api = require('./lib/main.js');

let ikey = '';
let skey = '';
let host = ''; //api-xxxxxxxxx.duosecurity.com  

let client = new duo_api.Client(ikey, skey, host);



async function get_userCount() {
    client.jsonApiCall(
        'GET', '/admin/v1/info/summary', {},
        function (res) {
            if (res.stat !== 'OK') {
                console.error('API call returned error: '
                    + res.message);
                process.exit(1);
            }

            res = res.response;
            console.log(res);
        });
}

async function get_userInfo() {
    client.jsonApiCall(
        'GET', '/admin/v1/users', {},
        function (res) {
            if (res.stat !== 'OK') {
                console.error('API call returned error: '
                    + res.message);
                process.exit(1);
            }

            res = res.response;
            console.log(res);
        });
}


async function main() {
    await get_userCount();
    await get_userInfo();
}


main();