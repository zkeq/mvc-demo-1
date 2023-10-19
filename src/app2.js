import "./app2.css"
import $ from "jquery";

const $tabBar = $("#app2 .tab-bar");
const $tabContent = $("#app2 .tab-content")
const localkey = "app2.index"
const index = localStorage.getItem(localkey) || 0

$tabBar.on("click", "li", (e) => {
    const $li = $(e.currentTarget);
    $li
        .addClass("selected")
        .siblings()
        .removeClass("selected")

    const index = $li.index();
    localStorage.setItem(localkey, index)
    $tabContent
        .children()
        .eq(index)
        .addClass("active")
        .siblings()
        .removeClass("active")
})

$tabBar.children().eq(index).trigger("click")