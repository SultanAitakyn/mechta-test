import axios from 'axios';

const BASE_URL = 'https://206e849a-7aa1-4a1e-a1bd-1d14edb66c3c.mock.pstmn.io';

export async function getDeliveryInfo(cityName) {
    return await axios.get(`${BASE_URL}/delivery/check/`, {params: {search: cityName}});
}