import styled from 'styled-components';

export const SpellListContainer = styled.div`
  width: 95%;
  max-width: 800px;
  margin: auto;
  .spell-list-header {
    display: flex;
    margin-bottom: 20px;
    font-weight: 500;
    font-style: italic;
  }
  .header-name {
    width: 50%;
    padding-left: 30px;
  }
  .header-url {
    width: 40%;
  }
  .header-fav {
    width: 10%;
  }
`

export const SellContainer = styled.div`
  height: 50px;
  max-width: 800px;
  margin: auto;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='18' ry='18' stroke='black' stroke-width='5' stroke-dasharray='15%2c 15%2c 1' stroke-dashoffset='43' stroke-linecap='round'/%3e%3c/svg%3e");
  border-radius: 18px;
  cursor: pointer;
  margin-top: 15px;
  &:hover {
    opacity: 0.8;
  }
  .spell-name {
    width: 30%;
    padding-left: 30px;
  }
  .spell-url {
    width: 35%;
  }
  .spell-action {
    width: 25%;
  }
  .spell-fav {
    width: 10%;
    button {
      cursor: pointer;
    }
    img {
      width: 40px;
      color: green;
    }
  }
  .favorite {
    color: green;
  }
  .add-fav-icon {
    cursor: pointer;
    &:hover {
      fill: green;
    }
  }

`