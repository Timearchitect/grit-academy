//Character to replace with
let char = "";
//Text that is going to be replaced
let text = "The batmobile is painted dark because it is not used during daytime.";

function charRemove(char, text)
{
    newText = text.replaceAll("a", char);
    console.log("Original text:", text);
    console.log("Text after removal of character:", newText);
}