# ProductFindrAppV1

This app displays a list of products in a table. Here are the features of this app: 
  - The products can be searched using various strings from within a search-box. 
  - Currently the app has there tabs: Home, Search and About. 
  - The table with search box are implemented in the Search tab. 
  - A fully functional nav-bar header and a basic footer has also been added to all pages.
  - This is basically a front-end heavy angular based app. 
  - The database in this case has been simulated by using a npm package called *json-server*. Look for a file called *server/db.json* which contains a sample list of product items. This list is hosted by the json-server.
  - The server allows client code to use REST calls to retrieve data.
  - The serve also allows filtering the data using a call like this ``` http://localhost:3000/<collection-name>?q=<query-string> ```

## How to run the app

- Run ` npm install `. A prerequisite is the installation of node on the machine. A good starting point is node's site: https://nodejs.org/en/download/
- Run ` json-server --watch server/db.json ` to run the json-server in watch mode. The second arguments is the file containing a json collection of existing objects.
- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
