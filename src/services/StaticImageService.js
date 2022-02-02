import {API_CONSTANTS} from '../constants';

const getFlagIcon = (
  code = 'IN',
  style = API_CONSTANTS.COUNTRY_FLAG.STYLE.FLAT,
  size = API_CONSTANTS.COUNTRY_FLAG.SIZE[64],
) => `${API_CONSTANTS.COUNTRY_FLAG.BASE_URL}/${code}/${style}/${size}.png`;

export default {getFlagIcon};
