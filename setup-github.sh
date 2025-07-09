#!/bin/bash

# Initialize Git repository (it's already initialized by create-react-app)
# git init

# Add all files to Git
git add .

# Create first commit
git commit -m "Initial commit: Professional Portfolio Website"

# Instructions for setting up remote repository
echo "Now, create a repository on GitHub named 'my-portfolio'"
echo "Then run the following commands:"
echo "git remote add origin https://github.com/yourusername/my-portfolio.git"
echo "git branch -M main"
echo "git push -u origin main"
echo "After that, you can deploy to GitHub Pages with: npm run deploy"
