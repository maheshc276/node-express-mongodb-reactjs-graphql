var GraphQLSchema = require('graphql').GraphQLSchema;
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLInt = require('graphql').GraphQLInt;
var GraphQLDate = require('graphql-date');
var BookModel = require('../models/Book');
var DeviceConfigModel = require('../models/DeviceConfig');
var bookType = require('../typeDefs/bookType');
var deviceType = require('../typeDefs/deviceType');
var queryFunction = require('./queryFunction');
var mutationFunction= require('./mutationFunction');

  var queryType = new GraphQLObjectType({
    name: 'Query',
    fields: queryFunction()
  });

  var mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields:mutationFunction()
  });

  module.exports = new GraphQLSchema({query: queryType, mutation: mutation});