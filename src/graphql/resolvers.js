const COLLECTIONS = require("../schemas/schemas");
const { GraphQLScalarType } = require('graphql');
const GraphQLJSON = require('graphql-type-json');

//query
const {modelQuery} = require('../schemas/query')
const {COLLECTION_NAME, QUERY} = require('../const/consts');


const dateScalar = new GraphQLScalarType({
  name: "Date",
  description: "Date Type",
  serialize: (value) => {
    const date = new Date(value);
    if(date.toString()==="invalid Date"){ return null; }
    return date;
  }
});

const resolvers = {
  Date: dateScalar,
  JSON: GraphQLJSON,
  Query: {
    
    async modelQuery(_, args) {
      
      const Query = args.Query
      const Collection = args.Collection
      const Data = args.Data
      let Option;
      if( args.Option === undefined) {
        Option = {}
      }
      else {
         Option = args.Option
      }
      
      
      try {
        console.log("@@@ : " + Option)
        const models = await modelQuery(Query,Collection,Data,Option)
        console.log(models);
        return models;
      } catch(err) {
        console.error(err);
        throw err;
      }
    }
  },
};

exports.resolvers = resolvers;