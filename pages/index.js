import Axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Divider, Header } from "semantic-ui-react";
import ItemList from "../src/component/ItemList";
import styles from "../styles/Home.module.css";


import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

export default function Home({launches}) {
  
  let data = JSON.parse(launches)
  
  console.log(typeof(data))
  console.log("data : "+data)
  
  const [list, setList] = useState([]);

  useEffect(() => {
  }, []);

  return (
    <div>
      <Head>
        <title>HOME | 코딩앙마</title>
      </Head>
    </div>
  );
}

// axios
const Query = gql`
query{
  modelQuery(Query : "find", Collection : "Company", Data : {CEON : "변무영"})
  {
    CEON
  }
}
`

export async function getStaticProps(context) {
  
  const client = new ApolloClient({
    uri : 'http://localhost:4000',
    cache : new InMemoryCache()
  })
  
  const {data} = await client.query({
    query : Query
  }) 
  
  
  return {
    
    props : {
      launches : JSON.stringify(data.modelQuery)
    }
  }
} 