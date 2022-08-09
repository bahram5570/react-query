import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const fetchData = async () => {
  const response = await axios.get("https://rickandmortyapi.com/api/character");
  return response;
};

const filterFn = (x) => {
  const newData = x.data.results.slice(0, 6);
  return newData;
};

export const useFetchData = () => {
  const [hasFilter, setHasFilter] = useState(false);

  const filtering = () => {
    setHasFilter(!hasFilter);
  };

  const { data, isLoading } = useQuery(["characters"], fetchData, {
    select: hasFilter && filterFn,
  });

  const output = hasFilter ? data : data?.data.results;

  return { data: output, isLoading, filtering };
};
