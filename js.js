fetch("https://raw.githubusercontent.com/xfir664/json/master/data.json")
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.error('Error', err));