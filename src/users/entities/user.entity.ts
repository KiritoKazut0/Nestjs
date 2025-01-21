import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"


@Entity('users')
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 50, nullable: false })
    username: string;
    
    @Column({ type: 'varchar', length: 20, nullable: false })
    password: string;

    @Column({ type: 'varchar', length: 50, nullable: false, unique: true })
    email: string

    @Column({ type: 'timestamp', nullable: false, default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date

    @Column({ type: 'timestamp', nullable: false, default: () => 'CURRENT_TIMESTAMP', onUpdate: "CURRENT_TIMESTAMP" })
    updated_at: Date
}
