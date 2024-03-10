# Signature Generator

## Introduction

This is a simple signature generator application built using React for the front end and Express.js for the back end. It allows users to generate HTML and plain text email signatures based on selected templates.

## Getting Started

### Prerequisites

Make sure you have Docker installed on your machine.

### Installation

1. Clone this repository to your local machine.
    ```
    git clone https://github.com/orha2911/signature-generator.git
    ```
2. Navigate to the project directory.
    ```
    cd signature-generator
    ```

### Running with Docker

1. Open a terminal or command line interface.
2. Run the following command to build and start the Docker containers:
    ```
    docker-compose up --build
    ```
3. Once the containers are running, open your web browser and go to:
    ```
    http://localhost:5173/
    ```

## Usage

- On the web application, fill in your name, email, and phone number.
- Choose a template from the available options.
- Click on "Generate HTML Signature" or "Generate Plain Text Signature" to generate the signature.
- Preview the generated signature below the buttons.
