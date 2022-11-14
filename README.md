# Bitcoin-Stealer
Generate random bitcoin wallets & private keys (seeds) and then check if they match any wallet that has a positive balance, and then create a file where is the private key stored

# CHANGELOG
<details>
   <summary>2022-04-04</summary>
  
   - Added a message to console when program starts, to calm down people who think the program isn't working because the console is blank. (You can enable the logs editing the js file from an editor like Visual Studio Code)
</details>

<details>
   <summary>2021-12-09</summary>
  
   - Fixed big memory leak issue and removed extra scripts that were necessary before, that are unnecesary now.
</details>

<details>
   <summary>2021-09-26</summary>
  
   - Linux support: linux users will go to the "linux" directory to run the program.
</details>

# REQUIREMENTS
1. Node.js Installed
2. After installing nodejs, open a cmd as admin and install coinkey with "npm i coinkey"
3. A lot of time (there are too many combinations that is almost impossible to find something. If you realli want to try it make sure that you have to levae your pc on for a long time)

# HOW TO RUN
After installing node and coinkey just run the script opening the run.bat file
You will see a screen sayng that all is working fine

# SPEED / PERFORMANCE
Results from a somewhat decent computer:
- 1.56 million checks every 1 minute
- 7.2 billion checks in 1 day
- 54 billion checks in a week
- 216 billion checks in a month
- 2.8 trillion checks in a year

But please keep in mind that this is still really not much compared to all possible combinations that should be checked.

# VIDEO

Check this video
[![YT VID](http://img.youtube.com/vi/JaKDEWXOKn0/0.jpg)](http://www.youtube.com/watch?v=JaKDEWXOKn0 "Bitcoin - Find Private Keys (Seeds) For Lost and Rich Wallets | NEW 2021")

# TEST IT
Go to the test folder and hit run. It will show you what would happen if a wallet from your list was found.

# WHY DO THIS?
There are a lot of wallets with high balances that are lost forever, which means nobody can access them and the money is basically there just to be picked up by anyone. This program can possibly find these lost wallets and their matching private keys and take the btc out of them.

# WANT TO THANK ME?
If you would like to tip me in case you won anything or you appreciate the program, here is my BTC wallet and ETH. It will be greatly appreciated. Also you can give this project a star :)

My Bitcoin: 1B8xs4LWbwFq4Zi4pzEmjNYkTCgsUByb5L

My Ethereum: 0xe89c84A7758429b4D11a2091e1dccf7433328Fa9

# NOTE
I'm not actually responsible for what you do with this. Don't steal active wallet money, that's just wrong. Not to mention the new wallets are most likely protected much more and stuff.
If you really find something try to hide it wil a Bitcoin Mixer or use somehing like SimpleSwap to somehing like Monero or ZCash

# Also Note
It's almost impossible to find anything. Even though this method is not bruteforce and is creating random keys, the chances of winning are still very very low. You could get lucky though, good luck!

# Check out the new project, it's the same... but for ethereum!
https://github.com/Michal2SAB/Ethereum-Stealer
