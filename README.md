# Clone Repository

```
git clone https://github.com/jshahadat/user-update.git

```

# Installation

```bash
npm install
```

# Quick start

```
npm run start:dev
```

### 1. Create a new user

// List of user objects. fullName, age, email, address .

```
 POST:  https://leve-2-assignment-2-3cn103bsr-jshahadat.vercel.app/api/users

```

```Request Body:
{
    "userId": "number",
    "username": "string",
    "password": "string",
    "fullName": {
        "firstName": "string",
        "lastName": "string"
    },
    "age": "number",
    "email": "string",
    "isActive": "boolean",
    "hobbies": [
        "string",
        "string"
    ],
    "address": {
        "street": "string",
        "city": "string",
        "country": "string"
    }
}
```

### 2. Retrieve a list of all users

// List of user objects. Each object should only contain username, fullName, age, email, address .

```
 GET: https://leve-2-assignment-2-3cn103bsr-jshahadat.vercel.app/api/users

```

## 3. Retrieve a specific user by ID

```
 GET: https://leve-2-assignment-2-3cn103bsr-jshahadat.vercel.app/api/users/:userId

```

```response
{
    "success": true,
    "message": "User fetched successfully!",
    "data": {
        "userId": "number",
        "username": "string",
        "fullName": {
            "firstName": "string",
            "lastName": "string"
        },
        "age": "number",
        "email": "string",
        "isActive": "boolean",
        "hobbies": [
            "string",
            "string"
        ],
        "address": {
            "street": "string",
            "city": "string",
            "country": "string"
        }
    }
}
```

## 4. Update user

```
 PUT : https://leve-2-assignment-2-3cn103bsr-jshahadat.vercel.app/api/users/:userId

```

```response
{
    "success": true,
    "message": "User updated successfully!",
    "data": {
        "userId": "number",
        "username": "string",
        "fullName": {
            "firstName": "string",
            "lastName": "string"
        },
        "age": "number",
        "email": "string",
        "isActive": "boolean",
        "hobbies": [
            "string",
            "string"
        ],
        "address": {
            "street": "string",
            "city": "string",
            "country": "string"
        }
    }
}
```

## 5. Delete user

```
 DELETE  : https://leve-2-assignment-2-3cn103bsr-jshahadat.vercel.app/api/users/:userId

```

```response
{
	"success": true,
	"message": "User deleted successfully!",
	"data" : null
}
```

## 6. Place New Order

```
 PUT  : https://leve-2-assignment-2-3cn103bsr-jshahadat.vercel.app/api/users/:userId/orders

 {
    "productName": "string",
    "price": "number",
    "quantity": "number"
}

```

```response
{
    "success": true,
    "message": "Order created successfully!",
    "data": null
}
```

## 7. Retrieve all orders for a specific user

```
 GET   : https://leve-2-assignment-2-3cn103bsr-jshahadat.vercel.app/api/users/:userId/orders

```

```response
{
    "success": true,
    "message": "Order fetched successfully!",
    "data": {
        "orders": [
            {
                "productName": "Product 1",
                "price": 23.56,
                "quantity": 2
            },
            {
                "productName": "Product 2",
                "price": 23.56,
                "quantity": 5
            }
        ]
    }
}
```

## 8. Calculate Total Price of Orders for a Specific User

```
 PUT  : https://leve-2-assignment-2-3cn103bsr-jshahadat.vercel.app/api/users/:userId/orders
```

```response
{
    "success": true,
    "message": "Total price calculated successfully!",
    "data": {
        "totalPrice": 454.32
    }
}
```
