
'use strict';

import cheerio from 'cheerio'; // 在服务器端对DOM进行操作
import charset from 'superagent-charset'; //解决网页乱码问题
import superagent from 'superagent';

const request = charset(superagent);


class Menu {
    async getMenu(req, res, next) {
        let book = []
        let url="https://www.biquge5200.cc/";
        let _res = res;
        request.get('https://www.biquge5200.cc/88_88020')
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
                book = getHotNews(res);
                _res.send(book);
            }
        });
        
        let getHotNews = (res) => {
            let hotNews = [];
            // 访问成功，请求http://news.baidu.com/页面所返回的数据会包含在res.text中。
            
            /* 使用cheerio模块的cherrio.load()方法，将HTMLdocument作为参数传入函数
            以后就可以使用类似jQuery的$(selectior)的方式来获取页面元素
            */
            let $ = cheerio.load(res.text);
            // 找到目标数据所在的页面元素，获取数据
            $('#list dl dd a').each((idx, ele) => {
                // cherrio中$('selector').each()用来遍历所有匹配到的DOM元素
                // 参数idx是当前遍历的元素的索引，ele就是当前便利的DOM元素
                let news = {
                    title: $(ele).text(),        // 获取新闻标题
                    href: $(ele).attr('href')    // 获取新闻网页链接
                };
                hotNews.push(news)              // 存入最终结果数组
            });
            return hotNews
        };
        
    }
    

}

export default new Menu()