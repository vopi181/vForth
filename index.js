


log = function (arg) {
    console.log(arg);
}
function run() {
    eval_forth(document.getElementById('input_box').value)
}
function eval_forth(to_parse) {
    var stack = [];
    var dict = []
    var input_box = document.getElementById('input_box');
    var text = to_parse;
    var output_box = document.getElementById('output');
    var out = output_box.value;
    var toked = text.split(" ");
    toked.forEach(function (element) {
        log("working")
        if (isNumber(element)) {
            stack.push(element);
        } else
            if (element === "+") {


                var sum = parseInt(stack[stack.length - 1]) + parseInt(stack[stack.length - 2])
                output_box.value = sum;

                stack.pop();
                stack.pop();
                stack.push(sum);
            } else
                if (element === "/") {


                    var quo = parseInt(stack[stack.length - 2]) / parseInt(stack[stack.length - 1])
                    output_box.value = quo;

                    stack.pop();
                    stack.pop();
                    stack.push(quo);
                } else
                    if (element === ".") {


                        var num = stack[stack.length - 1];

                        stack.pop();

                        console.log(num)
                    } else
                        if (element === ".s") {


                            var num = stack[stack.length - 1];


                            console.log(num)
                        } else
                            if (element === "*") {


                                var pro = parseInt(stack[stack.length - 2]) * parseInt(stack[stack.length - 1])
                                output_box.value = pro;

                                stack.pop();
                                stack.pop();
                                stack.push(pro);
                            } else
                                if (element === ":") {
                                    var word = stack[stack.indexOf(element)]

                                    
                                    var indexOfSemi = stack.indexOf(element);

                                    while (true) {
                                        if (stack[indexOfSemi] === ";") {
                                            break;
                                        }
                                        indexOfSemi++;
                                    }
                                    var defin = toked.slice(stack.indexOf(element), indexOfSemi);
                                    dict[word] = defin;

                                } else {
                                    eval_forth(dict[element])

                                }



    }, this);
}
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}