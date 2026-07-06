# Database Design

## Main Models

### User

Stores account information.

Fields:
- id
- name
- businessName
- email
- passwordHash
- createdAt
- updatedAt

### Customer

Stores customer information.

Fields:
- id
- userId
- firstName
- lastName
- email
- phone
- company
- status
- source
- createdAt
- updatedAt

### Note

Stores notes linked to customers.

Fields:
- id
- userId
- customerId
- content
- createdAt
- updatedAt

### ContactHistory

Stores customer interactions.

Fields:
- id
- userId
- customerId
- type
- summary
- outcome
- contactDate
- createdAt

### Reminder

Stores follow-up reminders.

Fields:
- id
- userId
- customerId
- title
- dueDate
- completed
- createdAt
- updatedAt