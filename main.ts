input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("B - - - - - - - ", 240), music.PlaybackMode.InBackground)
    input_binary = "" + input_binary + "1"
    basic.showString("1")
    if (input_binary.length >= 8) {
        basic.showString(">" + input2)
    }
})
input.onButtonPressed(Button.AB, function () {
    input_binary = ""
    input2 = ""
    basic.showString("Input Cleared")
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("A - - - - - - - ", 240), music.PlaybackMode.InBackground)
    input_binary = "" + input_binary + "0"
    basic.showString("0")
})
input.onGesture(Gesture.Shake, function () {
    basic.showString(">" + input2)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    let text: string;
if (input2 == "ver") {
        basic.showString("MicrOS v0.1")
    } else if (_py.py_string_split(input2, " ")[0] == "touch") {
        datalogger.log(
        datalogger.createCV("Filename", _py.py_string_split(input2, " ")[1]),
        datalogger.createCV("Contents", _py.py_string_split(input2, " ")[2])
        )
        text = _py.py_string_join(" ", _py.py_string_split(input2, " ").slice(2))
    } else if (_py.py_string_split(input2, " ")[0] == "rm rf") {
        datalogger.deleteLog()
    }
    input2 = ""
})
let input_binary = ""
let input2 = ""
let input_binary2 = ""
basic.showString(">")
basic.forever(function () {
    if (input_binary == "01100001") {
        input2 = "" + input2 + "a"
    } else if (input_binary == "01100010") {
        input2 = "" + input2 + "b"
    } else if (input_binary == "01100011") {
        input2 = "" + input2 + "c"
    } else if (input_binary == "01100100") {
        input2 = "" + input2 + "d"
    } else if (input_binary == "01100101") {
        input2 = "" + input2 + "e"
    } else if (input_binary == "01100110") {
        input2 = "" + input2 + "f"
    } else if (input_binary == "01100111") {
        input2 = "" + input2 + "g"
    } else if (input_binary == "01101000") {
        input2 = "" + input2 + "h"
    } else if (input_binary == "01101001") {
        input2 = "" + input2 + "i"
    } else if (input_binary == "01101010") {
        input2 = "" + input2 + "j"
    } else if (input_binary == "01101011") {
        input2 = "" + input2 + "k"
    } else if (input_binary == "01101100") {
        input2 = "" + input2 + "l"
    } else if (input_binary == "01101101") {
        input2 = "" + input2 + "m"
    } else if (input_binary == "01101110") {
        input2 = "" + input2 + "n"
    } else if (input_binary == "01101111") {
        input2 = "" + input2 + "o"
    } else if (input_binary == "01110000") {
        input2 = "" + input2 + "p"
    } else if (input_binary == "01110001") {
        input2 = "" + input2 + "q"
    } else if (input_binary == "01110010") {
        input2 = "" + input2 + "r"
    } else if (input_binary == "01110011") {
        input2 = "" + input2 + "s"
    } else if (input_binary == "01110100") {
        input2 = "" + input2 + "t"
    } else if (input_binary == "01110101") {
        input2 = "" + input2 + "u"
    } else if (input_binary == "01110110") {
        input2 = "" + input2 + "v"
    } else if (input_binary == "01110111") {
        input2 = "" + input2 + "w"
    } else if (input_binary == "01111000") {
        input2 = "" + input2 + "x"
    } else if (input_binary == "01111001") {
        input2 = "" + input2 + "y"
    } else if (input_binary == "01111010") {
        input2 = "" + input2 + "z"
    } else if (input_binary == "00100000") {
        input2 = "" + input2 + " "
    } else if (input_binary == "00000000") {
        music.play(music.stringPlayable("D D B C - F E C ", 240), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("D C G - - - - - ", 240), music.PlaybackMode.UntilDone)
    }
    if (input_binary.length >= 8) {
        input_binary = ""
    }
})
