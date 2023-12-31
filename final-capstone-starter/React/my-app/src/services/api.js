import axios from "axios";

const postSchedule = (scheduleData) => {
    return axios.post('http://localhost:9000/schedule/add', scheduleData);
}
const getSchedule = () => {
    return axios.get('http://localhost:9000/schedule');
}
const getScheduleById=(id) => {
    return axios.get(`http://localhost:9000/schedule/${id}`);
}
const updateSchedule = (schedule) => {
    return axios.put('http://localhost:9000/schedule/update', schedule);
}
const deleteScheduleById = (id) => {
    return axios.delete(`http://localhost:9000/schedule/delete/${id}`);
}

//remember to add each new method here
const api = {
    postSchedule,
    getSchedule,
    getScheduleById,
    updateSchedule,
    deleteScheduleById,
}

export default api;