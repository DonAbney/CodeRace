#!/bin/bash

# look for any instance of race.sh that is running and kill it
PIDS=`ps | grep race.sh | grep bash | cut -d' ' -f1`
echo $PIDS
for PID in $PIDS;
do
  kill $PID;
done;
REMAINING_PIDS=`ps | grep race.sh | grep bash | cut -d' ' -f1`
echo $REMAINING_PIDS

# blow away any changes from a previous race
git clean -f -d
git reset --hard

