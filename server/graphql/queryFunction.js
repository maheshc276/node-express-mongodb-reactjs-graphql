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
var bookResolvers= require('./resolvers/bookResolvers');



module.exports = function () {
      return {
        books: {
          type: new GraphQLList(bookType),
          resolve: () => bookResolvers.getBooks()
        },
        book: {
          type: bookType,
          args: {
            id: {
              name: '_id',
              type: GraphQLString
            }
          },
          resolve:(root, params) => bookResolvers.getBook(root, params)
        },
        devices: {
          type: new GraphQLList(deviceType),
          resolve: function () {
            const devices = DeviceConfigModel.find().exec()
            if (!devices) {
              throw new Error('Error')
            }
            return devices
          }
        }
      }
    };