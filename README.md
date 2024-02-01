# FundRev Web Application

## Table of Contents

- [FundRev Web Application](#fundrev-web-application)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Features](#features)
  - [Prerequisites](#prerequisites)
  - [How to Run the Application](#how-to-run-the-application)
  - [Deployed Link](#deployed-link)
  - [Author](#author)

## Description

FundRev is a web application built with React that provides a platform for investors and startups. It includes user access control with sign-up functionality for investors and startups. Once signed in, startups can upload sales data from a CSV file, and the application generates a single-column chart displaying monthly sales figures.

## Features

1. **Sign-up / User Access Control:**

   - Investors can sign up with a user ID and password.
   - Startups can sign up with company details including Company Name, Business Description, and Revenue.

2. **Frontend Development:**
   - Investors and startups can sign in to access the following functionalities:
     - **Startups:**
       - Upload "Sample Customer Data" CSV file.
       - Generate a single-column chart displaying monthly sales figures.
     - **Investors:**
       - Upon login, display a card with the company name and business description
       - Include an "Interested" button for the investor

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js: [Download Node.js](https://nodejs.org/)
- NPM: [Download NPM](https://www.npmjs.com/get-npm)

## How to Run the Application

Follow the steps below to run the application locally:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/AnilKumarYogi/sales-analysis.git
   ```
2. **Navigate to the Project Directory:**
   ```bash
   cd sales-analysis
   ```
3. **Install Dependencies:**
   ```bash
   npm install
   ```
4. **Run the Application:**
   ```bash
   npm start
   Open your web browser and go to http://localhost:3000.
   ```

## Deployed Link

https://fundrev-website.netlify.app/

## Author

Anil Kumar Yogi
