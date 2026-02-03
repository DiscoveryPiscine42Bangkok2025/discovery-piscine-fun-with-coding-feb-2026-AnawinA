#!/bin/bash

no_arg() { # function about no argument
    echo "No arguments supplied"
}

any_arg() { #function about any argument
    for arg in "$@"; do # loop through all arguments
        mkdir "ex$arg" # create directory for each argument
    done
}

if [ $# -eq 0 ]; then # $# = number of arg
    no_arg # call no_arg function
else
    any_arg "$@" # $@ = all arguments (as separate words)
fi

# ./argv.sh = $#: 0, $@: (none) -> no_arg
# ./argv.sh 1 2 3 = $#: 3, $@: 1 2 3 -> any_arg