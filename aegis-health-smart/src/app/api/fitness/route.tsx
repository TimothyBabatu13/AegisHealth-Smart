

// export const GET = () => {
//     const options = {
//         method: 'GET',
//         hostname: 'exercisedb.p.rapidapi.com',
//         port: null,
//         path: '/exercises?limit=10&offset=0',
//         headers: {
//             'x-rapidapi-key': '44e1d38ee4msh7f5e486e5ae78d1p170cacjsn4a13faf3bb2b',
//             'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
//         }
//     };

//     const req = http.request(options, function (res: any) {
//         const chunks : any = [];

//         res.on('data', function (chunk: any) {
//             chunks.push(chunk);
//         });

//         res.on('end', function () {
//             const body = Buffer.concat(chunks);
//             console.log(body.toString());
//         });
//     });

//     req.end();
//     return new Response({data: ''})
// }

export const GET = () => {
    
}