import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import {TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from './user.entity'
import { UserResolver } from './user.resolver'
import { UserService } from './user.service'



@Module({
    imports: [ TypeOrmModule.forFeature([ UserEntity ]) ],
    providers: [ UserService, UserResolver ],
})
export class UsersModule {
}
