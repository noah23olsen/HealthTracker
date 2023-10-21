package com.techelevator.model;

import java.sql.Timestamp;

public class SleepSchedule {
    //member variables
    private int id;
    private Timestamp sleepTime;
    private Timestamp wakeTime;

    //constructors
    public SleepSchedule(){
    }
    public SleepSchedule(int id, Timestamp sleepTime, Timestamp wakeTime){
        this.id=id;
        this.sleepTime=sleepTime;
        this.wakeTime=wakeTime;
    }

    //getters and setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Timestamp getSleepTime() {
        return sleepTime;
    }

    public void setSleepTime(Timestamp sleepTime) {
        this.sleepTime = sleepTime;
    }

    public Timestamp getWakeTime() {
        return wakeTime;
    }

    public void setWakeTime(Timestamp wakeTime) {
        this.wakeTime = wakeTime;}
}
