import express,{Express, Router,Request,Response} from 'express'
import axios from 'axios'
const app:Express = express()

app.use('*',(req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*')
    next()
})

const router:Router = express.Router()

app.use('/api',router)

router.get('/list',async (req:Request,res:Response) =>{
    const result = await axios.get('https://c.m.163.com/ug/api/wuhan/app/data/list-total?t=334480506452')
    res.json({
        data: result.data
    })
})

app.listen(3333, ()=>{
    console.log('success server http://localhost:3333')
})