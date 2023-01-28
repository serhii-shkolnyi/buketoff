import { Column, Entity } from 'typeorm';
import { CommonFieldsEntity } from './commonFields.entity';

export interface IUserEntity {
    role: string;
    email: string;
    password: string;
}

@Entity('Users', { database: 'buketoff' })
export class UserEntity extends CommonFieldsEntity implements IUserEntity {
    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
        default: 'customer',
    })
        role: string;

    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
        unique: true,
    })
        email: string;

    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
    })
        password: string;
}
