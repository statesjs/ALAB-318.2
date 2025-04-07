VIEW ENGINE:

- EJS

Routes folder:
⚪️ mainPages.js accessed by the navlinks on the main page

- about
- projects
- index

⚪️ users.js :

- login
- signup
- mypage (the dynamic webpage)

middleware usage:

- app.use(express.urlencoded({ extended: true }));
  parses the incoming data from the form w/ method: post and allows it to be accessed from the req.body. Usage or such seen with res.send to dynamically thank the dynamically submitted username
- the extended option allows for nested objects, unescary usage, but apparently good practice
