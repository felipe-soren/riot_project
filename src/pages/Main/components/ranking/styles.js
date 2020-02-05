import styled from 'styled-components';

export const Container = styled.div`
  width: 65%;
  margin-bottom: 50px;
  
  @media (max-width: 600px) {
   width: 70%
}
  
  .ranking-table {
  margin-top: 50px;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border: solid #ccc 1px;
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  border-radius: 25px;
}

.ranking-table__cell--summoner img {
    margin-right: 12px;
    vertical-align: middle;
    border-radius: 50%;
    width: 38px;
    height: 38px;
}

tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
    -webkit-border-horizontal-spacing: 0px;
    -webkit-border-vertical-spacing: 0px;
}

.ranking-table__cell--summoner span {
    vertical-align: middle;
    line-height: 19px;
    font-size: 15px;
    font-weight: bold;
    color: #444b4b;
}

.ranking-table__header {
  padding: 0;
  border-bottom: #f2f2f2;
  height: 41px;
  background: #f2f2f2;
  line-height: 17px;
  text-align: left;
  font-size: 14px;
  border: none;
}

.ranking-table__cell--rank {
  text-align: center;
  color: #444b4b;
}

.ranking-table__cell--summoner {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.ranking-table__cell--tier, .ranking-table__cell--lp, .ranking-table__cell--level, .ranking-table__cell--winratio {
  color: #787878;
}

a {
  text-decoration: none;
}

.ranking-table__cell {
    border-bottom: 1px solid #cdd2d2;
    height: 54px;
    line-height: 16px;
    font-family: Helvetica,AppleSDGothic,"Apple SD Gothic Neo",AppleGothic,Arial,Tahoma;
    font-size: 14px;
}

.ranking-table__cell {
    border-bottom: 1px solid #cdd2d2;
    height: 54px;
    line-height: 16px;
    font-family: Helvetica,AppleSDGothic,"Apple SD Gothic Neo",AppleGothic,Arial,Tahoma;
    font-size: 14px;
}
`;
