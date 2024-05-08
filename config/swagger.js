// swagger.js
// import { login, register } from '../controllers/authController.js';
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Bookstore API",
            version: "1.0.0",
            description: "API documentation for the Bookstore application",
            license: {
                name: "MIT",
                url: "https://opensource.org/licenses/MIT",
            },
            contact: {
                name: "Saruf Ratul",
                url: "https://github.com/saruf-ratul",
                email: "saruftoratul95@gmail.com",
            },
        },
        paths: {
            "/auth/login": {
                post: {
                    summary: "Login",
                    description: "Authenticate user and generate JWT token",
                    requestBody: {
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        username: {
                                            type: "string",
                                        },
                                        password: {
                                            type: "string",
                                        },
                                    }
                                }
                            }
                        }
                    },
                    responses: {
                        "200": {
                            description: "Successful login",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            token: {
                                                type: "string",
                                            },
                                        },
                                    }
                                }
                            }
                        },
                    }
                }
            },
            "/auth/register": {
                post: {
                    summary: "Register",
                    description: "Create a new user account",
                    requestBody: {
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        username: {
                                            type: "string",
                                            format: "username",
                                        },
                                        password: {
                                            type: "string",
                                        },
                                    },
                                }
                            }
                        }
                    },
                    responses: {
                        "201": {
                            description: "User registered successfully",
                        },
                    }
                }
            },
            "/books": {
                get: {
                    summary: "Get all books",
                    description: "Get a list of all books",
                    responses: {
                        "200": {
                            description: "Successful operation",
                        },
                    }
                },
                post: {
                    summary: "Add a new book",
                    description: "Add a new book to the bookstore",
                    requestBody: {
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        title: {
                                            type: "string",
                                        },
                                        author: {
                                            type: "string",

                                        },
                                        genre: {
                                            type: "string",
                                        },
                                        publicationDate: {
                                            type: "string",
                                        },
                                        price: {
                                            type: "number",
                                        },
                                    }
                                }
                            }
                        }
                    },
                    responses: {
                        "201": {
                            description: "Book added successfully",
                        },

                        "400": {
                            description: "Bad request",
                        },

                        "500": {
                            description: "Internal server error",
                        },

                    }

                }

            },
            "/books/{id}": {
                get: {
                    summary: "Get a book",
                    description: "Get a single book by ID",
                    parameters: [{
                        name: "id",
                        in: "path",
                        required: true,
                        description: "ID of the book to get",
                        schema: {
                            type: "string",
                        },
                    }, ],
                    responses: {
                        "200": {
                            description: "Successful operation",
                        },
                        "404": {
                            description: "Book not found",
                        },
                    }
                },
                put: {
                    summary: "Update a book",
                    description: "Update a book by ID",
                    parameters: [{
                        name: "id",
                        in: "path",
                        required: true,
                        description: "ID of the book to update",
                        schema: {
                            type: "string",
                        },
                    }, ],
                    requestBody: {
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        title: {
                                            type: "string",
                                        },
                                        author: {
                                            type: "string",
                                        },
                                        genre: {
                                            type: "string",
                                        },
                                        publicationDate: {
                                            type: "string",
                                        },
                                        price: {
                                            type: "number",
                                        },
                                    }
                                }
                            }
                        }
                    },
                    responses: {
                        "200": {
                            description: "Book updated successfully",
                        },
                        "404": {
                            description: "Book not found",
                        },
                    }
                },
                delete: {
                    summary: "Delete a book",
                    description: "Delete a book by ID",
                    parameters: [{
                        name: "id",
                        in: "path",
                        required: true,
                        description: "ID of the book to delete",
                        schema: {
                            type: "string",
                        },
                    }, ],
                    responses: {
                        "200": {
                            description: "Book deleted successfully",
                        },
                        "404": {
                            description: "Book not found",
                        },
                    }
                }
            },
            "/carts": {
                get: {
                    summary: "Get all cart items",
                    description: "Get a list of all cart items",
                    responses: {
                        "200": {
                            description: "Successful operation",
                        },
                    }
                },
                post: {
                    summary: "Add a new cart item",
                    description: "Add a new item to the cart",
                    requestBody: {
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        bookId: {
                                            type: "string",
                                        },
                                        quantity: {
                                            type: "number",
                                        },
                                    }
                                }
                            }
                        }
                    },
                    responses: {
                        "201": {
                            description: "Item added to cart successfully",
                        },
                    }
                }
            },
            "/carts/{id}": {
                get: {
                    summary: "Get a cart item",
                    description: "Get a single cart item by ID",
                    parameters: [{
                        name: "id",
                        in: "path",
                        required: true,
                        description: "ID of the cart item to get",
                        schema: {
                            type: "string",
                        },
                    }, ],
                    responses: {
                        "200": {
                            description: "Successful operation",
                        },
                        "404": {
                            description: "Cart item not found",
                        },
                    }
                },
                put: {
                    summary: "Update a cart item",
                    description: "Update a cart item by ID",
                    parameters: [{
                        name: "id",
                        in: "path",
                        required: true,
                        description: "ID of the cart item to update",
                        schema: {
                            type: "string",
                        },
                    }, ],
                    requestBody: {
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        bookId: {
                                            type: "string",
                                        },
                                        quantity: {
                                            type: "number",
                                        },
                                    }
                                }
                            }
                        }
                    },
                    responses: {
                        "200": {
                            description: "Cart item updated successfully",
                        },
                        "404": {
                            description: "Cart item not found",
                        },
                    }
                },
                delete: {
                    summary: "Delete a cart item",
                    description: "Delete a cart item by ID",
                    parameters: [{
                        name: "id",
                        in: "path",
                        required: true,
                        description: "ID of the cart item to delete",
                        schema: {
                            type: "string",
                        },
                    }, ],
                    responses: {
                        "200": {
                            description: "Cart item deleted successfully",
                        },
                        "404": {
                            description: "Cart item not found",
                        },
                    }
                }
            },
            "/orders": {
                get: {
                    summary: "Get all orders",
                    description: "Get a list of all orders",
                    responses: {
                        "200": {
                            description: "Successful operation",
                        },
                    }
                },
                post: {
                    summary: "Create a new order",
                    description: "Create a new order",
                    requestBody: {
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        items: {
                                            type: "array",
                                            items: {
                                                type: "object",
                                                properties: {
                                                    bookId: {
                                                        type: "string",
                                                    },
                                                    quantity: {
                                                        type: "number",
                                                    },
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    responses: {
                        "201": {
                            description: "Order created successfully",
                        },
                    }
                }
            },
            "/orders/{id}": {
                get: {
                    summary: "Get an order",
                    description: "Get a single order by ID",
                    parameters: [{
                        name: "id",
                        in: "path",
                        required: true,
                        description: "ID of the order to get",
                        schema: {
                            type: "string",
                        },
                    }, ],
                    responses: {
                        "200": {
                            description: "Successful operation",
                        },
                        "404": {
                            description: "Order not found",
                        },
                    }
                },
                put: {
                    summary: "Update an order",
                    description: "Update an order by ID",
                    parameters: [{
                        name: "id",
                        in: "path",
                        required: true,
                        description: "ID of the order to update",
                        schema: {
                            type: "string",
                        },
                    }, ],
                    requestBody: {
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        items: {
                                            type: "array",
                                            items: {
                                                type: "object",
                                                properties: {
                                                    bookId: {
                                                        type: "string",
                                                    },
                                                    quantity: {
                                                        type: "number",
                                                    },
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    responses: {
                        "200": {
                            description: "Order updated successfully",
                        },
                        "404": {
                            description: "Order not found",
                        },
                    }
                },
                delete: {
                    summary: "Delete an order",
                    description: "Delete an order by ID",
                    parameters: [{
                        name: "id",
                        in: "path",
                        required: true,
                        description: "ID of the order to delete",
                        schema: {
                            type: "string",
                        },
                    }, ],
                    responses: {
                        "200": {
                            description: "Order deleted successfully",
                        },
                        "404": {
                            description: "Order not found",
                        },
                    }
                }
            },

        },

    },
    apis: ["./routes/*.js"],

};

const specs = swaggerJsdoc(options);


module.exports = { specs, swaggerUi };