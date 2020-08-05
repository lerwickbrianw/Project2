# Project Overview

## Project Description

Basic E-commerce foundation for Beaver Woodcarvers to showcase past projects and allow customers to login and place an order.

## Project Links

- [github repo]()
- [deployment]()

## Wireframes

### Entity Relationship Diagram:

Intial scope plan - maintain product category directly in product table.
![Beaver Woodcarvers ERD](/images/Beaver_Woodcarvers_ERDv1.png)

If there is time plan - split out product category to subtable.
![Beaver Woodcarvers ERD](/images/Beaver_Woodcarvers_ERDv2.png)

### Wireframes

Main Page
![Beaver Woodcarvers Main Page](/images/Beaver_Wood_Carvers_Main_Page.png)

Products Page
![Beaver Wood Carvers Products Page](/images/BWC_Products_Page.png)

Customer Signup Page
![Beaver Wood Carvers Signup Page](/images/Beaver_Wood_Carvers_Signup_Page.png)

New Product Page
![Beaver Wood Carvers New Product Page](/images/Beaver_Wood_Carvers_New_Product_Page.png)

## User Stories

### 1. User Story One

Customer login page - As a Beaver Wood Carvers returning customer, I would like to be able to sign into the site, so that I don’t have to enter my information each time I want to place an order.

- Task - rename existing user table to Customers - Compete

### 2. User Story Two

Customer signup page - As a new Beaver Wood Carvers customer, I would like to enter my customer information so that I don’t have to enter my information each time I visit.

- Task - Add additional customer based fields to the signup.ejs file. - Complete
- Task - Add additional fields to profile.ejs file. - Complete
- Task - Update profile.ejs to show all customer orders. - Complete
- Task - Remove Delete customer button. - Complete
- Task - catch error for duplicate username. - catch complete but not able to add error message to signup page.
- Task - refactor profile.ejs to include a query to get all order data to display

### 3. User Story Three

Product show page – As a Beaver Wood Carvers store owner, I want to showcase all products available to customers when they visit the site so that they know what is available to be ordered.

- Task - create index.ejs to show all products - Complete
- Task - create show.ejs to show individual product - Complete
- Task - create products table - Complete
- Task - create product category table - hold for later if there is time.
- Task - show Edit and Delete options only if store owner is signed in - Complete
- Task - add order button to create orders table entry - Complete
- Task - add route to ordersController to create new order. - Complete

### 4. User Story Four

Order show page -As a Beaver Wood Carvers customer, I would like to be able to see the item I have added to my order so that I can be sure that I am ordering exactly what I want.

- Task - create orders table - Complete
- Task - Create ordersController.js - Complete
- Task - create orders show.ejs - Complete
- Task - On create order page, open Custom Message field if Customized box is checked - add script link to separate .js file

### 5. User Story Five

Add new products - As a Beaver Wood Carvers store owner, I want to be able to add new products when they become available to show on the product show page so that the customers can see what products are available for order.

- Task - create new.ejs page to add new products. - Complete
- Task - update get and post routes to create new product. - Complete
- Task - create productsController.js - Complete

### 6. User Story Six

Add to order button – As a Beaver Wood Carvers store owner, I want to provide the customer with a button to add the product to the order so that they can add items to their order.

- Task - add order button to products.ejs - Complete
- Task - update routes to insert into orders table - In Process

### 7. User Story Seven

Edit order page - As a Beaver Wood Carvers customer, I would like to be able to update or delete items on my order so that I can change my mind or make corrections before finalizing the order.

- Task - create order/edit.ejs

### 8. User Story Eight

Submit order - As a Beaver Wood Carvers customer, I would like to be able to submit my order once I have reviewed for accuracy.

### 9. User Story Nine

Show order history page - As a Beaver Wood Carvers customer, I would like to see all orders that I have placed in the past so that I can easily view my order history.

- Task - display all customer orders on customer profile page with link to open each individual order.

### 10. User Story Ten

Review specific order - As a Beaver Wood Carvers customer, I would like to be able to select and display a specific order so that I can review the order details and compare what I received against what I ordered.

- Task - create orders/show.ejs

### 11. User Story Elevin

Edit existing product - As a Beaver Wood Carvers store owner, I would like to be able to edit an existing product after it has been created to update the information about the product.

- Task - update productsController for edit get and put routes. - Complete
- Task - create products/edit.ejs - Complete

## MVP File Structure

Views

- Index.ejs Main Landing page -
- Customers
  - Login.ejs Customer login
  - Profile.ejs Customer information display – also displays order history
  - Signup.ejs New customer information entry form
- Orders
  - Show.ejs display order detail for a single order
- Products
  - Show.ejs show product details single item per page
  - Index.ejs show all products by category
  - Edit.ejs show product details for editing
  - New.ejs blank form to add new product

Models

- Products.js defines product table fields
- Customers.js defines customer table fields
- Productcategory.js defines productcategory table fields
- Orders.js defines orders table fields
- Index.js needed by sequelize

Controllers

- authController controls login and signup functions
- customersController controls customer detail display, and edit
- productsController controls product detail display, add and edit
- ordersController controls order detail display

<!-- ### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

#### MVP EXAMPLE

- Find and use external api
- Render data on page
- Allow user to interact with the page

#### PostMVP EXAMPLE

- Add localStorage or firebase for storage -->

<!-- ## Components

##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components.

| Component |                          Description                          |
| --------- | :-----------------------------------------------------------: |
| App       | This will make the initial data pull and include React Router |
| Header    |          This will render the header include the nav          |
| Footer    |          This will render the header include the nav          |

## Time Frames

Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component        | Priority | Estimated Time | Time Invetsted | Actual Time |
| ---------------- | :------: | :------------: | :------------: | :---------: |
| Adding Form      |    H     |      3hrs      |     3.5hrs     |   3.5hrs    |
| Working with API |    H     |      3hrs      |     2.5hrs     |   2.5hrs    |
| Total            |    H     |      6hrs      |      5hrs      |    5hrs     |

## Additional Libraries

Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc.

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description. Code snippet should not be greater than 10 lines of code.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions

Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....

**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier
**RESOLUTION**: Missing comma after first object in sources {} object -->
