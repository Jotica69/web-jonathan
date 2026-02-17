#!/bin/bash
git init
git config user.name "Jonathan Chavez"
git config user.email "jonathan@example.com"
git remote add origin https://github.com/Jotica69/web-jonathan.git
git add .
git commit -m "Initial commit - Restructured website with 8 sections and glowing effects"
git branch -M main
echo "Git setup complete."
