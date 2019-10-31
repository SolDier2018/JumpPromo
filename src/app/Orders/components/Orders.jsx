import pageContainer from '../../../core/HOC/pageContainer';

import OrdersList from './OrdersList';
import OrderDetails from './OrderDetails';

export default pageContainer(OrdersList, OrderDetails);