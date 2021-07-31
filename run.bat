@echo off
cls
echo Compiling...
call tsc src/src/event/event.ts
call tsc src/src/client/index.ts
call tsc src/src/exception/index.ts
cls
echo Running...
node .