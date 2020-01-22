import styled from 'styled-components';

export const Container = styled.div`
  margin: 40px;
  display: flex;
  justify-content: center;
  height: 80%;

.sidebar {
  grid-area: sidebar;
}

.content {
  grid-area: content;
}

.header {
  grid-area: header;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.header img {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  object-fit: cover;
  border: solid 1px;
  border-color: white;
}

.footer {
  grid-area: footer;
}

.wrapper {
        width: 920px;
        display: grid;
        grid-gap: 10px;
        grid-template-columns: 40% 30% 30%;
        grid-template-rows: 180px auto auto;
        grid-template-areas:
          "header  header  header"
          "sidebar content content"
          "sidebar content content";
        color: #444;
    }

@media (max-width: 600px) {
  .wrapper {
    grid-template-columns: 100%;
    grid-template-areas:
          "header  header  header"
          "sidebar sidebar sidebar"
          "content content content";
  }
}

.box {
  border-radius: 5px;
  font-size: 150%;
}

.header{
  color: #fff;
}

.comment-box {
  height: 450px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
}

.comment-box::-webkit-scrollbar {
  display: none;
}
`;
