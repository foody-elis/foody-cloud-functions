# Foody Cloud Functions

# Table of Contents
- [Description](#description)
  - [Useful Links](#useful-links)
  - [What is Foody](#what-is-foody)
  - [What is Foody Cloud Functions](#what-is-foody-customer-app)
 
# Description

## Useful Links
- Documentation: https://docs.google.com/document/d/1p1RFOiUF8x7opr-N9B8PLcPE7cJZiqI1_v2iclKKEvk/edit?usp=sharing
- Presentation: https://pitch.com/v/presentazione-foody-hk9puv

## What is Foody
Foody is an **innovative** and **centralized** software solution designed to optimize interactions between **users** and **restaurants**. It offers an all-in-one platform for **table reservations**, **in-restaurant orders**, **payments** and **reviews** through a user-friendly interface.

The system includes a mobile app for customers to find restaurants, book tables, place orders, make payments and leave reviews, as well as a dedicated app for restaurant owners to **manage menus**, **reservations**, and **customer feedback**. Additionally, it supports restaurant staff by **streamlining order management** and communication between the kitchen and dining area, improving efficiency and service accuracy.

Foody addresses the growing need for digitalization in the restaurant industry, providing a **scalable** and **innovative** solution to enhance both customer experience and operational performance.

## What is Foody Cloud Functions
Foody Cloud Function is a serverless backend module built with **Firebase Cloud Functions**, designed to **handle real-time chat operations** for the Foody ecosystem. It includes two key functions:

- `changeStatusAndLastMessage.js`: **Updates the status** of chat messages and **sets the latest received** message.
- `sendNotification.js`: Sends push notifications (**Firebase Cloud Messaging**) to the mobile app when a new message arrives.

These functions ensure seamless communication by keeping chat statuses synchronized and delivering instant notifications to users.
