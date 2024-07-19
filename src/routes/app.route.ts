import userRouter from '@/routes/user.route'
import { Application } from 'express'

const appRouter = (app: Application) => {
  app.use('/user', userRouter)
}

export default appRouter
