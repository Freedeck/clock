const path = require("path");
const Plugin = require(path.resolve('./src/classes/Plugin'));

class EntrypointTEst extends Plugin {
	testvar = 0;
    constructor() {
        super('Freedeck 6: Example Plugin', 'Freedeck', 'fd.plugins.example', false);
    }

    onInitialize () {
        console.log('Initialized example plugin.')
        this.registerNewType('Example Plugin Test', 'fd.plugins.example');
        return true;
    }

    onButton(interaction) {
        this.pushNotification(interaction.type + ' pressed!');
        return true;
    }
}

module.exports = {
	exec: () => new EntrypointTEst()
}
