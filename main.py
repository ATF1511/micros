def on_button_pressed_a():
    global input_binary
    music.play(music.string_playable("B - - - - - - - ", 240),
        music.PlaybackMode.IN_BACKGROUND)
    input_binary = "" + input_binary + "1"
    basic.show_string("1")
    if len(input_binary) >= 8:
        basic.show_string(">" + input2)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global input_binary, input2
    input_binary = ""
    input2 = ""
    basic.show_string("Input Cleared")
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global input_binary
    music.play(music.string_playable("A - - - - - - - ", 240),
        music.PlaybackMode.IN_BACKGROUND)
    input_binary = "" + input_binary + "0"
    basic.show_string("0")
    if len(input_binary) >= 8:
        basic.show_string(">" + input2)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    basic.show_string(">" + input2)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_logo_touched():
    global input2
    if input2 == "ver":
        basic.show_string("MicrOS v0.1")
    elif input2.split(" ")[0] == "a":
        datalogger.log(datalogger.create_cv("Filename", input2.split(" ")[1]),
            datalogger.create_cv("Contents", input2.split(" ")[2]))
        text = " ".join(input2.split(" ").slice(2))
    elif input2.split(" ")[0] == "del":
        pass
    else:
        pass
    input2 = ""
input.on_logo_event(TouchButtonEvent.TOUCHED, on_logo_touched)

input_binary = ""
input_binary2 = ""
input2 = ""
basic.show_string(">")

def on_forever():
    global input2, input_binary
    if input_binary == "01100001":
        input2 = "" + input2 + "a"
    elif input_binary == "01100010":
        input2 = "" + input2 + "b"
    elif input_binary == "01100011":
        input2 = "" + input2 + "c"
    elif input_binary == "01100100":
        input2 = "" + input2 + "d"
    elif input_binary == "01100101":
        input2 = "" + input2 + "e"
    elif input_binary == "01100110":
        input2 = "" + input2 + "f"
    elif input_binary == "01100111":
        input2 = "" + input2 + "g"
    elif input_binary == "01101000":
        input2 = "" + input2 + "h"
    elif input_binary == "01101001":
        input2 = "" + input2 + "i"
    elif input_binary == "01101010":
        input2 = "" + input2 + "j"
    elif input_binary == "01101011":
        input2 = "" + input2 + "k"
    elif input_binary == "01101100":
        input2 = "" + input2 + "l"
    elif input_binary == "01101101":
        input2 = "" + input2 + "m"
    elif input_binary == "01101110":
        input2 = "" + input2 + "n"
    elif input_binary == "01101111":
        input2 = "" + input2 + "o"
    elif input_binary == "01110000":
        input2 = "" + input2 + "p"
    elif input_binary == "01110001":
        input2 = "" + input2 + "q"
    elif input_binary == "01110010":
        input2 = "" + input2 + "r"
    elif input_binary == "01110011":
        input2 = "" + input2 + "s"
    elif input_binary == "01110100":
        input2 = "" + input2 + "t"
    elif input_binary == "01110101":
        input2 = "" + input2 + "u"
    elif input_binary == "01110110":
        input2 = "" + input2 + "v"
    elif input_binary == "01110111":
        input2 = "" + input2 + "w"
    elif input_binary == "01111000":
        input2 = "" + input2 + "x"
    elif input_binary == "01111001":
        input2 = "" + input2 + "y"
    elif input_binary == "01111010":
        input2 = "" + input2 + "z"
    elif input_binary == "00100000":
        input2 = "" + input2 + " "
    if len(input_binary) >= 8:
        input_binary = ""
basic.forever(on_forever)
