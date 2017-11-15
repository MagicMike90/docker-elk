#!/bin/bash

# The --dry-run mode will not actually delete the index. It can be used to test the output of the action.
curator ./actions/delete_indices.yml --config ./curator.yml
