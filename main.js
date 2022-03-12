document.getElementById('year').innerHTML = "Copyright © " + new Date().getFullYear() + " | <a>Ninjama</a>"
var step;
var HX2;
var HY2;

function calc2() {
    // Base value
    var roll = document.getElementById("roll_input").value
    var angle2 = document.getElementById("angle2_input").value
    HX2 = document.getElementById("hx2_input").value
    HY2 = document.getElementById("hy2_input").value
    step = document.getElementById("step_input").value
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
    return step;
    return HX2;
    return HY2;
}



function calc4() {
    // Base value
    var wd = document.getElementById("width_input").value
    var hg = document.getElementById("height_input").value
    var stepH = document.getElementById("stepH_input").value
    var stepV = document.getElementById("stepV_input").value
    var unit = document.getElementById("unit_input").value
    var angle4 = document.getElementById("angle4_input").value
    
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


            
function preview2() {
    var preview_box = document.getElementById("preview_box2");
    var rowBox = document.getElementsByClassName('row-box2');
    var simpleText = document.getElementsByClassName('simple-text2');
    var vx_result = document.getElementById('vx_result').innerText
    var vy_result = document.getElementById('vy_result').innerText
    var preview_box_width = document.getElementById('preview_box2').offsetWidth;
    var preview_box_height = document.getElementById('preview_box2').offsetHeight;

    preview_box.innerHTML = '<div class="row-box2"></div>';

    //rowBox[0].innerHTML += '<div class="simple-text">LOREM<br>IPSUM</div>'

    for(i=0; i<30; i++) {
        rowBox[0].innerHTML += '<div class="simple-text2">LOREM<br>IPSUM</div>'
/*
        simpleText[i].style.left = (HX2 * i) + 'px';
        simpleText[i].style.top = (HY2 * i) + 'px';
*/ 
    }
    for(x=0; x<15; x++) {
        simpleText[x].style.left = (preview_box_width/2) + (HX2 * x) + 'px';
        simpleText[x].style.top = (preview_box_height/2) + (HY2 * x) + 'px';
    }
    for(y=15; y<30; y++) {
        simpleText[y].style.left = (preview_box_width/2) - (HX2 * (y-14)) + 'px';
        simpleText[y].style.top = (preview_box_height/2) - (HY2 * (y-14)) + 'px';
    }
    for(i=0; i<29; i++) {
        var clone = rowBox[i].cloneNode(true);
        preview_box.append(clone);
     }
    for(i=0; i<15; i++) {
        rowBox[i].style.top = (preview_box_height/2) + vy_result * i + 'px';
        rowBox[i].style.left = (preview_box_width/2) + vx_result * i + 'px';
     }
     for(i=15; i<30; i++) {
        rowBox[i].style.top = (preview_box_height/2) - (vy_result * (i-14)) + 'px';
        rowBox[i].style.left = (preview_box_width/2) - (vx_result * (i-14)) + 'px';
     }
}
preview2();

function preview4() {
    var preview_box4 = document.getElementById("preview_box4");
    var rowBox4 = document.getElementsByClassName('row-box4');
    var simpleText4 = document.getElementsByClassName('simple-text4');
    var vx4_result = document.getElementById('vx4_result').innerText
    var vy4_result = document.getElementById('vy4_result').innerText
    var HX4 = document.getElementById("hx4_result").innerText
    var HY4 = document.getElementById("hy4_result").innerText
    var preview_box_width4 = document.getElementById('preview_box4').offsetWidth;
    var preview_box_height4 = document.getElementById('preview_box4').offsetHeight;

    preview_box4.innerHTML = '<div class="row-box4"></div>';

    //rowBox[0].innerHTML += '<div class="simple-text">LOREM<br>IPSUM</div>'

    for(i=0; i<30; i++) {
        rowBox4[0].innerHTML += '<div class="simple-text4">LOREM<br>IPSUM</div>'
/*
        simpleText[i].style.left = (HX2 * i) + 'px';
        simpleText[i].style.top = (HY2 * i) + 'px';
*/ 
    }
    
    for(x=0; x<15; x++) {
        simpleText4[x].style.left = (preview_box_width4/2) + (HX4 * x) + 'px';
        
        simpleText4[x].style.top = (preview_box_height4/2) + (HY4 * x) + 'px';
    }
    for(y=15; y<30; y++) {
        simpleText4[y].style.left = (preview_box_width4/2) - (HX4 * (y-14)) + 'px';
        simpleText4[y].style.top = (preview_box_height4/2) - (HY4 * (y-14)) + 'px';
    }

    for(i=0; i<29; i++) {
        var clone = rowBox4[i].cloneNode(true);
        preview_box4.append(clone);
     }
    for(i=0; i<15; i++) {
        rowBox4[i].style.top = (preview_box_height4/2) + vy4_result * i + 'px';
        rowBox4[i].style.left = (preview_box_width4/2) + vx4_result * i + 'px';
     }
     for(i=15; i<30; i++) {
        rowBox4[i].style.top = (preview_box_height4/2) - (vy4_result * (i-14)) + 'px';
        rowBox4[i].style.left = (preview_box_width4/2) - (vx4_result * (i-14)) + 'px';
     }

}
preview4();
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