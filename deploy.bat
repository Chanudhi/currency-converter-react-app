@echo off
call npm run build
call npx gh-pages -d dist 