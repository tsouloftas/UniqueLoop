var json = JSON.parse(req.responseText);

var distinct = {};

for (var i = 0; i < json.length; i++) {
    var location = json[i].location;

     if(!distinct[location]) {
        distinct[location] = true;
        console.log(location)
     }

}