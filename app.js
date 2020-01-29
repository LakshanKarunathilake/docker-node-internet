exec("ping 8.8.8.8", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log("execution done");
    console.log(`stdout: ${stdout}`);
});