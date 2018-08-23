# JavaScript Interview Question Prep
This repository is meant to hold interview practice questions, specifically for JavaScript roles. The goal here is to create a repository people of all different backgrounds can learn from. If you see an opportunity to improve this repository, whether making it more accurate in some way, adding tests, adding problems, or even adding new solutions (commented in the corresponding test files), I would appreciate your contribution. Please feel empowered to open a pull request with your changes.

## How to use
First, clone the repository:

```
git clone http://github.com/joshuaslate/js-interview-questions.git
```

Next, install required dependencies:

```
yarn install
```

Finally, start the tests in watch mode by running the following from the project root:

```
npm start
```

Now, in your favorite code editor, open the `.js` files you find in this project, but don't open the `.test.js` files. The files ending in `.test.js` are the tests that your solutions will run against, but you will also find sample solutions commented out in these files. If you get stuck, you can look here.

## Contributing
I've intentionally structured this project in a way so that framework-specific questions could be added. For example, if you were to interview for a frontend position that deals with React, you might be expected to write code demonstrating knowledge of lifecycle methods, state management, etc. If you would like to add framework-specific interview questions, please create a root-level folder with the framework's name, and split the problems into different files by category.

To contribute, branch off of this repository, add the problem, a test, and a commented out solution (or several) in the test file. Then open a pull request, and I will provide feedback and/or merge your changes in when I have time.
