import 'dotenv/config'
import express, { Application } from 'express'

import appRouter from '@/routes/app.route'

export default class Server {
  private app: Application

  constructor(app: Application) {
    this.app = app
  }

  public start() {
    this.setupMiddlewares()
    this.setupRoutes()
    this.setupGlobalError()
    this.startServer()
  }

  private setupMiddlewares(): void {
    // parse json của client gởi lên, chuyển thành dạnh object để xử lý
    this.app.use(express.json())
  }
  private setupRoutes(): void {
    appRouter(this.app)
  }
  private setupGlobalError(): void {}

  private startServer() {
    const port = process.env.PORT || 4000
    this.app.listen(port, () => {
      console.log(`🚀 Server is running on port ${port}`)
    })
  }
}
