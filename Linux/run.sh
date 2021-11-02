#!/bin/bash

echo -e "\e[32mRunning BTC STEALER by Michal2SAB\n"
xterm -e ./gen.sh
nr=0
while :
do
    sleep 100
    killall -9 gen.sh
    xterm -e ./gen.sh
    let nr++
    echo "Restarted btc stealer to avoid memory leak issues ($nr)"
done
