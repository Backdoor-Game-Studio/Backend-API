#!/bin/bash

echo "┌───────────────────────────────┐"
echo "│ Server starter script running │"
echo "└────────────────────────────0.1┘"

route="/opt/lampp/lampp"
#route="service mysql"

echo -e "\nStarting MySQL service..."
sudo $route start

echo -e "\nFinished to start MySQL service!\n"