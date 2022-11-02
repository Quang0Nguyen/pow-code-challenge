import styled from "styled-components";

export const SpellDetailContainer = styled.div`
  width: 100%;
  min-height: 60vh;
  margin-top: 50px;

  .spell-name {
    font-size: 30px;
    font-weight: bold;
    font-style: italic;
    border-bottom: solid 2px #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 20px 0 20px;
    button {
      width: 120px;
      height: 40px;
      margin-bottom: 5px;
      border: none;
      border-radius: 10px;
      cursor: pointer;
    }
    .btn-normal {
      background: #F0F0F0;
      color: #000;
      &:hover {
        background: green;
        color: #FFF;
      }
    }
    .btn-active {
      background: green;
      color: #FFF;
      &:hover {
        background: #F0F0F0;
        color: #000;
      }
    }
  }
  .spell-image-detail-figure {
    height: 300px;
    padding: 50px 0;
    text-align: center;
    img {
      height: 250px;
      border-radius: 10px;
    }
  }
  .spell-attributes {
    display: flex;
    justify-content: space-between;
    padding: 0 20px 50px 20px;
    border-bottom: solid 2px #000;
    .atribute-name {
      font-size: 20px;
      font-weight: bold;
      padding-top: 20px;
    }
  }
  .spell-description {
    padding: 50px
  }
  .spell-atribute-item {
    width: 25%;
    padding-right: 20px;
  }
  .desc-header {
    font-size: 25px;
    font-weight: bold;
    font-style: italic;
    padding-bottom: 30px;
  }
`
