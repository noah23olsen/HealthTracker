package com.techelevator.controller;

import com.techelevator.dao.SleepScheduleDao;
import com.techelevator.model.SleepSchedule;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(path="/")
public class HealthController {

    private SleepScheduleDao sleepScheduleDao;
    public HealthController(SleepScheduleDao sleepScheduleDao){
        this.sleepScheduleDao=sleepScheduleDao;
    }
    @GetMapping(path="schedule")
    public List<SleepSchedule> getSleepSchedules(){
        List<SleepSchedule> sleepScheduleList = sleepScheduleDao.getSleepSchedules();
        return sleepScheduleList;
    }
    @GetMapping(path="schedule/{id}")
    public SleepSchedule getSleepScheduleById(@PathVariable int id){
        SleepSchedule result = sleepScheduleDao.getSleepScheduleById(id);
        return result;
    }
}
