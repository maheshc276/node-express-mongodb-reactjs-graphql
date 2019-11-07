var GraphQLString = require('graphql').GraphQLString;
var GraphQLInt = require('graphql').GraphQLInt;
var GraphQLDate = require('graphql-date');
var GraphQLObjectType = require('graphql').GraphQLObjectType;


 var deviceType = new GraphQLObjectType({
    name: 'device_config',
    fields: function () {
      return {
        _id: {
          type: GraphQLString
        },
        user_config_id: {
          type: GraphQLString
        },
        name: {
          type: GraphQLString
        },
        device_reg_id: {
          type: GraphQLString
        },
        email_id: {
          type: GraphQLString
        },
        mobile_no: {
          type: GraphQLInt
        },
        stop_notify: {
          type: GraphQLString
        },
        updated_date: {
          type: GraphQLDate
        }
      }
    }
  });

  module.exports = deviceType;