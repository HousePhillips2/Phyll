const CharRnn = require("./char-rnn");
const Memory = require("./memory");
const Linalg = require("./linalg");
const Lstm = require("./lstm");

const networkMemory = new Memory(buffer, metadata);

const linalg = new Linalg(networkMemory);

const params = {affines, nNodes, nLayers, vocab, ivocab}
// ^^^ there are more steps here. see load.js file for more information.

const model = new LSTM(linalg, params);
const myNetwork = new CharRNN(model)