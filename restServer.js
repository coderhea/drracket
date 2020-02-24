const http = require('http');
const fs = require('fs');
const users ={};

http.createServer((req,res)=>{
    if(req.method === 'GET'){
        if(req.url === '/'){
            return fs.readFile('./restFront.html', 
            (err, data)=>{
                if (err){
                    throw err;
                }
                res.end(data);
            });
        } else if (req.url === '/about'){
            return fs.readFile('./about.html', 
            (err, data)=>{
                if (err){
                    throw err;
                }
                res.end(data);
            });
        } else if (req.url === '/users'){
            return res.end(JSON.stringify(users));
        }
        return fs.readFile(`.${req.url}`, 
        (err, data)=>{
            if (err){
                res.writeHead(404,'NOT FOUND');
                return res.end('NOT FOUND');
            }
            return res.end(data);
        });
    } else if (req.method === 'POST'){
        if (req.url === '/users'){
            let body='';
            req.on('data', (data)=>{
                body += data;
            });
            return req.on('end', ()=>{
                console.log('POST Body:', body);
                const{name} = JSON.parse(body);
                const id = Date.now();
                users[id] = name;
                res.writeHead(201);
                res.end('Success');
            });
        }
    } else if (req.method === 'PUT'){
        if (req.url.startsWith('/users/')){
            const key = req.url.split('/')[2];
            let body = '';
            req.on('data', (data)=>{
                body += data;
            });
            return req.on('end', ()=>{
                console.log('PUT Body:', body);
                users[key] = JSON.parse(body).name;
                return res.end(JSON.stringify(users));
            });
        }
    } else if (req.method === 'DELETE'){
        if (req.url.startsWith('/users/')){
            const key = req.url.split('/')[2];
            delete users[key];
            return res.end(JSON.stringify(users));
        }
    }
    res.writeHead(404, 'NOT FOUND');
    return res.end('NOT FOUND');
})

.listen(8082, () => {
    console.log('8082 port waiting on server');
});

/* p156
POST, PUT : gets data from client, so need req.on('data'), req.on('end') callback FUNC
a readStream FUNC also JSON.parse b/c String 
*/