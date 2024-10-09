(async function fetchData() { 
    try {
        const response = await fetch("https://raw.githubusercontent.com/xfir664/json/master/data.json");
        if(!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Fetch error', error);
    }
})();

import addAlert from 'https://cdn.jsdelivr.net/gh/xfir664/json@master/task1.js';

addAlert();
