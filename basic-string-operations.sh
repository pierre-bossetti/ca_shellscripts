#!/bin/bash

BUFFETT="Life is like a snowball. The important thing is finding wet snow and a really long hill."
# write your code here
ISAY=${BUFFETT}
ISAY1=${ISAY[@]/snow/foot}
ISAY2=${ISAY1[@]//snow/}
ISAY3=${ISAY2[@]/finding/getting}

POS=0
LEN=55
ISAY4=${ISAY3:$POS:$LEN}

echo ${ISAY1}
echo ${ISAY2}
echo ${ISAY3}
echo ${ISAY4}
