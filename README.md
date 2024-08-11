# credence CRUD assignment

CRUD application using Node and Express js

-> Headers 

    x_api_key : "tempPrayagKey"


-> to Get all user data

    GET - http://localhost:8000/api/users/

-> to Get particular user data

    POST - http://localhost:8000/api/users/66b8db9138f8b59602f7c182

    // id : 66b8db9138f8b59602f7c182

-> to Update user

    PATCH - http://localhost:8000/api/users/66b8db9138f8b59602f7c182

    body {
        name : anything you want,
        img : anything you want,
        summary : anything you want,
    }

    // id : 66b8db9138f8b59602f7c182
    // data provided in body wil be used for updation. i.e if only name is given only name will get updated.

-> to Delete user

    DELETE - http://localhost:8000/api/users/66b8db9138f8b59602f7c182

    // id : 66b8db9138f8b59602f7c182
