import BookList from "../components/BookList";
import FilterComp from "../components/FilterComponent";
import styled from "styled-components";
export default function Books() {
  return (
    <div>
      <BookWrapper>
        <FilterCompWrap>
          <FilterComp />
        </FilterCompWrap>
        <BookListWrapper>
          <BookList />
        </BookListWrapper>
      </BookWrapper>
    </div>
  );
}

const BookWrapper = styled.div`
  display: flex;
`;
const FilterCompWrap = styled.div`
  width: 500px;
  border: 1px solid blue;
  text-align: start;
`;

const BookListWrapper = styled.div`
  width: 100%;
  border: 1px solid red;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
`;
