const uuid= require("uuid");
const { queryBuilder } = require("../config/databse");
const querryBuilder = require("../config/databse");
class CartService{
    static async addProductService(req,res,next){
        try{
            let data = req.body;
            console.log(data.name);
            let insertData = {
                idCart:uuid.v4(),
                nameShoes:data.name,
                price:data.price,
                image:data.image,
               
            }
            await querryBuilder("cart").insert(insertData);
            return "Add to cart success";
        }catch(e){ 
            console.log(e);
        }
    }
    static async showProductService(req,res,next){
        try{
            let data = await querryBuilder("cart").select();
            return data;
        }catch(e){
            console.log(e);
        }
    }
    static async deleteAllProductService(req,res,next){
        try{
            await querryBuilder("Cart").delete();
            return "Cart paid"
        }catch(e){
            console.log(e);
        }
    }
    static async getProductService(req,res,next){
        try{
            let param = req.params;
            let data = querryBuilder("Cart").where("idCart",param.idCart).select();
            return data;
        }catch(e){
            console.log(e);
        }
    }
    static async deleteProductService(req,res,next){
        try{
            let data = await this.getProductService(req);
            await querryBuilder("Cart").where("idCart",data.idCart).delete();
        }catch(e){
            console.log(e);
        }
    }
} 
module.exports = CartService;