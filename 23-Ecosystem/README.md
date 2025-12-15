# Modern JavaScript Ecosystem

## 📌 JavaScript Tooling

Modern JavaScript development involves many tools that improve development experience and code quality.

## NPM (Node Package Manager)

### package.json
```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "My awesome project",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest",
    "build": "webpack --mode production",
    "lint": "eslint src/**/*.js"
  },
  "dependencies": {
    "express": "^4.18.0",
    "lodash": "^4.17.21"
  },
  "devDependencies": {
    "jest": "^29.0.0",
    "eslint": "^8.0.0",
    "webpack": "^5.0.0"
  }
}
```

### NPM Commands
```bash
# Initialize project
npm init
npm init -y  # Quick init

# Install packages
npm install package-name
npm install --save-dev package-name  # Dev dependency
npm install -g package-name  # Global install

# Install from package.json
npm install

# Update packages
npm update
npm outdated  # Check for updates

# Remove packages
npm uninstall package-name

# Run scripts
npm start
npm test
npm run dev
```

## Build Tools

### Webpack

```javascript
// webpack.config.js
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        static: './dist',
        port: 3000
    }
};
```

### Vite (Modern Alternative)

```javascript
// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
    root: './src',
    build: {
        outDir: '../dist'
    },
    server: {
        port: 3000
    }
});
```

## Transpilers

### Babel

Converts modern JavaScript to older versions for compatibility.

```javascript
// .babelrc
{
    "presets": [
        ["@babel/preset-env", {
            "targets": {
                "browsers": ["last 2 versions", "ie >= 11"]
            }
        }]
    ],
    "plugins": [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-optional-chaining"
    ]
}
```

```javascript
// Input (ES6+)
const greet = (name) => `Hello, ${name}!`;
class User {
    constructor(name) {
        this.name = name;
    }
}

// Output (ES5)
var greet = function(name) {
    return "Hello, " + name + "!";
};
var User = function User(name) {
    this.name = name;
};
```

## Linters

### ESLint

Enforces code quality and style.

```javascript
// .eslintrc.json
{
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
        "indent": ["error", 2],
        "quotes": ["error", "single"],
        "semi": ["error", "always"],
        "no-unused-vars": "warn",
        "no-console": "off"
    }
}
```

```bash
# Run ESLint
npx eslint src/**/*.js

# Auto-fix issues
npx eslint src/**/*.js --fix
```

## Code Formatters

### Prettier

Automatically formats code.

```javascript
// .prettierrc
{
    "semi": true,
    "singleQuote": true,
    "tabWidth": 2,
    "trailingComma": "es5",
    "printWidth": 80,
    "arrowParens": "always"
}
```

```bash
# Format files
npx prettier --write "src/**/*.js"

# Check formatting
npx prettier --check "src/**/*.js"
```

## Version Control (Git)

### .gitignore
```
node_modules/
dist/
build/
.env
.DS_Store
*.log
coverage/
```

### Common Git Commands
```bash
# Initialize
git init

# Stage and commit
git add .
git commit -m "Initial commit"

# Branches
git branch feature-name
git checkout feature-name
git checkout -b feature-name  # Create and switch

# Merge
git checkout main
git merge feature-name

# Remote
git remote add origin <url>
git push origin main
git pull origin main
```

## Module Bundlers Comparison

| Feature | Webpack | Vite | Rollup |
|---------|---------|------|--------|
| Speed | Slow | Fast | Medium |
| HMR | Yes | Yes | With plugin |
| Tree Shaking | Yes | Yes | Yes |
| Code Splitting | Excellent | Good | Good |
| Config | Complex | Simple | Medium |
| Best For | Large apps | Modern apps | Libraries |

## Development Workflow

```bash
# 1. Initialize project
npm init -y

# 2. Install dependencies
npm install express
npm install --save-dev jest eslint prettier

# 3. Setup configuration
# Create .eslintrc.json, .prettierrc, etc.

# 4. Add scripts to package.json
{
  "scripts": {
    "start": "node src/index.js",
    "dev": "nodemon src/index.js",
    "test": "jest",
    "lint": "eslint src/",
    "lint:fix": "eslint src/ --fix",
    "format": "prettier --write src/"
  }
}

# 5. Development
npm run dev

# 6. Before commit
npm run lint
npm test
npm run format

# 7. Build for production
npm run build
```

## Interview Questions

**Q: What is NPM?**
A: Node Package Manager - manages project dependencies and packages.

**Q: What is package.json?**
A: Configuration file containing project metadata, dependencies, and scripts.

**Q: What is a bundler?**
A: Tool that combines multiple files into optimized bundles for production (Webpack, Vite).

**Q: What is Babel?**
A: JavaScript transpiler that converts modern JS to older versions for compatibility.

**Q: What is ESLint?**
A: Linting tool that identifies and fixes code quality issues and enforces style.

**Q: Difference between dependencies and devDependencies?**
A: dependencies: needed in production. devDependencies: only needed during development.

**Q: What is tree shaking?**
A: Removing unused code from final bundle to reduce size.

[See Testing](../04-Testing/README.md) | [Course Complete!](../../README.md)

---

## 🎉 Congratulations!

You've completed the entire JavaScript course from beginner to expert! You now have the knowledge to:
- Write clean, efficient JavaScript code
- Build complex web applications
- Apply design patterns and best practices
- Test and optimize your code
- Work with modern JavaScript tooling

Keep practicing, building projects, and staying updated with the JavaScript ecosystem!
