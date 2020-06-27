# Basic_API
<!-- 

1 Download postman https://www.postman.com/
2 Clone this repo
3 Run npm install followed by npm start @ root
4 You can go to http://localhost:3001/api/contacts to see existing contacts
5 Try going to http://localhost:3001/api/contacts/<id number here> to see individual contact (try id of 1, 2, or 
6 Open Postman and try the Put, Post, and Delete methods 

Resource URL = http://localhost:3001/api
RESPONSE FORMAT = JSON

METHOD            ENDPOINTS            PURPOSE                                      BODY PARAMETERS

GET               /contacts            retrieve all the contacts in the db          

                  /contacts/id         retrieve the contact at this id

PUT               /contacts/id         change the contact at this id                OBJECT CONTAINING "contact": <"name">, AND "position": <"job title">
                                                                                    EXAMPLE: {
                                                                                        "contact": "Brandi APetsi",
                                                                                        "position" "Master Chef"
                                                                                    }



POST              /contacts            add a new contact, id will auto generate

DELETE

EXAMPLE REQUEST

EXAMPLE RESPONSE







-->