#!/bin/bash

no_arg() {
    echo "No arguments supplied"
}

any_arg() {
    for arg in "$@"; do
        touch "ex$arg"
    done
}

if [ $# -eq 0 ]; then
    no_arg
else
    any_arg "$@"
fi