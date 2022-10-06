# User
## Get by Id
```
curl --location --request POST 'http://localhost:4000/' \
--header 'Content-Type: application/json' \
--data-raw '{"query":"query {\n    user(id: \"1\") {\n        id\n        name\n        fridge {\n            description\n            quantity\n            unit\n        }\n    }\n}","variables":{}}'
```