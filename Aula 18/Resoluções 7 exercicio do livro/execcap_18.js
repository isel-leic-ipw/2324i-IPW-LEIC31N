//Resoluções exercícios do cap 18 do livro disponível em: https://eloquentjavascript.net/18_http.html

import fetch from "node-fetch";

const URL = "https://eloquentjavascript.net/author";

async function makeRequest(URL, mediaType) {
    try {
        const response = await fetch(URL, {
            headers: {
                'Accept': mediaType
            }
        });
        const contentType = response.headers.get("content-type");
        console.log('response status:', response.status);
        console.log('Content-type:',contentType);
    }
    catch (error) {
        console.log(error);
    }
}

// makeRequest(URL, 'text/plain');
// makeRequest(URL, 'text/html');
// makeRequest(URL, 'application/json');
// makeRequest(URL, 'application/rainbows+unicorns');

