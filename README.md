# **Amplify Generative AI Recipe App**

This project demonstrates a serverless web application that generates AI-powered recipes based on user input. The application is built using **AWS Amplify** to host the frontend, **AWS Lambda** to handle backend requests, and **AWS AppSync** to manage the GraphQL API. It uses **Amazon Bedrock** for the generative AI functionality.

## **Table of Contents**
- [Overview](#overview)
- [Architecture](#architecture)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [1. Set Up the Frontend with AWS Amplify](#1-set-up-the-frontend-with-aws-amplify)
  - [2. Set Up Backend with AWS Lambda](#2-set-up-backend-with-aws-lambda)
  - [3. Configure AWS AppSync for GraphQL API](#3-configure-aws-appsync-for-graphql-api)
  - [4. Run the Application Locally with Docker](#4-run-the-application-locally-with-docker)
  - [5. Continuous Deployment with AWS Amplify](#5-continuous-deployment-with-aws-amplify)
- [Usage](#usage)
- [Cleanup](#cleanup)
- [Contributing](#contributing)
- [License](#license)

---

## **Overview**

The Amplify Generative AI Recipe App is designed to allow users to input recipe prompts, which are then passed to Amazon Bedrock's Claude-3-Sonnet model to generate recipes. The app uses AWS Amplify for frontend hosting and authentication, AWS Lambda for serverless backend execution, and AWS AppSync for a scalable GraphQL API.

## **Architecture**

The project follows this structure:

1. **Frontend**: A React application hosted with AWS Amplify, integrated with Amplify Auth for user authentication.
2. **Backend**: AWS Lambda functions that handle AI-powered recipe generation using Amazon Bedrock.
3. **GraphQL API**: AWS AppSync serves as the interface between the frontend and backend, using GraphQL queries and mutations to fetch and store data.

### **Project Structure**

```
amplify-generative-ai-app/
├── amplify/                     # AWS Amplify configuration files
│   ├── backend/                 # Backend resources: API, Lambda, Auth
│   └── .config/                 # Amplify project settings
├── public/                      # Static assets for React app
├── src/                         # React frontend source code
│   ├── graphql/                 # Generated GraphQL queries and mutations
│   ├── App.js                   # Main application logic
│   └── index.js                 # Entry point for the React app
├── Dockerfile                   # Docker setup for local testing
├── amplify.yml                  # Amplify build and deployment settings
├── package.json                 # Node.js dependencies and scripts
└── README.md                    # Project documentation (this file)
```

## **Prerequisites**

Before you start, ensure you have the following installed:

- [AWS CLI](https://aws.amazon.com/cli/)
- [Node.js](https://nodejs.org/) (version 14.x or later)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/products/docker-desktop)
- [AWS Account](https://aws.amazon.com/)

You’ll also need a **GitHub** account if you want to enable continuous deployment.

## **Getting Started**

### **1. Set Up the Frontend with AWS Amplify**

1. **Clone the repository:**

   ```bash
   git clone https://github.com/kenichi-07/amplify-generative-ai-app.git
   cd amplify-generative-ai-app
   ```

2. **Install Amplify libraries:**

   ```bash
   npm install aws-amplify @aws-amplify/ui-react
   ```

3. **Initialize Amplify in your project:**

   ```bash
   amplify init
   ```

   Follow the prompts to set up the Amplify project, specifying the appropriate AWS region and environment.

4. **Add Amplify Auth for user authentication:**

   ```bash
   amplify add auth
   ```

   Choose the default configuration for a basic user authentication setup.

5. **Push the configuration to AWS:**

   ```bash
   amplify push
   ```

### **2. Set Up Backend with AWS Lambda**

1. **Add a Lambda function:**

   ```bash
   amplify add function
   ```

   Choose **Lambda function** and select the necessary permissions to allow access to Amazon Bedrock.

2. **Modify Lambda code**:  
   Go to `amplify/backend/function/<function-name>/src/index.js` and add the logic to interact with Amazon Bedrock.

3. **Push the Lambda function to AWS:**

   ```bash
   amplify push
   ```

### **3. Configure AWS AppSync for GraphQL API**

1. **Add a GraphQL API:**

   ```bash
   amplify add api
   ```

   Configure the GraphQL schema by adding mutations and queries to generate AI-based recipes. This schema is located in `amplify/backend/api/<api-name>/schema.graphql`.

2. **Push the API to AWS:**

   ```bash
   amplify push
   ```

3. **Update your frontend code to call the API:**  
   In `src/App.js`, modify the code to use the Amplify API and GraphQL queries/mutations.

### **4. Run the Application Locally with Docker**

1. **Create a Docker image:**

   A `Dockerfile` is included in the project. Build and run the app locally with:

   ```bash
   docker build -t amplify-ai-app .
   docker run -p 3000:3000 amplify-ai-app
   ```

   You can now access the app at `http://localhost:3000`.

### **5. Continuous Deployment with AWS Amplify**

1. **Set up continuous deployment:**

   Go to the **AWS Amplify Console** and link your repository (GitHub, Bitbucket, etc.).
   
   Configure the branch to monitor (e.g., `main`), and AWS Amplify will automatically build and deploy your application on code changes.

## **Usage**

Once the app is deployed:

1. **Sign Up / Sign In**:  
   The app provides a sign-up and sign-in page where users can create accounts using Amplify Auth.

2. **Generate a Recipe**:  
   After logging in, users can input their recipe prompt (e.g., "spaghetti bolognese") and submit it. The request is sent to Amazon Bedrock via AWS Lambda, and a generative AI model (e.g., Claude-3-Sonnet) will return the recipe.

3. **API Integration**:  
   The frontend interacts with the AWS AppSync GraphQL API, which connects to Lambda for recipe generation.

## **Cleanup**

To avoid unnecessary AWS charges, delete the Amplify resources after finishing the project:

```bash
amplify delete
```

This will remove all associated AWS resources, including Lambda functions, AppSync API, and Amplify Auth.

## **Contributing**

Contributions are welcome! Please open an issue or submit a pull request for any feature requests, bug fixes, or improvements.

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
