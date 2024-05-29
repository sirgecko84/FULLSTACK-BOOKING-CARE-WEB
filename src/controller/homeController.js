import db from '../models/index'
let getHomePage = async (req, res) => {
    try { // bắt exception
        let data = await db.User.findAll(); // tìm tất cả dữ liệu trong bảng User
        // console.log('.............')
        //console.log(data) // in ra dữ liệu 
        //console.log('..............')
        return res.render('homepage.ejs', {
            data: JSON.stringify(data) // chuyển data thành dạng string và lưu vào biến 'data', dữ liệu này sẽ được in ra thông qua file homepage.ejs
        });
    } catch (e) {
        console.log(e)
    }



}
let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}

//object:{
//    key:''
//    value:''
//}

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage
}