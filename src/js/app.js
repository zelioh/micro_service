class Welcome extends React.Component {
    render() {
        return "world !!!";
    }
}

function Welcome_render() {
    document.getElementById("root").innerText += Welcome.render();
}