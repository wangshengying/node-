var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.listen(8083,function(){
    console.log('服务器正在端口号8083上运行');
})
server.on('request',function(request,response){
     
    var url = request.url;
    var type='';
    if(url === '/favicon.ico'){
        return;
    }
    else if(url ==='/list/'){
        //response.writeHead(响应状态码，响应头对象): 发送一个响应头给请求。
        response.writeHead(200,{'Content-Type':'text/html'})
        // 如果url=‘/' ,读取指定文件下的html文件，渲染到页面。
        fs.readFile('./chapterList.html','utf-8',function(err,data){
            if(err){
                throw err ;
            }
            response.end(data);
        });
     
    }else if(url === '/login/'){
        response.writeHead(200,{'Content-Type':'text/html'});
        // 如果url=‘/' ,读取指定文件下的html文件，渲染到页面。
        fs.readFile('./login.html','utf-8',function(err,data){
            if(err){
                throw err ;
            }
            response.end(data);
        });
    }else if(url === '/listmanager/'){
        response.writeHead(200,{'Content-Type':'text/html'});
        // 如果url=‘/' ,读取指定文件下的html文件，渲染到页面。
        fs.readFile('./list.html','utf-8',function(err,data){
            if(err){
                throw err ;
            }
            response.end(data);
        });
    }else if(url === '/addChapter/'){
        response.writeHead(200,{'Content-Type':'text/html'});
        // 如果url=‘/' ,读取指定文件下的html文件，渲染到页面。
        fs.readFile('./addChapter.html','utf-8',function(err,data){
            if(err){
                throw err ;
            }
            response.end(data);
        });
     }else if(url!=='/'){//检测到相应页面的css以及图片
        //因为路径问题所以需要裁减字符串
        switch (url.substring(0,3)){
            case '/lo':
                var length=url.length;
                url='./'+url.substring(7,length);
                break;
            case '/li':
                var length=url.length;
                url='./'+url.substring(6,length);
                break;
            case '/tw':
                var length=url.length;
                url='.'+url.substring(0,length-1)+'.js';
                break;
            // case './i':
            //     var length=url.length;
            //     type=url.substring(length-4);
            //     console.log(type);
            //     break;
        }
        // if(type==='.png'){
        //     response.writeHead(200,{'Content-Type':'text/png'});//表明向网页里面写的格式
        //     fs.readFile(url,'utf-8',function(err,data){
        //         if(err){
        //             throw err;
        //         }
        //         response.end(data);
        //     });
        // }
        // else if(type ==='.jpg'){
        //     response.writeHead(200,{'Content-Type':'text/jpg'});//表明向网页里面写的格式
        //     fs.readFile(url,'utf-8',function(err,data){
        //         if(err){
        //             throw err;
        //         }
        //         response.end(data);
        //     });
        // }
        // else if(type == '.gif'){
        //     response.writeHead(200,{'Content-Type':'text/gif'});//表明向网页里面写的格式
        //     fs.readFile(url,'utf-8',function(err,data){
        //         if(err){
        //             throw err;
        //         }
        //         response.end(data);
        //     });
        // }
        // else if(type =='jpeg'){
        //     response.writeHead(200,{'Content-Type':'text/jpeg'});//表明向网页里面写的格式
        //     fs.readFile(url,'utf-8',function(err,data){
        //         if(err){
        //             throw err;
        //         }
        //         response.end(data);
        //     });
        // }else{
            response.writeHead(200,{'Content-Type':'text/css'});//表明向网页里面写的格式
            fs.readFile(url,'utf-8',function(err,data){
                if(err){
                    throw err;
                }
                response.end(data);
            });
            console.log(url);
        // }
     } 
})