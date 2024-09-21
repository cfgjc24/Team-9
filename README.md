# Team-9
#### Repository of the code for JPMC's Code for Good Hackathon made by team 9. 

**Problem Statement**:
Designing an accessible, user-friendly solution where safety of employees and convenience are prioritized in features implemented

**Teammates**: 
Casey Mak, Grace Kim, Gregory Marzano, Hayim Heron, Anjali Rajesh, Julian Chattopadhyay, Arya Utture

# Backend
## Endpoints and Purpose
` GET api/map/getAllEmployeesPos`
```
Gets id, latitude, longitude in json for all employees
```

`GET api/map/getAllClientsPos`
```
Gets all id, latitude, longitude in json for all clients
```

`GET api/map/getClientPos/:id`
```
Get latitude, longitude in json specific client id
```

`api/map/getEmployeePos/:id`
```
Get latitude, longitude in json specific employee id
```

`PUT api/map/newEmployeePos` 
```	
req.body = {
    "id": 3,
    "latitude": "27.7749",
    "longitude": "-122.4193
}
```