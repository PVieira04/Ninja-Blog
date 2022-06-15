To run:
- First use the command "npm install" to install the node modules.
- Then use "npm start" to run the program.
- Next, open another terminal and type in "npx json-server --watch data/db.json --port 8000"
- Finally, open one more terminal and type in "npm install react-router-dom@6" to insall the react router.
The code should then function as intended.

This app is a blog with multiple pages using react router.
It features:
- A home page
- A "new blog" page where the user can write a new blog post
- One page for each existing blog where they have their own id can can be deleted

This app also features the use of a .json file using Node.JS in order to store blog data.