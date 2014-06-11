try {
    setImmediate(function () {
        throw new Error("Who is going to catch me?");
    });
}
catch (e) {
    console.log("Not me");
}