const CryptoAPI = require('../lib/CryptoAPI')
const KeyManager = require('../lib/KeyManager')

const check = {
    async price (cmd) {
        
        try {
            const keyManager = new KeyManager();
            const key = keyManager.getKey();

            const api = new CryptoAPI(key);

            const priceOutput = await api.getPriceData(cmd.coin, cmd.cur)

            console.log(priceOutput)

        } catch (err) {
            console.log(err.message.red)
        }


    }
}

module.exports = check;