while true;
  do
    clear;
    gradle clean accept report --continue -Pracer=$1;
    sleep 5;
  done;
