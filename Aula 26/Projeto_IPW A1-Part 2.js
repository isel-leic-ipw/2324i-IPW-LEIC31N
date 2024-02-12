// Utilização de Imports e librarys
// Projeto daptado de soluções desenvolvidas pelos alunos.
const fs = require('fs');
const axios = require('axios');



const apiKey = 'yZezrkgZrATxTMVDlicZCocjNE4Nyqq4';
const inFile = 'event-ids.json';
const outFile = 'event-details.json';

// Versão com utilização de async/await

async function getDetails (id){
    const url = `https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=${apiKey}` ;

 
    try{
        let reply = await axios.get(url)
        let data = reply.data
        return{
            id: id,
            name: data.name,
            date: data.dates.start?.dateTime,
            venue: {
                name: data._embedded.venues?.[0].name,
                country: data._embedded.venues?.[0].country,
                city: data._embedded.venues?.[0].city,
            }
        }
    }
    catch (error){
        console.error('Falha na tentativa de buscar os detalhes do evento', error)
    }
    return null;
}


async function main(){

       let jsonData = JSON.parse(fs.readFileSync(inFile, 'utf-8'));

    let idArray = jsonData['event-ids'];

    let eventDetails = [];


      for(let id of idArray) {
        const details = await getDetails(id)
        eventDetails.push(details)
    }

   
    let out = {events: eventDetails};

    fs.writeFileSync(outFile, JSON.stringify(out,null,2),'utf-8');
    console.log('Done')


}



function getDetailsPromise(id) {
    const url = `https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=${apiKey}`;

    return axios.get(url)
        .then(reply => {
            const data = reply.data;
            return {
                id: id,
                name: data.name,
                date: data.dates.start?.dateTime,
                venue: {
                    name: data._embedded.venues?.[0].name,
                    country: data._embedded.venues?.[0].country,
                    city: data._embedded.venues?.[0].city,
                }
            };
        })
        .catch(error => {
            console.error('Falha na tentativa de buscar os detalhes do evento', error);
            return null;
        });
}


// Versão com utilização de promises
function mainPromise() {
    let jsonData = JSON.parse(fs.readFileSync(inFile, 'utf-8'));

    let idArray = jsonData['event-ids'];

    let eventDetails = [];

    const promises = idArray.map(id => {
        return getDetailsPromise(id)
            .then(details => eventDetails.push(details));
    });

    Promise.all(promises)
        .then(() => {
            let out = { events: eventDetails };
            fs.writeFileSync(outFile, JSON.stringify(out, null, 2), 'utf-8');
            console.log('Done');
        })
        .catch(error => {
            console.error('Error in mainPromise:', error);
        });
}
