#!/bin/bash

echo "┌──────────────────────────────┐"
echo "│ XAMPP starter script running │"
echo "└───────────────────────────0.1┘"

route="/opt/lampp/lampp"

echo -e "\nWaiting XAMPP services...\n"

sudo $route start

sleep 2

echo -e "\nFinished to start XAMPP services!\n"