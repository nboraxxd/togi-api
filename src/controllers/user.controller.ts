import { HTTP_STATUS_CODE } from '@/constants/http-status-code'
import { prisma } from '@/prisma'
import { RegisterReqBody } from '@/types/user.type'
import { Request, Response } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'

class UserController {
  public async register(req: Request<ParamsDictionary, any, RegisterReqBody>, res: Response) {
    const { name, email, password } = req.body

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    })

    res.status(HTTP_STATUS_CODE.CREATED).json(newUser)
  }
}

const userController = new UserController()
export default userController
