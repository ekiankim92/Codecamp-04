import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm"; //react 처럼 typeorm 도 기능을 갖고 있음
//Entity = table
//Entity is a function (Entity function will be executed)

@Entity()
export default class Board extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  number!: number;
  // 얘는 자동으로 등록되는 얘. 고유한 숫자 번호

  // @PrimaryGeneratedColumn("uuid")
  // id!: string;
  //고유한 아이디 생선

  @Column({ type: "text" })
  writer!: string;
  // exclamation mark means there must be
  // question mark means there might or might not be

  @Column({ type: "text" })
  title!: string;

  @Column({ type: "integer" })
  age!: number;

  @Column({ type: "timestamp", default: null, nullable: true })
  deletedAt?: Date;

  // @ means decorater
}

// 자바스크립트처럼 클래스를 쓸수 없는데 그걸 typeorm 랑 @entity
// 데코레이터를 읽으면 저걸 Entitiy 을 읽으라고 던져줌
