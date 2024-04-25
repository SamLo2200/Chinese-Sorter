function citationSorting(...references) {
    let array = [];

    references.forEach((reference) => {
        array.push(reference);
        //console.log(reference)
    });

    array.sort((a, b) => a.localeCompare(b, "zh-Hant", { ignorePunctuation: true }));
    console.log(array);
}
