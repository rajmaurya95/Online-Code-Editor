
# Online-Code-Editor

This project is very useful to
students and developers to write code and execute on the web in your browser in
four languages like C, C++, Java and Python. It is developed using NodeJS and
ReactJS Technology. 
URL
https://rajmaurya95.github.io/Online-Code-Editor/


## Author

- [@rajmaurya95](https://www.github.com/rajmaurya95)


## Demo

https://rajmaurya95.github.io/Online-Code-Editor/


## Features

- dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform
- Available Online
- MultiPogrammable
- Take Input by user
- Provide Execution Time



## Documentation

[Documentation](https://linktodocumentation)


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`judge0-ace API-KEY`
`


## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Host` | `application/json` | **Required**. judge0-ce.p.rapidapi.com|

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `2878dd92bfmsh324e` | **Required**. Id of item to fetch |

#### Format to Access Data
const response = await fetch(
      "https://judge0-ce.p.rapidapi.com/submissions",
      {

        method: "POST",
        headers: {
          'X-RapidAPI-Host': 'judge0-c.p.rap.com',
          'X-RapidAPI-Key': 'Your API-key',
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          source_code: this.state.input,
          stdin: this.state.user_input,
          language_id: this.state.language_id,
        }),
      }

To fetch data from host through API 


## Deployment

To deploy this project run

```bash
  npm run deploy
```


## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```
    
## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Screenshots

![App Screenshot](https://github.com/rajmaurya95/Online-Code-Editor)


![Logo](https://rajmaurya95.github.io/Online-Code-Editor/static/media/logo1.0213cd02.svg)


## Support

For support, email codewithmaurya0@gmail.com.or join our codewithmaurya channel on yuotube.


## Tech Stack

**Client:** React, Redux

**Server:** Node, Express


## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them?


## 🛠 Skills
Javascript, HTML, CSS...


## 🚀 About Me
I'm a Front-end developer...


## 🔗 Links
[![github](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/rajmaurya95//)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gautam-shakya-24603a216/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GautamS64730238)


## Usage/Examples

```javascript
import Component from 'my-project'

function App() {
  return <Component />
}
```

