package com.techelevator.dao;

import com.techelevator.model.SleepSchedule;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.springframework.jdbc.core.JdbcTemplate;

import java.sql.Timestamp;
import java.util.List;

public class JdbcSleepScheduleDaoTests  extends BaseDaoTests{
    //testing this member variable
    private JdbcSleepScheduleDao sut;

    @Before
    public void setup(){
        JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
        sut = new JdbcSleepScheduleDao(jdbcTemplate);
    }
    @Test //add this annotation before any tests
    public void getSleepSchedulesIsntNull(){
        List<SleepSchedule> result = sut.getSleepSchedules();
        Assert.assertNotNull(result);
        Assert.assertEquals(2,result.size()); //this will need to be deleted at some point
    }
    @Test
    public void getSleepScheduleByIdIsntNull(){
        SleepSchedule result = sut.getSleepScheduleById(1);
        Assert.assertNotNull(result);
    }
    @Test
    public void createSleepScheduleIsntNull(){
        Timestamp sleepTime = Timestamp.valueOf("2030-10-19 22:00:00");
        Timestamp wakeTime = Timestamp.valueOf("2024-10-20 09:00:00");
        SleepSchedule result = sut.createSleepTimes(new SleepSchedule(20,sleepTime,wakeTime));
        
        Assert.assertNotNull(result);
    }
}
