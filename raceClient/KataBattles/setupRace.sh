#!/bin/bash

RACER=$RACER_NAME
if [[ -z "$RACER" ]];
then
  echo "Unable to find racer name in environment variable RACER_NAME";
  exit 1;
fi 

echo "Racer from env: $RACER"
echo "arg count $#"

if [[ $# != 1 ]];
then
  echo "Usage: $0 <kataDirectory>"
  exit 1;
fi

KATA=$1

# Cleanup
./cleanup.sh

# start up the race.sh for the new kata
cd $KATA
TIMESTAMP=`date "+%y%m%d%H%M%S"`
./race.sh $RACER > race-${TIMESTAMP}.log 2>&1 &


