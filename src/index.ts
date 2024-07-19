import express, { Application } from 'express'

import Server from '@/server'

class TogiApplication {
  public run() {
    const app: Application = express()
    const server = new Server(app)

    server.start()
  }
}

const togiApplication = new TogiApplication()

togiApplication.run()
