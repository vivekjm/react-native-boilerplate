import {AppConfig} from '../../config';
import axios from 'axios';

const loginApi = async () => {
  return await axios.get(AppConfig.BASE_URL + '/auth');
};

export {loginApi};
