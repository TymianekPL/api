@echo off
wsl tsc src/src/event/event.ts
wsl tsc src/src/client/index.ts
wsl node .