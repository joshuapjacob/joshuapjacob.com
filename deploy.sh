#!/bin/bash

git push # because my dumbass forgets sometimes

ssh personal-webserver <<'EOF'
    cd personal-webserver
    eval $(ssh-agent)
    docker compose up -d --build personal-website
    exit
EOF

