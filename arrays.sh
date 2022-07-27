#!/bin/bash
NAMES=( John Eric Jessica )
NUMBERS=( 1 2 3 )
STRINGS=( "hello" "world" )
NumberOfNames=${#NAMES[@]}
second_name=${NAMES[1]}

echo ${NUMBERS[@]}
echo ${STRINGS[@]}
echo "Number of listed names in NAMES: $NumberOfNames"
echo "Second name on the NAMES list is:" ${second_name}
