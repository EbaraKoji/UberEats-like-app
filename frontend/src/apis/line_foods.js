import axios from 'axios';
import { lineFoods, lineFoodReplace } from '../urls/index';

export const postLineFoods = (params) => {
  return axios.post(lineFoods, 
    {
      food_id: params.foodId, 
      count: params.count,
    })
    .then(res => {
      return res.data
    })
    .catch((e) => { throw e; })
};

export const replaceLineFoods = (params) => {
  return axios.put(lineFoodReplace,
    {
      food_id: params.foodId,
      count: params.count,
    }
  )
    .then(res => {
      return res.data
    })
    .catch((e) => { throw e; })
};