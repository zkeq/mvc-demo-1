import $ from "jquery"
import "./app3.css"

const $square = $("#app3 #square");
const localkey = "app3.active"
// yes no undefined
const active = localStorage.getItem(localkey) === "yes";

// if (active) {
//     $square.addClass("active")
// }else{
//     $square.removeClass("active")
// }
$square.toggleClass("active", active)

$square.on("click", ()=> {
    if ($square.hasClass("active")) {
        $square.removeClass("active");
        localStorage.setItem(localkey, "no")
    }else {
        $square.addClass("active");
        localStorage.setItem(localkey, "yes")
    }
    // $square.toggleClass("active");
})