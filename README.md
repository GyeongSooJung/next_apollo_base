
## NEXT.js , Apollo 기반의 앱 구축을 위한 기본 베이스

 - 08.05 소켓기능 추가
 - 08.06 클라이언트 graphql axios
  async function graphqlHandler() { //클라이언트에서 보내는 graphql
    Axios({
      url: 'http://3.6.177.242:4000',
      method: 'post',
      data: {
        query: `
            query{
              modelQuery(Query : "find", Collection : "Company", Data : {CEON : "변무영"})
              {
                CNA
              }
            }
          `
      }
    }).then((result) => {
      console.log("data = "+JSON.stringify(result.data))
    });
  }

