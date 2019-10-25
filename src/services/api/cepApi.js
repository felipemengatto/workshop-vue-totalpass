import HttpGenericService, { extractData } from './api.config.js';

export default {
    findCepAddress(cep) {
        const viaCepUrlApi = `https://viacep.com.br/ws/${cep}/json`;
        return HttpGenericService.get(viaCepUrlApi).then(extractData);
    }
}