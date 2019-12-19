exports.accounts = [
    {
        "id":1,
        "name":"james Kim",
        "accountno":"2344354",
        "department":"BSA"
    },
    {
        "id":2,
        "name":"Angel Lucy",
        "accountno":"4344542",
        "department":"CT"
    }
];
exports.addaccount =function(id,name,accountno,department){
    let template={"id":id,"name":name,"accountno":accountno,"department":department};
    accounts.push(template);
};
exports.devName = function () {
    return "Sam the Dev";
};