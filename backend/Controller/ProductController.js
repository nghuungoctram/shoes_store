const ProductService = require("../Service/ProductService");
class ProductController{
    static async createProductController(req,res,next){
        try{
            let result = await ProductService.createProductService(req);
            res.status(200).json({
                status:"SUCCESS",
                error:null,
                data:result
            })
        }catch(e){
            res.status(200).json({
                status:"FAILED",
                error:{
                    code:1000,
                    message:"Add product failed",
                    detail:e
                },
                data:null
            })
        }
    }
    // static async showProductByCateController(req,res,next){
    //     try{
    //         let data= await ProductService.showFoodByCateService(req);
    //         res.status(200).json({
    //             status:"SUCCESS",
    //             error:null,
    //             data:data
    //         });
    //     }catch(e){
    //         res.status(200).json({
    //             status:"FAILED",
    //             error:{
    //                 code:1000,
    //                 message:"show product failed"
    //             },
    //             data:null
    //         })
    //     }
    // }
    static async showProductController(req,res,next){
        try{
            let data = await ProductService.showProductService(req);
            console.log("chua gap loi")
            res.status(200).json({
                status:"SUCCESS",
                error:null,
                data:data
            });
        }catch(e){
            res.status(200).json({
                status:"FAILED",
                error:{
                    code:1000,
                    message:"show product failed"
                },
                data:null
            })
        }
    }
    static async searchProductController(req,res,next){
        try{
            let data = await ProductService.searchProductService(req);
            res.status(200).json({
                status:"SUCCESS",
                error:null,
                data:data
            });
        }catch(e){
            res.status(200).json({
                status:"FAILED",
                error:{
                    code:1000,
                    message:"search product failed"
                },
                data:null
            })
        }
    }
    // static async searchAddressController(req,res,next){
    //     try{
    //         let data = await ProductService.searchAddressService(req);
    //         res.status(200).json({
    //             status:"SUCCESS",
    //             error:null,
    //             data:data
    //         });
    //     }catch(e){
    //         res.status(200).json({
    //             status:"FAILED",
    //             error:{
    //                 code:1000,
    //                 message:"search address failed"
    //             },
    //             data:null
    //         })
    //     }
    // }
}
module.exports = ProductController;