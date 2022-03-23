export default function dataManager(enteredPhone, fetchedData) {
  const filteredItem = fetchedData.filter((item) => {
    const databasePhone = item.user_phone.replace(/\s/g, "");
    const editedDatabasePhone = databasePhone.slice(3, 13);

    return Number(editedDatabasePhone) === Number(enteredPhone);
  });

  return filteredItem;
}
