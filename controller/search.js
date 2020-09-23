
import cheerio from 'cheerio'; // 在服务器端对DOM进行操作
import charset from 'superagent-charset'; //解决网页乱码问题
import superagent from 'superagent';

const request = charset(superagent);

class Search {
    async getResult(req, res, next) { 
        let book = {}
        let _res = res;
        // console.log(req.params.searchkey);
        request.get('https://www.biquge5200.cc/modules/article/search.php')
            .query({ searchkey: req.params.searchkey })
            .charset('gbk')
            .set(
                "User-Agent", "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.162 Safari/537.36"
            ).end((err, res) => {
            if (err) {
                // 如果访问失败或者出错，会这行这里
                console.log(`书籍页面获取失败 - ${err}`)
            } else {
                // 访问成功，请求https://www.biquge5200.cc/88_88020/页面所返回的数据会包含在res
                // 获取书籍数据
                book = getJson(res);
                _res.send(book);
                // console.log(res);
            }
        });

        let getJson = (res) => {
            let json = [];
            // 访问成功，请求http://news.baidu.com/页面所返回的数据会包含在res.text中。
            
            /* 使用cheerio模块的cherrio.load()方法，将HTMLdocument作为参数传入函数
            以后就可以使用类似jQuery的$(selectior)的方式来获取页面元素
            */
            let $ = cheerio.load(res.text);
            // 找到目标数据所在的页面元素，获取数据
            $('tbody tr').each((idx, ele) => {
                // cherrio中$('selector').each()用来遍历所有匹配到的DOM元素
                // 参数idx是当前遍历的元素的索引，ele就是当前遍历的DOM元素
                
                if(idx > 0) {
                    let s = {
                        title: '',
                        link: '',
                        new_chapter: '',
                        new_chapter_link: '',
                        author: '',
                        number_words: '',
                        time: '',
                        status: '',
                    }
                    $(ele).children().each((indx, el) => {
                        if(indx === 0) {
                            s.title = $(el).children().text();
                            s.link = $(el).children().attr('href');
                        }
                        if(indx === 1) {
                            s.new_chapter = $(el).children().text();
                            s.new_chapter_link = $(el).children().attr('href');
                        }
                        if(indx === 2) {
                            s.author = $(el).text();
                        }
                        if(indx === 3) {
                            s.number_words = $(el).text();
                        }
                        if(indx === 4) {
                            s.time = $(el).text();
                        }
                        if(indx === 5) {
                            s.status = $(el).text();
                        }
                    });
                    json.push(s); // 存入最终结果数组
                    
                        
                }
                         
            });
            return json
        };
    }
}

export default new Search()