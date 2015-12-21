var config = {};

// general info
config.version = 2.0;
config.name = 'The unofficial Bower registry';
config.description = 'This is the unofficial Bower registry, home of 45k+ packages.';

// database, port, etc.
config.port = 3000;
config.defaultSize = 30;
config.mongoUri = 'mongodb://localhost:27017/cookiejar';

// pub/priv registry
config.isPublic = true;
config.skipValidation = false;



module.exports = config;