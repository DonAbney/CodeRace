while true;
  do
    clear;
    gradle clean accept report --continue --rerun-tasks -Pracer=$1;
    sleep 5;
  done;
