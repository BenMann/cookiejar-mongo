var mongoose = require('mongoose');
    mongoosastic = require('mongoosastic'),
    Schema = mongoose.Schema,
    shortid = require('shortid'),
    config = require('../config/config');

var PackageSchema = new Schema({
  _id: {type: String, index: { unique: true }, 'default': shortid.generate, es_indexed:true},
  name: {type: String, index: { unique: true }, es_indexed:true},
  owner: {type: String, index: { unique: false }, es_indexed:true},
  description: {type: String, index: { unique: false }, es_indexed:true},
  keywords: { type : Array , "default" : [], es_type:'string', es_indexed:true },
  url: {type: String, index: { unique: true }, es_indexed:true},
  created_at: {type : Date, default: Date.now},
  hits: {type: Number, default: 0},
  stars: {type: Number, default: 0},
  isPublic: {type: Boolean, default: config.isPublic}
});


PackageSchema.plugin(mongoosastic);
var Package = mongoose.model('Package', PackageSchema);

Package.createMapping(function(err, mapping){
  if(err){
    console.log('Mongoosastic: Error creating mapping!');
    console.log(err);
  }else{
    console.log('Elasticsearch DB > Packages < connected.');
    console.log(mapping);
  }
});

module.exports = {
  Package: Package
};