import { add } from '../../db/model/controller.js'

export default function handler(req, res) {
  console.log(req.body)
  if(req.method === 'POST') {
    add(req.body)
      .then((res) => {
        console.log('Did we get here')
        res.status(200).send('Submit successful')
      })
      .catch((err) => {
        console.log('Or here?')
        res.status(400).send(err)
      });
  }
}