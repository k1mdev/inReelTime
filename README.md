# <a href='https://in-reel-time.vercel.app/'> In Reel Time </a>
Full stack MERN web app for logging fishing catches

## Motivation:
Most fishermen who log their catches either use MS Excel which may be too cumbersome for such a task, or use their phone to photograph their catches which omits details they may want to reference later. In Reel Time provides a simple web based solution for logging relevant catch details in a simplified UI locally on anglers' phones without occupying local storage. (Mobile styling in progress)

## Technologies:
* Client\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; React\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Vite\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Redux (Toolkit)\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Formik & Yup\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Tailwind
* Server\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; JWT (JSON Web Token) Auth\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Express\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Node\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MongoDB

## Functionality:
1. Users are immediately directed to a login page and are given the option to log in with an existing account's credentials or to create a new account
2. Upon successfully logging in, users are presented with a date bar aligned on the left side of the page, with the space to the right being dedicated to logged catches' information
3. To log a catch, users click on the circular plus button near the top right corner and enter the relevant information
4. The new saved catch will appear as a card, and its information can be edited or deleted by users clicking the pencil and trash icons respectively
5. To filter logged catches by date or by month, users click on the desired date or month displayed in the date bar, or using the date picker tool in the top section of the date bar
6. To deselect a date or month, users click anywhere else within the date bar

## Implementation:
* Frontend is built with React and Vite, styled with Tailwind\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Redux manages the "global state" of the user's selected date or month\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Formik and Yup validate forms
* Express middleware handles HTTP requests between frontend and backend
* User-entered information is stored in a MongoDB database
* User authentication is through JWT
* Frontend and backend are hosted on Vercel