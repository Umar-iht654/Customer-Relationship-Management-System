# Project Plan

## Project Name

Customer Relationship Management System

## Project Overview

The Customer Relationship Management System is a full-stack web application designed to help small businesses manage customer relationships in one place.

The system allows users to store customer details, track previous interactions, add notes, schedule follow-up reminders and monitor customers through a simple sales/status pipeline.

The project is being built as a portfolio project to demonstrate practical full-stack development skills, including frontend development, backend API design, authentication, relational database design, CRUD operations and dashboard development.

---

## Problem Statement

Small businesses often manage customer information using spreadsheets, paper notes, phone reminders, emails or scattered messages. This can make it difficult to keep track of customer details, previous conversations and follow-up tasks.

As a result, businesses may forget to follow up with potential customers, lose track of leads, miss sales opportunities or provide a less organised customer experience.

---

## Proposed Solution

This project solves the problem by providing a simple CRM platform where users can manage customer information in a centralised system.

Users will be able to:

* Add and manage customer records
* View each customer’s profile
* Record contact history
* Add notes
* Schedule follow-up reminders
* Update customer pipeline/status stages
* View useful dashboard statistics

The aim is to create a lightweight CRM system that is easier to use than complex enterprise CRM platforms, while still providing the core tools a small business needs.

---

## Target Users

The application is aimed at small businesses and individuals who need a simple way to organise customer relationships.

Example users include:

* Freelancers
* Tutors
* Personal trainers
* Small agencies
* Local service businesses
* Sales teams
* Independent consultants
* Small business owners

---

## Core Features

### 1. User Authentication

Users will be able to register and log in securely.

Planned functionality:

* Register account
* Log in
* Log out
* Password hashing
* JWT-based authentication
* Protected routes
* User-specific data access

Each user should only be able to access their own customers, notes, reminders and contact history.

---

### 2. Customer Management

Users will be able to create, view, update and delete customer records.

Customer records may include:

* First name
* Last name
* Email
* Phone number
* Company
* Customer source
* Current status
* Created date
* Updated date

This will form the main CRUD functionality of the application.

---

### 3. Customer Profiles

Each customer will have a dedicated profile page where users can view all information related to that customer.

The customer profile page will include:

* Customer details
* Current pipeline/status stage
* Notes
* Contact history
* Follow-up reminders
* Recent activity

This makes the CRM more useful than a basic customer table.

---

### 4. Notes

Users will be able to add notes to customer profiles.

Example notes:

* “Interested in website redesign.”
* “Prefers email contact.”
* “Asked for pricing details.”
* “Needs follow-up next week.”

Notes will help users keep track of important customer information.

---

### 5. Contact History

Users will be able to record previous interactions with each customer.

Contact history entries may include:

* Contact type
* Date
* Summary
* Outcome

Contact types may include:

* Call
* Email
* Meeting
* Message
* Other

This helps users see what was previously discussed with each customer.

---

### 6. Follow-Up Reminders

Users will be able to schedule follow-up reminders for customers.

Reminder functionality may include:

* Create reminder
* Set due date
* Mark reminder as completed
* View overdue reminders
* View upcoming reminders

This feature helps prevent missed follow-ups and makes the system more useful for real business workflows.

---

### 7. Sales/Status Pipeline

Customers will be assigned a pipeline/status stage.

Planned stages:

* New Lead
* Contacted
* Interested
* Proposal Sent
* Won
* Lost

Users will be able to update a customer’s status as they move through the sales process.

A future improvement could include a drag-and-drop pipeline board.

---

### 8. Dashboard

The dashboard will give users a quick overview of their CRM activity.

Planned dashboard statistics:

* Total customers
* Active leads
* Won customers
* Lost customers
* Overdue follow-ups
* Upcoming follow-ups
* Recent activity
* Customers by status

The dashboard will help users understand their customer pipeline without needing to manually inspect every record.

---

### 9. Search and Filtering

Users will be able to search and filter customer records.

Planned functionality:

* Search by customer name
* Filter by status
* Filter by follow-up date
* Sort by recently added
* Sort by next follow-up date

This improves usability when the number of customers increases.

---

## Planned Pages

### Login Page

Allows existing users to log into their account.

Main elements:

* Email field
* Password field
* Login button
* Link to register page

---

### Register Page

Allows new users to create an account.

Main elements:

* Name field
* Business name field
* Email field
* Password field
* Register button

---

### Dashboard Page

Shows an overview of customer and pipeline activity.

Main elements:

* Summary cards
* Recent activity
* Upcoming reminders
* Customers by status chart

---

### Customers Page

Displays all customers in a table.

Main elements:

* Search bar
* Status filter
* Add customer button
* Customer table
* View, edit and delete actions

---

### Add/Edit Customer Page

Allows users to create or update customer details.

Main elements:

* Customer form
* Status dropdown
* Source dropdown
* Save button
* Cancel button

---

### Customer Detail Page

Shows all information related to a single customer.

Main elements:

* Customer information
* Notes section
* Contact history section
* Reminders section
* Status update option

---

### Pipeline Page

Shows customers grouped by status stage.

Pipeline stages:

* New Lead
* Contacted
* Interested
* Proposal Sent
* Won
* Lost

---

### Reminders Page

Shows follow-up reminders.

Main sections:

* Overdue
* Due today
* Upcoming
* Completed

---

## Tech Stack

| Area           | Technology                      |
| -------------- | ------------------------------- |
| Frontend       | React, JavaScript, Tailwind CSS |
| Backend        | Node.js, Express.js             |
| Database       | PostgreSQL                      |
| ORM            | Prisma                          |
| Authentication | JWT, bcrypt                     |
| Charts         | Recharts                        |
| API Style      | REST API                        |
| Tools          | GitHub, VS Code, npm            |

