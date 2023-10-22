package com.techelevator.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.sql.Timestamp;

public class SleepSchedule {
    //member variables
    private int id;
    @JsonProperty("sleep_time")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    private Timestamp sleepTime;
    @JsonProperty("wake_time") //this is to map JSON from SQL explicitly, i'm not entirely sure why it wasn't working
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
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
