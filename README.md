# BookManagement

In that project bookMangement first create server inside index.js file and run that server on port number 3000
Then install dependencies express,bodyParser,mongoose for do connection between database to nodejs application,and with the help of express we create global middleware for parse the JSON file which comes by the body
Then after that we create a folder name src inside that folder i have created various sub folder like Models for creating a schema,bookCollection for Book Dumb Data,controller for written function for api ,and route folder for seperate route file
So first in bookCollection folder inside that folder a file name BookCollection  were store some books info in json format,by the help of api these book is fetch by postman were we call get method of api 
Then controller Folder inside that folder the filename is bookController  in that we written our code or function to perform CRUD operation on DATABASE or bookCollection file
