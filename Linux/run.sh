#!/bin/bash

echo -e "\e[32mRunning BTC STEALER by Michal2SAB\n"
gnome-terminal --geometry=1x1 -- ./gen.sh
nr=0
while :
do
    sleep 100
    killall gen.sh
    gnome-terminal --geometry=1x1 -- ./gen.sh
    let nr++
    echo "Restarted btc stealer to avoid memory leak issues ($nr)"
done
