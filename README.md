# contactlist
### Prerequisites:
1. Node.js installed
2. Create directory /webapp/resources for OpenUI5 resources
3. Open a commandline in root directory of this app and run
```
npm install
```
4. Install MongoDB.
5. Start MongoDB with the following command and keep this window opened! 
```
mongod --dbpath "<path to your database>"
```

6. Start the mongo shell in a new window with
```
mongo
```
7. In the mongo shell perform the following steps
  1. Change to database contactlist
```
use contactlist
```
  2. load the mockdata in the collection contactlist:
```
db.contactlist.insert([ 
  { 
    "_id": 1, 
    "firstName": "Matthew", 
    "lastName": "Murdoc", 
    "address": { 
      "street": "Coffee Avenue", 
      "houseNumber": 13, 
      "postalCode": "66778", 
      "city": "Hell's Kitchen" 
    } 
  }, 
  { 
    "_id": 2, 
    "firstName": "Bruce", 
    "lastName": "Wayne", 
    "address": { 
      "street": "Tea Street", 
      "houseNumber": 25, 
      "postalCode": "11223", 
      "city": "Gotham" 
    } 
  } 
]);
```
8. You can shut down the mongo shell with Ctrl + C.
9. Start the webserver with 
```
node server.js
```
10. Point your browser to http://localhost:4000/