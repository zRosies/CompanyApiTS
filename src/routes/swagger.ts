import express from 'express';
import swaggerUI from 'swagger-ui-express';
import {swaggerDocument} from '../swagger'
import * as swaggerDoc from '../swagger.json';

console.log(swaggerDoc);



const router: any = express.Router()
router.get('/',swaggerUI.setup({
    "openapi": "3.0.0",
    "info": {
      "title": "Company API",
      "version": "1.0.0",
      "description": "API for managing the Company's employees and their user names!"
    },
  
    "paths": {
      "/employees": {
       
        "get": {
          "summary": "Get all employees",
          "tags":["Employees"],
          "responses": {
            "200": {
              "description": "Successful response",
              "content": {
                "application/json": {}
              }
            },
            "404": {
              "description": "No data found"
            },
            "500": {
              "description": "Internal server error"
            }
          }
        },
        "post": {
          "summary": "Create a new employee",
          "tags": ["Employees"],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/employee"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "Employee created successfully"
            },
            "500": {
              "description": "Internal server error"
            }
          }
        }
      },
      "/employees/{id}": {
        "get": {
          "summary": "Get employee by Id",
          "tags": ["Employees"],
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "description": "Employee ID",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Successful response",
              "content": {
                "application/json": {}
              }
            },
            "404": {
              "description": "No data found"
            },
            "500": {
              "description": "Internal server error"
            }
          }
        },
        "put": {
          "summary": "Updated an employee by Id",
          "tags": ["Employees"],
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "description": "Employee ID",
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "description": "Updated employee object",
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/employee"
                }
              }
            }
          },
          "responses": {
            "204": {
              "description": "Employee updated successfully"
            },
            "500": {
              "description": "Internal server error"
            }
          }
        },
        "delete": {
          "summary": "Delete an employee by Id",
          "tags": ["Employees"],
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "description": "Employee ID",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Employee deleted successfully"
            },
            "500": {
              "description": "Internal server error"
            }
          }
        
      }
      },
      "/users": {
        "get": {
          "summary": "Get all users",
          "tags": ["Users"],
          "parameters": [
            {
              "name": "apiKey",
              "in": "header",
              "description": "API Key: SDS324FGF",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Successful response",
              "content": {
                "application/json": {}
              }
            },
            "404": {
              "description": "No data found"
            },
            "500": {
              "description": "Internal server error"
            }
          }
        },
        "post": {
          "summary": "Create a new user",
          
          "tags": ["Users"],
          "parameters": [
            {
              "name": "apiKey",
              "in": "header",
              "description": "API Key: SDS324FGF",
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/users"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "User created successfully"
            },
            "500": {
              "description": "Internal server error"
            }
          }
        }
      },     
      "/users/{id}": {
        "get": {
          "summary": "Get users by id",
          "tags": ["Users"],
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "description": "User ID",
              "schema": {
                "type": "string"
              }
            }
          ],
          
         
          "responses": {
            "200": {
              "description": "Successful response",
              "content": {
                "application/json": {}
              }
            },
            "404": {
              "description": "No data found"
            },
            "500": {
              "description": "Internal server error"
            }
          }
        },
        
        "put": {
          "summary": "Update an user by Id",
          "tags": ["Users"],
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "description": "User ID",
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "description": "Updated user object",
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/users"
                }
              }
            }
          },
          "responses": {
            "204": {
              "description": "Employee updated successfully"
            },
            "500": {
              "description": "Internal server error"
            }
          }
        },
        "delete": {
          "summary": "Delete an user by Id",
          "tags": ["Users"],
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "description": "User ID",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Employee deleted successfully"
            },
            "500": {
              "description": "Internal server error"
            }
          }
        
        }
      
      }
    }
    ,
    "components": {
      "schemas": {
        "employee": {
          "type": "object",
          "properties": {
            "firstName": {
              "type": "string"
            },
            "lastName": {
              "type": "string"
            },
            "role": {
              "type": "string"
            },
            "salary": {
              "type": "integer"
            },
            "phone": {
              "type": "integer"
            },
            "email": {
              "type": "string"
            },
            "address": {
              "type": "string"
            }
          },
          "required": ["firstName", "lastName", "role", "email", "address", "phone", "salary"]
        },
        "users":{
          "type":"object",
          "properties":{
              "userName":{
                "type":"string" 
              },
              "password":{
                "type":"string"
  
              }
          },
          "required":["userName","password"]
        
        }
      }
    }
        
  
  }))
router.use('/',swaggerUI.serve)


export default router;

