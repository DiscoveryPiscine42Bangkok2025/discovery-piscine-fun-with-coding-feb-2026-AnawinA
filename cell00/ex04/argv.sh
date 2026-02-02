#!/bin/bash

no_arg() {
    echo "No arguments supplied"
}

any_arg() {
    for arg in "$@"; do
        echo "$arg"
    done
}

if [ $# -eq 0 ]; then # $# = number or arg
    no_arg
else
    any_arg "$@" # $@ = all arguments
fi
