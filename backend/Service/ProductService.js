const uuid = require("uuid");
const bcrypt = require("bcrypt");
const querryBuilder = require("../config/databse");

class ProductService{
    static async createProductService(req,res,next){
        try{
        let data = req.body;
        let insertData = {
            id:uuid.v4(),
            nameShoes:data.name,
            price:data.price,
            image:data.image,
            count:1
        }
        await querryBuilder("product").insert(insertData);
        return "Add product success";
        }catch(e){
            console.log(e);
        }
    }
    // static async showFoodByCateService(req,res,next){
    //     try{
    //         let param = req.params.idCate;
    //         let data = await querryBuilder("produc").where("idCategory",param).select();
    //         return data;
    //     }catch(e){
    //         console.log(e);
    //     }
    // }
    static async showProductService(req,res,next){
        try{
            let data = await querryBuilder("product").select();
            console.log("ko dc rùi");
            return data;
        }catch(e){
            console.log(e)
        }
    }
    static async searchProductService(req,res,next){
        try{
            let require = req.querry;
            let data = await querryBuilder("product").where("name",require.namefood).select();
            return data;
        }catch(e){
            console.log(e);
        }
    }

}
module.exports = ProductService;