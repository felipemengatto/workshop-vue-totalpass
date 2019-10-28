import CepApi from '@services/api/cepApi';

import * as mutations from '../mutations/mutationTypes';

export default {
    async findAddressByCep({ commit }, zipCode) {
        try {
            const { logradouro } = await CepApi.findCepAddress(zipCode);

            const address = {
                zipCode,
                street: logradouro
            };

            commit(mutations.SET_ADDRESS, address);

            return address;
        } catch (error) {
            console.error(error);
        }
    }
}