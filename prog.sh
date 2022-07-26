#!/bin/bash
function File {
    # think you are inside the file
    echo $#
}

# Do not change anything
if [ ! $# -lt 1 ]; then
    File $*
    exit 0
fi

# change here
bash prog.sh Shell is Fun
