try {
    setTimeout(function () {
        throw new Error("Who is going to catch me?");
    }, 1);
}
catch (e) {
    console.log("Not me");
}