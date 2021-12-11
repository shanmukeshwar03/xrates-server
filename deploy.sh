#/bin/bash

echo 'Deploy started...'
rsync -av --exclude='node_modules' --exclude='.git' ../nodejs-exchange-rates/ ubuntu@152.70.74.152:~/projects/exchange-rates
ssh ubuntu@152.70.74.152 "cd ~/projects/exchange-rates && docker-compose up -d --build"
echo 'Deployed!'
