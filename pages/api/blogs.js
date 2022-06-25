// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';

export default async function handler(req, res) {

  let data = await fs.promises.readdir("blogdata");
  // res.status(200).json(data);
  let myfile;

  let allBlogs = [];
  // data.forEach(async item => {
  //   console.log(item)
  //   myfile = await fs.promises.readFile('blogdata/' + item, 'utf-8');
  //   console.log(myfile)

  //   allBlogs.push(JSON.parse(myfile))
  // })

  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    // console.log(item);
    myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
    allBlogs.push(JSON.parse(myfile))
  }
  res.status(200).json(allBlogs);

  // fs.readdir(`blogdata`, (err, data) => {
  //   console.log(req.query.slug);
  //   })

  // });
}
