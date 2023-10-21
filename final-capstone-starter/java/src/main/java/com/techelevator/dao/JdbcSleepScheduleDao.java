package com.techelevator.dao;

import com.techelevator.model.SleepSchedule;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
@Component
public class JdbcSleepScheduleDao implements SleepScheduleDao{

    private JdbcTemplate jdbcTemplate;

    public JdbcSleepScheduleDao(JdbcTemplate jdbcTemplate){
        this.jdbcTemplate = jdbcTemplate;
    }
    //we could add a mapping method to this, but for simplicity I've negated it
    @Override
    public List<SleepSchedule> getSleepSchedules() {
        String sql = "SELECT * FROM sleep_schedule";
        List<SleepSchedule> sleepScheduleList = new ArrayList<>();

        SqlRowSet rows = jdbcTemplate.queryForRowSet(sql);
            while(rows.next()){
                SleepSchedule sleepSchedule = new SleepSchedule();
                sleepSchedule.setSleepTime(rows.getTimestamp("sleep_time"));
                sleepSchedule.setWakeTime(rows.getTimestamp("wake_time"));

                sleepScheduleList.add(sleepSchedule);
            }
            return sleepScheduleList;
        }
    @Override
    public SleepSchedule getSleepScheduleById(int id) {
        String sql = "SELECT sleep_time, wake_time FROM sleep_schedule WHERE id = ?";
        try {
            SqlRowSet row  = jdbcTemplate.queryForRowSet(sql, id);
            SleepSchedule sleepSchedule = new SleepSchedule();
            if (row.next()) {
                sleepSchedule.setSleepTime(row.getTimestamp("sleep_time"));
                sleepSchedule.setWakeTime(row.getTimestamp("wake_time"));
            }
            return sleepSchedule;
        } catch (EmptyResultDataAccessException e) {
            return null;
        }
    }
}
