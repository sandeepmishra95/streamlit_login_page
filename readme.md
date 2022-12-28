# Samooha UI Assignment
This project contains the Sample UI, developed using Streamlit, React and Typescript.

> This assumes all commands are executed from the root of the project

## Installation
#### Backend
Install `Python3` and `Pipenv` for running the Backend of the project.
Run the following steps to ensure creation of Virtual Environment.
```
pipenv shell
pipenv install
```

#### Frontend
Install `Node.js` and `npm` for running Frontend for the project.
Run the following steps to install required npm packages
```
cd template/login/frontend
npm install
```

#### Run
On Terminal #1, start Backend Server
```
streamlit run template/login/__init__.py
```
On Terminal #2, start Frontend Server
```
cd template/login/frontend
npm run start
```

#### Test
```
cd template/login/frontend
npm run test
```