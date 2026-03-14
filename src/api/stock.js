import axios from 'axios';

const BASE = 'http://stockpulse-production-09c4.up.railway.app';

export const analyzeStock = async (ticker) => {
    const res = await axios.get(`${BASE}/stock/${ticker}/finbert`);
    return res.data;
};
