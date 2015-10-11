#!/usr/bin/env bash

projectDir="$1"
environment="$2"
port="$3"
host="$4"

curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash - \
&& sudo apt-get -y install build-essential nodejs nginx

sudo rm -f /etc/nginx/sites-enabled/default \
&& sudo tee /etc/nginx/sites-available/real_talk > /dev/null <<EOF
server {
  listen ${port};
  root ${projectDir}/public;
  index index.html;
  server_name ${host};
  location / {
    try_files \$uri \$uri/ /index.html;
  }
}
EOF
sudo ln -sf /etc/nginx/sites-available/real_talk /etc/nginx/sites-enabled/real_talk \
&& sudo service nginx restart

cd "${projectDir}" \
&& npm install --verbose --no-bin-links \
&& chmod +x node_modules/.bin/webpack node_modules/.bin/webpack-dev-server \
&& npm run prod
