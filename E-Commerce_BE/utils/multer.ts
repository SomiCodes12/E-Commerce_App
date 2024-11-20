import multer from "multer"

 const storage = multer.diskStorage ({destination  : function (req, file, cb)  {
        cb(null , "uploads/")
    },
    filename : function (req, file  , cb) {
        // const suffix = Date.now() + "_" + Math.round(Math.random() * 1000)
        // const filename = file.originalname.split(".")[0] 
        cb(null , file.originalname)
    }
})

export const upload = multer({storage : storage}).single("avatar")