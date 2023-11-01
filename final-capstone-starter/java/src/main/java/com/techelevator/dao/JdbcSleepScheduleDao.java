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
                sleepSchedule.setId(rows.getInt("id"));

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

    @Override
    public SleepSchedule createSleepTimes(SleepSchedule sleepSchedule) {
        String sql = "INSERT INTO sleep_schedule (sleep_time, wake_time) VALUES (?,?) RETURNING id";
//                "('2023-10-19 22:00:00', '2023-10-20 06:00:00')" example values for reference
         int id = jdbcTemplate.queryForObject(sql,int.class, sleepSchedule.getSleepTime(),sleepSchedule.getWakeTime());
        sleepSchedule.setId(id);
        return sleepSchedule;
    }

    @Override
    public void updateSleepTimeById(SleepSchedule sleepSchedule) {
        String sql = "UPDATE sleep_schedule\n" +
                "SET sleep_time = ?, wake_time = ?\n" +
                "WHERE id = ?;";
        jdbcTemplate.update(sql,sleepSchedule.getSleepTime(),sleepSchedule.getWakeTime(),sleepSchedule.getId());
    }

    @Override
    public void deleteSleepTimeById(int id) {
        String sql =
                "DELETE FROM sleep_schedule\n" +
                "WHERE ID = ?\n";
        jdbcTemplate.update(sql,id);
    }

}
