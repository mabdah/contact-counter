function contactCounter() {
    var table = project.getOrCreateDataTable("Incoming Message Actions");
    var cursor = table.queryRows();

    //getting all rows from the datatable
    var contactCounts = {};
    var maxCount = 0

    while (cursor.hasNext()) {
        var row = cursor.next();
        var contact_id = row.contact_id;

        //counting the number of entries of the contact 
        contactCounts[contact_id] = contactCounts[contact_id] ? contactCounts[contact_id] + 1 : 1

        //getting the  contact with the maximum count
        if (contactCounts[contact_id] > maxCount) {
            maxCount = contactCounts[contact_id];
            var contact_detail = contact_id;
        }
    }
    return {
    contact_id: contact_detail,
    entry_count: maxCount
};
}

module.exports = contactCounter