while true;
  do
    clear;
    gradle clean accept report --continue --rerun-tasks -Pracer=$RACER_NAME;
    sleep 5;
  done;
