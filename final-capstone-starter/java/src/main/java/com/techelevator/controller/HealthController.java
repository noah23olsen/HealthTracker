package com.techelevator.controller;

import com.techelevator.dao.SleepScheduleDao;
import com.techelevator.model.SleepSchedule;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
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
    @PostMapping(path="schedule/add")
    @ResponseStatus(HttpStatus.CREATED)
    public SleepSchedule CreateSleepTimes(@RequestBody SleepSchedule sleepSchedule){
        System.out.println("Received sleepTime: " + sleepSchedule.getSleepTime());
        System.out.println("Received wakeTime: " + sleepSchedule.getWakeTime());
        return sleepScheduleDao.createSleepTimes(sleepSchedule);
    }
    @PutMapping(path="schedule/update")
    @ResponseStatus(HttpStatus.NO_CONTENT) //indicating success, common for updates with no data to send back
    public void updateSleepTimeById(@RequestBody SleepSchedule sleepSchedule){
        sleepScheduleDao.updateSleepTimeById(sleepSchedule);
    }
    @DeleteMapping(path="schedule/delete/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteSleepTimeById(@PathVariable int id){
        sleepScheduleDao.deleteSleepTimeById(id);
    }
}
