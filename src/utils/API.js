//API to request data via HTTP
const api = "http://api.openweathermap.org/data/2.5/";
const appId = "07c1cc62291be161f4f69f02a8df9108";

function getUrl(value, typeRequest){
    var url = '';
    if(typeRequest === 'cities')
        url = api+'group?id='+value.toString()+'&appid=' +appId+ '';
    else if( typeRequest === 'forecast')
        url = api+'forecast?id='+value+'&appid=' +appId+ '';
    else if(typeRequest === 'city')
        url = api+'weather?q='+value+'&appid=' +appId+ '';

    return url;
}

export const get = (value, typeRequest) =>
    fetch(getUrl(value, typeRequest))
        .then(response => {
            if (response.ok)
                return Promise.resolve(response);
            else
                return Promise.reject(new Error('Failed to load'));
        })
        .then(response => response.json()) // parse response as JSON
        .catch(function(error) {
            console.log(`Error: ${error.message}`);
        });