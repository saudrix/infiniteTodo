const Datastore = require('nedb')
const database = new Datastore('database.db');
database.loadDatabase();

export {database};