---

## Planned Database Models

### User

Stores account information.

Planned fields:

* id
* name
* businessName
* email
* passwordHash
* createdAt
* updatedAt

---

### Customer

Stores customer information.

Planned fields:

* id
* userId
* firstName
* lastName
* email
* phone
* company
* status
* source
* createdAt
* updatedAt

---

### Note

Stores notes linked to a customer.

Planned fields:

* id
* userId
* customerId
* content
* createdAt
* updatedAt

---

### ContactHistory

Stores customer interactions.

Planned fields:

* id
* userId
* customerId
* type
* summary
* outcome
* contactDate
* createdAt

---

### Reminder

Stores follow-up tasks.

Planned fields:

* id
* userId
* customerId
* title
* dueDate
* completed
* createdAt
* updatedAt

---

## Planned API Routes

### Authentication

| Method | Route                | Purpose                  |
| ------ | -------------------- | ------------------------ |
| POST   | `/api/auth/register` | Register a new user      |
| POST   | `/api/auth/login`    | Log in a user            |
| GET    | `/api/auth/me`       | Get current user details |

---

### Customers

| Method | Route                | Purpose                                  |
| ------ | -------------------- | ---------------------------------------- |
| GET    | `/api/customers`     | Get all customers for the logged-in user |
| GET    | `/api/customers/:id` | Get one customer                         |
| POST   | `/api/customers`     | Create a new customer                    |
| PUT    | `/api/customers/:id` | Update a customer                        |
| DELETE | `/api/customers/:id` | Delete a customer                        |

---

### Notes

| Method | Route                      | Purpose                  |
| ------ | -------------------------- | ------------------------ |
| GET    | `/api/customers/:id/notes` | Get notes for a customer |
| POST   | `/api/customers/:id/notes` | Add a note to a customer |
| PUT    | `/api/notes/:noteId`       | Update a note            |
| DELETE | `/api/notes/:noteId`       | Delete a note            |

---

### Contact History

| Method | Route                                    | Purpose                            |
| ------ | ---------------------------------------- | ---------------------------------- |
| GET    | `/api/customers/:id/contact-history`     | Get contact history for a customer |
| POST   | `/api/customers/:id/contact-history`     | Add a contact history entry        |
| DELETE | `/api/contact-history/:contactHistoryId` | Delete a contact history entry     |

---

### Reminders

| Method | Route                          | Purpose                       |
| ------ | ------------------------------ | ----------------------------- |
| GET    | `/api/reminders`               | Get all reminders             |
| POST   | `/api/customers/:id/reminders` | Create a reminder             |
| PUT    | `/api/reminders/:reminderId`   | Update or complete a reminder |
| DELETE | `/api/reminders/:reminderId`   | Delete a reminder             |

---

### Dashboard

| Method | Route                  | Purpose                  |
| ------ | ---------------------- | ------------------------ |
| GET    | `/api/dashboard/stats` | Get dashboard statistics |

---

## Development Stages

### Stage 1: Project Setup

* Create GitHub repository
* Add README file
* Create project folder structure
* Add project plan
* Set up `.gitignore`

---

### Stage 2: Frontend Setup

* Create React application
* Install Tailwind CSS
* Set up routing
* Create reusable layout components
* Create placeholder pages

---

### Stage 3: Backend Setup

* Create Express server
* Set up middleware
* Configure environment variables
* Create basic API route structure
* Test backend server locally

---

### Stage 4: Database Setup

* Set up PostgreSQL database
* Install Prisma
* Create Prisma schema
* Add database models
* Run migrations
* Test database connection

---

### Stage 5: Authentication

* Build register endpoint
* Build login endpoint
* Hash passwords with bcrypt
* Generate JWT tokens
* Protect private routes
* Connect frontend login/register forms to backend

---

### Stage 6: Customer Management

* Build customer CRUD endpoints
* Build customer table
* Add customer creation form
* Add edit and delete functionality
* Add search and filtering

---

### Stage 7: Customer Profiles

* Build customer detail page
* Display customer information
* Add notes section
* Add contact history section
* Add reminders section

---

### Stage 8: Reminders and Pipeline

* Build reminder functionality
* Show overdue and upcoming reminders
* Add status update functionality
* Create pipeline page grouped by status

---

### Stage 9: Dashboard

* Build dashboard API endpoint
* Calculate CRM statistics
* Display summary cards
* Add basic charts
* Show recent activity and reminders

---

### Stage 10: Testing, Polish and Deployment

* Test frontend forms
* Test backend API routes
* Add error handling
* Add loading states
* Improve responsive design
* Add demo data
* Deploy frontend
* Deploy backend
* Update README with live demo link

---

## MVP Scope

The first completed version of the project should include:

* User registration and login
* Protected routes
* Customer CRUD
* Customer profiles
* Notes
* Contact history
* Follow-up reminders
* Sales/status pipeline
* Dashboard summary cards
* Search and filtering

---

## Future Improvements

After the MVP is complete, possible improvements include:

* Drag-and-drop pipeline board
* Email reminder notifications
* Calendar view
* CSV import and export
* Advanced analytics
* Role-based access for teams
* Dark mode
* AI-generated follow-up suggestions
* Demo account for recruiters
* Automated backend tests

---

## Success Criteria

The project will be considered successful if it:

* Allows users to register and log in securely
* Allows users to manage their own customer records
* Supports notes, contact history and reminders
* Provides a useful dashboard overview
* Shows customers across a clear sales/status pipeline
* Uses a relational database with well-structured models
* Is deployed and accessible through a live demo link
* Has a clean GitHub repository with a clear README
* Demonstrates practical full-stack development skills suitable for a junior software engineering role
