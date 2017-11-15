#!/usr/bin/env python

import schedule
import time
import subprocess
import datetime

CLEAN_JOB_DIR = './clean30days.sh'

def clean_job():
  subprocess.call(CLEAN_JOB_DIR)

schedule.every().day.at("9:00").do(clean_job)

while 1:
    schedule.run_pending()
    time.sleep(1)
