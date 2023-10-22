import axios from "axios";

const postSchedule = (scheduleData) => {
    return axios.post('http://localhost:9000/schedule/add', scheduleData);
}
const getSchedule = () => {
    return axios.get('http://localhost:9000/schedule');
}

const api = {
    postSchedule,
    getSchedule
}

export default api;