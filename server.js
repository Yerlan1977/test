const { log } = require('console');
const os = require('os');
const path = require('path'); 
const { add,multiply,bolu} = require('./math');

log(add(1,1),multiply(2,4),bolu(256,16));
// log(os.type());
// log(os.version());
// log(os.homedir());
// log(os.machine());

// log(__dirname);
// log(__filename);

// log(path.basename(__filename));
// log(path.dirname(__filename));
// log(path.extname(__filename));

// log(path.parse(__filename));