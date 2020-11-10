/*
 * @Author: Yufeng CHEN
 * @Date: 2020-11-10 10:21:20
 * @LastEditors: Yufeng CHEN
 * @LastEditTime: 2020-11-10 11:55:33
 * @FilePath: /ts-study-library/src/example/basic-type.ts
 */
//布尔类型
// let bool: Boolean = false
let bool: Boolean
// bool = 123   //error：

//数值类型
let num: number = 123
// num = 'abc' //error:

//字符串类型
let str: string
str = 'abc'

//数组类型
//[1,2,3]
let arr: number[]
// arr = [1, 2, '3']  //error: '3'
let arr2: Array<number>
let arr3: (string | number)[]
let arr4: Array<string | number>

//元组类型
let tuple: [string, number, boolean]
tuple = ['a', 1, false]

//枚举类型
enum Role {
  SUPER_ADEMIN,
  ADMIN,
  USER
}

//any类型
let value: any

//  oid类型
const consoleText = (text: string): void => {
  console.log(text)
}
let v: void
v = undefined
// v = null //非严格模式

//null和undefined 既是基础类型，也是值
let u: undefined
u = undefined
let n: null
n = null

// never类型
const errorFunc = (message: string): never => {
  throw new Error(message)
}

const infiniteFunc = (): never => {
  while(true){}
}

// object
let obj: object = {}

//类型断言
const getLength = (target: string | number): number => {
  if((<string>target).length || (target as string).length === 0){
    return (<string>target).length
  }else{
    return target.toString().length
  }
}
