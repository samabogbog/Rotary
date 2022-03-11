document.getElementById('year').innerHTML = "Copyright © " + new Date().getFullYear() + " | <a>Ninjama</a>"

function calc2() {
    // Base value
    var roll = document.getElementById("roll_input").value
    var angle2 = document.getElementById("angle2_input").value
    var step = document.getElementById("step_input").value
    var HX2 = document.getElementById("hx2_input").value
    var HY2 = document.getElementById("hy2_input").value
    // calc VX
    if (angle2 == 0){
        var stp_ang = 0
        var vxResult = 0
        document.getElementById("vx_result").innerText = vxResult.toFixed(6)
    } else {
        var stp_ang = step / angle2
        var vxResult = HX2 / stp_ang
        document.getElementById("vx_result").innerText = vxResult.toFixed(6)
    }
    // calc VY
    if (angle2 == 0) {
        var vyResult = roll / step
        document.getElementById("vy_result").innerText = vyResult.toFixed(6)
    } else {
        var vy_cps = HY2 / stp_ang
        var vy_raw = roll / step
        var vyResult = vy_raw + vy_cps
        document.getElementById("vy_result").innerText = vyResult.toFixed(6)
    }
}

function calc4() {
    // Base value
    var wd = document.getElementById("width_input").value
    var hg = document.getElementById("height_input").value
    var stepH = document.getElementById("stepH_input").value
    var stepV = document.getElementById("stepV_input").value
    var unit = document.getElementById("unit_input").value
    var angle4 = document.getElementById("angle4_input").value
    var HX4 = document.getElementById("hx4_result").innerText
    var HY4 = document.getElementById("hy4_result").innerText
    // calc HX
    var hxResult = wd / stepH
    document.getElementById("hx4_result").innerText = hxResult.toFixed(6)
    // calc HY
    var hyResult = hg / unit / stepH
    document.getElementById("hy4_result").innerText = hyResult.toFixed(6)
    // calc VX
    if (angle4 == 0){
        var stp_ang = 0
        var vxResult = 0
        document.getElementById("vx4_result").innerText = vxResult.toFixed(6)
    } else {
        var vxResult = wd / stepH / stepV * angle4
        document.getElementById("vx4_result").innerText = vxResult.toFixed(6)
    }
    // calc VY
    if (angle4 == 0) {
        var vyResult = hg / stepV / unit
        document.getElementById("vy4_result").innerText = vyResult.toFixed(6)
    } else {
        var vyResult = ((hg / unit) + (hg / unit / stepH * angle4)) / stepV
        document.getElementById("vy4_result").innerText = vyResult.toFixed(6)
    }
}

// Copy function
function copyVX2() {
    var vxText = document.createRange();
    vxText.selectNode(document.getElementById("vx_result"));
    window.getSelection().removeAllRanges();    // clear current selection
    window.getSelection().addRange(vxText);     // to select text
    document.execCommand("copy");               // Command 'copy'
    window.getSelection().removeAllRanges();    // to deselect
}

function copyVY2() {
    var vyText = document.createRange();
    vyText.selectNode(document.getElementById("vy_result"));
    window.getSelection().removeAllRanges();    // clear current selection
    window.getSelection().addRange(vyText);     // to select text
    document.execCommand("copy");               // Command 'copy'
    window.getSelection().removeAllRanges();    // to deselect
}

function copyVX() {
    var vxText = document.createRange();
    vxText.selectNode(document.getElementById("vx4_result"));
    window.getSelection().removeAllRanges();    // clear current selection
    window.getSelection().addRange(vxText);     // to select text
    document.execCommand("copy");               // Command 'copy'
    window.getSelection().removeAllRanges();    // to deselect
}

function copyVY() {
    var vyText = document.createRange();
    vyText.selectNode(document.getElementById("vy4_result"));
    window.getSelection().removeAllRanges();    // clear current selection
    window.getSelection().addRange(vyText);     // to select text
    document.execCommand("copy");               // Command 'copy'
    window.getSelection().removeAllRanges();    // to deselect
}
function copyHX() {
    var hxText = document.createRange();
    hxText.selectNode(document.getElementById("hx4_result"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(hxText);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}
function copyHY() {
    var hyText = document.createRange()
    hyText.selectNode(document.getElementById("hy4_result"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(hyText);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}


// animate animClass
var elem = document.getElementsByClassName("notif");
function anim2() {
    elem[0].classList.remove("animClass");     // Clear
    void elem[0].offsetWidth;                  // reset
    elem[0].classList.add("animClass");        // add
}

var elem = document.getElementsByClassName("notif");
function anim4() {
    elem[1].classList.remove("animClass");     // Clear
    void elem[1].offsetWidth;                  // reset
    elem[1].classList.add("animClass");        // add
}