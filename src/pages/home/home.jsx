import React from "react";
import { useGetProduct } from "../../service/query/use-get-product";
import { Pagination, Spin, Typography } from "antd";

export const Home = () => {
  const [page, setPage] = React.useState(1);
  const { data, isLoading } = useGetProduct(page);
  const onShowSizeChange = (newPage) => {
    setPage(newPage);
    window.scrollTo({ top: 0 });
  };

  return (
    <div>
      {isLoading ? (
        <div
          style={{
            height: "70vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Spin tip="Loading" size="large">
            <div className="content" />
          </Spin>
        </div>
      ) : (
        ""
      )}
      {data?.items?.map((item) => (
        <Typography.Title level={3} key={item.id}>
          {item?.name}
        </Typography.Title>
      ))}

      <Pagination
        showSizeChanger
        onChange={onShowSizeChange}
        defaultCurrent={page}
        total={data?.total_count}
        locale={{
          items_per_page: "",
          jump_to: "",
          page: "",
        }}
      />
    </div>
  );
};
