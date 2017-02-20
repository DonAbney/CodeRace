while true;
  do
    clear;
    gradle clean accept report --continue -Pracer=$RACER_NAME;
    sleep 5;
  done;
