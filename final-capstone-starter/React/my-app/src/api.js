import axios from "axios";

const postSchedule = (scheduleData) => {
    return axios.post('http://localhost:9000/schedule/add', scheduleData);
}
const getSchedule = () => {
    return axios.get('http://localhost:9000/schedule');
}
const updateSchedule = (schedule) => {
    return axios.put('http://localhost:9000/schedule/update', schedule);
}

const api = {
    postSchedule,
    getSchedule,
    updateSchedule
}

export default api;