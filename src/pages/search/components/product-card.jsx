import { Input, Typography } from "antd";
import React from "react";

const ProductCard = ({ data }) => {
  const [value, setValue] = React.useState("");
  const filterData = data
    ?.filter((item) => item.name?.toLowerCase().includes(value?.toLowerCase()))
    .sort((a, b) => {
      const nameA = a.name?.toUpperCase();
      const nameB = b.name?.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

  return (
    <div>
      <Input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        style={{ marginBottom: "10px" }}
      />
      {filterData?.map((item) => (
        <Typography.Title key={item.id} level={3}>
          {item.name}
        </Typography.Title>
      ))}
    </div>
  );
};

export default ProductCard;
