import pageContainer from '../../../core/HOC/pageContainer';

import ClientsList from './ClientsList';
import ClientsDetails from './ClientsDetails';

export default pageContainer(ClientsList, ClientsDetails);