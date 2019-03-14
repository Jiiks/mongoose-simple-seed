const mongoose = require('mongoose');

module.exports = async function (seed) {
    for (const obj of seed) {
        const model = mongoose.model(obj._model);
        const count = obj._count;

        delete obj._count;
        delete obj._model;

        for (const key of Object.keys(obj)) {
            const value = obj[key];
            const doEval = /\{{(.*)}}/.exec(value);
            if (!doEval) continue;
            obj[key] = value.replace(doEval[0], eval(doEval[1]));
        }

        for (let i = 0; i < count; i++) {
            await model.create(obj);
        }
    }
}
