
<img src="./assets/Screenshot 2022-06-29 100133.jpg" />


<br/>

---

<br />


## List of Contents
1. [Introduction](#mindactivity-app-for-managing-stress)
2. [Features](#features)
3. [Getting Started](#getting-started)
4. [Tech Stack](#tech-stack)
5. [Color Reference](#color-reference)
6. [Running Tests](#running-tests)
7. [Authors](#authors)
8. [Appendix](#appendix)


<br/>

---

<br />

# Mindactivity App For Managing Stress🧘

Welcome to Mindactivity!


Just in case you were curious about the name, mindfulness + productivity = mindactivity.


It's a Mindfullness App designed to manage stress levels and increase productivity using meditative media.

**This documentation is for the entire Mindactivity app. If you're interested in the backend/API specifically, go to [backend repository](https://github.com/SchoolOfCode/w9_backend-project-mindactivity)**


<br/>

---

<br />


## Features🎩
- Timer for meditation or exercise.
- Music button playing calming nature sounds.
- Daily affirmations randomised and displayed from database.
- Blog posts also randomised and displayed from database.
- Click- and hover-interactive background simulating a night sky.

<br/>

---

<br />

## Getting Started🏁


### **Backend** ###

**It is important to get the backend working before you run the frontend in order to use the affirmations and the blog post features*
1. Git clone the backend repository.
```bash
  git clone https://github.com/SchoolOfCode/w9_backend-project-mindactivity
```
2. Install all the dependencies by running this command:
```bash
  npm i
```
3. Copy your database (e.g. Heroku) URL into the .env file, following the format:
```bash
 DATABASE_URL = <Database URL goes here>
```
4. Create the table in your database by running this script in the terminal:
```bash
npm run db:createTable
```
5. Populate the table you have just created by running this script in the terminal:
```
npm run db:populateTable
```
6. Run the server with this command in the terminal:
```bash
  npm run dev
```

### **Frontend** ###

1. Git clone the frontend repository.
```bash
  git clone https://github.com/SchoolOfCode/w9_backend-project-mindactivity
```
2. Install the dependencies by running this command in the terminal.  
```bash
  npm i
```
3. Navigate to this folder w9_frontend-project-mindactivity/Mindactivity

4. Start the app.
```bash
  npm start
```

<br/>

---

<br />


## Tech Stack⚙️

**Client:** React, CSS, Howler, React-tsparticles
</br>
**Server:** Node, Express, PostreSQL
</br>
**Client-side Testing:** React Testing Library
</br>
**Server-side Testing:** Supertest, Jest

<br/>

---

<br />


## Color Reference🎨
| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Xiketic | ![#131224](https://via.placeholder.com/10/131224?text=+) #131224 |
| Oxford Blue | ![#F8F8F8](https://via.placeholder.com/10/0C1445?text=+) #0C1445 |
| Liberty | ![#00B48A](https://via.placeholder.com/10/5C54A4?text=+) #5C54A4 |
| Rhythm | ![#00D1A0](https://via.placeholder.com/10/8380A4?text=+) #8380A4 |
| Melon | ![#00D1A0](https://via.placeholder.com/10/FFB7A2E8?text=+) #FFB7A2E8 |
| Puce | ![#C3809A](https://via.placeholder.com/10/C3809A?text=+) #C3809A |
| Sandy Brown | ![#FBA55A](https://via.placeholder.com/10/FBA55A?text=+) #FBA55A |


<br/>

---

<br />


## Running Tests🃏
To run tests, run the following command
```bash
  npm test
```
<br/>

---

<br />

## Authors📚

We are four bootcampers at [The School Of Code](https://github.com/SchoolOfCode) who teamed up to build an app to help solve bootcamper burnout problem for our mid-course project.

- [@AureaFlamma](https://www.github.com/AureaFlamma)
- [@EdMark11](https://www.github.com/EdMark11)
- [@anastasia-starostina](https://www.github.com/anastasia-starostina)
- [@Sadie109](https://www.github.com/Sadie109)

<br/>

---

<br />


## Appendix📝
</br>

- [React](https://reactjs.org/docs/getting-started.html)
- [TSParticles Package](https://www.npmjs.com/package/express-generator-esmodules)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Howler](https://www.npmjs.com/package/howler)
