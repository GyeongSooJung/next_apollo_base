
## .env

NEXT_PUBLIC_IP=IP

NEXT_PUBLIC_React_Port=3000
NEXT_PUBLIC_Socket_Port=3001

## start
-sudo npm i
-npm run build

## Client에서 보내기
Axios({
      url: process.env.NEXT_PUBLIC_IP+':'+process.env.NEXT_PUBLIC_Graphql_Port,
      method: 'post',
      data: {
          query: `
              query{
                modelQuery(Query : "find", Collection : "Person", Data : {name : "경수"})
                {
                  name
                }
              }
            `
      }
    }).then((result) => {
    });
