# AI Image Generator
A vanilla JavaScript app created with Vite. It uses OpenAI’s Image Generation API to create a unique image with its Dalle-2 model.

## Setting up the application

### Install dependencies

Install the dependencies with Node Package Manager.

```
npm install
```

### Obtain API Keys

In this project the API of OpenAI is used.

Go to the [OpenAI](https://platform.openai.com/account/) website and create an account. You can then generate your
personal API key. You will receive an initial credit of 5.00 USD from OpenAI to test the API.

### Create *.env* file

API keys are like private keys. As the name already says, the information is private and **should not** be visible to
anyone else except you. To prevent your API from disclosing to the public, go to the *root* directory of
your project and create a *.env* file. Within the *.env* file, create a variable for every single key (for example **"OPENAI="**) and add the API key as
follows:

```
OPENAI=****************************
```

### Start express server and run the program

To start the *express server*, type in the following command:

```
node server.js
```

### Open the web application

Open your web browser at http://localhost:8080/