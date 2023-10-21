package com.techelevator.dao;

import com.techelevator.model.SleepSchedule;

import java.util.List;

public interface SleepScheduleDao {
    public List<SleepSchedule> getSleepSchedules();
    public SleepSchedule getSleepScheduleById(int id);
    public SleepSchedule postSleepSchedule(SleepSchedule)
}

