# Customer Relationship Management System

A full-stack CRM web application designed to help small businesses manage customers, track contact history, schedule follow-up reminders, record notes and monitor sales pipeline activity from one dashboard.

This project is being developed as a portfolio project to demonstrate practical full-stack development, database design, authentication, CRUD operations and business-focused software engineering.

---

## Overview

Small businesses often manage customer details, conversations and follow-ups using spreadsheets, notes or scattered messages. This can make it easy to lose track of leads, forget follow-ups and miss potential sales.

This CRM system provides a central place to manage customer relationships. Users can add customers, record interactions, create notes, schedule reminders and update each customer’s sales/status stage.

---

## Key Features

* **Customer management** — add, view, update and delete customer records.
* **Customer profiles** — view customer details, notes, reminders and contact history in one place.
* **Contact history** — record calls, emails, meetings and messages.
* **Follow-up reminders** — schedule and track upcoming or overdue follow-ups.
* **Notes** — save important customer information.
* **Sales pipeline** — move customers through stages such as New Lead, Contacted, Interested, Proposal Sent, Won and Lost.
* **Dashboard** — view total customers, active leads, won customers, overdue follow-ups and recent activity.
* **Search and filtering** — quickly find customers by name, status or follow-up date.
* **Authentication** — users can register, log in and access their own CRM data securely.

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
| API            | REST API                        |
| Tools          | GitHub, VS Code, npm            |

---

## Planned Pages

* Login and Register
* Dashboard
* Customers
* Customer Detail Page
* Add/Edit Customer
* Pipeline
* Reminders

---

## Database Models

The application will use the following main models:

* `User` — stores account and login details.
* `Customer` — stores customer information and current pipeline status.
* `Note` — stores notes linked to customers.
* `ContactHistory` — stores previous customer interactions.
* `Reminder` — stores follow-up tasks and due dates.

---

## Development Plan

1. Set up the React frontend and Express backend.
2. Design the PostgreSQL database using Prisma.
3. Build user registration, login and protected routes.
4. Implement customer CRUD functionality.
5. Add customer profiles, notes and contact history.
6. Add follow-up reminders and pipeline status updates.
7. Build the dashboard with CRM statistics.
8. Deploy the project.

---

## Minimum Viable Product

This project is currently being developed.

The MVP will include authentication, customer management, customer profiles, notes, contact history, follow-up reminders, a sales pipeline and an admin dashboard.

---

## Future Improvements

* Drag-and-drop sales pipeline
* Email reminders
* Calendar view
* CSV import/export
* Advanced analytics
* Dark mode
* AI-generated follow-up suggestions
* Demo account for recruiters

---

## Goal

The goal of this project is to build a realistic, deployable full-stack CRM application that demonstrates real-world software engineering skills, including frontend development, backend API design, authentication, relational databases and dashboard development.
