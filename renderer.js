const information = document.getElementById("info");
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;


const func = async ()=>{
    const res = await versions.ping();
    console.log(res);
}

func();