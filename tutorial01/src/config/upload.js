const multer = require ('multer');
const path = require ('path');

module.exports = {
    storage: multer.diskStorage({
        distination: path.resolve(__dirname, "..", "..", "files"),
        filename: (req, file , cb) => {
            const ext = path.extname(file.originalname)
            const name = path.basename(file.originalname, ext)

            cb(null, `${name.replace(/\s/g,"")}-${Date.now()}${ext}`)
        }
    })

}