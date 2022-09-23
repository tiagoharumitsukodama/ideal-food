#!/bin/bash

for (( count=3; count<13; count++ ))
do
echo "Creating $count-ingredient.js"
cp 2-ingredient.js "$count-ingredient.js"
done