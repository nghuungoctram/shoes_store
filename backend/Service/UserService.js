const uuid = require("uuid");

const querryBuilder = require("../config/databse");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { query } = require("express");

const JWT_SECRET_KEY = "mysecretkey";
class UserService{
    static async createUserService(req,res,next){
        try{
            let data = req.body;
            let insertData = {
                userId: uuid.v4(),
                username:data.username,
                pass:data.password,
                firstname:data.firstname,
                lastname:data.lastname,
                birthday:data.birthday,
                Created_at: new Date()
            }
            let user = await querryBuilder("users").select().where("username",data.username).first();
            console.log(user.username);
            console.log(data.username);
            if (user.username ===data.username){
                console.log("bang rùi mà ")
                return "user has exist"
            }
            else{
                await querryBuilder("users").insert(insertData);
                return "Sign up success";
            }
        }catch(e){
            console.log(e);
        }
    }
    static async loginService(req,res,next){
        try{
            let data = req.body;
            console.log(data.username);
            let user = await querryBuilder("users").select().where("username",data.username).first();
            console.log(user.pass);
        if(!data.username ||user.pass!==data.password){
            return "Sai tên đăng nhập hoặc mật khẩu";
        }
        else{
           return "Login Sucess";
        }
        }catch(e){
            console.log(e);
        }
    }
    static async getUserInfoService(req,res,next){
        try{
            let param = req.params;
            let data = await querryBuilder("users").select().where("userId",param.userId).first();
            return data;

        }catch(e){
            console.log(e);
        }
    }
}
module.exports = UserService;