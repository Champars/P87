canvas = new fabric.Canvas("mycanvas");
block_y = 1;
block_x = 1;

block_image_width = 350;
block_image_height = 430;

var block_image_object = "";

function RR(get_image) {
    fabric.Image.fromURL(get_image, function(pr) {
                block_image_object = (pr);
                block_image_object.scaleToHeight(90);
                block_image_object.scaleToWidth(190);
                block_image_object.set({
                    top: 0,
                    left: 0
                });
            }

            window.addEventListener("keydown", my_keydown);

            function my_keydown(e) {
                keyPressed = e.keyCode;
                console.log(keyPressed);

                if (keyPressed == '82') // add appropriate keycode
                {
                    // upload red ranger
                    RR();
                }
                if (keyPressed == '71') {
                    block_x = 200;
                    // upload green ranger
                }

                if (keyPressed == '89') {
                    block_x = 350;
                    // upload yellow ranger
                }
                if (keyPressed == '80') {
                    block_x = 600;
                    // upload pink ranger
                }
                if (keyPressed == '66') {
                    block_x = 700;
                    // upload blue ranger
                }

            }