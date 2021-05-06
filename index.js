const text_input = document.querySelector('#text-input');
const text_output = document.querySelector('#text-output');
const decoding_type = document.querySelector('#decoding-type');

function int_to_binary(num){
    let result = '';
    if(typeof(num) === 'string')
        num = parseInt(num);
    if(Number.isNaN(num))
        return 'Not Valid Integer'
    do
        result = Math.floor(num % 2).toString() + result;
    while(Math.floor(num /= 2) != 0);
    return result.padStart(8, '0');
}

function reverse_str(str){
    return str.split('').reverse().join('')
}

function binary_to_int(str){
    let result = 0;
    str = reverse_str(str);
    for(let i = 0; i < str.length; i++){
        if(str[i] == '1')
            result += 2 ** i;
        else if(str[i] != '0')
            return 'Not Valid binary string';
    }
    return result;
}

function ascii_to_binary(str){
    let arr = [];
    for(let i = 0; i < str.length; i++)
        arr.push(int_to_binary(str.charCodeAt(i)));
    return arr.join('\n');
}

function binary_to_ascii(str){
    return str.split(/\s/)
        .filter(v=>v)
        .map(val=>String.fromCharCode(binary_to_int(val)))
        .join('');
}

function convert(){
    switch(decoding_type.value){
        case 'ab':
            text_output.value = ascii_to_binary(text_input.value);
            break;
        case 'ba':
            text_output.value = binary_to_ascii(text_input.value);
            break;
        case 'ib':
            text_output.value = text_input.value.split(/\s/)
                .filter(v=>v)
                .map(v=>int_to_binary(v))
                .join('\n');
            break;
        case 'bi':
            text_output.value = text_input.value.split(/\s/)
                .filter(v=>v)
                .map(v=>binary_to_int(v))
                .join('\n');
            break;
        case 'r':
            text_output.value = reverse_str(text_input.value);
            break;
    }
}
