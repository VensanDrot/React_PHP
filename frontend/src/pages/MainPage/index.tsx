import React from "react";
import CardList from "../../components/CardList";

const MainPage = () => {
  const data = [
    {
      ID: 123,
      SKU: "1fr-321-dsa",
      Name: "Chair",
      Price: "1234321",
      PSAttribute: "128mb",
      PType: "disk",
    },
    {
      ID: 13,
      SKU: "1fr-321-dsa",
      Name: "Chip&Dail",
      Price: "1234321",
      PSAttribute: "128mb",
      PType: "disk",
    },
    {
      ID: 1,
      SKU: "1fr-321-dsa",
      Name: "Disk",
      Price: "1234321",
      PSAttribute: "128mb",
      PType: "disk",
    },
    {
      ID: 1323,
      SKU: "1fr-321-dsa",
      Name: "Chair",
      Price: "321",
      PSAttribute: "128mb",
      PType: "disk",
    },
  ];

  return (
    <div>
      <CardList data={data} />
    </div>
  );
};

export default MainPage;
