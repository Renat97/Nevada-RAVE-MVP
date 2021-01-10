# Nevada RAVE Foundation
# web application for the Nothern Nevada R.A.V.E Family Foundation that will speed up the check in process and business operations for volunteers, families, and staff members.
# Server API using GraphQL instead of Rest, Here are the Routes

# To use the application, use the user's root, staff, and masterstaff, there passwords are rootpass, staff, masterstaff, respectively.

# REGISTRATION, Post request to register a volunteer after user clicks on "create account", this will store the volunteers information in the database in the registration table, the password will be hashed using the Bcrypt library to ensure the account is safe

* POST `/graphql` mutation

**Arguments:** firstName, lastName, email, username, password, emergency contact name, emergency contact #

**Success Status Code:** `200`

**GraphQL Query:** JSON

```json
    {
      "registerVolunteer(firstName: firstName, lastName: lastName, email: email, username: username, password : password, emergencyName: emergencyName, emergencyNumber: emergencyNumber)"
    }
```


# LOGIN VOLUNTER, GET request to get the volunteer login page once a volunteer signs in and it is confirmed that an volunteer account was used to sign in. All the volunteer information will be returned to the volunteer component and upon success will render the volunteer page, need to do a join and nested query between the transaction and Registration table to get all the transactions for a given username and password matching the firstName and lastName

* GET `/graphql`

**Arguments:** username, password

**Headers :** { "Content-Type": "application/json" }

**Success Status Code:** `200`

**GraphQL Query:** JSON
```json
    {
      "query" : {
         "transactions": {
           "firstName",
           "LastName",
           "date",
           "checkInTime",
           "checkOutTime",
           "hours",
           "role"
         }
      }
    }
```

**Returns:** JSON
```json
    [
    {
     "firstName": "firstName",
      "lastName": "lastName",
      "date": "date",
      "checkInTime": "checkInTime",
      "checkOutTime": "checkOutTime",
      "hours": "hours",
      "role": "role"
    }
    ]
```

# LOGIN VOLUNTER, GET request to get the volunteer login page once a volunteer signs in and it is confirmed that an volunteer account was used to sign in. All the volunteer information will be returned to the volunteer component and upon success will render the volunteer page, need to do a join and nested query between the transaction and Registration table to get all the transactions for a given username and password matching the firstName and lastName

* GET `/graphql`

**Arguments:** username, password

**Headers :** { "Content-Type": "application/json" }

**Success Status Code:** `200`

**GraphQL Query:** JSON
```json
    {
      "query" : {
         "transactions": {
           "firstName",
           "LastName",
           "date",
           "checkInTime",
           "checkOutTime",
           "hours",
           "role"
         }
      }
    }
```

**Returns:** JSON
```json
    [
    {
     "firstName": "firstName",
      "lastName": "lastName",
      "date": "date",
      "checkInTime": "checkInTime",
      "checkOutTime": "checkOutTime",
      "hours": "hours",
      "role": "role"
    }
    ]
```