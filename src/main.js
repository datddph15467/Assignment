import Navigo from "navigo";
import contactPage from "./contact";
import homePage from "./home";
const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector("#app").innerHTML = content;
}
router.on({
    "/": () => {
        print(homePage.render());
    },
    "/lien_he": () => {
        print(contactPage.render());
    },
    // "/product": () => {
    //     print(Product.render());
    // },
    // "/contact": () => {
    //     print(Contact.render());
    // },
    // "/tuyendung": () => {
    //     print(tuyendung.render());
    // },
    // "/news/:id": (value) => {
    //     print(newDetail.render(value.data.id));
    // },
    // "admin/news/:id": (value) => {
    //     print(editNews2.render(value.data.id));
    // },
    // "/admin": () => {
    //     print(newList.render());
    // },
    // "/admin/signIn": () => {
    //     print(signIn.render());
    // },
    // "/admin/signUp": () => {
    //     print(signUp.render());
    // },
    // "/admin/addnews": () => {
    //     print(newsAdd.render());
    // },

});
router.notFound(() => print(notFoundPage.render()));
router.resolve();